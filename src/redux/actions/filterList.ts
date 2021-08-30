import { Countries, FILTERED_COUNTRIES } from '../../types'

export const filterList = (search: string, countries: Countries[]) => {
  return {
    type: FILTERED_COUNTRIES,
    payload: {
      search: search,
      countries: [...countries],
    },
  }
}
