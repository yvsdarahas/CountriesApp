import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import HamburgerMenu from '../HamburgerMenu'
import { AppState, SearchProps } from '../../types'
import './index.css'

const TopNav = ({ search, setSearch }: SearchProps) => {
  const color = useSelector((state: AppState) => state.setBgReducer.color)
  const secondaryColor = useSelector(
    (state: AppState) => state.setBgReducer.secondaryColor
  )
  const countOfBookmarks = useSelector(
    (state: AppState) => state.editBookmarks.countOfBookmarks
  )

  return (
    <div className="top-nav" style={{ backgroundColor: color }}>
      <div className="topleft-nav">
        <Link style={{ textDecoration: 'none' }} to="/">
          <i className="fas fa-globe"></i>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
          <p>Countries</p>
        </Link>
      </div>
      <div className="input-nav">
        <label htmlFor="search-country"> </label>
        <input
          type="text"
          id="search-country"
          value={search}
          onChange={(event) => setSearch(event)}
          placeholder="Search"
          style={{ backgroundColor: secondaryColor }}
        />
      </div>
      <div className="topright-nav">
        <HamburgerMenu />
        <Link to="/bookmarks">
          <i className="fas fa-bookmark"></i>
        </Link>
        <p className="cart-count">{countOfBookmarks}</p>
      </div>
    </div>
  )
}

export default TopNav
