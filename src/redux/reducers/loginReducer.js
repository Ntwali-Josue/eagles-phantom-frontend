import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "../types/loginTypes";

const initialState = {
  loading: 'none',
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: 'block',
      };
    case LOGIN_SUCCESS:
      return {
        loading: 'none',
        data: action.payload,
        error: "",
      };
    case LOGIN_FAIL:
      return {
        loading: 'none',
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
