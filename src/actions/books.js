export const SET_BOOKS = 'SET_BOOKS';
export const SET_IS_READY = 'SET_IS_READY'


export const setBooks = (payload) => {
    return {
        type: SET_BOOKS,
        payload
    }
}