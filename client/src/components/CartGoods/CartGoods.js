import React, { useEffect, useState } from 'react';
import './CartGoods.scss';
import { useSelector } from 'react-redux';
import { getCategories } from '../../redux/selectors/productsSelector';
import SingleCart from './container/SinleCart';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/selectors/productsSelector';
import { addToCart } from '../../redux/actions/cartAction';

function CartGoods() {
  const products = useSelector(getCategories);
  const dispatch = useDispatch()
  
  const [state, setState] = useState({
    produxlist: []
  })
  
  useEffect(() => {
    const produxlist = products.map((el,i) => <SingleCart key={el.title + i} {...el}  handleAddToCart={handleAddToCart}/>);
    setState((prevState) => {return {...prevState, produxlist}})
  },[products]);
  

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <React.Fragment>
      <div className="cart-goods">
        {state.produxlist}
      </div>
    </React.Fragment>
  )
}

export default CartGoods;