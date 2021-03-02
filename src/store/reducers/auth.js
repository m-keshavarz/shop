import * as actionTypes from "../actionTypes/auth";

const initialState = {
  loading: false,
  result: null,
  error: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { ...state, loading: true, result: null, error: null };
    case actionTypes.AUTH_SUCCESS:
      return { ...state, loading: false, result: action.result, error: null };
    case actionTypes.AUTH_FAIL:
      return { ...state, loading: false, result: null, error: action.error };
    default:
      return state;
  }
};

export default auth;
