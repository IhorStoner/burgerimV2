import React, { useState } from 'react';
import './OrderMenu.scss';
import MenuLink from './container/MenuLink';
import Phone from '../../assets/svg/phone.svg';

export default function OrderMenu() {
 
  const list = [
    { name: "burgers", label: "Бургеры" },
    { name: "sandwiches", label: "Сэндвичи" },
    { name: "garnish", label: "Гарниры" },
    { name: "drinks", label: "Напитки" },
    { name: "sales", label: "Акции" },
  ]

  const fullmenu = list.map((el, i) => (<MenuLink
    key={el.name + i}
    name={el.name}
    label={el.label}
  />))

  return (
    <div className="order-menu">
      <div className="order-menu__contact">
        <span className="contanct__span">
          <a className="contanct__phone" href="tel:380 96 513 66 94"><img className="contanct__call" src={Phone} alt="phone"/>+380 96 513 66 94</a>
        </span>
      </div>
      {fullmenu}
    </div>
  )
}