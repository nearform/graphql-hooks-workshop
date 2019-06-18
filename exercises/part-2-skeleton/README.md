# Part 2 - graphQL skeleton for `graphql-hooks`

- Goal 1: Display a list of 'users'
- Goal 2: Create a new 'user'

## Steps

- Create `src/app/pages/ListUsers.js`

  ```js
  import React, { useState } from 'react'

  export default function ListUsers ({ users, createUser }) {

    const [name, setName] = useState('')

    async function createNewUser() {
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
  <ListUsers users={USERS} createUser={createUser} />
  ```
