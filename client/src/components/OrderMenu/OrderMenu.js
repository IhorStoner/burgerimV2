import React, { useState } from 'react';
import './OrderMenu.scss';
import MenuLink from './container/MenuLink';

function OrderMenu(){
    const list = [
        {name: "burgers", label: "Бургеры"},
        {name: "sandwiches", label: "Сэндвичи"},
        {name: "garnish", label: "Гарниры"},
        {name: "drinks", label: "Напитки"},
        {name: "promotions", label: "Акции"},
    ]

    const fullmenu = list.map((el, i) => (<MenuLink 
        key = {el.name + i} 
        name = {el.name} 
        label = {el.label}
        />))

    return (
        <React.Fragment>
          <div className="order-menu">
            {fullmenu}
          </div>
        </React.Fragment>
    )
}

export default OrderMenu