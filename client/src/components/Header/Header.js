import React from 'react';
import './Header.scss';
import Info from '../../assets/svg/info.svg';
import Moto from '../../assets/svg/moto.svg';
import Mess from '../../assets/svg/mess.svg';
import Logo from '../../assets/svg/logo.svg';
import Phone from '../../assets/svg/phone.svg';

export default function Header(){
    return (
    <React.Fragment>
        <nav className="nav-menu">
          <ul className="nav-menu__list">
            <li className="nav-menu__items">
              <a className="nav-menu__link nav-menu__link--active" href="#">
                <img src={Info} />
                <span className="nav-menu__span">О Нас</span>
              </a>
            </li>
            <li className="nav-menu__items">
              <a className="nav-menu__link" href="#">
                <img src={Moto} />
                <span className="nav-menu__span">Доставка и оплата</span>
              </a>
            </li>
            <li className="nav-menu__items">
              <a className="nav-menu__link" href="#">
                <img src={Mess} />
                <span className="nav-menu__span">Отзывы</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <a className="logo__link" href="#">
            <img className="logo__image" src={Logo}/>
          </a>
        </div>

        <div className="contanct">
          <div className="contanct__area">
            <span className="contanct__span">
              <a className="contanct__phone" href="tel:380 96 513 66 94"><img className="contanct__call" src={Phone} alt="phone"/>+380 96 513 66 94</a>
            </span>
            <select className="contanct__select">
              <option className="contanct__option">RUS</option>
              <option className="contanct__option">UKR</option>
              <option className="contanct__option">EN</option>
            </select>
          </div>
        </div>
    </React.Fragment>
    )
}