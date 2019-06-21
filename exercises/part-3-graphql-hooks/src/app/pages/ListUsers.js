import React, { useState } from 'react'

const users = [
  { name: 'John' },
  { name: 'Sally' }
]

export default function ListUsers() {

  const [name, setName] = useState('')

  function createNewUser() {
    users.push({name})
    setName('')
  }

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user, i) =>
          <li key={i}>{user.name}</li>
        )}
      </ul>
      <label>Create User<br />
        <input
          type='text'
          onChange={e => setName(e.target.value)}
          value={name}
        /><br/>
      </label>
      <button onClick={createNewUser}>Save</button>
    </div>
  )
}
