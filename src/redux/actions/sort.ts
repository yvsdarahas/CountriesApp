import {
  SORT_BY_FLAGS,
  SORT_BY_COUNTRY,
  SORT_BY_LANGUAGE,
  SORT_BY_POPULATION,
  SORT_BY_REGION,
  Countries,
} from '../../types'

export const sortByFlag = (countries: Countries[]) => {
  return {
    type: SORT_BY_FLAGS,
    payload: {
      countries: countries,
    },
  }
}
export const sortByCountry = (countries: Countries[]) => {
  return {
    type: SORT_BY_COUNTRY,
    payload: {
      countries: countries,
    },
  }
}
export const sortByLanguage = (countries: Countries[]) => {
  return {
    type: SORT_BY_LANGUAGE,
    payload: {
      countries: countries,
    },
  }
}
export const sortByPopulation = (countries: Countries[]) => {
  return {
    type: SORT_BY_POPULATION,
    payload: {
      countries: countries,
    },
  }
}
export const sortByRegion = (countries: Countries[]) => {
  return {
    type: SORT_BY_REGION,
    payload: {
      countries: countries,
    },
  }
}
