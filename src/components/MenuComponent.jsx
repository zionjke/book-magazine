import React from "react";
import { Menu } from 'semantic-ui-react'

const MenuComponent = () => {
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
                    Итого: &nbsp; <b>0</b> руб.
                </Menu.Item>

                <Menu.Item
                    name='help'
                    onClick={() => {}}
                >
                    Корзина (<b>0</b>)
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default MenuComponent