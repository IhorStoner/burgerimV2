import React, { useEffect } from 'react';
import './Homepage.scss';
import Header from '../../components/Header/Header';
import OrderMenu from '../../components/OrderMenu/OrderMenu';
import CartGoods from '../../components/CartGoods/CartGoods';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../redux/selectors/cartSelector';
import axios from 'axios';
import config from '../../config.json'
import { getCheckout } from '../../redux/selectors/productsSelector';
import CheckoutPopup from '../../components/CheckoutPopup/CheckoutPopup'
import { setIsOpenCheckout } from '../../redux/actions/productsAction';
import { getCategory } from '../../redux/actions/productsAction';
import { useParams } from 'react-router-dom'

export default function Homepage(props) {
  const cart = useSelector(getCart)
  const isOpenCheckout = useSelector(getCheckout)
  const { nav } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategory(nav))
  }, [nav])

  const orderData = {
    cart: cart,
    name: 'Ihor',
    phone: '+380666543439',
    address: 'Маршала малиновского 16',
    sum: 100,

  }

  const handleCheckout = async () => {
    dispatch(setIsOpenCheckout(true))
    // await axios.post(`${config.serverUrl}/api/order`,cart)
  }

  return (
    <section className="s-home">
      <div className="s-home__container">
        {isOpenCheckout && <CheckoutPopup cart={cart}/>}
        <div className="s-home__head">
          <Header />
        </div>
        <div className="s-home__order-menu">
          <OrderMenu />
        </div>
        <div className="s-home__cart-goods">
          <CartGoods />
        </div>

      </div>
      <div className="s-home__shopping-cart" >
        <ShoppingCart cart={cart}  handleCheckout={handleCheckout}/>
      </div>
      <footer className="s-footer">
        <Footer />
      </footer>
    </section>
  )
}
