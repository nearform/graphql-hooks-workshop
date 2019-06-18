import React from 'react'

// components
import ListUsers from './pages/ListUsers'

const USERS = [
  { name: 'John' },
  { name: 'Sally' }
]

class AppShell extends React.Component {
  render() {

    const createUser = user => USERS.push(user)

    return (
      <div className="app-shell-component">
        <h1>Users List</h1>
        <ListUsers users={USERS} createUser={createUser} />
      </div>
    )
  }
}

AppShell.propTypes = {}

export default AppShell
