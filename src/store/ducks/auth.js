const INITIAL_STATE = {
  loading: false,
  error: null,
  user: JSON.parse(localStorage.getItem("@atena:user")) || null,
  token: JSON.parse(localStorage.getItem("@atena:token")) || null
};

export const Types = {
  SIGN_IN_REQUEST: "auth/REQUEST",
  SIGN_IN_SUCCESS: "auth/SUCCESS",
  SIGN_IN_FAILURE: "auth/FAILURE",
  SIGN_OUT: "auth/SIGN_OUT"
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case Types.SIGN_IN_SUCCESS:
      const { user } = action.payload;
      return {
        ...state,
        loading: false,
        user,
        token: user.token
      };
    case Types.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case Types.SIGN_OUT:
      return {
        ...state,
        user: null,
        token: null
      };
    default:
      return state;
  }
}

export const Creators = {
  signInRequest: ({ rocketId, password }) => ({
    type: Types.SIGN_IN_REQUEST,
    payload: { rocketId, password }
  }),
  signInSuccess: user => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { user }
  }),
  signInFailure: ({ type, message }) => ({
    type: Types.SIGN_IN_FAILURE,
    payload: { type, message }
  }),
  signOut: () => ({
    type: Types.SIGN_OUT,
    payload: {}
  })
};
