import React from 'react'

import { CartTotal } from './CartTotal'
import { CartProductList } from './CartProductList'

export const CartHeader = () => {
    return (
        <div>
            <CartProductList />
            <CartTotal />
        </div>
    )
}
