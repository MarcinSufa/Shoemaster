import * as actionTypes from './actionTypes';

export const clearCart = () => {
    return { 
        type: actionTypes.CHECKOUT,
        cart: null
    };
}

export const clearLocalStore = () => {
    return dispatch => {
        localStorage.removeItem('addToCart');
        this.clearCart();
    }
}