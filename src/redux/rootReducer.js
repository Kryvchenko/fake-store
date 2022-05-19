import { combineReducers } from 'redux'
import { productsLikeReducer } from './productsLikeReducer'
import { cartReducer } from './cartReducer'
import { productsReducer } from './productsReducer'
import { likeReducer } from './likeReducer'

export const rootReducer = combineReducers({
    productsLikeState: productsLikeReducer,
    productsInCart: cartReducer,
    products: productsReducer,
    likedProducts: likeReducer,
})
