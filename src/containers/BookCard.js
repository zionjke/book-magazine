import BookCard from '../components/BookCard'
import {connect} from "react-redux";
import {addBookToCart} from "../actions/cart";


const mapStateToProps = ({cart}) => {
    return {
        addedCount:0
    }
};

export default connect(mapStateToProps,{addBookToCart})(BookCard)
