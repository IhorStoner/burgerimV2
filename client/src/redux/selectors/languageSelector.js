import { createSelector } from '@reduxjs/toolkit'

export const getLanguage = createSelector(
  state => state.lng,
  lng => lng
);