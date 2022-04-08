import React from 'react'
import { keys } from 'lodash'

import {
    getProductsObject,
    productsArray,
} from 'components/Products/productsArray'

export const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[productId].name} :
                    {productsInCart[productId]}
                </div>
            ))}
            <div>
                Total:{' '}
                {keys(productsInCart).reduce((total, productId) => {
                    return (
                        total +
                        productsObject[productId].price *
                            productsInCart[productId]
                    )
                }, 0)}
                $
            </div>
        </div>
    )
}
