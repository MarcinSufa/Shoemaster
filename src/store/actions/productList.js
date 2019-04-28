import * as actionTypes from './actionTypes';
import axios from '../../axios-products';


export const setProducts = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        products: products
    };
};

export const fetchProductsFail = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
    };
};


export const initProducts = () => {
    return dispatch => {
        axios.get( '/Products.json' )
        .then( response => {
            dispatch( setProducts (response.data));
        } )
        .catch( error => {
            dispatch( fetchProductsFail() );
        } );
    };
};