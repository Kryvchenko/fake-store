import axios from 'axios'
import React, { useState } from 'react'

const CheckoutPage = (props) => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [isOrderSend, setisOrderSend] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const sendForm = (e) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: name,
                    address: address,
                }
            )
            .then((res) => res.data)
            .then(
                ({ name, address }) => setName(name),
                setAddress(address),
                setisOrderSend(true)
            )
    }

    const renderForm = () => {
        return (
            <form onSubmit={sendForm}>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your adress"
                        value={address}
                        onChange={handleAddress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div>
                Dear, {name}, thanks for your order! <p>Adress: {address}</p>
            </div>
        )
    }

    console.log(name, address, isOrderSend)
    return (
        <>
            <h1>Checkout</h1>
            {isOrderSend !== true ? renderForm() : renderMessage()}
        </>
    )
}

export default CheckoutPage
