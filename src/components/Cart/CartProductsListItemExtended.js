import { Delete } from '@mui/icons-material'
import { Button, Card, CardContent, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Quantity } from 'components/Quantity/Quantity'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { connect } from 'react-redux'

const useStyles = makeStyles({
    media: {
        width: 150,
        height: 'auto',
        marginRight: 15,
    },
    cardWrap: {
        display: 'flex',
        padding: 15,
    },
})
const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
    isLiked = false,
    addLike,
    removeLike,
}) => {
    const classes = useStyles()

    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.cardWrap}>
                <div>
                    <img src={product.image} className={classes.media} />
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <div>Price for one items: {product.price}</div>
                    <div>Count: {productCount}</div>
                    <Button
                        onClick={() =>
                            isLiked
                                ? removeLike(product.id)
                                : addLike(product.id)
                        }
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <Quantity
                        count={productCount}
                        minCount={0}
                        changeProductQuantity={changeProductQuantity}
                        onDecrement={() =>
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        onIncrement={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                    />
                    <Button variant="outlined">
                        <Delete
                            onClick={() => removeProductFromCart(product.id)}
                        />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

const mapStateToProps = (state, { product }) => ({
    isLiked: state.productsLikeState[product.id],
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (id) =>
        dispatch({
            type: 'LIKE',
            id,
        }),
    removeLike: (id) =>
        dispatch({
            type: 'DISLIKE',
            id,
        }),
    removeProductFromCart: (id) =>
        dispatch({
            type: 'REMOVE_PRODUCT_FROM_CART',
            id,
        }),
    changeProductQuantity: (id, count) =>
        dispatch({
            type: 'CHANGE_PRODUCT_QUANTITY',
            id,
            count,
        }),
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartProductListItemExtended)
