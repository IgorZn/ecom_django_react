import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {productDetailsReducer, productListReducer} from "./redux/reducers/productReducers";

const reducer = combineReducers({
    productsList: productListReducer,
    productDetails: productDetailsReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


export default store