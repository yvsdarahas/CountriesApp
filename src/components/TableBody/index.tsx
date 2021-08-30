import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './index.css'
import { TableRow } from '../TableRow'
import { AppState, Countries } from '../../types'

export const TableBody = () => {
  const sortedList = useSelector((state: any) => state.sortReducer.sortedList)
  const filteredList = useSelector(
    (state: AppState) => state.filterReducer.filteredList
  )
  const [countriesList, setCountriesList] = useState([...filteredList])

  useEffect(() => {
    setCountriesList(sortedList)
  }, [sortedList])

  useEffect(() => {
    setCountriesList(filteredList)
  }, [filteredList])

  return (
    <tbody className="countrylist-tablebody">
      {countriesList.map((country: Countries) => (
        <tr className="table-row" key={country.alpha2Code}>
          <TableRow country={country} />
        </tr>
      ))}
    </tbody>
  )
}
