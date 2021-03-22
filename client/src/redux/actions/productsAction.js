import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import config from '../../config.json'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (page) => {
  const data = axios.get(`${config.serverUrl}/api/products/${page}`).then(
    res => res.data)
  return data;
});