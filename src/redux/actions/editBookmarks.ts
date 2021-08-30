import { ADD_BOOKMARK, REMOVE_BOOKMARK, Countries } from '../../types'

export const addBookmark = (selected: string, countries: Countries[]) => {
  return {
    type: ADD_BOOKMARK,
    payload: {
      selected: selected,
      countries: countries,
    },
  }
}
export const removeBookmark = (selected: string) => {
  return {
    type: REMOVE_BOOKMARK,
    payload: {
      selected: selected,
    },
  }
}
