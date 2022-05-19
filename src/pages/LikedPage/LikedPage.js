import { Grid } from '@mui/material'
import React from 'react'

import { CartProductList } from 'components/Cart/CartProductList'
import { CartProductListItemExtended } from 'components/Cart/CartProductsListItemExtended'

export const LikedPage = () => {
    return (
        <>
            <Grid container spacing={3}>
                <CartProductList CartItem={CartProductListItemExtended} />
            </Grid>
        </>
    )
}
