const INITIAL_STATE = {
  loading: true,
  firstUsers: [],
  lastUsers: [],
  monthName: "",
  error: ""
};

export const Types = {
  GET_RANKING: "ranking/GET_RANKING",
  GET_RANKING_SUCCESS: "ranking/GET_RANKING_SUCCESS",
  GET_RANKING_FAILURE: "ranking/GET_RANKING_FAILURE"
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
  })
};
