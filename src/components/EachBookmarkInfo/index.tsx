import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeBookmark } from '../../redux/actions/editBookmarks'
import { AppState, Countries } from '../../types'

type Bookmark = {
  bookmark: Countries
}

export const EachBookmarkInfo = ({ bookmark }: Bookmark) => {
  const dispatch = useDispatch()
  const removeItemFromCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(removeBookmark((event.target as HTMLButtonElement).className))
  }
  const primaryColor = useSelector(
    (state: AppState) => state.setBgReducer.color
  )

  return (
    <>
      <td>
        <img src={bookmark.flag} alt="flag" width="200px" height="100px" />
      </td>
      <td>
        <ul className="bookmark-info">
          <li>
            <span className="bookmark-name">{bookmark.name}</span>
          </li>
          <li>|</li>
          <li>
            <b>Capital : </b>
            {bookmark.capital}
          </li>
          <li>|</li>
          <li>
            <b>Region : </b>
            {bookmark.region}
          </li>
        </ul>
        <button
          className={bookmark.name}
          style={{ color: 'white', backgroundColor: primaryColor }}
          onClick={(event) => removeItemFromCart(event)}
        >
          REMOVE
        </button>
      </td>
    </>
  )
}
