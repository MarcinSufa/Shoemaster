export const clearLocalStore = () => {
    return dispatch => {
        localStorage.removeItem('addToCart');
    }
}