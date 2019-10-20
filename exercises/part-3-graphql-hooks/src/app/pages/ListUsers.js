import React, { useState } from 'react'

const users = [
  { name: 'John' },
  { name: 'Sally' }
]

// TODO: list users from graphql using GraphQL Hooks
// 1. Import useQuery from graphql-hooks
// 2. Define the query that lists the users into a template string
// 3. Inside the React Component, call the `useQuery` hook, passing the query as the parameter
// 4. Destructure the return value from `useQuery`
// 5. Pull out loading, error and data as constants
// 6. Handle loading and error states in the app
// 7. Render the users from data.users, instead of the hardcoded list
// 8. Test it works!

// TODO: create user using graphql
// 1. Import useMutation from graphql-hooks
// 2. Define the mutation that creates the user into a template string
// 3. Inside the React component, call the `useMutation` hook, passing the mutation as the parameter
// 4. `useMutation` returns an array: [mutateFn, state]
// 5. This allows us to rename the mutateFn to something appropriate
// 6. Destructure this first item in the array and call it `createUser`
// 7. Update createNewUser to now call `createUser` passing the correct variables option
// 8. We need to refetch the list of users after updating it
// 9. Destructure `refetch` from our `useQuery` call
// 10. Call `refetch` after the `createUser` mutation
// 11. Test it works!

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
