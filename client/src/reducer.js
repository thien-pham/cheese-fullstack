const initialState = {
  data: [],
  loading: false
};

const reducer = (state=initialState, action) => {
  switch(action.type){
  case 'GET_CHEESES':
    return Object.assign({}, state, {
        data: [...action.data],
        loading: false
      });
  default: 
    return state; 
  }
            
};

export default reducer;