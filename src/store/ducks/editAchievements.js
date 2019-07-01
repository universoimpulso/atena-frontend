const INITIAL_STATE = {
  loading: true,
  achievementsValues: [],
  getError: "",
  putError: ""
};

export const Types = {
  GET_ACHIEVEMENTS: "editAchievements/GET_ACHIEVEMENTS",
  GET_ACHIEVEMENTS_SUCCESS: "editAchievements/GET_ACHIEVEMENTS_SUCCESS",
  GET_ACHIEVEMENTS_FAILURE: "editAchievements/GET_ACHIEVEMENTS_FAILURE",
  PUT_ACHIEVEMENTS: "editAchievements/PUT_ACHIEVEMENTS",
  PUT_ACHIEVEMENTS_SUCCESS: "editAchievements/PUT_ACHIEVEMENTS_SUCCESS",
  PUT_ACHIEVEMENTS_FAILURE: "editAchievements/PUT_ACHIEVEMENTS_FAILURE"
};

export default function ranking(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_ACHIEVEMENTS:
      return { ...state, loading: true };
    case Types.GET_ACHIEVEMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        achievementsValues: action.payload.data
      };
    case Types.GET_ACHIEVEMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        getError: action.payload.error
      };
    case Types.PUT_ACHIEVEMENTS:
      return { ...state, loading: true };
    case Types.PUT_ACHIEVEMENTS_SUCCESS:
      return {
        ...state,
        loading: false
        // achievementsValues: { ...action.payload.data }
      };
    case Types.PUT_ACHIEVEMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        putError: action.payload.error
      };
    default:
      return state;
  }
}

export const Creators = {
  getAchievements: () => ({
    type: Types.GET_ACHIEVEMENTS,
    payload: {}
  }),
  getAchievementsSuccess: data => ({
    type: Types.GET_ACHIEVEMENTS_SUCCESS,
    payload: { data }
  }),
  getAchievementsFailure: error => ({
    type: Types.GET_ACHIEVEMENTS_FAILURE,
    payload: { error }
  }),
  putAchievements: data => ({
    type: Types.PUT_ACHIEVEMENTS,
    payload: { data }
  }),
  putAchievementsSuccess: data => ({
    type: Types.PUT_ACHIEVEMENTS_SUCCESS,
    payload: { data }
  }),
  putAchievementsFailure: error => ({
    type: Types.PUT_ACHIEVEMENTS_FAILURE,
    payload: { error }
  })
};
