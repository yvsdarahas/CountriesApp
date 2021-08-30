import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import BookmarksPage from './pages/BookmarksPage'
import CountryDetails from './pages/CountryDetails'
import Home from './pages/Home'
import TopNav from './components/TopNav'

import { fetchData } from './redux/actions/fetchAPI'
import { filterList } from './redux/actions/filterList'
import { AppState } from './types'

const Routes = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const countries = useSelector(
    (state: AppState) => state.fetchReducer.countries
  )

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    dispatch(filterList(search, countries))
  }, [search, countries, dispatch])

  return (
    <>
      <Router>
        <TopNav
          search={search}
          setSearch={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(event.target.value)
          }
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bookmarks" component={BookmarksPage} />
          <Route path="/country/:name" component={CountryDetails} />
        </Switch>
      </Router>
    </>
  )
}

export default Routes
