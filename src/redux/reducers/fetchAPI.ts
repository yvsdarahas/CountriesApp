import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FetchDataAction,
} from '../../types'

const initialState = {
  countries: [],
  error: '',
}

const fetchReducer = (state = initialState, action: FetchDataAction) => {
  switch (action.type) {
  case FETCH_DATA_SUCCESS:
    return {
      ...state,
      countries: action.payload,
    }
  case FETCH_DATA_FAILURE:
    return {
      ...state,
      error: action.payload,
    }
  default:
    return state
  }
}

export default fetchReducer
