import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import React, { useState } from 'react'
import './ProductsListItem.css'
import PropTypes from 'prop-types'

export const ProductsListItem = ({
    name,
    description,
    capacity,
    type,
    price,
    image,
    addProductToCart,
    id,
}) => {
    const [count, setCount] = useState(1)

    const onDecrementClick = () => {
        setCount(count - 1)
    }
    const onIncrementClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <div>Capacity: {capacity} Gb</div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-price">{price} $</div>
                    <div className="product-quantity">
                        <Button
                            variant="contained"
                            onClick={onDecrementClick}
                            disabled={count <= 1}
                        >
                            -
                        </Button>
                        <TextField
                            size="small"
                            value={count}
                            className="text-center"
                        />
                        <Button
                            variant="contained"
                            onClick={onIncrementClick}
                            disabled={count >= 10}
                        >
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="wrap-btn-add-to-cart">
                    <Button
                        variant="outlined"
                        onClick={() => addProductToCart(id, count, price)}
                    >
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

ProductsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    capacity: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}

ProductsListItem.defaultProps = {
    description: 'No description...',
    image: 'images/no-image.jpeg',
}
