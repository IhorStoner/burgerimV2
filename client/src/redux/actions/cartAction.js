import { createAction } from "@reduxjs/toolkit"

export const addToCart = createAction('ADD_PRODUCT_TO_CART')

export const deleteCartProduct = createAction('DELETE_PRODUCT_FROM_CART')

export const changeProductCount = createAction('CHANGE_PRODUCT_COUNT')