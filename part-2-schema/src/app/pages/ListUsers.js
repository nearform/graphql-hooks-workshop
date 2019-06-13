import React from 'react'

export default function ListUsers ({ users }) {
  return (
    <ul>
      {users.map((user, i) => <li key={i}>
        {user.name}
      </li>)}
    </ul>
  )
}
