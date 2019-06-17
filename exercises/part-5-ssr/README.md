# Part 4 - graphQL-hooks Caching

- `npm install graphql-hooks-memcache --save`
- `npm install @reach/router --save`
- Update the client provider
- The caching implementation is document based
- Create a hash of the operation and its options
- Store it in a simple k/v store
- Demonstrate the caching works by clicking on the Test Link

## Fill in
- Install graphql-hooks-memcache
  `npm install graphql-hooks-memcache --save`

- Modify `src/client/js/app-shell.js`
  ```js
    import memCache from 'graphql-hooks-memcache'

    const initialState = window.__INITIAL_STATE__
    const client = new GraphQLClient({
      url: '/graphql',
      cache: memCache({ initialState })
    })
  ```
- Test Caching
  - Install @reach/router for test navigation
    `npm install @reach/router --save`
  - Modify `src/app/pages/ListUser.js`
    ```js
      import { useQuery, useMutation, useManualQuery } from 'graphql-hooks'

      <...>

      const GET_FIRST_USER_QUERY = `
        query FirstUser {
          firstUser {
            name
          }
        }
      `

      <...>

      const [getFirstUser, { data: firstUserData }] = useManualQuery(
        GET_FIRST_USER_QUERY
      )

      <...>

      <div>
        <br />Trigger query, click 'Test Cache' and then 'Home' to test cache
      </div>
      <button onClick={getFirstUser}>Manually trigger Query</button>
      <div>First User: {firstUserData && firstUserData.firstUser.name}</div>

    ```
  - Create `src/app/pages/TestPage.js`
    ```js
      import React from 'react'

      export default function TestPage() {

        return (
          <div>
            <br />Return Home to test if data is cached without querying
          </div>
        )
      }
    ```
  - Create `src/app/pages/NotFoundPage.js`
    ```js
      import React from 'react'

      function NotFoundPage() {
        return <div>404 - Not Found</div>
      }

      export default NotFoundPage

    ```
  - Modify `src/app/AppShell.js`
    ```js
      import { Link, Router } from '@reach/router'

      // components
      import NotFoundPage from './pages/NotFoundPage'
      import ListUsers from './pages/ListUsers'
      import TestPage from './pages/TestPage'

      <...>

      <nav>
        <Link to="/">Home</Link>|
        <Link to="/test">Test Cache</Link>
      </nav>
      <Router>
        <ListUsers path='/' />
        <TestPage path="/test" />
        <NotFoundPage default />
      </Router>

    ```
