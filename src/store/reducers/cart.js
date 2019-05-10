import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: null,
    loading: true,
    fullCartPrice: null,
    cartItemsCounter: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CART_FROM_LOCAL_STORE:
            return {
                ...state,
                cart: action.localCart,
                fullCartPrice: action.fullCartPrice,
                loading: false,
            };
        case actionTypes.FETCH_CART_FROM_LOCAL_FAIL:    
            return {
                ...state,
                loading: false,
            };
        case actionTypes.DELETE_FROM_CART:    
            return {
                ...state,
                cartItemsCounter: action.cartDecreaseCounter,
                loading: false,
            };    
        case actionTypes.CART_COUNTER:    
            return {
                ...state,
                cartItemsCounter: action.cartItemsCounter,
                loading: false,
            };     
        default:    
            return state;
    }
};

export default reducer;