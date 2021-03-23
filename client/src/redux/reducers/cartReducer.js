import { createReducer } from "@reduxjs/toolkit";
import { addToCart, changeProductCount, deleteCartProduct } from "../actions/cartAction";

let initialState;

try {
  initialState = JSON.parse(localStorage.getItem('burgerimCart') || "[]")
} catch (e) {
  console.log('Local storage is empty')
}

export const storageReducer = createReducer(initialState, {
  [addToCart.type]: (state, action) => {
    const product = action.payload
    const findedProduct = state.find(item => item._id === product._id)
    if (findedProduct) {
      const newProduct = {
        ...product,
        count: +findedProduct.count + +product.count
      }
      const index = state.findIndex(item => item._id === product._id)
      state.splice(index,1,newProduct)
    } else {
      state.push(action.payload)
    }
  },
  [changeProductCount.type]: (state, action) => {
    const product = action.payload
    const index = state.findIndex(item => item._id === product._id)
    state.splice(index,1,product)
  },
  [deleteCartProduct.type]: (state, action) => {
    const _id = action.payload
    const index = state.findIndex(item => item._id === _id)
    state.splice(index,1)
  }
});

export default storageReducer;