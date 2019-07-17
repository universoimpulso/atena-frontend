import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  loading: false,
  error: null,
  user: JSON.parse(localStorage.getItem("@atena:user")) || null,
  token: JSON.parse(localStorage.getItem("@atena:token")) || null
};

export const { Types, Creators } = createActions({
  signInRequest: ["data"],
  signInSuccess: ["data"],
  signInFailure: ["data"],
  signOut: ["data"]
});

const signInRequest = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true
});
const signInSuccess = (state = INITIAL_STATE, action) => {
  const { user } = action.data;
  return {
    ...state,
    loading: false,
    user,
    token: user.token
  };
};
const signInFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: action.data
});
const signOut = (state = INITIAL_STATE, action) => ({
  ...state,
  user: null,
  token: null
});

export default createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILURE]: signInFailure,
  [Types.SIGN_OUT]: signOut
});
