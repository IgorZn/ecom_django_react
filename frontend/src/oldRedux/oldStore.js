import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {cartQtyReducer, productDetailsReducer, productListReducer} from "./redux/reducers/productReducers";

const reducer = combineReducers({
    productsList: productListReducer,
    productDetails: productDetailsReducer,
    cartQty: cartQtyReducer,
})

// const oldStore = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


// export default oldStore