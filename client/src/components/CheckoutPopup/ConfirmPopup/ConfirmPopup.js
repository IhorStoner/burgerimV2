import React from 'react'
import { getLanguage } from '../../../redux/selectors/languageSelector'
import './ConfirmPopup.scss'
import { useSelector } from 'react-redux'

export default function ConfirmPopup({ handleClosePopup, type }) {
  const lng = useSelector(getLanguage)
  return (
    <div className='successPopup'>
      <div className="successPopup__modal">
        <p className='successPopup__text'>
          {type === 'success' && lng ==='RUS' && `Благодарим за заказ,Мы свяжемся с Вами  в ближайшее время`}
          {type === 'success' && lng === 'UKR' `Дякуємо за замовлення, Ми зв'яжемося з Вами найближчим часом`}
          {type === 'cartEmpty' && lng === 'RUS' && `Корзина пуста начните покупки`}
          {type === 'cartEmpty' && lng === 'UKR' && `Кошик порожній почніть покупки`}
        </p>
        <div className="successPopup__btnContainer">
          <button className='successPopup__btn' id='btnClose' onClick={(e) => handleClosePopup(e)}>{lng === 'RUS' && 'Хорошо'}{lng === 'UKR' && 'Добре'}</button>
        </div>
      </div>
    </div>
  )
}
