import * as actionTypes from '../actions/actionTypes';

const initialState = {
    Products: null,
    error: false,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_START: 
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_PRODUCTS: 
            return {
                ...state,
                Products: action.products,
                error: false,
                loading: false
            };
        case actionTypes.FETCH_PRODUCTS_FAIL: 
            return {
                ...state,
                error: true,
                loading: false
            };         
        default: 
            return state;
    }
};

export default reducer;