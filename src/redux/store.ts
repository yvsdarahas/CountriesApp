import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { AppState } from '../types'

// convert object to string and store in localStorage
function saveToLocalStorage(state: AppState) {
  try {
    const bookmarkList = JSON.stringify(state.editBookmarks.listOfBookmarks)
    const countOfBookmarks = JSON.stringify(
      state.editBookmarks.countOfBookmarks
    )
    const primaryColor = JSON.stringify(state.setBgReducer.color)
    const secondaryColor = JSON.stringify(state.setBgReducer.secondaryColor)
    localStorage.setItem('bookmarkList', bookmarkList)
    localStorage.setItem('countOfBookmarks', countOfBookmarks)
    localStorage.setItem('primaryColor', primaryColor)
    localStorage.setItem('secondaryColor', secondaryColor)
  } catch (error) {
    console.warn(error)
  }
}

const GetItem = (key: string, initState: string) => {
  return JSON.parse(localStorage.getItem(key) || initState)
}

const initialState = {
  editBookmarks: {
    listOfBookmarks: GetItem('bookmarkList', `[]`),
    countOfBookmarks: GetItem('countOfBookmarks', `0`),
  },
  setBgReducer: {
    color: GetItem('primaryColor', `"#6495ed"`),
    secondaryColor: GetItem('secondaryColor', `"#92b3f3"`),
  },
}

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)
store.subscribe(() => saveToLocalStorage(store.getState()))
