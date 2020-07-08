export const SET_FILTER = 'APP/BOOK_MAGAZINE/SET_FILTER'
export const SET_QUERY = 'APP/BOOK_MAGAZINE/SET_QUERY'

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        filter
    }
}

export const setSearchQuery = (query) => {
    return {
        type:SET_QUERY,
        query
    }
}