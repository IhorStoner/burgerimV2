import { combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import productsReducer from './reducers/productsReducer'

export default combineReducers({
  products: productsReducer,
  form: formReducer
})