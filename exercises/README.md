# GraphQL Workshop:

## Introduction

- What are React-Hooks?
- What is GraphQL?
- Ask if anyone has used Apollo / Relay
- Introducing GraphQL-Hooks!

## [Part 1 - Hello World](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-1-hello-world)

- Goals
  - Get a GraphQL Server up and running
  - Explore GraphiQL
- Stack
  - Node.js
  - Fastify
  - React
  - GraphQL
- Hello World Setup
  - change directory to `part-1-hello-world`
  - `npm install`
  - `npm run watch`
  - http://localhost:3000
- In the browser
  - Navigate to the 'List Users' Page
  - This is just a Skeleton
  - It is not connected to GraphQL... yet
- Look at `src/server/graphql.js`
  - fastify-gql module
  - schema
  - resolvers
  - `graphiql: true`
- GraphiQL
  - an in-browser IDE for exploring GraphQL
  - http://localhost:3000/graphiql.html
  - Try running a query
    ```
      {
        users {
          name
        }
      }
    ```

## [Part 2 - GraphQL Schema](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-2-schema)

- Goals
  - Update the GraphQL schema to Create a User
  - Test it with GraphiQL
- GraphQL Schema Setup
  - change directory to `exercises/part-2-schema`
  - `npm install`
  - `npm run watch`
  - http://localhost:3000
- Modify schema in `src/server/graphql.js`
  ```
  const schema = `
    type User {
      name: String
    }

    type Query {
      users: [User]
    }

    type Mutation {
      createUser(name: String!): User
    }
  `
 ```
- Modify resolvers in `src/server/graphql.js`
   ```
    const resolvers = {
      Query: {
        users() {
          return userList
        }
      },
      Mutation: {
        createUser(_, user) {
          userList.push(user)
          return user
        }
      }
    }
  ```
- Test it in GraphiQL
  - http://localhost:3000/graphiql.html
  - Try this query
    ```
    mutation CreateUser($name: String!){
      createUser(name: $name) {
        name
      }
    }
    ```
  - With these Query variables
  ```
  {
    "name": "bob"
  }
  ```
- Test it - Fetch all users
  ```
    {
      users {
        name
      }
    }
  ```

## [Part 3 - graphqlL-hooks](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-3-hooks)

- Goals
  - See graphql-hooks in action
  - Connect the back-end data to the front-end webpage
  - Retrieve a list of users from an API using a graphql hook
- graphql-hooks Setup
  - change directory to `exercises/part-3-graphql-hooks`
  - `npm install`
  - `npm run watch`
  - http://localhost:3000
- Install `graphql-hooks`
  `npm install graphql-hooks`

## [Part 4 - Query Variables](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-4-query-variables)

- Goal
  - Implement Pagination
- graphql-hooks Setup
  - change directory to `exercises/part-4-query-variables`
  - `npm install`
  - `npm run watch`
  - http://localhost:3000


## [Part 5 - graphQL-hooks-caching](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-4-caching)

- Goal
  - Avoid repeating identical requests
- Caching Setup
  - change directory to `exercises/part-4-caching`
  - `npm install`
  - `npm run watch`
  - http://localhost:3000
- `npm install graphql-hooks-memcache`
- Update the client provider
- The caching implementation is document based
- Create a hash of the operation and its options
- Store it in a simple k/v store

## [Part 6 - graphQL-hooks-ssr](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-5-ssr)

- SSR - Server Side Rendering
- SSR Setup
  - change directory to `exercises/part-5-ssr`
  - `npm install`
  - `npm run watch`
  - http://localhost:3000
- `npm install graphql-hooks-ssr`
- `npm install isomorphic-unfetch`
- Implementation
  - Finds all the `useQuery`s and resolves them
  - Re-renders and verifies all queries have been resolved
  - Populates the cache with all of the queries
  - Serialises the cache in the html payload to the app
  - Parses the JSON and passes it to memcache as its initial value
  - Hydrate instead of Render

## [Part 7 - Completed](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-7-completed)
