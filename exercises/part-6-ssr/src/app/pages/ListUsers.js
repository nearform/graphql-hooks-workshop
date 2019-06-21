import React, { useState } from 'react'
import { useQuery, useMutation, useManualQuery } from 'graphql-hooks'

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
const GET_FIRST_USER_QUERY = `
  query FirstUser {
    firstUser {
      name
    }
  }
`

export default function ListUsers () {

  const [name, setName] = useState('')

  const { loading, data = { users: [] }, error, refetch: refetchUsers } = useQuery(LIST_USERS_QUERY)

  const [getFirstUser, { data: firstUserData }] = useManualQuery(GET_FIRST_USER_QUERY)

  const [createUser] = useMutation(CREATE_USER_MUTATION)

  async function createNewUser() {
    await createUser({ variables: { name } })
    setName('')
    refetchUsers()
  }

  if (loading) {
    return <div>
      Loading...
    </div>
  }

  if (error) {
    return <div>
      Error occured.
    </div>
  }

  if (!loading && !error && data.users) {
    return (
      <div>
        <div>
          <br />Trigger query, click 'Test Cache' and then 'Home' to test cache
        </div>
        <button onClick={getFirstUser}>Manually trigger Query</button>
        <div>First User: {firstUserData && firstUserData.firstUser.name}</div>
        <h2>Users List</h2>
        <ul>
          {data.users.map((user, i) => <li key={i}>
            {user.name}
          </li>)}
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
}
