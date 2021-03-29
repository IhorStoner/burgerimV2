import React, { useState } from 'react';
import './OrderMenu.scss';
import MenuLink from './container/MenuLink';
import Phone from '../../assets/svg/phone.svg';
import { getLanguage } from '../../redux/selectors/languageSelector';
import { useSelector } from 'react-redux';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function OrderMenu() {
  const lng = useSelector(getLanguage)

  const list = [
    { name: "burgers", label: "Бургеры", labelUKR: "Бургери", scrollTo: 'burgers' },
    { name: "sandwiches", label: "Сэндвичи", labelUKR: "Сендвічі" },
    { name: "garnish", label: "Гарниры", labelUKR: "Гарніри" },
    { name: "drinks", label: "Напитки", labelUKR: "Напої", scrollTo: 'drinks' },
    { name: "sales", label: "Акции", labelUKR: "Акції", scrollTo: 'sales' },
  ]

 



  return (
    <div className="order-menu">
      <div className="order-menu__contact">
        <span className="contanct__span">
          <a className="contanct__phone" href="tel:380 96 513 66 94"><img className="contanct__call" src={Phone} alt="phone" />+380 96 513 66 94</a>
        </span>
      </div>
      {list.map((el, i) => (
        <MenuLink
          key={el.name + i}
          name={el.name}
          label={lng === 'RUS' && el.label || lng === 'UKR' && el.labelUKR}
        />
      ))}
    </div>
  )
}