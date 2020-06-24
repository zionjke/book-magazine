import {createStore, applyMiddleware, combineReducers} from "redux";
import {logger} from "redux-logger/src";
import {booksReducer} from "./reducers/books";


const store = createStore(combineReducers({
    booksReducer
}),applyMiddleware(logger))

export default store