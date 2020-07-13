import React from "react";
import {Button, Image, List, Menu, Popup} from 'semantic-ui-react'


const CartComponent = ({title,id,image,removeBookFromCart}) => {
    return (
        <List selection divided verticalAlign='middle'>
            <List.Item>
                <List.Content floated='right'>
                    <Button onClick={()=>{removeBookFromCart(id)}} color='red'>Удалить</Button>
                </List.Content>
                <Image avatar src={image} />
                <List.Content>{title}</List.Content>
            </List.Item>
        </List>
    )
};

const MenuComponent = ({totalPrice,count,items}) => {
    return (
        <Menu>
            <Menu.Item
                name='browse'
                onClick={() => {}}
            >
                Магазин книг
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item
                    name='signup'
                    onClick={() => {}}
                >
                    Итого: &nbsp; <b>{totalPrice}</b> руб.
                </Menu.Item>
                <Popup trigger={
                    <Menu.Item
                        name='help'
                        onClick={() => {}}
                    >
                        Корзина (<b>{count}</b>)
                    </Menu.Item>
                }
                content={items.map(book => <CartComponent {...book}/>)}
                on="click"
                hideOnScroll>
                </Popup>
            </Menu.Menu>
        </Menu>
    )
};

export default MenuComponent