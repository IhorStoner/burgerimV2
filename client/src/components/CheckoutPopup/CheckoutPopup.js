import React, { useState, useCallback, useEffect } from 'react'
import CheckoutItem from './CheckoutItem/CheckoutItem'
import './CheckoutPopup.scss'
import axios from 'axios'
import config from '../../config.json'
import { setIsOpenCheckout } from '../../redux/actions/productsAction'
import { useDispatch, useSelector } from 'react-redux'
import ConfirmPopup from './ConfirmPopup/ConfirmPopup'
import { resetCart } from '../../redux/actions/cartAction'
import { getLanguage } from '../../redux/selectors/languageSelector'
import { ReactComponent as CloseImg } from '../../assets/svg/closePopup.svg'

export default function CheckoutPopup({ cart }) {
  const dispatch = useDispatch()
  const lng = useSelector(getLanguage)
  const [order, setOrder] = useState({
    cart: cart,
    name: '',
    phone: '+380',
    address: '',
    sum: '',
  })
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isNameValid, setIsNameValid] = useState('')
  const [isPhoneValid, setIsPhoneValid] = useState('')
  const [isAddressValid, setIsAddressValid] = useState('')
  const [orderNumber,setOrderNumber] = useState('')

  useEffect(() => {
    const totalSum = cart.reduce((totalSum, currentItem) => +totalSum + (+currentItem.count) * (+currentItem.price), 0)
    setOrder({ ...order, sum: totalSum })
  }, [cart])

  const checkValid = () => {
    if (!order.name) {
      setIsNameValid(false)
    }

    if (!order.phone) {
      setIsPhoneValid(false)
    }

    if (!order.address) {
      setIsAddressValid(false)
    }
  }

  const onChangeInput = (e, type) => {
    type === 'name' && setIsNameValid(true);
    type === 'phone' && setIsPhoneValid(true)
    type === 'address' && setIsAddressValid(true)

    if (type === 'phone') {
      if (!order.name) {
        setIsNameValid(false)
      }
    }

    if (type === 'phone') {
      const regPhone = /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/
      if (!regPhone.test(e.target.value) || !order.phone) {
        setIsPhoneValid(false)
      }
    }

    if (type === 'address') {
      if (!order.address) {
        setIsAddressValid(false)
      }
    }


    setOrder({ ...order, [type]: e.target.value })
    checkValid()
  }

  const onSubmitOrder = useCallback(async () => {
    checkValid()

    if (isNameValid === true && isPhoneValid === true && isAddressValid === true) {
      const result = await axios.post(`${config.serverUrl}/api/mail`, order).then(res => {
        setSuccess(true)
        dispatch(resetCart())
        setOrderNumber(res.data)
      }).catch(err => {
        setError(true)
      })
    }

  }, [order, error, isPhoneValid, isNameValid, isAddressValid])

  const handleClosePopup = (e) => {
    if (e.target.id === 'btnClose') {
      dispatch(setIsOpenCheckout(false))
    }
  }

  return (
    <div className='checkout' onClick={(e) => handleClosePopup(e)}>
      {success && <ConfirmPopup handleClosePopup={handleClosePopup} type='success' orderNumber={orderNumber}/>}
      {!success && cart.length === 0 && <ConfirmPopup handleClosePopup={handleClosePopup} type='cartEmpty' />}
      {
        !success && cart.length !== 0 &&
        <div className="checkout__modal">
          <button type='button' id='btnClose' className='checkout__btnClose' onClick={(e) => dispatch(setIsOpenCheckout(false))}><CloseImg /></button>
          <h3 className='checkout__title'>{lng === 'RUS' && 'Ваш заказ'}{lng === 'UKR' && 'Ваше замовлення'}</h3>
          <div className='checkout__items'>
            {
              cart && cart.map(item => <CheckoutItem item={item} />)
            }
          </div>
          <div className='checkout__totalSum'>{lng === 'RUS' && 'Итого:'} {lng === 'UKR' && 'Разом:'}{order.sum}грн</div>
          <div className="checkout__inputContainer">
            <span>{lng === 'RUS' && 'Имя:'} {lng === 'UKR' && 'Iм\'я:'}</span>
            <input className={`checkout__input ${isNameValid === false && `checkout__input--error`}`} value={order.name} type="text" onChange={(e) => onChangeInput(e, 'name')} />
          </div>
          <div className="checkout__inputContainer">
            <span>{lng === 'RUS' && 'Телефон:'} {lng === 'UKR' && 'Телефон'}</span>
            <input className={`checkout__input ${isPhoneValid === false && `checkout__input--error`}`} value={order.phone} type="text" onChange={(e) => onChangeInput(e, 'phone')} />
          </div>
          <div className="checkout__inputContainer">
            <span>{lng === 'RUS' && 'Адрес:'} {lng === 'UKR' && 'Адреса'}</span>
            <input className={`checkout__input ${isAddressValid === false && `checkout__input--error`}`} value={order.address} type="text" onChange={(e) => onChangeInput(e, 'address')} />
          </div>
          <div className="checkout__btnContainer">
            <button type='button' className="checkout__btnSubmit" onClick={() => onSubmitOrder()}>{lng === 'RUS' && 'Оформить'} {lng === 'UKR' && 'Оформити'}</button>

          </div>

        </div>
      }
    </div>
  )
}
