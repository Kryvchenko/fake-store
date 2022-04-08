import React from 'react'
import { productsArray } from 'components/Products/productsArray'
import { keys } from 'lodash'

const productsObject = productsArray.reduce(
    (obj, product) => ({
        ...obj,
        [product.id]: product,
        [product.price]: product,
    }),
    {}
)

console.log(productsObject)

export const CartPage = ({ productsInCart }) => {
    return (
        <>
            <h1>Cart</h1>
            <div>
                {keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[productId].name} : Кількість -
                        {productsInCart[productId]} :{' '}
                        {productsObject[productId].price + '$'} Ціна за один
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
        </>
    )
}
