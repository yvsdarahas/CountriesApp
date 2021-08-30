import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.css'
import { addBookmark } from '../../redux/actions/editBookmarks'
import { AppState, Countries, Languages } from '../../types'

type Country = {
  country: Countries
}

export const TableRow = ({ country }: Country) => {
  const dispatch = useDispatch()
  const clickToBookmark = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(
      addBookmark((event.target as HTMLButtonElement).className, countries)
    )
  }
  const countries = useSelector(
    (state: AppState) => state.filterReducer.filteredList
  )
  const primaryColor = useSelector(
    (state: AppState) => state.setBgReducer.color
  )
  const listOfBookmarks = useSelector(
    (state: AppState) => state.editBookmarks.listOfBookmarks
  )
  const isBookmarked = (bookmarkList: Countries[], countryName: string) => {
    const check = bookmarkList.filter(
      (bookmark: Countries) => bookmark.name === countryName
    )
    if (check.length) return false
    return true
  }

  return (
    <React.Fragment>
      <td>
        <Link
          style={{ color: 'black', textDecoration: 'none' }}
          to={`/country/${country.name}`}
        >
          <img src={country.flag} alt="flag" width="100px" height="50px" />
        </Link>
      </td>
      <td className="linkto-moredetails">
        <Link
          style={{ color: 'black', textDecoration: 'none' }}
          to={`/country/${country.name}`}
        >
          <b>{country.name}</b>
        </Link>
      </td>
      <td>
        {country.languages.map((language: Languages) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </td>
      <td>{country.population}</td>
      <td>{country.region}</td>
      <td>
        {!isBookmarked(listOfBookmarks, country.name) ? (
          <i className="fas fa-star" style={{ color: primaryColor }}></i>
        ) : (
          <button
            onClick={(event) => clickToBookmark(event)}
            className={country.name}
            style={{ color: 'white', backgroundColor: primaryColor }}
          >
            ADD
          </button>
        )}
      </td>
    </React.Fragment>
  )
}
