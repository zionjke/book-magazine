import {connect} from "react-redux";
import App from "../components/App";
import {getBooks} from "../reducers/books";
import {setFilter} from "../actions/books";
import orderBy from 'lodash/orderBy';

const sortBy = (books,filterBy) => {
    switch (filterBy) {
        case 'all':
            return books;
        case 'price_high':
            return orderBy(books,'price','desc');
        case 'price_low':
            return orderBy(books,'price','asc');
        case 'author':
            return orderBy(books,'author','asc');
        case 'popular':
            return orderBy(books,'rating','desc');
        default :
            return books
    }
}

const mapStateToProps = (state) => {
    return {
        books: sortBy(state.books.items,state.books.filterBy),
        // books: state.books.items,
        isReady: state.books.isReady
    }
}

export default connect(mapStateToProps, {getBooks,setFilter})(App);