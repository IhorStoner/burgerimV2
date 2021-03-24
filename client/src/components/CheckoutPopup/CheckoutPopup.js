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

export default function CheckoutPopup({ cart }) {
  const dispatch = useDispatch()
  const lng = useSelector(getLanguage)
  const [order, setOrder] = useState({
    cart: cart,
    name: '',
    phone: '',
    address: '',
    sum: '',
  })
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isNameValid, setIsNameValid] = useState('')
  const [isPhoneValid, setIsPhoneValid] = useState('')
  const [isAddressValid, setIsAddressValid] = useState('')
  const [loading,setLoading] = useState(false)

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

  const onSubmitOrder = useCallback(async () => {
    checkValid()
   
    if (isNameValid && isPhoneValid && isAddressValid) {
      setLoading(true)
      const result = await axios.post(`${config.serverUrl}/api/mail`, order).then(res => {
        setLoading(false)
        setSuccess(true)
        dispatch(resetCart())
      }).catch(err => {
        setError(true)
        setLoading(false)
      })
    }

  }, [order, error])

  const handleClosePopup = (e) => {
    if (e.target.className === 'checkout' || e.target.id === 'btnClose') {
      dispatch(setIsOpenCheckout(false))
    }
  }

  return (
    <div className='checkout' onClick={(e) => handleClosePopup(e)}>
      {success && <ConfirmPopup handleClosePopup={handleClosePopup} type='success'/>}
      {!success && cart.length === 0 && <ConfirmPopup handleClosePopup={handleClosePopup} type='cartEmpty'/>}
      {
        !success && cart.length !== 0 &&
        <div className="checkout__modal">
          <h3 className='checkout__title'>{lng === 'RUS' && 'Ваш заказ'}{lng === 'UKR' && 'Ваше замовлення'}</h3>
          <div className='checkout__items'>
            {
              cart && cart.map(item => <CheckoutItem item={item} />)
            }
          </div>
          <div className='checkout__totalSum'>{lng === 'RUS' && 'Итого:'} {lng === 'UKR' && 'Разом:'}{order.sum}грн</div>
          <div className="checkout__inputContainer">
            <span>{lng === 'RUS' && 'Имя:'} {lng === 'UKR' && 'Iм\'я:'}</span>
            <input className={`checkout__input ${isNameValid === false && `checkout__input--error`}`} type="text" onChange={(e) => { setIsNameValid(true); setOrder({ ...order, name: e.target.value }) }} />
          </div>
          <div className="checkout__inputContainer">
            <span>{lng === 'RUS' && 'Телефон:'} {lng === 'UKR' && 'Телефон'}</span>
            <input className={`checkout__input ${isPhoneValid === false && `checkout__input--error`}`} type="text" onChange={(e) => { setIsPhoneValid(true); setOrder({ ...order, phone: e.target.value }) }} />
          </div>
          <div className="checkout__inputContainer">
            <span>{lng === 'RUS' && 'Адрес:'} {lng === 'UKR' && 'Адреса'}</span>
            <input className={`checkout__input ${isAddressValid === false && `checkout__input--error`}`} type="text" onChange={(e) => { setIsAddressValid(true); setOrder({ ...order, address: e.target.value }) }} />
          </div>
          <div className="checkout__btnContainer">
            <button type='button' className="checkout__btnSubmit" onClick={() => onSubmitOrder()}>{lng === 'RUS' && 'Оформить'} {lng === 'UKR' && 'Оформити'}</button>
       
          </div>
         
        </div>
      }
    </div>
  )
}
