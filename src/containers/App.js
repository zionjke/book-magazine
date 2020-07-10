import {connect} from "react-redux";
import App from "../components/App";
import {getBooks} from "../reducers/books";
import {setFilter} from "../actions/filter";
import orderBy from 'lodash/orderBy';

const sortBy = (books,filterBy) => {
    switch (filterBy) {
        case 'price_high':
            return  orderBy(books,'price','desc');
        case 'price_low':
            return orderBy(books,'price','asc');
        case 'author':
            return  orderBy(books,'author','asc');
        case 'popular':
            return   orderBy(books,'rating','desc');
        case 'all':
        default :
            return books
    }
};

const filterBooks = (books,searchQuery) =>
    books.filter(b =>
        b.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0 ||
        b.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0
    );

const searchBooks = (books,filterBy,searchQuery) => {
    return sortBy(filterBooks(books,searchQuery),filterBy)
};

const mapStateToProps = ({books,filter}) => {
    return {
        books: books.items && searchBooks(books.items,filter.filterBy,filter.searchQuery),
        isReady: books.isReady
    }
};

export default connect(mapStateToProps, {getBooks,setFilter})(App);