import React from 'react'
import { Link, Router } from '@reach/router'

// components
import NotFoundPage from './pages/NotFoundPage'
import ListUsers from './pages/ListUsers'
import TestPage from './pages/TestPage'

class AppShell extends React.Component {
  render() {
    return (
      <div className="app-shell-component">
        <h1>GraphQL Hooks</h1>
        <nav>
          <Link to="/">Home</Link>|
          <Link to="/test">Test Cache</Link>
        </nav>
        <Router>
          <ListUsers path='/' />
          <TestPage path="/test" />
          <NotFoundPage default />
        </Router>
      </div>
    )
  }
}

AppShell.propTypes = {}

export default AppShell
