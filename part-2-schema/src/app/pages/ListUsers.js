import React from 'react'
import { useQuery } from 'graphql-hooks'

const LIST_USERS_QUERY = `
  query ListUsersQuery {
    users {
      name
    }
  }
`

export default function ListUsers () {
  const { loading, data = { users: [] }, error } = useQuery(LIST_USERS_QUERY)

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

  return (
    <ul>
      {data.users.map(user => <li>
        {user.name}
      </li>)}
    </ul>
  )
}