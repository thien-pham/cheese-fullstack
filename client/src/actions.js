export const GET_CHEESES = 'GET_CHEESES';
export const getCheeses = () => ({
    type: GET_CHEESES
});

export const GET_CHEESES_SUCCESS = 'GET_CHEESES_SUCCESS';
export const getCheesesSuccess = (data) => ({
    type: GET_CHEESES_SUCCESS,
    data
});

export const GET_CHEESES_ERROR = 'GET_CHEESES_ERROR';
export const getCheesesError = (error) => ({
    type: GET_CHEESES_ERROR,
    error
});

export const fetchCheeses = () => dispatch => {
    dispatch(getCheeses());
    fetch('/api/cheeses').then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => {
        dispatch(getCheesesSuccess(data));
    }).catch(error => {
        dispatch(getCheesesError(error));
    });   
};

