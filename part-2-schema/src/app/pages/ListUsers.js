import React from 'react'

export default function ListUsers ({ users }) {
  return (
    <ul>
      {users.map(user => <li>
        {user.name}
      </li>)}
    </ul>
  )
}