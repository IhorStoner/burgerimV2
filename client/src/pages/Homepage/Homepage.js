import React, {useEffect} from 'react';
import './Homepage.scss';
import Header from '../../components/Header/Header';
import OrderMenu from '../../components/OrderMenu/OrderMenu';
import CartGoods from '../../components/CartGoods/CartGoods';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategory } from '../../redux/actions/productsAction';

export default function Homepage(props){
  const {nav} = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategory(nav))
  },[nav])
  return (
    <section className="s-home">
      <div className="s-home__container">
        
        <div className="s-home__head">
          <Header/>
        </div>
        <div id="order-menu" className="s-home__order-menu">
          <OrderMenu/>
        </div>
        <div id="cart-goods" className="s-home__cart-goods">
          <CartGoods/>
        </div>

      </div>
      <div className="s-home__shopping-cart">
        <ShoppingCart/>
      </div>
      <footer className="s-footer"  id="footer" >
        <Footer/>
      </footer>
    </section>
  )
}
