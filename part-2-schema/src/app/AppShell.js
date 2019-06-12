import React from 'react'
import { Link, Router } from '@reach/router'
import ListPosts from './pages/ListPosts'
import NewPost from './pages/NewPost'

class AppShell extends React.Component {
  render() {
    return (
      <div className="app-shell-component">
        <h1>Posts</h1>
        <nav>
          <ul>
            <li><Link to='/'>Posts</Link></li>
            <li><Link to='/new'>New Post</Link></li>
          </ul>
          <Router>
            <ListPosts path='/' />
            <NewPost path='/new' />
          </Router>
        </nav>
      </div>
    )
  }
}

AppShell.propTypes = {}

export default AppShell
