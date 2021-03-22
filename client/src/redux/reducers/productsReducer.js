import { createReducer } from "@reduxjs/toolkit";
import { fetchProducts } from '../actions/productsAction'

const initialState = {
  data: [],
  pages: null,
  loading: false,
};

const productsReducer = createReducer(initialState, {
  [fetchProducts.pending]: (state) => {
    state.loading = true;
    state.error = null
  },
  [fetchProducts.fulfilled]: (state, action) => {
    state.data = action.payload[0];
    state.pages = action.payload[1];
    state.loading = false;

  },
});

export default productsReducer