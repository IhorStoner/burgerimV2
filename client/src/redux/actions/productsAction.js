import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import config from '../../config.json'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (page) => {
  const data = axios.get(`${config.serverUrl}/api/products/${page}`).then(
    res => res.data)
  return data;
});

export const getCategory = createAsyncThunk('products/category', async (name) => {
  const data = axios.get(`${config.serverUrl}/api/products/categories/${name}`).then(
    res => res.data)
  return data;
});

export const setIsOpenCheckout = createAction('SET_IS_OPEN_CHECKOUT')

