import {createStore, applyMiddleware, combineReducers} from "redux";
import {logger} from "redux-logger/src";
import booksReducer from "./reducers/books";
import cartReducer from "./reducers/cart";



const store = createStore(combineReducers({
    booksReducer,cartReducer
}),applyMiddleware(logger))

export default store