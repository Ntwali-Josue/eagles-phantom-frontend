import * as types from "../types/counterTypes";

const initialState = {
  value: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, value: state.value + 1 };
    case types.DECREMENT:
      return { ...state, value: state.value - 1 };

    default:
      return state;
  }
};

export default reducer;
