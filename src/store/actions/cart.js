import * as actionTypes from './actionTypes';

export const addToCartSuccess = (localCartProducts) => {
    return {
        type: actionTypes.FETCH_CART_FROM_LOCAL_STORE,
        localCart: localCartProducts
    }
};

export const addToCartFail = (error) => {
    return { 
        type: actionTypes.FETCH_CART_FROM_LOCAL_FAIL,
        error: error
    };
}


export const fetchLocalStoreCart = () => {
    return dispatch => {
        let localCartProducts = JSON.parse(localStorage.getItem('addToCart'))
        dispatch(addToCartSuccess(localCartProducts));
        console.log(localCartProducts);
    };
}

export const deleteFromCart = () => {
    return dispatch => {

    };
}