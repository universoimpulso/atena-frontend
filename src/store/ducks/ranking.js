import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE = {
  ranking: {
    loading: true,
    error: '',
    firstUsers: [],
    lastUsers: [],
    monthName: ''
  },
  users: {
    loading: false,
    error: null,
    data: null
  },
  userInfo: {
    loading: false,
    error: null,
    data: null
  }
}

export const { Types, Creators } = createActions({
  getRanking: ['selected'],
  getRankingResponse: ['data'],
  getRankingUsers: ['data'],
  getRankingUsersResponse: ['data'],
  getUserInfo: ['data'],
  getUserInfoResponse: ['data']
})

const getRanking = (state = INITIAL_STATE) => ({
  ...state,
  ranking: {
    loading: false,
    error: '',
    firstUsers: [],
    lastUsers: [],
    monthName: ''
  }
})

const getRankingResponse = (state = INITIAL_STATE, action) => ({
  ...state,
  ranking: action.data
})

const getRankingUsers = (state = INITIAL_STATE, action) => ({
  ...state,
  users: { data: null, loading: true, error: null },
  userInfo: {
    data: null,
    loading: false,
    error: null
  }
})

const getRankingUsersResponse = (state = INITIAL_STATE, action) => ({
  ...state,
  users: action.data
})

const getUserInfo = (state = INITIAL_STATE, action) => ({
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
})

const getUserInfoResponse = (state = INITIAL_STATE, action) => ({
  ...state,
  userInfo: action.data
})

export default createReducer(INITIAL_STATE, {
  [Types.GET_RANKING]: getRanking,
  [Types.GET_RANKING_RESPONSE]: getRankingResponse,
  [Types.GET_RANKING_USERS]: getRankingUsers,
  [Types.GET_RANKING_USERS_RESPONSE]: getRankingUsersResponse,
  [Types.GET_USER_INFO]: getUserInfo,
  [Types.GET_USER_INFO_RESPONSE]: getUserInfoResponse
})
