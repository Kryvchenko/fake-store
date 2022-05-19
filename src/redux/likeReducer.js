import { omit } from 'lodash'

export const likeReducer = (state = { 1: true, 2: true }, action) => {
    switch (action.type) {
        case 'ADD_LIKED_PRODUCT_TO_PAGE':
            return {
                ...state,
                [action.id]: state[action.id] || 0,
            }
        case 'REMOVE_LIKED_PRODUCT_TO_PAGE':
            return omit(state, action.id)

        default:
            return state
    }
}
