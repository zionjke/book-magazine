import {SET_FILTER, SET_QUERY} from "../actions/filter";


const initialState = {
    searchQuery:'',
    filterBy: 'all'
};

const filterReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filterBy: action.filter
            };
        case SET_QUERY:
            return {
                ...state,
                searchQuery:action.query
            }
    }
    return state
};

export default filterReducer