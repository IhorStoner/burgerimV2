import React from 'react';
import './Footer.scss';
import WhitePhone from '../../assets/svg/white_phone.svg';
import WhiteFace from '../../assets/svg/white_facebook.svg';
import WhiteInst from '../../assets/svg/white_instagram.svg';
import { useSelector } from 'react-redux';
import { getLanguage } from '../../redux/selectors/languageSelector';

function Footer() {
  const lng = useSelector(getLanguage)

  return (
    <div className="container">
      <div className="footer">
        <div className="footer__up">
          <nav className="nav-menu nav-menu--scope nav-menu--line nav-menu--footer">
            <ul className="nav-menu__list">
              {/* <li className="nav-menu__items">
                            <a className="nav-menu__link nav-menu__link--foter nav-menu__link--white nav-menu__link--size nav-menu__link--active" href="#">
                                <span className="nav-menu__span">О Нас</span>
                            </a>
                            </li>
                            <li className="nav-menu__items">
                            <a className="nav-menu__link nav-menu__link--foter nav-menu__link--white nav-menu__link--size" href="#">
                                <span className="nav-menu__span">Доставка и оплата</span>
                            </a>
                            </li>
                            <li className="nav-menu__items">
                            <a className="nav-menu__link nav-menu__link--foter nav-menu__link--white nav-menu__link--size" href="#">
                                <span className="nav-menu__span">{lng === 'RUS' && 'Отзывы'}{lng === 'UKR' && 'Відгуки'}</span>
                            </a>
                            </li> */}
            </ul>
          </nav>
          <div className="contanct contanct--line contanct--scope">
            <div className="contanct__area">
              <span className="contanct__span contanct__span--flex">
                <a className="footer__contact contanct__phone__footer contanct__phone--white" href="tel:380 68 969 9090">
                  <img className="" src={WhitePhone} alt="phone" />
                  <span>+380 68 969 9090</span>
                </a>

                <a href="#" className="contanct__social contanct__social--footer"><img className="contanct__icon" src={WhiteFace} alt="facebook" /></a>
                <a href="#" className="contanct__social contanct__social--footer"><img className="contanct__icon" src={WhiteInst} alt="instagram" /></a>
              </span>
            </div>
          </div>
        </div>
        <div className="footer__brand">
          <div className="footer__burger" >
            {lng === 'RUS' && 'Дерибасовская 1'}
            {lng === 'UKR' && 'Дерибасівська 1'}
          </div>
          <div className="footer__burger" >Burgerim © 2021</div>
        </div>
      </div>
    </div>
  )
}

export default Footer;