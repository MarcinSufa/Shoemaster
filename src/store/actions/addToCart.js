import * as actionTypes from './actionTypes';

export const updateCartCouner = (cartCounter) => {
    return { 
        type: actionTypes.CART_COUNTER,
        cartItemsCounter: cartCounter
    };
}

export const addToCartLocalStorage = (cartProduct) => {
    // localStorage.clear();
    return dispatch => {
        let localCart = localStorage.getItem('addToCart');
        if (localCart!= null) {
            let localCartObject = JSON.parse(localCart);
            localCartObject.push(cartProduct);
              //update Cart counter 
            dispatch(cartCounter(localCartObject))
            console.log (localCartObject);
            // add Product to local storage
            localStorage.setItem('addToCart', JSON.stringify(localCartObject));
            console.log (localStorage);
        }else {
            let productsInCart = [];
            productsInCart.push(cartProduct);
             //update Cart counter when localStorege is empty (first add)
            let localCartObject = 1;
            dispatch(cartCounter(localCartObject));
            // console.log (productsInCart);
            localStorage.setItem('addToCart', JSON.stringify(productsInCart));
            console.log (productsInCart);
            console.log (localStorage);
        }
    }
}

export const cartCounter = (localCartObject) => {
    return dispatch => {
        let cartCounter = (Object.keys(localCartObject).length);
            dispatch (updateCartCouner(cartCounter))
    }
}

