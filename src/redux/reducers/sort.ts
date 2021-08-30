import {
  SORT_BY_FLAGS,
  SORT_BY_COUNTRY,
  SORT_BY_LANGUAGE,
  SORT_BY_POPULATION,
  SORT_BY_REGION,
  SortedList,
  SortAction,
} from '../../types'
import _ from 'lodash'

const initialState = {
  sortedList: [],
  checkSort: true,
  sortOrder: '',
  sortItem: '',
}

const sortReducer = (state: SortedList = initialState, action: SortAction) => {
  switch (action.type) {
  case SORT_BY_FLAGS:
    if (state.checkSort) {
      return {
        ...state,
        sortedList: _.orderBy(action.payload.countries, ['flag'], ['asc']),
        sortOrder: 'ASCENDING',
        sortItem: 'FLAG',
        checkSort: !state.checkSort,
      }
    } else {
      return {
        ...state,
        sortedList: _.orderBy(action.payload.countries, ['flag'], ['desc']),
        sortOrder: 'DESCENDING',
        sortItem: 'FLAG',
        checkSort: !state.checkSort,
      }
    }
  case SORT_BY_COUNTRY:
    if (state.checkSort) {
      return {
        ...state,
        sortedList: _.orderBy(action.payload.countries, ['name'], ['asc']),
        sortOrder: 'ASCENDING',
        sortItem: 'COUNTRY',
        checkSort: !state.checkSort,
      }
    } else {
      return {
        ...state,
        sortedList: _.orderBy(action.payload.countries, ['name'], ['desc']),
        sortOrder: 'DESCENDING',
        sortItem: 'COUNTRY',
        checkSort: !state.checkSort,
      }
    }
  case SORT_BY_LANGUAGE:
    if (state.checkSort) {
      return {
        ...state,
        sortedList: _.orderBy(
          action.payload.countries,
          ['languages[0].name'],
          ['asc']
        ),
        sortOrder: 'ASCENDING',
        sortItem: 'LANGUAGES',
        checkSort: !state.checkSort,
      }
    } else {
      return {
        ...state,
        sortedList: _.orderBy(
          action.payload.countries,
          ['languages[0].name'],
          ['desc']
        ),
        sortOrder: 'DESCENDING',
        sortItem: 'LANGUAGES',
        checkSort: !state.checkSort,
      }
    }
  case SORT_BY_POPULATION:
    if (state.checkSort) {
      return {
        ...state,
        sortedList: _.orderBy(
          action.payload.countries,
          ['population'],
          ['asc']
        ),
        sortOrder: 'ASCENDING',
        sortItem: 'POPULATION',
        checkSort: !state.checkSort,
      }
    } else {
      return {
        ...state,
        sortedList: _.orderBy(
          action.payload.countries,
          ['population'],
          ['desc']
        ),
        sortOrder: 'DESCENDING',
        sortItem: 'POPULATION',
        checkSort: !state.checkSort,
      }
    }
  case SORT_BY_REGION:
    if (state.checkSort) {
      return {
        ...state,
        sortedList: _.orderBy(action.payload.countries, ['region'], ['asc']),
        sortOrder: 'ASCENDING',
        sortItem: 'REGION',
        checkSort: !state.checkSort,
      }
    } else {
      return {
        ...state,
        sortedList: _.orderBy(action.payload.countries, ['region'], ['desc']),
        sortOrder: 'DESCENDING',
        sortItem: 'REGION',
        checkSort: !state.checkSort,
      }
    }
  default:
    return state
  }
}

export default sortReducer
