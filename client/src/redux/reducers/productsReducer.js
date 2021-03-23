import { createReducer } from "@reduxjs/toolkit";
import { fetchProducts, getCategory } from '../actions/productsAction'

const initialState = {
  data: [],
  pages: null,
  loading: false,
  category: []
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
  [getCategory.pending]: (state) => {
    state.loading = true;
    state.error = null
  },
  [getCategory.fulfilled]: (state, action) => {

    state.category = action.payload;
    state.loading = false;
  },
});

export default productsReducer