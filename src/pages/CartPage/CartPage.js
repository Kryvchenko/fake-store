import React from 'react'
import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import CartProductListItemExtended from 'components/Cart/CartProductsListItemExtended'
import { Grid } from '@mui/material'
import { connect, useSelector } from 'react-redux'

const CartPage = ({ productsInCart }) => {
    // const ProductsInCart = useSelector((state) => ({
    //     productsInCart: state.productsInCart,
    // }))

    return (
        <>
            <h1>Cart</h1>
            <Grid container spacing={3}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
})

export default connect(mapStateToProps)(CartPage)
