const INITIAL_STATE = {
  users: [],
  totalUsers: null,
  usersLoading: true,
  usersError: null,
  achievements: {},
  missions: {},
  xp: {},
  teams: []
};

export const Types = {
  GET_USERS: "generalReports/GET_USERS",
  GET_USERS_SUCCESS: "generalReports/GET_USERS_SUCCESS",
  GET_USERS_ACHIEVEMENTS: "generalReports/GET_USERS_ACHIEVEMENTS",
  GET_USERS_ACHIEVEMENTS_SUCCESS: "generalReports/GET_ACHIEVEMENTS_SUCCESS",
  GET_MISSIONS: "generalReports/GET_MISSIONS",
  GET_MISSIONS_SUCCESS: "generalReports/GET_MISSIONS_SUCCESS",
  GET_XP: "generalReports/GET_XP",
  GET_XP_SUCCESS: "generalReports/GET_XP_SUCCESS",
  GET_TEAMS: "generalReports/GET_TEAMS",
  GET_TEAMS_SUCCESS: "generalReports/GET_TEAMS_SUCCESS",
  REQUEST_FAILURE: "generalReports/REQUEST_FAILURE"
};

export default function generalReports(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS:
      return { ...state };
    case Types.GET_USERS_SUCCESS:
      const { users, totalUsers } = action.payload.data;
      return { ...state, usersLoading: false, users, totalUsers };
    case Types.GET_USERS_ACHIEVEMENTS:
      return { ...state };
    case Types.GET_USERS_ACHIEVEMENTS_SUCCESS:
      return {
        ...state,
        achievements: action.payload.data,
        usersLoading: false
      };
    case Types.GET_MISSIONS:
      return { ...state };
    case Types.GET_MISSIONS_SUCCESS:
      return { ...state, missions: action.payload.data, usersLoading: false };
    case Types.GET_XP:
      return { ...state };
    case Types.GET_XP_SUCCESS:
      return { ...state, xp: action.payload.data, usersLoading: false };
    case Types.GET_TEAMS:
      return { ...state };
    case Types.GET_TEAMS_SUCCESS:
      return { ...state, teams: action.payload.data, usersLoading: false };
    case Types.REQUEST_FAILURE:
      return { ...state, usersLoading: false, usersError: action.payload.data };
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
  getUsersAchievements: month => ({
    type: Types.GET_USERS_ACHIEVEMENTS,
    payload: { month }
  }),
  getUsersAchievementsSuccess: data => ({
    type: Types.GET_USERS_ACHIEVEMENTS_SUCCESS,
    payload: { data }
  }),
  getMissions: month => ({
    type: Types.GET_MISSIONS,
    payload: { month }
  }),
  getMissionsSuccess: data => ({
    type: Types.GET_MISSIONS_SUCCESS,
    payload: { data }
  }),
  getXp: month => ({
    type: Types.GET_XP,
    payload: { month }
  }),
  getXpSuccess: data => ({
    type: Types.GET_XP_SUCCESS,
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
