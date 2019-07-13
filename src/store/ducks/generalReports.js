const INITIAL_STATE = {
  users: [],
  totalUsers: null,
  getUsersLoading: true,
  teams: [],
  getTeamsLoading: true,
  achievements: {
    type: "achievements",
    error: null,
    loading: true,
    data: null
  },
  missions: {
    type: "missions",
    error: null,
    loading: true,
    data: null
  },
  xp: {
    type: "xp",
    error: null,
    loading: true,
    data: null
  },
  errors: {
    users: null,
    teams: null
  }
};

export const Types = {
  GET_USERS: "generalReports/GET_USERS",
  GET_USERS_SUCCESS: "generalReports/GET_USERS_SUCCESS",
  GET_USERS_ACHIEVEMENTS: "generalReports/GET_USERS_ACHIEVEMENTS",
  GET_USERS_ACHIEVEMENTS_RESPONSE: "generalReports/GET_ACHIEVEMENTS_RESPONSE",
  GET_MISSIONS: "generalReports/GET_MISSIONS",
  GET_MISSIONS_RESPONSE: "generalReports/GET_MISSIONS_RESPONSE",
  GET_XP: "generalReports/GET_XP",
  GET_XP_RESPONSE: "generalReports/GET_XP_RESPONSE",
  GET_TEAMS: "generalReports/GET_TEAMS",
  GET_TEAMS_SUCCESS: "generalReports/GET_TEAMS_SUCCESS",
  REQUEST_FAILURE: "generalReports/REQUEST_FAILURE"
};

export default function generalReports(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS:
      return {
        ...state,
        getUsersLoading: true,
        errors: Object.assign({}, state.errors, { users: null })
      };
    case Types.GET_USERS_SUCCESS:
      const { users, totalUsers } = action.payload.data;
      return {
        ...state,
        getUsersLoading: false,
        users,
        totalUsers
      };
    case Types.GET_USERS_ACHIEVEMENTS:
      return {
        ...state,
        achievements: Object.assign({}, state.achievements, {
          loading: true,
          error: null
        })
      };
    case Types.GET_USERS_ACHIEVEMENTS_RESPONSE:
      return {
        ...state,
        achievements: action.payload.data
      };
    case Types.GET_MISSIONS:
      return {
        ...state,
        missions: Object.assign({}, state.missions, {
          loading: true,
          error: null
        })
      };
    case Types.GET_MISSIONS_RESPONSE:
      return { ...state, missions: action.payload.data };
    case Types.GET_XP:
      return {
        ...state,
        xp: Object.assign({}, state.xp, { loading: true, error: null })
      };
    case Types.GET_XP_RESPONSE:
      return { ...state, xp: action.payload.data };
    case Types.GET_TEAMS:
      return {
        ...state,
        getTeamsLoading: true,
        errors: Object.assign({}, state.errors, { teams: null })
      };
    case Types.GET_TEAMS_SUCCESS:
      return { ...state, teams: action.payload.data, getTeamsLoading: false };
    case Types.REQUEST_FAILURE:
      return {
        ...state,
        errors: Object.assign({}, state.errors, action.payload.data)
      };
    default:
      return state;
  }
}

export const Creators = {
  getUsers: () => ({
    type: Types.GET_USERS,
    payload: {}
  }),
  getUsersSuccess: data => ({
    type: Types.GET_USERS_SUCCESS,
    payload: { data }
  }),
  getUsersAchievements: data => ({
    type: Types.GET_USERS_ACHIEVEMENTS,
    payload: { data }
  }),
  getUsersAchievementsResponse: data => ({
    type: Types.GET_USERS_ACHIEVEMENTS_RESPONSE,
    payload: { data }
  }),
  getMissions: data => ({
    type: Types.GET_MISSIONS,
    payload: { data }
  }),
  getMissionsResponse: data => ({
    type: Types.GET_MISSIONS_RESPONSE,
    payload: { data }
  }),
  getXp: data => ({
    type: Types.GET_XP,
    payload: { data }
  }),
  getXpResponse: data => ({
    type: Types.GET_XP_RESPONSE,
    payload: { data }
  }),
  getTeams: () => ({
    type: Types.GET_TEAMS,
    payload: {}
  }),
  getTeamsSuccess: data => ({
    type: Types.GET_TEAMS_SUCCESS,
    payload: { data }
  }),
  requestFailure: data => ({
    type: Types.REQUEST_FAILURE,
    payload: { data }
  })
};
