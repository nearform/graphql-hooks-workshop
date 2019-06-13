import React, { Fragment } from 'react'

import { useQuery, useManualQuery, useMutation } from 'graphql-hooks'

const LIST_USERS_QUERY = `
  query ListUsersQuery {
    users {
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

const CREATE_USER_MUTATION = `
  mutation CreateUser($name: String!) {
    createUser(name: $name) {
      name
    }
  }
`

function ListUsers () {
  const [name, setName] = React.useState('')
  const { loading, data = { users: [] }, error, refetch: refetchUsers } = useQuery(LIST_USERS_QUERY)

  const [createUser] = useMutation(CREATE_USER_MUTATION)

    const [getFirstUser, { data: firstUserData }] = useManualQuery(
      GET_FIRST_USER_QUERY
    )

    async function createNewUser() {
      await createUser({ variables: { name } })
      setName('')
      refetchUsers()
    }

    return (
      <div>
        <h2>Home page</h2>
        {loading && <div>...loading</div>}
        {error && <div>error occured</div>}
        {!loading && !error && data.users && (
          <Fragment>
            List of users:
            {data.users.length === 0 && <span> No users found</span>}
            {!!data.users.length && (
              <ul>
                {data.users.map((user, i) => (
                  <li key={i}>{user.name}</li>
                ))}
              </ul>
            )}
          </Fragment>
        )}
        <div>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button onClick={createNewUser}>Create User</button>
        </div>
        <br />
        <button onClick={getFirstUser}>Manually trigger Query</button>
        <div>First User: {firstUserData && firstUserData.firstUser.name}</div>
      </div>
    )
}
export default ListUsers
