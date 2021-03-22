import { createReducer } from "@reduxjs/toolkit";
import { receiveMenu, openCloseMenu } from '../actions/action';

const initialState = {
    loading: false,
    data: [],
    error: null
  };

const mainReducer = createReducer(initialState,{
    [receiveMenu.pending]: (state) => {
        state.loading = true;
        state.error = null
    },
    [receiveMenu.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
    },
    [receiveMenu.type]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
    },
})

export default mainReducer;