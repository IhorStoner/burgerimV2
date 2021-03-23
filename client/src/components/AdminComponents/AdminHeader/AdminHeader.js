import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../../assets/svg/logo.svg';
import Phone from '../../../assets/svg/phone.svg';
import './AdminHeader.scss'

export default function AdminHeader({activeNav,setActiveNav}) {
 

  return (
    <div className='adminHeader'>
      <section className="s-home">
        <div className="s-home__container">
          <div className="s-home__head">

            <nav className="nav-menu">
              <ul className="nav-menu__list">
                <li className="nav-menu__items">
                  <Link to='/admin/newProduct' className={`nav-menu__link ${activeNav === 'newProduct' && 'nav-menu__link--active'}`} >
                    <span className="nav-menu__span">Добавить товар</span>
                  </Link>
                </li>
                <li className="nav-menu__items">
                  <Link to='/admin/productList'className={`nav-menu__link ${activeNav === 'productList' && 'nav-menu__link--active'}`} >
                    <span className="nav-menu__span">Список товаров</span>
                  </Link>
                </li>
                <li className="nav-menu__items">
                  <Link to='/admin/orders' className={`nav-menu__link ${activeNav === 'orders' && 'nav-menu__link--active'}`} >
                    <span className="nav-menu__span">Заказы</span>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="logo">
              <a className="logo__link" href="#">
                <img className="logo__image" src={Logo} />
              </a>
            </div>

            <div className="contanct">
              <div className="contanct__area">
                <span className="contanct__span">
                  <a className="contanct__phone" href="tel:380 96 513 66 94"><img className="contanct__call" src={Phone} alt="phone" />+380 96 513 66 94</a>
                </span>
                <select className="contanct__select">
                  <option className="contanct__option">RUS</option>
                  <option className="contanct__option">UKR</option>
                  <option className="contanct__option">EN</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
