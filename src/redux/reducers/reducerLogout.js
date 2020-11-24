import * as actionTypes from "../types/counterTypes";

const initialState = {
    loading: 'none',
    data: []
    
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGOUT:
      return { 
          ...state, 
          data: action.playload
        };
    

    default:
      return state;
  }
};

export default reducer;
