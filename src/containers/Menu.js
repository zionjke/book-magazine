import MenuComponent from '../components/MenuComponent'
import {connect} from "react-redux";


const mapStateToProps = ({cart}) => {
    return {
        totalPrice: cart.items.reduce((total,book) => total + book.price, 0),
        count: cart.items.length
    }
};

export default connect(mapStateToProps,{})(MenuComponent)
