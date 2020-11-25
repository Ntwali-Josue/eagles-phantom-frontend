import * as actionTypes from "../types/counterTypes";

const initialState = {
    loading: 'none',
    token: {},
    error:''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.LOGOUT_REQUEST:
      return { 
          ...state, 
          loading:'block'
        };
    case actionTypes.LOGOUT_SUCCESS:
      return { 
          ...state, 
          loading:'none', 
          token: action.playload,
          error:''
        };
    case actionTypes.LOGOUT_ERROR:
          return { 
              ...state, 
              loading:'none',
              token:{},
              error: action.playload
            };

    default:
      return state;
  }
};

export default reducer;
