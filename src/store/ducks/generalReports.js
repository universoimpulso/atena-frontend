import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  users: {
    users: null,
    totalUsers: null,
    loading: true,
    error: null
  },
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
  teams: {
    data: null,
    loading: true,
    error: null
  }
};

export const { Types, Creators } = createActions({
  getUsers: ["data"],
  getUsersResponse: ["data"],
  getUsersAchievements: ["data"],
  getUsersAchievementsResponse: ["data"],
  getMissions: ["data"],
  getMissionsResponse: ["data"],
  getXp: ["data"],
  getXpResponse: ["data"],
  getTeams: ["data"],
  getTeamsResponse: ["data"]
});

const getUsers = (state = INITIAL_STATE, action) => ({
  ...state,
  users: {
    users: null,
    totalUsers: null,
    loading: true,
    error: null
  }
});
const getUsersResponse = (state = INITIAL_STATE, action) => ({
  ...state,
  users: action.data
});
const getUsersAchievements = (state = INITIAL_STATE, action) => ({
  ...state,
  achievements: {
    ...state.achievements,
    type: "achievements",
    error: null,
    loading: true
  }
});
const getUsersAchievementsResponse = (state = INITIAL_STATE, action) => ({
  ...state,
  achievements: action.data
});

const getMissions = (state = INITIAL_STATE, action) => ({
  ...state,
  missions: {
    ...state.missions,
    type: "missions",
    error: null,
    loading: true
  }
});
const getMissionsResponse = (state = INITIAL_STATE, action) => ({
  ...state,
  missions: action.data
});

const getXp = (state = INITIAL_STATE, action) => ({
  ...state,
  xp: {
    ...state.xp,
    type: "xp",
    error: null,
    loading: true
  }
});
const getXpResponse = (state = INITIAL_STATE, action) => ({
  ...state,
  xp: action.data
});
const getTeams = (state = INITIAL_STATE, action) => ({
  ...state,
  teams: {
    error: null,
    loading: true,
    data: null
  }
});
const getTeamsResponse = (state = INITIAL_STATE, action) => ({
  ...state,
  teams: action.data
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_USERS]: getUsers,
  [Types.GET_USERS_RESPONSE]: getUsersResponse,
  [Types.GET_USERS_ACHIEVEMENTS]: getUsersAchievements,
  [Types.GET_USERS_ACHIEVEMENTS_RESPONSE]: getUsersAchievementsResponse,
  [Types.GET_MISSIONS]: getMissions,
  [Types.GET_MISSIONS_RESPONSE]: getMissionsResponse,
  [Types.GET_XP]: getXp,
  [Types.GET_XP_RESPONSE]: getXpResponse,
  [Types.GET_TEAMS]: getTeams,
  [Types.GET_TEAMS_RESPONSE]: getTeamsResponse
});
