const INITIAL_STATE = {
  loading: true,
  firstUsers: [],
  lastUsers: [],
  monthName: "",
  userInfo: null,
  error: ""
};

export const Types = {
  GET_RANKING: "ranking/GET_RANKING",
  GET_RANKING_SUCCESS: "ranking/GET_RANKING_SUCCESS",
  GET_RANKING_FAILURE: "ranking/GET_RANKING_FAILURE",
  GET_USER_INFO: "ranking/GET_USER_INFO",
  GET_USER_INFO_SUCCESS: "ranking/GET_USER_INFO_SUCCESS",
  GET_USER_INFO_FAILURE: "ranking/GET_USER_INFO_FAILURE"
};

export default function ranking(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_RANKING:
      return { ...state, loading: true };
    case Types.GET_RANKING_SUCCESS:
      const { firstUsers, lastUsers, monthName, error } = action.payload.data;
      return {
        loading: false,
        firstUsers,
        lastUsers,
        monthName,
        error
      };
    case Types.GET_RANKING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case Types.GET_USER_INFO:
      return { ...state, loading: true };
    case Types.GET_USER_INFO_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload.data
      };
    case Types.GET_USER_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

export const Creators = {
  getRanking: selected => ({
    type: Types.GET_RANKING,
    payload: { selected }
  }),
  getRankingSuccess: data => ({
    type: Types.GET_RANKING_SUCCESS,
    payload: { data }
  }),
  getRankingFailure: error => ({
    type: Types.GET_RANKING_FAILURE,
    payload: { error }
  }),
  getUserInfo: selected => ({
    type: Types.GET_USER_INFO,
    payload: { selected }
  }),
  getUserInfoSuccess: data => ({
    type: Types.GET_USER_INFO_SUCCESS,
    payload: { data }
  }),
  getUserInfoFailure: error => ({
    type: Types.GET_USER_INFO_FAILURE,
    payload: { error }
  })
};
