import React, { useState } from 'react'
import { useQuery, useMutation } from 'graphql-hooks'

// TODO
// 1. C&P this into `src/app/pages/PaginationPage.js`
// 2. Update query to pass $limit and $skip variables
const LIST_USERS_QUERY = `
  query ListUsersQuery {
    users {
      name
    }
  }
`
const CREATE_USER_MUTATION = `
  mutation CreateUser($name: String!) {
    createUser(name: $name) {
      name
    }
  }
`

// TODO: Page based pagination
// 1. Manage state that store what page the user is on
// 2. Next and Prev buttons that mutate the state
// 3. Pass in `limit` and `skip` to the `useQuery` variables
// 4. Test it out !

// TODO: Infinite loading
// 1. Give the `updateData` function to the useQuery options
// 2. It has the following signature: (prevData, newData) => data
// 3. The updateData function should manipluate data.users
// 4. data.user will append the new user to the prevData
// 5. Test it out!

export default function ListUsers () {
  const [name, setName] = useState('')

  const {
    data = { users: [] },
    refetch: refetchUsers
  } = useQuery(LIST_USERS_QUERY)

  const [createUser] = useMutation(CREATE_USER_MUTATION)

  async function createNewUser() {
    await createUser({ variables: { name } })
    setName('')
    refetchUsers()
  }

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {data.users.map((user, i) => <li key={i}>
          {user.name}
        </li>)}
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
