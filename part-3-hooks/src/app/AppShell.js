import React from 'react'
import { Link, Router } from '@reach/router'

// components
import NotFoundPage from './pages/NotFoundPage'
import ListUsers from './pages/ListUsers'
import NewUser from './pages/NewUser'

class AppShell extends React.Component {
  render() {
    return (
      <div className="app-shell-component">
        <h1>GraphQL Hooks</h1>
        <nav>
          <Link to='/'>Users</Link> <Link to='/new'>New User</Link>
          <Router>
            <ListUsers path='/' />
            <NewUser path='/new' />
            <NotFoundPage default />
          </Router>
        </nav>
      </div>
    )
  }
}

AppShell.propTypes = {}

export default AppShell
