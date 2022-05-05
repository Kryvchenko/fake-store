import React from 'react'
import { keys } from 'lodash'
import { useSelector } from 'react-redux'
import { getProductsObject } from 'components/Products/productsArray'

export const CartTotal = () => {
    const productsArray = useSelector((state) => state.products)
    const productsInCart = useSelector((state) => state.productsInCart)
    const productsObject = getProductsObject(productsArray)
    if (productsArray.lenght === 0) {
        return null
    } else {
        return (
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
        )
    }
}
