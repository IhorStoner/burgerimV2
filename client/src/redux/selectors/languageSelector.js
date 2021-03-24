import { createSelector } from '@reduxjs/toolkit'

export const getLng = createSelector(
  state => state.lng,
  lng => lng
);