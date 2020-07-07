import {SET_BOOKS, SET_FILTER, SET_IS_READY, setBooks} from "../actions/books";
import axios from "axios";

const initialState = {
    isReady: false,
    items: null,
    filterBy: 'all'
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
         case SET_FILTER:
             return {
                 ...state,
                 filterBy: action.filter
             }
     }
    return state
}

export const getBooks = () => (dispatch) => {
    axios.get('/books.json').then(({data}) => {
        dispatch(setBooks(data))
    })
}

export default booksReducer


