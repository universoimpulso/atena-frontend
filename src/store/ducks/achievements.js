import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE = {
  userAchievements: {
    data: null,
    loading: true,
    error: null
  },
  loading: true,
  editLoading: '',
  achievementsValues: [],
  editError: '',
  createError: ''
}

export const { Types, Creators } = createActions({
  getAchievements: ['data'],
  getAchievementsSuccess: ['data'],
  getAchievementsFailure: ['data'],
  editAchievement: ['data'],
  editAchievementSuccess: ['data'],
  editAchievementFailure: ['data'],
  createAchievement: ['data'],
  createAchievementSuccess: ['data'],
  createAchievementFailure: ['data']
})

const getAchievements = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true
})
const getAchievementsSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  achievementsValues: action.data
})
const getAchievementsFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  getError: action.data
})

const editAchievement = (state = INITIAL_STATE, action) => {
  const { type, values } = action.data
  const editLoading = type.concat(values.name)

  return { ...state, editLoading }
}
const editAchievementSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  editLoading: '',
  achievementsValues: action.data
})
const editAchievementFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  editLoading: ''
})
const createAchievement = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true
})
const createAchievementSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false
})
const createAchievementFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  createError: action.error
})

export default createReducer(INITIAL_STATE, {
  [Types.GET_ACHIEVEMENTS]: getAchievements,
  [Types.GET_ACHIEVEMENTS_SUCCESS]: getAchievementsSuccess,
  [Types.GET_ACHIEVEMENTS_FAILURE]: getAchievementsFailure,
  [Types.EDIT_ACHIEVEMENT]: editAchievement,
  [Types.EDIT_ACHIEVEMENT_SUCCESS]: editAchievementSuccess,
  [Types.EDIT_ACHIEVEMENT_FAILURE]: editAchievementFailure,
  [Types.CREATE_ACHIEVEMENT]: createAchievement,
  [Types.CREATE_ACHIEVEMENT_SUCCESS]: createAchievementSuccess,
  [Types.CREATE_ACHIEVEMENT_FAILURE]: createAchievementFailure
})
