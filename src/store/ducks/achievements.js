const INITIAL_STATE = {
  loading: true,
  editLoading: "",
  userAchievements: null,
  achievementsValues: [],
  editError: "",
  createError: ""
};

export const Types = {
  GET_ACHIEVEMENTS: "achievements/GET_ACHIEVEMENTS",
  GET_ACHIEVEMENTS_SUCCESS: "achievements/GET_ACHIEVEMENTS_SUCCESS",
  GET_ACHIEVEMENTS_FAILURE: "achievements/GET_ACHIEVEMENTS_FAILURE",
  GET_USER_ACHIEVEMENTS: "achievements/GET_USER_ACHIEVEMENTS",
  GET_USER_ACHIEVEMENTS_SUCCESS: "achievements/GET_USER_ACHIEVEMENTS_SUCCESS",
  GET_USER_ACHIEVEMENTS_FAILURE: "achievements/GET_USER_ACHIEVEMENTS_FAILURE",
  EDIT_ACHIEVEMENT: "achievements/EDIT_ACHIEVEMENT",
  EDIT_ACHIEVEMENT_SUCCESS: "achievements/EDIT_ACHIEVEMENT_SUCCESS",
  EDIT_ACHIEVEMENT_FAILURE: "achievements/EDIT_ACHIEVEMENT_FAILURE",
  CREATE_ACHIEVEMENT: "achievements/CREATE_ACHIEVEMENT",
  CREATE_ACHIEVEMENT_SUCCESS: "achievements/CREATE_ACHIEVEMENT_SUCCESS",
  CREATE_ACHIEVEMENT_FAILURE: "achievements/CREATE_ACHIEVEMENT_FAILURE"
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
    case Types.GET_USER_ACHIEVEMENTS:
      return { ...state, loading: true };
    case Types.GET_USER_ACHIEVEMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        userAchievements: action.payload.data
      };
    case Types.GET_USER_ACHIEVEMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        getError: action.payload.error
      };
    case Types.EDIT_ACHIEVEMENT:
      const { type, values } = action.payload.data;
      const editLoading = type.concat(values.name);
      return { ...state, editLoading };
    case Types.EDIT_ACHIEVEMENT_SUCCESS:
      return {
        ...state,
        editLoading: "",
        achievementsValues: action.payload.data
      };
    case Types.EDIT_ACHIEVEMENT_FAILURE:
      return {
        ...state,
        editLoading: ""
      };
    case Types.CREATE_ACHIEVEMENT:
      return { ...state, loading: true };
    case Types.CREATE_ACHIEVEMENT_SUCCESS:
      return {
        ...state,
        loading: false
        // achievementsValues: { ...action.payload.data }
      };
    case Types.CREATE_ACHIEVEMENT_FAILURE:
      return {
        ...state,
        loading: false,
        createError: action.payload.error
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
  getUserAchievements: () => ({
    type: Types.GET_USER_ACHIEVEMENTS,
    payload: {}
  }),
  getUserAchievementsSuccess: data => ({
    type: Types.GET_USER_ACHIEVEMENTS_SUCCESS,
    payload: { data }
  }),
  getUserAchievementsFailure: error => ({
    type: Types.GET_USER_ACHIEVEMENTS_FAILURE,
    payload: { error }
  }),
  editAchievement: data => ({
    type: Types.EDIT_ACHIEVEMENT,
    payload: { data }
  }),
  editAchievementSuccess: data => ({
    type: Types.EDIT_ACHIEVEMENT_SUCCESS,
    payload: { data }
  }),
  editAchievementFailure: () => ({
    type: Types.EDIT_ACHIEVEMENT_FAILURE,
    payload: {}
  }),
  createAchievement: data => ({
    type: Types.CREATE_ACHIEVEMENT,
    payload: { data }
  }),
  createAchievementSuccess: data => ({
    type: Types.CREATE_ACHIEVEMENT_SUCCESS,
    payload: { data }
  }),
  createAchievementFailure: error => ({
    type: Types.CREATE_ACHIEVEMENT_FAILURE,
    payload: { error }
  })
};
