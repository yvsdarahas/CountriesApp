import React from 'react'
import { useSelector } from 'react-redux'
import { AppState, Countries } from '../../types'
import { EachBookmarkInfo } from '../EachBookmarkInfo'
import './index.css'

export const Bookmarks = () => {
  const listOfBookmarks = useSelector(
    (state: AppState) => state.editBookmarks.listOfBookmarks
  )
  const secondaryColor = useSelector(
    (state: AppState) => state.setBgReducer.secondaryColor
  )

  return (
    <div>
      <h1 className="empty-bookmark-list" style={{ color: secondaryColor }}>
        No Bookmarks
      </h1>
      <table>
        <tbody className="bookmark-list">
          {listOfBookmarks.map((bookmark: Countries) => (
            <tr key={bookmark.alpha2Code}>
              <EachBookmarkInfo bookmark={bookmark} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
