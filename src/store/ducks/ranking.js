const INITIAL_STATE = {
  loading: true,
  firstUsers: [],
  lastUsers: [],
  monthName: "",
  error: ""
};

export const Types = {
  GET_RANKING: "ranking/GET_RANKING",
  GET_RANKING_SUCESS: "ranking/GET_RANKING_SUCESS",
  GET_RANKING_FAILURE: "ranking/GET_RANKING_FAILURE"
};

export default function ranking(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_RANKING:
      return { ...state, loading: true };
    case Types.GET_RANKING_SUCESS:
      return {
        ...state,
        loading: false,
        firstUsers: action.payload.data.firstUsers,
        lastUsers: action.payload.data.lastUsers,
        monthName: action.payload.data.monthName,
        error: action.payload.data.error
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
  getRankingSucess: data => ({
    type: Types.GET_RANKING_SUCESS,
    payload: { data }
  }),
  getRankingFailure: error => ({
    type: Types.GET_RANKING_FAILURE,
    payload: { error }
  })
};
