import React from 'react'
import { keys } from 'lodash'

import { getProductsObject } from 'components/Products/productsArray'
import { CartProductListItem } from './CartProductsListItem'
import { connect } from 'react-redux'

const CartProductList = ({
    productsArray,
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
}) => {
    if (productsArray.lenght === 0) {
        return null
    } else {
        return (
            <>
                {keys(productsInCart).map((productId) => (
                    <CartItem
                        key={productId}
                        product={productsObject[productId]}
                        productCount={productsInCart[productId]}
                    />
                ))}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    productsArray: state.products,
})

export default connect(mapStateToProps)(CartProductList)
