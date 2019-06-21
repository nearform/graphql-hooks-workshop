# Part 3 - graphql-hooks

- Describe what graphql-hooks does
- `npm install graphql-hooks --save`
- Update the front-end to use ClientProvider
- import `useQuery` for the list
- import `useMutation` for the form
- Verify that both work and fix any issues

## Fill in
- Install `graphql-hooks`
  `npm install graphql-hooks --save`

- Modify `src/app/pages/ListUsers.js`

  ```js
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
  ```
- Update title in `src/app/AppShell.js`

    ```js

    <h1>GraphQL Hooks</h1>

    ```
- Modify `src/client/js/app-shell.js`

  ```js

    // graphql-hooks
    import { GraphQLClient, ClientContext } from 'graphql-hooks'

    const client = new GraphQLClient({
      url: '/graphql'
    })

    const App = (
      <ClientContext.Provider value={client}>
        <AppShell />
      </ClientContext.Provider>
    )

  ```
