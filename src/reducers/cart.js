import {ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART} from "../actions/cart";

const initialState = {
    items:[{
        "id": 0,
        "title": "Происхождение",
        "author": "Дэн Браун",
        "image": "https://i1.rozetka.ua/goods/16736883/fors_9789669931726_images_16736883374.jpg",
        "price": 710,
        "rating": 3
    }]
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK_TO_CART:
            return {
                ...state,
                items: [...state.items,action.item]
            };
        case REMOVE_BOOK_FROM_CART:
            return {
                ...state,
                items: state.items.filter(i => i.id !== action.item.id)
            }

    }
    return state
};

export default cartReducer