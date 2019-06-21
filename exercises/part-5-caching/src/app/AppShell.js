import React from 'react'

// components
import ListUsers from './pages/ListUsers'

class AppShell extends React.Component {
  render() {
    return (
      <div className="app-shell-component">
        <h1>GraphQL Hooks</h1>
        <ListUsers path='/' />
      </div>
    )
  }
}

AppShell.propTypes = {}

export default AppShell
