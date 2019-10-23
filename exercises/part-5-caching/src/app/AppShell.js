import React from 'react'
import { Link, Router } from '@reach/router'

// components
import HelloWorld from './pages/HelloWorld'
import ListUsers from './pages/ListUsers'

class AppShell extends React.Component {
  render() {
    return (
      <div className="app-shell-component">
      <nav>
        <Link to="/">Hello World</Link> |{" "}
        <Link to="/listUsers">List Users</Link>
      </nav>
      <Router>
        <HelloWorld path="/" />
        <ListUsers path="/listUsers" />
      </Router>
      </div>
    )
  }
}

AppShell.propTypes = {}

export default AppShell
