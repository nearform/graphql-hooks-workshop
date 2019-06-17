# Part 6 - graphql-hooks Pagination

- 2 types of Pagination
  - page based
  - infinite scrolling
- Demonstrate both

## Fill in
- Create `src/app/pages/PaginationPage.js`
  ```js
  import React, { useState } from 'react'
  import { useQuery } from 'graphql-hooks'

  const USERS_QUERY = `
    query UsersQuery($skip: Int, $limit: Int) {
      users(skip: $skip, limit: $limit) {
        name
      }
    }
  `

  export default function PaginationPage() {

    const [page, setPage] = useState(1)

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
            data.users.map((user, i) =>
              <li key={i}>{user.name}</li>
            )}
        </ul>
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    )
  }
  ```

- Modify `src/app/AppShell.js`
  ```js
  import PaginationPage from './pages/PaginationPage'

  <...>

  <Link to="/users">PaginationPage</Link>

  <...>

  <PaginationPage path="/users" />
  ```

- Modify `src/server/index.js`
  ```js
  app.get('/users', appShellHandler)
  ```
