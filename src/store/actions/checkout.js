
export const clearLocalStore = () => {
    return dispatch => {
        localStorage.clear();
    }
}