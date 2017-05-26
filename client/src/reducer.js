import {GET_CHEESES, GET_CHEESES_SUCCESS, GET_CHEESES_ERROR, getCheeses} from './actions';

const initialState = {
  data: [],
  loading: false,
  error: null
};

const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'GET_CHEESES':
      return Object.assign({}, state, {
          loading: true,
          error: null
        });
    
    case 'GET_CHEESES_SUCCESS':
      return Object.assign({}, state, {
          data: [...action.data],
          loading: false,
          error: null
        });

    case 'GET_CHEESES_ERROR':
      return Object.assign({}, state, {
          loading: false,
          error: action.error
        });
        
    default: 
      return state; 
    }          
};

export default reducer;