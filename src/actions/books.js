export const SET_BOOKS = 'APP/BOOK_MAGAZINE/SET_BOOKS';
export const SET_IS_READY = 'APP/BOOK_MAGAZINE/SET_IS_READY'
export const SET_FILTER = 'APP/BOOK_MAGAZINE/SET_FILTER'


export const setBooks = (payload) => {
    return {
        type: SET_BOOKS,
        payload
    }
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        filter
    }

}