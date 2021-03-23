import React from 'react';
import './CartGoods.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/selectors/productsSelector';
import ProductItem from './ProductItem';
import { addToCart } from '../../redux/actions/cartAction';

function CartGoods() {
  const products = useSelector(getCategories)
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <React.Fragment>
      <div className="cart-goods">
        {products && products.map(product => product.view === 'yes' && <ProductItem product={product} handleAddToCart={handleAddToCart}/>)}
      </div>
    </React.Fragment>
  )
}

export default CartGoods;