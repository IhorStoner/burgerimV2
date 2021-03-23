import React, { useState } from 'react';
import './OrderMenu.scss';
import MenuLink from './container/MenuLink';


export default function OrderMenu() {
  const list = [
    { name: "burget", label: "Бургеры" },
    { name: "sandwiches", label: "Сэндвичи" },
    { name: "sidedishes", label: "Гарниры" },
    { name: "drink", label: "Напитки" },
    { name: "promotions", label: "Акции" },
  ]


  const fullmenu = list.map((el, i) => (<MenuLink
    key={el.name + i}
    name={el.name}
    label={el.label}
  />))

  return (
    <div className="order-menu">
      {fullmenu}
    </div>
  )
}