# Part 6 - graphQL pagination

- Pagination
- 2 types, page based or infinite scrolling
- Demonstrate both

## Fill in
- Create `src/app/pages/PaginationPage.js`
  ```js
  import React from 'react'

  import { useQuery } from 'graphql-hooks'

  const USERS_QUERY = `
    query UsersQuery($skip: Int, $limit: Int) {
      users(skip: $skip, limit: $limit) {
        name
      }
    }
  `

  function PaginationPage() {
    const [page, setPage] = React.useState(1)
    const { data } = useQuery(USERS_QUERY, {
      variables: {
        limit: 1,
        skip: page - 1
      }
    })

    return (
      <div>
        <h2>Pagination</h2>
        <ul>
          {data &&
            data.users &&
            data.users.map((user, i) => <li key={i}>{user.name}</li>)}
        </ul>
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    )
  }

  export default PaginationPage
  ```

- Modify `src/app/AppShell.js`
  ```js
  import PaginationPage from './pages/PaginationPage'

  <PaginationPage path="/users" />
  ```
