import * as actionTypes from './actionTypes';

export const addToCartSuccess = (localCartProducts, fullCartPrice) => {
    return {
        type: actionTypes.FETCH_CART_FROM_LOCAL_STORE,
        localCart: localCartProducts,
        fullCartPrice: fullCartPrice
    };
}

export const addToCartFail = (localCartProducts) => {
    return { 
        type: actionTypes.FETCH_CART_FROM_LOCAL_FAIL,
        cart: localCartProducts
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
        } else  {
            localCartProducts = null;
            dispatch (addToCartFail(localCartProducts));
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
        dispatch (deleteFromCartStore (cartCounterDel));

        localStorage.setItem('addToCart', JSON.stringify(prevLocalCart));
        // dispatch(deleteFromCartStore(event));
    };
}
