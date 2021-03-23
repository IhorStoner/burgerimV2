import { createSelector } from '@reduxjs/toolkit'

export const getCart = createSelector(
  state => state.cart,
  cart => cart
);