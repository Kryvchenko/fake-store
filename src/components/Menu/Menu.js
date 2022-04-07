import React from 'react'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

const setNavLinkClass = ({ isActive }) => (isActive ? 'nav-link' : '')

export const Menu = () => {
    return (
        <>
            <Button color="inherit">
                <NavLink to="/" className={setNavLinkClass}>
                    Home
                </NavLink>
            </Button>

            <Button color="inherit">
                <NavLink to="/" className={setNavLinkClass}>
                    Products
                </NavLink>
            </Button>

            <Button color="inherit">
                <NavLink to="/payment" className={setNavLinkClass}>
                    Payment
                </NavLink>
            </Button>

            <Button color="inherit">
                <NavLink to="/shipping" className={setNavLinkClass}>
                    Shipping
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to="/cart" className={setNavLinkClass}>
                    Cart
                </NavLink>
            </Button>
        </>
    )
}
