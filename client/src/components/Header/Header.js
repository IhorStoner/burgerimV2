import React, { useState } from 'react';
import './Header.scss';
import Info from '../../assets/svg/info.svg';
import Moto from '../../assets/svg/moto.svg';
import Mess from '../../assets/svg/mess.svg';
import Logo from '../../assets/svg/logo.svg';
import Phone from '../../assets/svg/phone.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../redux/actions/languageAction'
import { getLanguage } from '../../redux/selectors/languageSelector'

export default function Header() {
  const dispatch = useDispatch()
  const lng = useSelector(getLanguage)
  const [state, setState] = useState({
    menuOpen: false,
  })


  const humburgerOn = (e) => {
    if (state.menuOpen) {
      e.currentTarget.classList.remove("nav-menu__cell-humburger--to-x");
      setState((prevState) => { return { ...prevState, menuOpen: false } });
    } else {
      e.currentTarget.classList.add("nav-menu__cell-humburger--to-x");
      setState((prevState) => { return { ...prevState, menuOpen: true } });
    }
  }

  const handleSelectLng = (lng) => {
    dispatch(changeLanguage(lng))
  }

  return (
    <React.Fragment>
      <nav className="nav-menu">
        {/* <div onClick={humburgerOn} className="nav-menu__cell-humburger">
          <div className="nav-menu__humburger"></div>
          {state.menuOpen && (
            <>
              <ul className="nav-menu__moble-sheet">
                <li className="nav-menu__items">
                  <a className="nav-menu__link nav-menu__link--mobile-line nav-menu__link--active" href="#">
                    <span className="nav-menu__span">{lng === 'RUS' && 'О нас'}{lng === 'UKR' && 'О нас'}{lng === 'ENG' && 'About us'}</span>
                  </a>
                </li>
                <li className="nav-menu__items">
                  <a className="nav-menu__link nav-menu__link--mobile-line" href="#">
                    <span className="nav-menu__span">{lng === 'RUS' && 'Доставка и оплата'}{lng === 'UKR' && 'Доставка і оплата'}{lng === 'ENG' && 'About us'}</span>
                  </a>
                </li>
                <li className="nav-menu__items">
                  <a className="nav-menu__link nav-menu__link--mobile-line" href="#">
                    <span className="nav-menu__span">{lng === 'RUS' && 'О нас'}{lng === 'UKR' && 'Про нас'}{lng === 'ENG' && 'About us'}</span>
                  </a>
                </li>
              </ul>
              <div className="nav-menu__moble-close" onClick={humburgerOn}></div>
            </>
          )}
        </div> */}
        <ul className="nav-menu__list nav-menu__heade">
          {/* <li className="nav-menu__items">
            <a className="nav-menu__link nav-menu__link--active" href="#">
              <img src={Info} />
              <span className="nav-menu__span">{lng === 'RUS' && 'О нас'}{lng === 'UKR' && 'О нас'}{lng === 'ENG' && 'About us'}</span>
            </a>
          </li>
          <li className="nav-menu__items">
            <a className="nav-menu__link" href="#">
              <img src={Moto} />
              <span className="nav-menu__span">{lng === 'RUS' && 'Доставка и оплата'}{lng === 'UKR' && 'Доставка і оплата'}{lng === 'ENG' && 'About us'}</span>
            </a>
          </li>
          <li className="nav-menu__items">
            <a className="nav-menu__link" href="#">
              <img src={Mess} />
              <span className="nav-menu__span">{lng === 'RUS' && 'Отзывы'}{lng === 'UKR' && 'Відгуки'}{lng === 'ENG' && 'Testimonials'}</span>
            </a>
          </li> */}
        </ul>
      </nav>

      <div className="logo">
        <a className="logo__link" href="/">
          <img className="logo__image" src={Logo} />
        </a>
      </div>

      <div className="contanct">
        <div className="contanct__area">
          <span className="contanct__span">
            <a className="contanct__phone contanct__phone--heade" href="tel:380 96 513 66 94"><img className="contanct__call" src={Phone} alt="phone" />+380 96 513 66 94</a>
          </span>
          <div className="contanct__select header__lang-container ">
            <div className="header__selectedLang">{lng}</div>
            <ul className="header__langList">
              <li className={`header__langItem contanct__option ${lng === 'RUS' && 'header__langItem--active'}`} onClick={() => handleSelectLng('RUS')}>RUS</li>
              <li className={`header__langItem ${lng === 'UKR' && 'header__langItem--active'}`} onClick={() => handleSelectLng('UKR')}>UKR</li>
              {/* <li className={`header__langItem ${language === 'ENG' && 'header__langItem--active'}`} onClick={() => dispatch(handleSelectLng('ENG'))}>ENG</li> */}
            </ul>
          </div>
  
        </div>
      </div>
    </React.Fragment>
  )
}