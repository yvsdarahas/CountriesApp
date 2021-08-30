import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  sortByFlag,
  sortByCountry,
  sortByLanguage,
  sortByPopulation,
  sortByRegion,
} from '../../redux/actions/sort'
import { AppState } from '../../types'
import './index.css'

export const TableHead = () => {
  const tableHead = ['FLAG', 'COUNTRY', 'LANGUAGES', 'POPULATION', 'REGION', '']
  const dispatch = useDispatch()
  const filteredList = useSelector(
    (state: AppState) => state.filterReducer.filteredList
  )
  const sortOrder = useSelector(
    (state: AppState) => state.sortReducer.sortOrder
  )
  const sortItem = useSelector((state: AppState) => state.sortReducer.sortItem)

  const sortCountriesList = (
    event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>
  ) => {
    switch ((event.target as HTMLButtonElement).className) {
      case 'FLAG':
        dispatch(sortByFlag(filteredList))
        break
      case 'COUNTRY':
        dispatch(sortByCountry(filteredList))
        break
      case 'LANGUAGES':
        dispatch(sortByLanguage(filteredList))
        break
      case 'POPULATION':
        dispatch(sortByPopulation(filteredList))
        break
      case 'REGION':
        dispatch(sortByRegion(filteredList))
        break
      default:
        break
    }
  }

  return (
    <React.Fragment>
      <thead className="countrylist-tablehead">
        <tr>
          {tableHead.map((eachHead) => (
            <th
              key={eachHead}
              className={eachHead}
              onClick={(event) => sortCountriesList(event)}
            >
              {eachHead}{' '}
              {sortOrder === '' ? (
                ''
              ) : sortOrder === 'ASCENDING' && sortItem === eachHead ? (
                <i className="fas fa-sort-down"></i>
              ) : sortOrder === 'DESCENDING' && sortItem === eachHead ? (
                <i className="fas fa-caret-up"></i>
              ) : (
                ''
              )}
            </th>
          ))}
        </tr>
      </thead>
    </React.Fragment>
  )
}
