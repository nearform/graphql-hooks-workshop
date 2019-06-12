import React from 'react'
import { Link, Router } from '@reach/router'
import ListUsers from './pages/ListUsers'
import NewUser from './pages/NewUser'

const USERS = [
  {
    name: 'John'
  }
]

class AppShell extends React.Component {
  render() {
    const createUser = user => USERS.push(user)

    return (
      <div className="app-shell-component">
        <h1>Users</h1>
        <nav>
          <ul>
            <li><Link to='/'>Users</Link></li>
            <li><Link to='/new'>New User</Link></li>
          </ul>
          <Router>
            <ListUsers path='/' users={USERS} />
            <NewUser path='/new' createUser={createUser} />
          </Router>
        </nav>
      </div>
    )
  }
}

AppShell.propTypes = {}

export default AppShell
