export const GET_CHEESES = 'GET_CHEESES';
export const getCheeses = () => ({
    type: GET_CHEESES,
    data
});
export const REQUEST_CHEESES = 'REQUEST_CHEESES';
export const requestCheeses = () => ({
    type: REQUEST_CHEESES
})

export const fetchCheeses = () => ({
    return dispatch => {
        dispatch(requestCheeses())
        fetch('http:localhost:8080/api/cheeses')
        .then(response => response.json())
        .then(cheeses => console.log(cheeses))
        .catch(err => console.log(err))
    }
        
})