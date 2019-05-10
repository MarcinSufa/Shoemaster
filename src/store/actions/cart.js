import * as actionTypes from './actionTypes';

export const addToCartSuccess = (localCartProducts, fullCartPrice) => {
    return {
        type: actionTypes.FETCH_CART_FROM_LOCAL_STORE,
        localCart: localCartProducts,
        fullCartPrice: fullCartPrice
    };
}

export const addToCartFail = (error) => {
    return { 
        type: actionTypes.FETCH_CART_FROM_LOCAL_FAIL,
        error: error
    };
}


export const deleteFromCartStore = (cartCounterDel) => {
    return { 
        type: actionTypes.DELETE_FROM_CART,
        cartDecreaseCounter: cartCounterDel
    };
}


export const fetchLocalStoreCart = () => {
    return dispatch => {
        let localCartProducts = JSON.parse(localStorage.getItem('addToCart'))

        if (localCartProducts) {
            //calculating Cart Full Price
        let allCartPrices = Object.values(localCartProducts);
        let fullCartPrice = 0;
        for (let i = 0; i < allCartPrices.length; i++) {
            fullCartPrice += allCartPrices[i].price;
        }
        dispatch( addToCartSuccess(localCartProducts, fullCartPrice ));
        console.log(localCartProducts);
        } else {
            localCartProducts = [];
            dispatch (addToCartFail());
        }
        
    };
}



export const deleteFromCart = (event) => {
    return dispatch => {
        let prevLocalCart = JSON.parse(localStorage.getItem('addToCart'));
        let cartProductId = event.currentTarget.value;
        prevLocalCart.splice(cartProductId ,1);
        // Cart Counter decrease 
        let cartCounterDel = (Object.keys(prevLocalCart).length);
        console.log('cartCounerDel' + cartCounterDel);
        dispatch (deleteFromCartStore (cartCounterDel));

        console.log(prevLocalCart);
        localStorage.setItem('addToCart', JSON.stringify(prevLocalCart));
        console.log(cartProductId);
        // dispatch(deleteFromCartStore(event));
    };
}
