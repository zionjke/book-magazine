const ADD_BOOK = 'ADD_BOOK';
const SET_BOOKS = 'SET_BOOKS';

const initialState = {
    books: []
}

export const booksReducer = (state= initialState,action) => {
     switch (action.type) {
         case ADD_BOOK:
             return{
                 ...state,
                 books: [...state.books, action.book]
             }

         case SET_BOOKS:
             return {
                 ...state,
                 books: action.books
             }
     }
    return state
}

export const setBooks = (books) => {
    return {
        type: SET_BOOKS,
        books
    }
}