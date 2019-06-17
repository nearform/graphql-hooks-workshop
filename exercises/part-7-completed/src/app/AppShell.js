import React from 'react'
import { Link, Router } from '@reach/router'

// components
import NotFoundPage from './pages/NotFoundPage'
import ListUsers from './pages/ListUsers'
import TestPage from './pages/TestPage'
import PaginationPage from './pages/PaginationPage'

class AppShell extends React.Component {
  render() {
    return (
      <div className="app-shell-component">
        <h1>GraphQL Hooks</h1>
        <nav>
          <Link to="/">Home</Link>|
          <Link to="/test">Test Cache</Link>|
          <Link to="/users">PaginationPage</Link>
        </nav>
        <Router>
          <ListUsers path='/' />
          <TestPage path="/test" />
          <PaginationPage path="/users" />
          <NotFoundPage default />
        </Router>
      </div>
    )
  }
}

AppShell.propTypes = {}

export default AppShell
