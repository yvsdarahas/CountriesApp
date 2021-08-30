import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './index.css'
import { AppState, Countries, Currency, Languages } from '../../types'

type ParamType = {
  name?: string
}
export const CountryInfo = () => {
  const countryName: ParamType = useParams()
  const countries = useSelector(
    (state: AppState) => state.fetchReducer.countries
  )

  return (
    <div className="country-info">
      {countries
        .filter((country: Countries) => country.name === countryName.name)
        .map((country) => {
          return (
            <div key={country.alpha2Code} className="detailed-info">
              <img src={country.flag} alt="flag" width="400px" height="250px" />
              <ul className="country-list">
                <li>
                  <b>Name :</b> {country.name}
                </li>
                <li>
                  <b>Capital :</b> {country.capital}
                </li>
                <li>
                  <b>Native name :</b> {country.nativeName}
                </li>
                <li>
                  <ul className="languages">
                    <b>Languages:</b>
                    {country.languages.map((language: Languages) => (
                      <li key={language.name}>{language.name}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <ul className="currencies">
                    <b>Currencies:</b>
                    {country.currencies.map((currency: Currency) => (
                      <li key={currency.name}>
                        {currency.name} ({currency.symbol})
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <b>Region :</b> {country.region}
                </li>
                <li>
                  <b>Sub region :</b> {country.subregion}
                </li>
                <li>
                  <b>Population :</b> {country.population}
                </li>
                <li>
                  <b>Area of region :</b> {country.area}
                </li>
                <li>
                  <b>Time zone :</b> {country.timezones[0]}
                </li>
              </ul>
            </div>
          )
        })}
    </div>
  )
}
