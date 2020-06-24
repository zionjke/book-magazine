import React, {Component} from 'react';
import {connect} from "react-redux";
import {setBooks} from "./reducers/books";


class App extends Component{
  render() {
      const {setBooks} = this.props
      const newBooks = [{
          id:1,
          title: 'pis'
      }]

        console.log(this.props)
    return(
        <div className="container">
            <button onClick={()=>{setBooks(newBooks)}}>SET BOOKS</button>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        books: state.booksReducer.books
    }
}

export default connect(mapStateToProps,{setBooks})(App);
