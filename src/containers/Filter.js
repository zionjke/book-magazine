import Filter from '../components/Filter'
import {connect} from "react-redux";
import {setFilter} from "../actions/books";

const mapStateToProps = (state) => {
    return {
        filterBy: state.books.filterBy
    }
}

export default connect(mapStateToProps,{setFilter})(Filter)
