import {SET_BOOKS, SET_FILTER, SET_IS_READY, setBooks} from "../actions/books";
import axios from "axios";

const initialState = {
    isReady: false,
    items: null,
}

const booksReducer = (state= initialState,action) => {
     switch (action.type) {
         case SET_BOOKS:
             return {
                 ...state,
                 items: action.payload,
                 isReady: true
             }
         case SET_IS_READY:
             return {
                 ...state,
                 isReady: action.payload
             }

     }
    return state
}

export const getBooks = () => (dispatch) => {
    axios.get('https://books-magazine.herokuapp.com/books').then(({data}) => {
        dispatch(setBooks(data))
    })
}

export default booksReducer


