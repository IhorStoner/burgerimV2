import { createSelector } from '@reduxjs/toolkit'

export const getProducts = createSelector(
  state => state.products.data,
  products => products
);

export const getPages = createSelector(
  state => state.products.pages,
  pages => pages
);

export const getCategories = createSelector(
  state => state.products.categories,
  categories => categories
);