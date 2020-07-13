import MenuComponent from '../components/MenuComponent'
import {connect} from "react-redux";
import {removeBookFromCart} from "../actions/cart";
import uniqBy from 'lodash/uniqBy'


const mapStateToProps = ({cart}) => {
    return {
        totalPrice: cart.items.reduce((total,book) => total + book.price, 0),
        count: cart.items.length,
        items:uniqBy(cart.items, i => i.id)
    }
};

export default connect(mapStateToProps,{removeBookFromCart})(MenuComponent)
