# Part 3 - graphQL-hooks

- Describe what GraphQL-hooks does
- npm i graphql-hooks
- Update the front-end to use ClientProvider
- Write a test component that uses useQuery
- Verify everything is working
- Now C&P the code the renders the list of stories - minus the graphql-hooks logic
- useQuery for the list
- useMutation for the form -> move to a later step...
- Verify that both work / fix people issues

## Fill in
- Install `graphql-hooks`
  `npm install graphql-hooks --save`

- Modify `src/app/pages/ListUsers.js`

  ```js
  import { useQuery } from 'graphql-hooks'

  const LIST_USERS_QUERY = `
    query ListUsersQuery {
      users {
        name
      }
    }
  `

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
  ```


- Modify `src/app/pages/NewUser.js`
  ```js
  import { useMutation } from 'graphql-hooks'

  const CREATE_USER_MUTATION = `
    mutation CreateUser($name: String!) {
      createUser(name: $name) {
        name
      }
    }
  `

  const [createUser] = useMutation(CREATE_USER_MUTATION)
  const createNewUser = async () => {
    await createUser({ variables: { name } })
    navigate('../')
  }
  ```
