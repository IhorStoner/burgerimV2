import { combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import productsReducer from './reducers/productsReducer'
import cartReducer from './reducers/cartReducer'

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  form: formReducer
})