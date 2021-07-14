import React from 'react'
import { NavLink } from 'react-router-dom'
import {Dropdown, DropdownDivider, Label} from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export default function CartSummary() {

    const {cartItems} = useSelector(state => state.cart)

    return (
        <div>
             <Dropdown item text='Sepetiniz'>
                        <Dropdown.Menu>
                            {
                                cartItems.map((cartItem)=>(<Dropdown.Item>
                                    Ürün Adı
                                    <Label>Ürün Adedi</Label>
                                </Dropdown.Item>))
                            }
                            <Dropdown.Item>Acer Laptop</Dropdown.Item>
                            <Dropdown.Item>Asus Laptop</Dropdown.Item>
                            <Dropdown.Item>Dell Laptop</Dropdown.Item>
                            <Dropdown.Item>Monster Notebook</Dropdown.Item>
                            <Dropdown.Item>HP Laptop</Dropdown.Item>
                            <DropdownDivider/>
                            <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
        </div>
    )
}
