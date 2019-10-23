import React, { useState } from 'react'
import { useQuery, useMutation } from 'graphql-hooks'

const LIST_USERS_QUERY = `
  query ListUsersQuery($limit: Int, $skip: Int) {
    users(limit: $limit, skip: $skip) {
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
  const [page, setPage] = useState(1)

  const {
    data = { users: [] },
    refetch: refetchUsers
  } = useQuery(LIST_USERS_QUERY, {
    variables: {
      limit: 1,
      skip: page - 1
    }
  })

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
      <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
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
