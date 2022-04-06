import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <>
            <Button color="inherit">LoginPage</Button>

            <Button color="inherit">
                <Link to="/">Products</Link>
            </Button>

            <Button color="inherit">
                <Link to="/payment">Payment</Link>
            </Button>

            <Button color="inherit">
                <Link to="/shipping">Shipping</Link>
            </Button>
            <Button color="inherit">
                <Link to="/cart">Cart</Link>
            </Button>
        </>
    )
}
