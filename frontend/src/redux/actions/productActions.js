import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQ,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQ,
    PRODUCT_LIST_SUCCESS
} from "../../constans/productConst";
import axios from "axios";

const API_PRODUCTS = 'http://127.0.0.1:8000/api/v1/product/'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic aWdvcnpuOkFkbWluR3VydQ=='
}

export const listProducts = () => {
    return async (dispatch) => {
        try {
            dispatch({type: PRODUCT_LIST_REQ})
            const {data} = await axios.get(API_PRODUCTS, {
                headers,
            })

            dispatch({
                type: PRODUCT_LIST_SUCCESS,
                payload: data
            })

        } catch (e) {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                error: e.message
            })
        }
    }
}

export const listDetails = (ID) => {
    return async (dispatch) => {
        try {
            dispatch({type: PRODUCT_DETAILS_REQ})
            const {data} = await axios.get(API_PRODUCTS + ID, {
                headers,
            })

            dispatch({
                type: PRODUCT_DETAILS_SUCCESS,
                payload: data
            })

        } catch (e) {
            dispatch({
                type: PRODUCT_DETAILS_FAIL,
                error: e.message
            })
        }
    }
}