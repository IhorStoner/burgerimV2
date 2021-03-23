import React, { useEffect, useState } from 'react';
import './CartGoods.scss';
import { useSelector } from 'react-redux';
import { getCategories } from '../../redux/selectors/productsSelector';
import SingleCart from './container/SinleCart';

function CartGoods() {
  const products = useSelector(getCategories);
  const [state, setState] = useState({
    produxlist: []
  })
  
  useEffect(() => {
    const produxlist = products.map((el,i) => <SingleCart key={el.title + i} {...el} />);
    setState((prevState) => {return {...prevState, produxlist}})
  },[products]);
  

  return (
    <React.Fragment>
      <div className="cart-goods">
        {state.produxlist}
      </div>
    </React.Fragment>
  )
}

export default CartGoods;