import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE = {
  loading: null,
  cardLoading: null,
  experienceValues: {},
  getError: null
}
export const { Types, Creators } = createActions({
  getExperience: ['data'],
  getExperienceSuccess: ['data'],
  getExperienceFailure: ['data'],
  putExperience: ['data'],
  putExperienceSuccess: ['data'],
  putExperienceFailure: ['data']
})

const getExperience = (state = INITIAL_STATE, action) => ({
  ...state,
  getError: '',
  loading: true
})
const getExperienceSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  experienceValues: action.data
})
const getExperienceFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  getError: action.error
})
const putExperience = (state = INITIAL_STATE, action) => {
  const { key } = action.data
  return {
    ...state,
    cardLoading: key
  }
}
const putExperienceSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  cardLoading: null,
  experienceValues: action.data
})
const putExperienceFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  cardLoading: null
})

export default createReducer(INITIAL_STATE, {
  [Types.GET_EXPERIENCE]: getExperience,
  [Types.GET_EXPERIENCE_SUCCESS]: getExperienceSuccess,
  [Types.GET_EXPERIENCE_FAILURE]: getExperienceFailure,
  [Types.PUT_EXPERIENCE]: putExperience,
  [Types.PUT_EXPERIENCE_SUCCESS]: putExperienceSuccess,
  [Types.PUT_EXPERIENCE_FAILURE]: putExperienceFailure
})
