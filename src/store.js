import {createStore, applyMiddleware, combineReducers} from "redux";
import {logger} from "redux-logger/src";
import booksReducer from "./reducers/books";
import cartReducer from "./reducers/cart";
import thunk from "redux-thunk";
import filterReducer from "./reducers/filter";



const store = createStore(combineReducers({
    books:booksReducer,
    cart:cartReducer,
    filter:filterReducer
}),applyMiddleware(logger,thunk))

export default store