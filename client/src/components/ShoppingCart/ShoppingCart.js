import React from 'react';
import './ShoppingCart.scss';
import { getLanguage } from '../../redux/selectors/languageSelector';
import { useSelector } from 'react-redux';

function ShoppingCart({ cart,handleCheckout }) {
  const lng = useSelector(getLanguage)

  const mathCountsItems = (cart) => {
    const totalCount = cart.reduce((totalCount, currentItem) => +totalCount + (+currentItem.count), 0)
    return totalCount
  } 
  
  return (
    <React.Fragment>
      <div className="shopping-cart" >
        <div className="shopping-cart" onClick={() => handleCheckout()}>
          <div className="shopping-cart__place">
            <div className="shopping-cart__count">
              <div className="shopping-cart__digit">
                <span className="shopping-cart__latter">{mathCountsItems(cart)}</span>
              </div>
              <svg className="shopping-cart__bays" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="shopping-cart__circle" d="M69.9163 139.833C108.53 139.833 139.833 108.53 139.833 69.9163C139.833 31.3026 108.53 0 69.9163 0C31.3026 0 0 31.3026 0 69.9163C0 108.53 31.3026 139.833 69.9163 139.833Z" />
                <path d="M122.347 54.5196V50.0459C122.347 49.2688 121.717 48.639 120.94 48.639H18.8922C18.1152 48.639 17.4854 49.2688 17.4854 50.0459V54.5196C17.4854 55.2966 18.1152 55.9265 18.8922 55.9265H120.94C121.717 55.9265 122.347 55.2966 122.347 54.5196Z" fill="white" />
                <path d="M63.8275 22.3369C64.2181 21.2418 63.6467 20.0372 62.5514 19.6469L57.9808 18.0177C56.8855 17.6272 55.6812 18.1986 55.2909 19.2939L46.1542 44.9235H55.776L63.8275 22.3369Z" fill="white" />
                <path d="M84.2883 44.9234H93.91L84.7733 19.2934C84.3828 18.1984 83.1785 17.627 82.0834 18.0173L77.5128 19.6465C76.4175 20.037 75.8464 21.2414 76.2367 22.3365L84.2883 44.9234Z" fill="white" />
                <path d="M68.0165 104.593V93.8425H52.3592L53.4418 104.593H49.8343L48.7517 93.8425H35.3028L34.3944 90.235H48.3884L47.1097 77.5361H31.6442L30.6417 73.9284H46.7464L45.6493 63.0334H49.2571L50.3541 73.9284H68.0165V63.0334H71.624V73.9284H79.8866C82.832 71.4766 86.2943 69.6255 90.0867 68.5627L90.6721 63.0334H94.2798L93.7751 67.7984C95.0134 67.6287 96.2773 67.539 97.5622 67.539C103.404 67.539 108.822 69.3529 113.287 72.4459L116.178 59.6783H23.9677L34.1439 104.615C34.5853 106.564 36.3178 107.948 38.3166 107.948H73.0343C72.4718 106.869 71.978 105.75 71.5596 104.593H68.0165Z" fill="white" />
                <path d="M71.6243 85.5999C72.7185 82.6403 74.3044 79.9194 76.2832 77.5361H71.6243V85.5999Z" fill="white" />
                <path d="M51.996 90.235H68.0165V77.5361H50.7174L51.996 90.235Z" fill="white" />
              </svg>
            </div>
            <div className="shopping-cart__order">
              <span className="shopping-cart__span">{lng === 'RUS' && 'Оформить заказ'}{lng === 'UKR' && 'Оформити замовлення'}</span>
              <svg className="shopping-cart__orders" viewBox="0 0 303 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="shopping-cart__square" d="M257.788 0H0C8.24524 13.0325 13.0161 28.4615 13.0161 45C13.0161 61.5385 8.24524 76.9675 0 90H257.788C282.758 90 303 69.8528 303 45C303 20.1472 282.757 0 257.788 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ShoppingCart