import BookCard from '../components/BookCard'
import {connect} from "react-redux";
import {addBookToCart, removeBookFromCart} from "../actions/cart";


const mapStateToProps = ({cart},{id}) => {
    return {
        addedCount:cart.items.reduce(
            (count,book) => count + (book.id === id ? 1 : 0),
            0)
    }
};

export default connect(mapStateToProps,{addBookToCart,removeBookFromCart})(BookCard)
