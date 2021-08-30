import { FilterAction, FilteredList, FILTERED_COUNTRIES } from '../../types'

const initialState = {
  filteredList: [],
}

const filterReducer = (
  state: FilteredList = initialState,
  action: FilterAction
) => {
  switch (action.type) {
  case FILTERED_COUNTRIES:
    return {
      ...state,
      filteredList: action.payload.countries.filter((country) =>
        country.name.toLowerCase().includes(action.payload.search)
      ),
    }
  default:
    return state
  }
}

export default filterReducer
