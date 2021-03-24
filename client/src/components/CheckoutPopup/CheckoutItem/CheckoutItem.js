import React from 'react'
import './CheckoutItem.scss'
import { useDispatch } from 'react-redux'
import { changeProductCount,deleteCartProduct } from '../../../redux/actions/cartAction'
import { ReactComponent as DeleteIcon } from '../../../assets/svg/deleteIcon.svg'

export default function CheckoutItem({ item }) {
  const dispatch = useDispatch()

  const handleChangeCount = (type) => {
    if (type === 'plus') {
      const count = item.count + 1
      count < 100 && dispatch(changeProductCount({ ...item, count: count }))
    } else {
      const count = item.count - 1
      count > 0 && dispatch(changeProductCount({ ...item, count: count }))
    }
  }

  return (
    <div className='checkoutItem'>
      <div className="checkoutItem__container checkoutItem__title">
        {item.title}
      </div>
      <div className="checkoutItem__container">
        {item.price}грн
      </div>
      <div className="checkoutItem__container checkoutItem__btnContainer">
        <button className='checkoutItem__btn' onClick={() => handleChangeCount('minus')}>-</button>
        {item.count}
        <button className='checkoutItem__btn' onClick={() => handleChangeCount('plus')}>+</button>
      </div>
      <div className="checkoutItem__container">
        {item.count * item.price}грн
      </div>
      <div className="checkoutItem__container checkoutItem__btnDelContainer">
        <button type='button' className='checkoutItem__btnDel' onClick={() => dispatch(deleteCartProduct(item._id))}><DeleteIcon /></button>
      </div>
    </div>
  )
}
