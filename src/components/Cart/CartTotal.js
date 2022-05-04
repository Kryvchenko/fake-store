import React from 'react'
import { keys } from 'lodash'
import { connect, useSelector } from 'react-redux'
import { getProductsObject } from 'components/Products/productsArray'

const CartTotal = ({
    productsArray,
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
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

const mapStateToProps = (state) => ({
    productsArray: state.products,
})

export default connect(mapStateToProps)(CartTotal)
