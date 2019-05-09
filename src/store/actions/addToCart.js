
export const addToCartLocalStorage = (cartProduct) => {
    // localStorage.clear();
    return dispatch => {
        let localCart = localStorage.getItem('addToCart');
        if (localCart!= null) {
            let localCartObject = JSON.parse(localCart);
            console.log (localCartObject);
            localCartObject.push(cartProduct);
            // console.log (updatedLocalCart);
            localStorage.setItem('addToCart', JSON.stringify(localCartObject));
            console.log (localStorage);
        }else {
            let productsInCart = [];
            productsInCart.push(cartProduct);
            // console.log (productsInCart);
            localStorage.setItem('addToCart', JSON.stringify(productsInCart));
            console.log (productsInCart);
            console.log (localStorage);
        }
    }
}