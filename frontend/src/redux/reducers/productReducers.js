import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQ,
    PRODUCT_LIST_SUCCESS,

    PRODUCT_DETAILS_REQ,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
} from "../../constans/productConst";

const defaultState = {
    products: [],
}
const defaultDetailsState = {
    product: {
        reviews: []
    },
}


export const productListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQ:
            return {loading: true, products: []}
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload}
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.error}


        default:
            return state
    }
}

export const productDetailsReducer = (state = defaultDetailsState, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQ:
            return {loading: true, ...state}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload}
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.error}


        default:
            return state
    }
}
