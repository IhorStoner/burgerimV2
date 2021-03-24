import React from 'react'
import './ConfirmPopup.scss'

export default function ConfirmPopup({handleClosePopup,type}) {
  return (
    <div className='successPopup'>
      <div className="successPopup__modal">
        <p className='successPopup__text'>
          {type === 'success' && `Благодарим за заказ,Мы свяжемся с Вами  в ближайшее время`}
          {type === 'cartEmpty' && `Корзина пуста начните покупки`}
        </p>
        <div className="successPopup__btnContainer">
          <button className='successPopup__btn' id='btnClose' onClick={(e) => handleClosePopup(e)}>Хорошо</button>
        </div>
      </div>
    </div>
  )
}
