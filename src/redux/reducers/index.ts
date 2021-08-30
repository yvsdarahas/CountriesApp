import { combineReducers } from 'redux'
import fetchReducer from './fetchAPI'
import setBgReducer from './changeBgColor'
import sortReducer from './sort'
import filterReducer from './filterList'
import editBookmarks from './editBookmarks'

const rootReducer = combineReducers({
  fetchReducer,
  setBgReducer,
  sortReducer,
  filterReducer,
  editBookmarks,
})

export default rootReducer
