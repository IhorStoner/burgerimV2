import React, { useState, useRef } from 'react';
import AngleUp from '../../../assets/svg/angle-up.svg';
import AngleDown from '../../../assets/svg/angle-down.svg';
import config from '../../../config.json';
import { useSelector } from 'react-redux';
import { getLanguage } from '../../../redux/selectors/languageSelector';


export default function SingleCart({ product, handleAddToCart }) {
  const lng = useSelector(getLanguage)
  const inpVal = useRef(null);
  const [item, setItem] = useState({
    ...product,
    count: 1,
    summ: product.price,
  })

  const increace = (e) => {
    if (item.count >= 99) return null;
    setItem((prevState) => {
      const prevCount = prevState.count + 1;
      return { ...prevState, count: prevCount, summ: prevCount * prevState.price };
    })
  }

  const decreace = (e) => {
    if (item.count <= 1) return null;
    setItem((prevState) => {
      const prevCount = prevState.count - 1;
      return { ...prevState, count: prevCount, summ: prevCount * prevState.price };
    })
  }

  const change = (e) => {
    const val = e.target.value;
    const didgit = parseInt(val);
    if (!isNaN(didgit)) {
      const checkZiro = didgit === 0 ? 1 : didgit;
      setItem((prevState) => { return { ...prevState, count: checkZiro, summ: prevState.price * checkZiro } })
    } else if (val.trim() === "") {
      setItem((prevState) => { return { ...prevState, count: val } })
    }
  }
  const blur = (e) => {
    if (e.target.value.trim() === "") {
      setItem((prevState) => { return { ...prevState, count: 1 } })
    }
  }

  return (
    <div className="cart-goods__elem">
      <div className="cart-goods__image-zone">
        <img className="cart-goods__picture" src={`${config.serverUrl}/api/images/${item.images[0]}`} />
      </div>
      <div className="cart-goods__desc">
        <h4 className="cart-goods__h4">{lng === 'RUS' && product.title} {lng ==='UKR' && product.titleUKR}</h4>
        <span className="cart-goods__text">{lng === 'RUS' && product.description} {lng ==='UKR' && product.descriptionUKR}</span>
      </div>
      <div className="cart-goods__action">
        <span className="cart-goods__cost">{item.summ} грн</span>
        <div className="cart-goods__select">
          <input maxLength="2" ref={inpVal} onBlur={blur} onChange={change} className="cart-goods__reveal" value={item.count} />
          <div className="cart-goods__change-select">
            <button onClick={increace} className="cart-goods__btn-change"><img src={AngleUp} alt="angle-up" /></button>
            <button onClick={decreace} className="cart-goods__btn-change"><img src={AngleDown} alt="angle-down" /></button>
          </div>
        </div>
        <button className="cart-goods__bag" onClick={() => handleAddToCart(item)}>
          <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="cart-goods__bag-svg" d="M56 0H10C4.47715 0 0 4.47715 0 10V56C0 61.5229 4.47715 66 10 66H56C61.5229 66 66 61.5229 66 56V10C66 4.47715 61.5229 0 56 0Z" />
            <path d="M46.4694 40.4082C42.006 40.4082 38.3878 44.0266 38.3878 48.4898C38.3878 52.9533 42.0061 56.5715 46.4694 56.5715C50.9328 56.5715 54.551 52.9531 54.551 48.4898C54.551 44.0266 50.9327 40.4082 46.4694 40.4082ZM46.4694 55.3485C42.6815 55.3485 39.6109 52.2779 39.6109 48.49C39.6109 44.7021 42.6815 41.6315 46.4694 41.6315C50.2573 41.6315 53.3279 44.7021 53.3279 48.49C53.3278 52.2777 50.2571 55.3485 46.4694 55.3485Z" fill="white" />
            <path d="M59.4603 25.5918H7.21313C6.57694 25.5918 6.06122 26.0506 6.06122 26.6166V27.9343C6.06122 28.5003 6.57694 28.9591 7.21313 28.9591H59.4603C60.0965 28.9591 60.6122 28.5003 60.6122 27.9343V26.6166C60.6122 26.0506 60.0965 25.5918 59.4603 25.5918Z" fill="white" />
            <path d="M9.42856 30.9798L14.7887 55.2189C14.9636 56.0098 15.6526 56.5715 16.4476 56.5715H39.8506C37.7739 54.7342 36.4403 52.0497 36.3656 49.0444H34.1979V54.8151H32.3115V49.0444H24.1332L24.7249 54.8151H22.8385L22.2468 49.0444H15.3338L14.7187 47.0372H22.0409L21.3677 40.472H13.4474L12.7913 38.4648H21.1618L20.583 32.8196H22.4694L23.0483 38.4648H32.3115V32.8196H34.1979V38.4648H43.3908L43.917 32.8196H45.8034L45.2772 38.4648H53.6771L53.103 40.472H52.469C53.3171 41.1095 54.0629 41.8791 54.6797 42.7504L57.2449 30.9796H9.42856V30.9798Z" fill="white" />
            <path d="M23.5987 47.1429H32.3265V40.4082H22.8979L23.5987 47.1429Z" fill="white" />
            <path d="M40.4081 40.4082H34.3469V47.1429H36.5736C37.0058 44.3897 38.4175 41.999 40.4081 40.4082Z" fill="white" />
            <path d="M40.8052 23.5714H45.7959L40.8334 9.90063C40.6992 9.53051 40.286 9.33789 39.9108 9.47048L36.8459 10.553C36.4707 10.6856 36.2754 11.093 36.4098 11.4631L40.8052 23.5714Z" fill="white" />
            <path d="M30.2638 11.4748C30.3985 11.101 30.2008 10.6901 29.8223 10.5571L26.7299 9.47036C26.3515 9.33733 25.9354 9.5326 25.8007 9.90639L20.8776 23.5714H25.9059L30.2638 11.4748Z" fill="white" />
            <path d="M50.5102 47.8678H47.0913V44.449H45.174V47.8678H41.7551V49.7851H45.174V53.2041H47.0913V49.7851H50.5102V47.8678Z" fill="white" />
          </svg>
        </button>
      </div>
    </div>
  )
}
