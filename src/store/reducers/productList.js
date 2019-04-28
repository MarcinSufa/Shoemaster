import * as actionTypes from '../actions/actionTypes';

const initialState = {
    Products: null,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS: 
            return {
                ...state,
                Products: action.products,
                error: false,
            };
        case actionTypes.FETCH_PRODUCTS_FAIL: 
            return {
                ...state,
                error: true,
            };         
        default: 
            return state;
    }
};

export default reducer;