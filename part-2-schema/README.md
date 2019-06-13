# Part 2 - graphQL schema for connecting with `graphql-hooks`

- Describe what we’re trying to build
- List of ‘post’ and a form that creates a new one
- create dummy data ?

## Fill in

- Create `src/app/pages/ListUsers.js`

  ```js
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
  ```

- Create `src/app/pages/NewUser.js`
  ```js
  import React, { useState } from 'react'

  export default function NewUser ({ createUser, navigate }) {
    const [name, setName] = useState('')

    const createNewUser = async () => {
      await createUser({ name })
      navigate('../')
    }

    return <>
      <br />
      <label>Name:
        <input type='text' onChange={e => setName(e.target.value)} value={name} />
      </label>
      <button onClick={createNewUser}>Save</button>
    </>
  }
  ```

- Modify `src/app/AppShell.js`
  ```js
  const USERS = [
    { name: 'John' },
    { name: 'Sally' }
  ]

  const createUser = user => USERS.push(user)

  <...>
  <Router>
    <ListUsers path='/' users={USERS} />
    <NewUser path='/new' createUser={createUser} />
    <NotFoundPage default />
  </Router>
  <...>
  ```

