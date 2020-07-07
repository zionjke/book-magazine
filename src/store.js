import {createStore, applyMiddleware, combineReducers} from "redux";
import {logger} from "redux-logger/src";
import booksReducer from "./reducers/books";
import cartReducer from "./reducers/cart";
import thunk from "redux-thunk";



const store = createStore(combineReducers({
    books:booksReducer,
    cart:cartReducer
}),applyMiddleware(logger,thunk))

export default store