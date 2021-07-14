import React from 'react'
import Categories from './Categories'
import Navi from './Navi'
import ProductList from '../pages/ProductList'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import ProductDetails from '../pages/ProductDetails'
import CartDetail from '../pages/CartDetail'
import { ToastContainer, toast } from "react-toastify"
import ProductAdd from '../pages/ProductAdd'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <GridColumn width={12}>
                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/products" component={ProductList} />
                        <Route path="/products/:name" component={ProductDetails} />
                        <Route path="/cart" component={CartDetail} />
                        <Route path="/product/add" component={ProductAdd} />
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}
