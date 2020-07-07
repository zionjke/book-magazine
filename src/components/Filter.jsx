import React from "react";
import {Menu} from "semantic-ui-react";

const Filter = ({setFilter, filterBy}) => {

    return (
        <Menu secondary>
            <Menu.Item
                name='all'
                active={filterBy === 'all'}
                onClick={setFilter.bind(this, 'all')}>
                Все
            </Menu.Item>
            <Menu.Item
                name='popular'
                active={filterBy === 'popular'}
                onClick={setFilter.bind(this, 'popular')}>
                Популярные
            </Menu.Item>
            <Menu.Item
                name='price_high'
                active={filterBy === 'price_high'}
                onClick={setFilter.bind(this, 'price_high')}>
                Цена(дорогие)
            </Menu.Item>
            <Menu.Item
                name='price_low'
                active={filterBy === 'price_low'}
                onClick={setFilter.bind(this, 'price_low')}>
                Цена(дешевые)
            </Menu.Item>
            <Menu.Item
                name='author'
                active={filterBy === 'author'}
                onClick={setFilter.bind(this, 'author')}>
                По автору
            </Menu.Item>
        </Menu>
    )
}

export default Filter