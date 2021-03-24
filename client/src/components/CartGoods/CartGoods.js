import React, { useEffect, useState } from 'react';
import './CartGoods.scss';
// import SingleCart from './container/SinleCart';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/selectors/productsSelector';
import { addToCart } from '../../redux/actions/cartAction';
import ProductItem from './ProductItem';
import SingleCart from './container/SinleCart';

function CartGoods() {
  const products = useSelector(getCategories);
  const dispatch = useDispatch()
  

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <React.Fragment>
      <div className="cart-goods">
        {products.map(product => <SingleCart product={product} handleAddToCart={handleAddToCart}/>)}
      </div>
    </React.Fragment>
  )
}

export default CartGoods;