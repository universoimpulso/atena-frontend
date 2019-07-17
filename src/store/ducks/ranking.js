const INITIAL_STATE = {
  ranking: {
    loading: false,
    error: null,
    firstUsers: null,
    lastUsers: null,
    monthName: null
  },
  userInfo: {
    loading: false,
    error: null,
    data: null
  },
  users: {
    loading: false,
    error: null,
    data: null
  }
};

export const Types = {
  GET_RANKING: "ranking/GET_RANKING",
  GET_RANKING_SUCCESS: "ranking/GET_RANKING_SUCCESS",
  GET_RANKING_FAILURE: "ranking/GET_RANKING_FAILURE",
  GET_RANKING_USERS: "ranking/GET_RANKING_USERS",
  GET_RANKING_USERS_SUCCESS: "ranking/GET_RANKING_USERS_SUCCESS",
  GET_RANKING_USERS_FAILURE: "ranking/GET_RANKING_USERS_FAILURE",
  GET_USER_INFO: "ranking/GET_USER_INFO",
  GET_USER_INFO_SUCCESS: "ranking/GET_USER_INFO_SUCCESS",
  GET_USER_INFO_FAILURE: "ranking/GET_USER_INFO_FAILURE"
};

export default function ranking(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_RANKING:
      return { ...state, ranking: { ...state.ranking, loading: true } };
    case Types.GET_RANKING_SUCCESS:
      const { firstUsers, lastUsers, monthName, error } = action.payload.data;
      return {
        ...state,
        ranking: {
          loading: false,
          firstUsers,
          lastUsers,
          monthName,
          error
        }
      };
    case Types.GET_RANKING_FAILURE:
      return {
        ...state,
        ranking: {
          ...ranking,
          loading: false,
          error: action.payload.error
        }
      };
    case Types.GET_RANKING_USERS:
      return {
        ...state,
        users: { data: null, loading: true, error: null },
        userInfo: {
          data: null,
          loading: false,
          error: null
        }
      };
    case Types.GET_RANKING_USERS_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          data: action.payload.data
        }
      };
    case Types.GET_RANKING_USERS_FAILURE:
      return {
        ...state,
        users: {
          loading: false,
          data: null,
          error: action.payload.error
        }
      };
    case Types.GET_USER_INFO:
      return {
        ...state,
        users: {
          ...state.users,
          data: null
        },
        userInfo: {
          data: null,
          loading: true,
          error: null
        }
      };
    case Types.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          loading: false,
          data: action.payload.data
        }
      };
    case Types.GET_USER_INFO_FAILURE:
      return {
        ...state,
        userInfo: {
          error: action.payload.data,
          loading: false,
          data: null
        }
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
  getUserInfoFailure: data => ({
    type: Types.GET_USER_INFO_FAILURE,
    payload: { data }
  }),
  getRankingUsers: name => ({
    type: Types.GET_RANKING_USERS,
    payload: { name }
  }),
  getRankingUsersSuccess: data => ({
    type: Types.GET_RANKING_USERS_SUCCESS,
    payload: { data }
  }),
  getRankingUsersFailure: data => ({
    type: Types.GET_RANKING_USERS_FAILURE,
    payload: { data }
  })
};
