import React from 'react'
import { keys } from 'lodash'

import {
    getProductsObject,
    productsArray,
} from 'components/Products/productsArray'
import { CartProductListItem } from './CartProductsListItem'

export const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
}) => {
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
