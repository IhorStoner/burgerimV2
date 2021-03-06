import { createReducer } from "@reduxjs/toolkit";
import { changeLanguage } from '../actions/languageAction'

const initialState = {
  lng: 'UKR'
};

const languageReducer = createReducer(initialState, {
  [changeLanguage.type]: (state, action) => {
    state.lng = action.payload;
  },
});

export default languageReducer