import Filter from '../components/Filter'
import {connect} from "react-redux";
import {setFilter, setSearchQuery} from "../actions/filter";

const mapStateToProps = (state) => {
    return {
        filterBy: state.filter.filterBy,
        searchQuery:state.filter.searchQuery
    }
};

export default connect(mapStateToProps,{setFilter,setSearchQuery})(Filter)
