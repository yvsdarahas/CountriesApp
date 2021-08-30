// Action types
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'
export const SET_BG_COLOR = 'SET_BG_COLOR'
export const SORT_BY_FLAGS = 'SORT_BY_FLAGS'
export const SORT_BY_COUNTRY = 'SORT_BY_COUNTRY'
export const SORT_BY_LANGUAGE = 'SORT_BY_LANGUAGE'
export const SORT_BY_POPULATION = 'SORT_BY_POPULATION'
export const SORT_BY_REGION = 'SORT_BY_REGION'
export const FILTERED_COUNTRIES = 'FILTERED_COUNTRIES'
export const ADD_BOOKMARK = 'ADD_BOOKMARK'
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK'

export type Languages = {
  name: string
}

export type Currency = {
  name: string
  symbol: string
}

export type Countries = {
  flag: string
  name: string
  nativeName: string
  languages: Languages[]
  population: number
  region: string
  subregion: string
  currencies: Currency[]
  area: string
  capital: string
  alpha2Code: string
  timezones: string[]
}

export type BackgroundColor = {
  color: string
  secondaryColor: string
}
export type SetBackgroundAction = {
  type: typeof SET_BG_COLOR
  payload: {
    primaryColor: string
    secondaryColor: string
  }
}

export type BookmarkState = {
  listOfBookmarks: Countries[]
  countOfBookmarks: number
}
type AddBookmark = {
  type: typeof ADD_BOOKMARK
  payload: {
    selected: string
    countries: Countries[]
  }
}
type RemoveBookmark = {
  type: typeof REMOVE_BOOKMARK
  payload: {
    selected: string
  }
}
export type EditBookmarkAction = AddBookmark | RemoveBookmark

export type FetchData = {
  countries: Countries[]
  error: Error
}
type FetchSucces = {
  type: typeof FETCH_DATA_SUCCESS
  payload: Countries[]
}
type FetchFailed = {
  type: typeof FETCH_DATA_FAILURE
  payload: Error
}
export type FetchDataAction = FetchSucces | FetchFailed

export type FilteredList = {
  filteredList: Countries[]
}
type FilterList = {
  type: typeof FILTERED_COUNTRIES
  payload: {
    search: string
    countries: Countries[]
  }
}
export type FilterAction = FilterList

export type SortedList = {
  sortedList: Countries[]
  checkSort: boolean
  sortOrder: string
  sortItem: string
}
type SortByFlag = {
  type: typeof SORT_BY_FLAGS
  payload: {
    countries: Countries[]
  }
}
type SortByCountry = {
  type: typeof SORT_BY_COUNTRY
  payload: {
    countries: Countries[]
  }
}
type SortByLanguage = {
  type: typeof SORT_BY_LANGUAGE
  payload: {
    countries: Countries[]
  }
}
type SortByPopulation = {
  type: typeof SORT_BY_POPULATION
  payload: {
    countries: Countries[]
  }
}
type SortByRegion = {
  type: typeof SORT_BY_REGION
  payload: {
    countries: Countries[]
  }
}
export type SortAction =
  | SortByFlag
  | SortByCountry
  | SortByLanguage
  | SortByPopulation
  | SortByRegion

export type SearchProps = {
  search: string
  setSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type AppState = {
  setBgReducer: BackgroundColor
  editBookmarks: BookmarkState
  sortReducer: SortedList
  filterReducer: FilteredList
  fetchReducer: FetchData
}
