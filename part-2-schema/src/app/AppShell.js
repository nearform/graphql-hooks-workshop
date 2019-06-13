import React from 'react'
import { Link, Router } from '@reach/router'

// components
import NotFoundPage from './pages/NotFoundPage'
import ListUsers from './pages/ListUsers'
import NewUser from './pages/NewUser'

const USERS = [
  {
    name: 'John'
  },
  {
    name: 'Sally'
  }
]

class AppShell extends React.Component {
  render() {

    const createUser = user => USERS.push(user)

    return (
      <div className="app-shell-component">
        <h1>Users List</h1>
        <nav>
          <Link to='/'>Users</Link> <Link to='/new'>New User</Link>
          <Router>
            <ListUsers path='/' users={USERS} />
            <NewUser path='/new' createUser={createUser} />
            <NotFoundPage default />
          </Router>
        </nav>
      </div>
    )
  }
}

AppShell.propTypes = {}

export default AppShell
