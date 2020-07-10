export const ADD_BOOK_TO_CART = 'APP/BOOK_MAGAZINE/ADD_BOOK_TO_CART'
export const REMOVE_BOOK_FROM_CART = 'APP/BOOK_MAGAZINE/REMOVE_BOOK_FROM_CART'

export const addBookToCart = (item) => {
    return {
        type:ADD_BOOK_TO_CART,
        item
    }
};

export const removeBookFromCart = (itemId) => {
    return {
        type:REMOVE_BOOK_FROM_CART,
        itemId
    }
};