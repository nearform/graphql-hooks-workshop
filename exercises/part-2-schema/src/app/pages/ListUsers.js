import React, { useState } from 'react'

export default function ListUsers ({ users, createUser }) {

  const [name, setName] = useState('')

  async function createNewUser() {
    console.log
    await createUser({ name })
    setName('')
  }

  return (
    <div>
      <ul>
        {users.map((user, i) =>
          <li key={i}>{user.name}</li>
        )}
      </ul>
      <label>Name:
        <input
          type='text'
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </label>
      <button onClick={createNewUser}>Save</button>
    </div>
  )
}
