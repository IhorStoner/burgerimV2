import React, {useState} from 'react';
import './Header.scss';
import Info from '../../assets/svg/info.svg';
import Moto from '../../assets/svg/moto.svg';
import Mess from '../../assets/svg/mess.svg';
import Logo from '../../assets/svg/logo.svg';
import Phone from '../../assets/svg/phone.svg';
import { useDispatch } from 'react-redux';

export default function Header(){
  const dispatch = useDispatch()

    const [state,setState] = useState({
      menuOpen: false,
    })
    

    const humburgerOn = (e) => {
      if(state.menuOpen){
        e.currentTarget.classList.remove("nav-menu__cell-humburger--to-x");
        setState((prevState) => {return {...prevState,  menuOpen: false}});
      }else{
        e.currentTarget.classList.add("nav-menu__cell-humburger--to-x");
        setState((prevState) => {return {...prevState,  menuOpen: true}});
      }
    }

    const handleSelectLng = () => {
      
    }

    return (
    <React.Fragment>
        <nav className="nav-menu">
          <div onClick={humburgerOn} className="nav-menu__cell-humburger">
            <div className="nav-menu__humburger"></div>
            {state.menuOpen && (
              <>
              <ul className="nav-menu__moble-sheet">
                <li className="nav-menu__items">
                  <a className="nav-menu__link nav-menu__link--mobile-line nav-menu__link--active" href="#">
                    <span className="nav-menu__span">Главная</span>
                  </a>
                </li>
                <li className="nav-menu__items">
                  <a className="nav-menu__link nav-menu__link--mobile-line nav-menu__link--active" href="#">
                    <span className="nav-menu__span">О Нас</span>
                  </a>
                </li>
                <li className="nav-menu__items">
                  <a className="nav-menu__link nav-menu__link--mobile-line" href="#">
                    <span className="nav-menu__span">Доставка и оплата</span>
                  </a>
                </li>
                <li className="nav-menu__items">
                  <a className="nav-menu__link nav-menu__link--mobile-line" href="#">
                    <span className="nav-menu__span">Отзывы</span>
                  </a>
                </li>
              </ul>
              <div className="nav-menu__moble-close" onClick={humburgerOn}></div>
              </>
            )}
          </div>
          <ul className="nav-menu__list nav-menu__heade">
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
              <a className="contanct__phone contanct__phone--heade" href="tel:380 96 513 66 94"><img className="contanct__call" src={Phone} alt="phone"/>+380 96 513 66 94</a>
            </span>
            <select className="contanct__select">
              <option className="contanct__option" onClick={() => handleSelectLng('RUS')}>RUS</option>
              <option className="contanct__option" onClick={() => handleSelectLng('UKR')} >UKR</option>
              <option className="contanct__option" onClick={() => handleSelectLng('ENG')}>ENG</option>
            </select>
          </div>
        </div>
    </React.Fragment>
    )
}