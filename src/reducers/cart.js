import {ADD_BOOK, REMOVE_BOOK_FROM_CART} from "../actions/cart";

const initialState = {
    items:[]
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                items: [...state.items,action.payload]
            }
        case REMOVE_BOOK_FROM_CART:
            return {
                ...state,
                items: state.items.filter(i => i.id !== action.payload.id)
            }

    }
    return state
}

export default cartReducer