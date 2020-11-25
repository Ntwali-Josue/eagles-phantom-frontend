import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL} from "../types/registrationTypes";

const initialState = {
    loading: 'none',
    data: [],
    error: ''
};

const registration = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        loading: 'block'
      };
    case REGISTER_SUCCESS:
      return {
        loading: 'none',
        data: action.payload,
        error: ''
      };
    case REGISTER_FAIL:
      return {
        loading: 'none',
        data: [],
        error: action.payload
      };

    default:
      return state;
  }
};

export default registration;