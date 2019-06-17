# Part 2 - graphQL schema for `graphql-hooks`

- Display a list of 'users'
- Create a new 'user'

## Fill in

- Create `src/app/pages/ListUsers.js`

  ```js
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
  ```

- Modify `src/app/AppShell.js`
  ```js
  import ListUsers from './pages/ListUsers'

  const USERS = [
    { name: 'John' },
    { name: 'Sally' }
  ]

  <...>

  const createUser = user => USERS.push(user)

  <...>
  
  <h1>Users List</h1>
  <ListUsers path='/' users={USERS} createUser={createUser} />
  ```
