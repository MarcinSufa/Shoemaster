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
                loading: false,
            };
        case actionTypes.FETCH_CART_FROM_LOCAL_FAIL:    
            return {
                ...state,
                loading: false,
            };
        default:    
            return state;
    }
};

export default reducer;