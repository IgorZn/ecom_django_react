import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQ,
    PRODUCT_LIST_SUCCESS,

    PRODUCT_DETAILS_REQ,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL, ADD_QTY, REMOVE_QTY,
} from "../../constans/productConst";

const defaultState = {
    products: [],
}
const defaultDetailsState = {
    product: {
        reviews: []
    },
}

const defaultCartQty = {
    qty: {}
}

export const cartQtyReducer = (state = defaultCartQty, action) => {
    switch (action.type) {
        case ADD_QTY:
            if (state.qty.keys().includes(action.payload.id)) {
                return {...state, qty: state.qty.id = action.payload.qty}
            } else {
                state.qty[action.payload.id] = action.payload.qty
            }

        case REMOVE_QTY:
            return {...state, qty: state.qty[action.payload.id] - action.payload}

        default:
            return state
    }
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
