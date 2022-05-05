import React from 'react'
import { CartTotal } from 'components/Cart/CartTotal'
import { CartProductList } from 'components/Cart/CartProductList'
import CartProductListItemExtended from 'components/Cart/CartProductsListItemExtended'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

export const CartPage = () => {
    return (
        <>
            <h1>Cart</h1>
            <Grid container spacing={3}>
                <CartProductList CartItem={CartProductListItemExtended} />
            </Grid>
            <CartTotal />
            <Link to="/checkout">Proceed to checkout</Link>
        </>
    )
}
