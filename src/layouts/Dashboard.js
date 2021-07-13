import React from 'react'
import Categories from './Categories'
import Navi from './Navi'
import ProductList from '../pages/ProductList'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import ProductDetails from '../pages/ProductDetails'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <GridColumn width={12}>
                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/products" component={ProductList} />
                        <Route path="/products/:name" component={ProductDetails} />
                        <Route exact path="/cart" component={CartDetail} />
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}
