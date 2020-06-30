import React, {Component} from 'react';
import {connect} from "react-redux";
import {setBooks} from "./actions/books";
import axios from 'axios'


class App extends Component{

    componentDidMount() {
        const {setBooks} = this.props
        axios.get('/books.json').then(({data}) => {
            setBooks(data)
        })
    }

    render() {
      const {books} = this.props
    return(
        <ul>
            { !books ? 'Загрузка...' : books.map(book => (
                <li key={book.id}><b>{book.title}</b> - {book.author}</li>
            ))}
        </ul>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        books: state.booksReducer.items
    }
}

export default connect(mapStateToProps,{setBooks})(App);
