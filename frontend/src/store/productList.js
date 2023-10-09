import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import axios from "axios";

const API_PRODUCTS = 'http://127.0.0.1:8000/api/v1/product/'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic aWdvcnpuOkFkbWluR3VydQ=='
}

export const fetchProducts = createAsyncThunk(
    'productList/fetchProducts',
    async () => {
        const {data} = await axios.get(API_PRODUCTS, {headers})
        return data
    }
)


export const fetchSingleProduct = createAsyncThunk(
    'productList/fetchSingleProduct',
    async (ID) => {
        const {data} = await axios.get(API_PRODUCTS + ID, {headers})
        return data
    }
)


const initialState = {
    products: [],
    product: {},
    loading: false,
    error: null
}

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        // product_list_req: (state) => {
        //     state.loading = false
        // },
        // product_list_success: async (state, action) => {
        //     state.loading = true
        //     const {data} = await axios.get(API_PRODUCTS, {headers})
        //     state.products.push(...data)
        // },
        // product_list_fail: (state, action) => {
        //     state.loading = false
        //     state.error = action.payload.error
        // },
    },
    extraReducers:
        (builder) => {
        builder
            // List Product
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.products.push(...action.payload)
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            // Single Product
            .addCase(fetchSingleProduct.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                console.log('fetchSingleProduct.fulfilled>>', action.payload)
                state.loading = false
                state.product = action.payload
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    },
})

// Action creators are generated for each case reducer function
export const {product_list_req, product_list_success, product_list_fail} = productListSlice.actions

export default productListSlice.reducer