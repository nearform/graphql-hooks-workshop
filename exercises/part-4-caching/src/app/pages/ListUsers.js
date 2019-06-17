import React, { useState } from 'react'
import { useQuery, useMutation } from 'graphql-hooks'

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

export default function ListUsers () {

  const [name, setName] = useState('')

  const { loading, data = { users: [] }, error, refetch: refetchUsers } = useQuery(LIST_USERS_QUERY)

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
