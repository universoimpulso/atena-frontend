const INITIAL_STATE = {
  loading: null,
  cardLoading: "",
  experienceValues: {},
  getError: ""
};

export const Types = {
  GET_EXPERIENCE: "experienceCard/GET_EXPERIENCE",
  GET_EXPERIENCE_SUCCESS: "experienceCard/GET_EXPERIENCE_SUCCESS",
  GET_EXPERIENCE_FAILURE: "experienceCard/GET_EXPERIENCE_FAILURE",
  PUT_EXPERIENCE: "experienceCard/PUT_EXPERIENCE",
  PUT_EXPERIENCE_SUCCESS: "experienceCard/PUT_EXPERIENCE_SUCCESS",
  PUT_EXPERIENCE_FAILURE: "experienceCard/PUT_EXPERIENCE_FAILURE"
};

export default function ranking(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_EXPERIENCE:
      return { ...state, loading: true, getError: "" };
    case Types.GET_EXPERIENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        experienceValues: action.payload.data
      };
    case Types.GET_EXPERIENCE_FAILURE:
      return {
        ...state,
        loading: false,
        getError: action.payload.error
      };
    case Types.PUT_EXPERIENCE:
      return {
        ...state,
        cardLoading: action.payload.data.key
      };
    case Types.PUT_EXPERIENCE_SUCCESS:
      return {
        ...state,
        cardLoading: "",
        experienceValues: action.payload.data
      };
    case Types.PUT_EXPERIENCE_FAILURE:
      return {
        ...state,
        cardLoading: false
      };
    default:
      return state;
  }
}

export const Creators = {
  getExperience: () => ({
    type: Types.GET_EXPERIENCE,
    payload: {}
  }),
  getExperienceSuccess: data => ({
    type: Types.GET_EXPERIENCE_SUCCESS,
    payload: { data }
  }),
  getExperienceFailure: error => ({
    type: Types.GET_EXPERIENCE_FAILURE,
    payload: { error }
  }),
  putExperience: data => ({
    type: Types.PUT_EXPERIENCE,
    payload: { data }
  }),
  putExperienceSuccess: data => ({
    type: Types.PUT_EXPERIENCE_SUCCESS,
    payload: { data }
  }),
  putExperienceFailure: error => ({
    type: Types.PUT_EXPERIENCE_FAILURE,
    payload: { error }
  })
};
