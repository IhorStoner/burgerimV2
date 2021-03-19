import React from 'react';
import './Homepage.scss';
import Header from '../../components/Header/Header';
import OrderMenu from '../../components/OrderMenu/OrderMenu';
import CartGoods from '../../components/CartGoods/CartGoods';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

export default function Homepage(){
  return (
    <section className="s-home">
      <div className="s-home__container">
        
        <div className="s-home__head">
          <Header/>
        </div>
        <div className="s-home__order-menu">
          <OrderMenu/>
        </div>
        <div className="s-home__cart-goods">
          <CartGoods/>
        </div>

      </div>
      <div className="s-home__shopping-cart">
        <ShoppingCart/>
      </div>  
      
    </section>
  )
}
