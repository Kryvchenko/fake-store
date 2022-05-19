import React from 'react'
import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
import { Routes, Route } from 'react-router-dom'
import { CartPage } from 'pages/CartPage/CartPage'
import { PaymentPage } from 'pages/PaymentPage/PaymentPage'
import { ShippingPage } from 'pages/ShippingPage/ShippingPage'
import CheckoutPage from 'pages/CheckoutPage/CheckoutPage'
import { LikedPage } from 'pages/LikedPage/LikedPage'

export const Main = () => {
    return (
        <>
            <Container>
                <Routes>
                    <Route path="/" element={<ProductsList />} />
                    <Route path="products" element={<ProductsList />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="shipping" element={<ShippingPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                    <Route path="likedpage" element={<LikedPage />} />
                </Routes>
            </Container>
        </>
    )
}
