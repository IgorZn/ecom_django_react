import { configureStore } from '@reduxjs/toolkit'
import productListReducer from './productList'

export const store = configureStore({
  reducer: {
    productList: productListReducer
  },
})