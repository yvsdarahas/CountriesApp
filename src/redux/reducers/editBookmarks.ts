import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  BookmarkState,
  EditBookmarkAction,
} from '../../types'

const editBookmarks = (
  state: BookmarkState = {
    listOfBookmarks: [],
    countOfBookmarks: 0,
  },
  action: EditBookmarkAction
) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return {
        ...state,
        listOfBookmarks: [
          ...state.listOfBookmarks,
          ...action.payload.countries.filter((country: any) =>
            country.name.includes(action.payload.selected)
          ),
        ],
        countOfBookmarks: state.countOfBookmarks + 1,
      }

    case REMOVE_BOOKMARK:
      return {
        ...state,
        listOfBookmarks: state.listOfBookmarks.filter(
          (bookmark: any) => !bookmark.name.includes(action.payload.selected)
        ),
        countOfBookmarks: state.countOfBookmarks - 1,
      }
    default:
      return state
  }
}

export default editBookmarks
