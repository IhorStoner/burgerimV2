import React from 'react';
import './Footer.scss';
import WhitePhone from '../../assets/svg/white_phone.svg';
import WhiteFace from '../../assets/svg/white_facebook.svg';
import WhiteInst from '../../assets/svg/white_instagram.svg';

function Footer(){
    return (
        <div className="container">
            <div className="footer">
                <div className="footer__up">
                    <nav className="nav-menu nav-menu--scope nav-menu--margintop nav-menu--line nav-menu--footer">
                        <ul className="nav-menu__list">
                            <li className="nav-menu__items">
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
                                <span className="nav-menu__span">Отзывы</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="contanct contanct--line contanct--scope">
                        <div className="contanct__area">
                            <span className="contanct__span contanct__span--flex">
                                <a className="contanct__phone contanct__phone__footer contanct__phone--white contanct__phone--shift" href="tel:380 96 513 66 94"><img className="contanct__call contanct__call--shift" src={WhitePhone} alt="phone"/>+380 96 513 66 94</a>
                                <a href="#" className="contanct__social"><img src={WhiteFace} alt="facebook" /></a>
                                <a href="#" className="contanct__social"><img src={WhiteInst} alt="instagram" /></a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer__brand">
                    <span className="footer__burger" >Burgerim © 2021</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;