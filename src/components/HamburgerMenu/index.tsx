import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.css'

import { setBgTheme } from '../../redux/actions/ChangeBgColor'
import { AppState } from '../../types'

const HamburgerMenu = () => {
  const [check, setCheck] = useState(false)
  const bgColors = ['ORANGE', 'GREEN', 'VIOLET', 'BLUE']
  const dispatch = useDispatch()
  const primaryColor = useSelector(
    (state: AppState) => state.setBgReducer.color
  )

  const changeBgColor = (
    event: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    switch ((event.target as HTMLButtonElement).className) {
      case 'ORANGE':
        dispatch(setBgTheme('#F5AF44', '#F8D7A3'))
        break
      case 'GREEN':
        dispatch(setBgTheme('#1ABC9C', '#82D2C2'))
        break
      case 'VIOLET':
        dispatch(setBgTheme('#8E44AD', '#C597D8'))
        break
      case 'BLUE':
        dispatch(setBgTheme('#6495ed', '#92b3f3'))
        break
      default:
        break
    }
  }

  const slideSideMenu = () => {
    setCheck(!check)
  }
  return (
    <>
      <nav className="top-menu">
        <i
          className={'fas fa-palette'}
          onClick={slideSideMenu}
          aria-hidden="true"
        ></i>
        <ul
          className={check ? 'side-menu active' : 'side-menu'}
          onClick={(event) => changeBgColor(event)}
          style={{ backgroundColor: primaryColor }}
          aria-hidden="true"
        >
          {bgColors.map((color) => (
            <li key={color} className={color}>
              {color}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default HamburgerMenu
