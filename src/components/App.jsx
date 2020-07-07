import React, {Component} from 'react';
import {CardGroup, Container} from "semantic-ui-react";
import MenuComponent from "./MenuComponent";
import BookCard from "./BookCard";
import Filter from "./../containers/Filter";

class App extends Component {

    componentDidMount() {
        this.props.getBooks()
    }

    render() {
        const {books, isReady} = this.props
        return (
            <Container>
                <MenuComponent/>
                <Filter/>
                <CardGroup itemsPerRow={4}>
                    {!isReady ? 'Загрузка...' : books.map((book,i) => (
                        <BookCard key={i} {...book}/>
                    ))}
                </CardGroup>
            </Container>
        )
    }
}

export default App
