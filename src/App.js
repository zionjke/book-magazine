import React, {Component} from 'react';

import {connect} from "react-redux";
import {setBooks} from "./actions/books";
import {CardGroup, Container} from "semantic-ui-react";
import axios from 'axios'
import MenuComponent from "./components/MenuComponent";
import BookCard from "./components/BookCard";


class App extends Component {

    componentDidMount() {
        const {setBooks} = this.props
        axios.get('/books.json').then(({data}) => {
            setBooks(data)
        })
    }

    render() {
        const {books, isReady} = this.props
        return (
            <Container>
                <MenuComponent/>
                <CardGroup itemsPerRow={4}>
                    {!isReady ? 'Загрузка...' : books.map((book,i) => (
                        <BookCard key={i} {...book}/>
                    ))}
                </CardGroup>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.booksReducer.items,
        isReady: state.booksReducer.isReady
    }
}

export default connect(mapStateToProps, {setBooks})(App);
