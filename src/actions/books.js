export const SET_BOOKS = 'APP/BOOK_MAGAZINE/SET_BOOKS';
export const SET_IS_READY = 'APP/BOOK_MAGAZINE/SET_IS_READY'


export const setBooks = (payload) => {
    return {
        type: SET_BOOKS,
        payload
    }
}