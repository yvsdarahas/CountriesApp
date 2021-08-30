import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, Countries } from '../../types'
import axios from 'axios'
import { Dispatch } from 'redux'

const fetchDataSuccess = (countries: Countries[]) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: countries,
  }
}

const fetchDataFailure = (error: Error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  }
}

export const fetchData = () => {
  return (dispatch: Dispatch) => {
    axios
      .get('https://restcountries.eu/rest/v2/all/')
      .then((response) => {
        const countries = response.data
        dispatch(fetchDataSuccess(countries))
      })
      .catch((error) => {
        const errorMsg = error.message
        dispatch(fetchDataFailure(errorMsg))
      })
  }
}
