import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE = {
  userInfo: {
    loading: false,
    error: null,
    data: null
  },
  userAchievements: {
    loading: null,
    error: null,
    data: null
  },
  profile: {
    loading: true,
    error: '',
    userInfo: {},
    userAchievements: []
  }
}

export const { Types, Creators } = createActions({
  getProfile: ['data'],
  getProfileResponse: ['data'],
  getUserInfo: ['data'],
  getUserInfoResponse: ['data'],
  putUserInfo: ['data'],
  putUserInfoResponse: ['data']
})

const getProfile = (state = INITIAL_STATE) => ({
  ...state,
  profile: {
    ...state.profile,
    loading: true,
    error: ''
  }
})

const getProfileResponse = (state = INITIAL_STATE, action) => ({
  ...state,
  profile: action.data
})

const getUserInfo = (state = INITIAL_STATE) => ({
  ...state,
  userInfo: {
    loading: true,
    error: null,
    data: null
  }
})

const getUserInfoResponse = (state = INITIAL_STATE, action) => ({
  ...state,
  userInfo: action.data
})

const putUserInfo = (state = INITIAL_STATE) => ({
  ...state
})

const putUserInfoResponse = (state = INITIAL_STATE) => ({
  ...state
})

export default createReducer(INITIAL_STATE, {
  [Types.GET_PROFILE]: getProfile,
  [Types.GET_PROFILE_RESPONSE]: getProfileResponse,
  [Types.GET_USER_INFO]: getUserInfo,
  [Types.GET_USER_INFO_RESPONSE]: getUserInfoResponse,
  [Types.PUT_USER_INFO]: putUserInfo,
  [Types.PUT_USER_INFO_RESPONSE]: putUserInfoResponse
})
