# GraphQL Workshop:

## Introduction

- React Hooks
- GraphQL
- Setup
  - Node v10.16.0
  - clone github repository
  `git clone git@github.com:nearform/graphql-hooks-workshop.git`

## [Part 1 - hello world](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-1-hello-world)

- Goals
  - Get a GraphQL Server up and running
  - Explore GraphiQL
- Stack
  - Node.js
  - Fastify
  - React
  - GraphQL
- Hello World Setup
  - cd exercises/part-1-hello-world
  - `npm install`
  - `npm run watch`
  - http://localhost:3000
- In the browser
  - Navigate to the 'List Users' Page
  - This is just a Skeleton
  - It is not connected to GraphQL... yet
- Look at `src/server/graphql.js`
  - fastify-gql module
  - data
  - schema
  - resolvers
  - `graphiql: true`
- GraphiQL
  - an in-browser IDE for exploring GraphQL
  - http://localhost:3000/graphiql.html
  - Run this Query
    ```
      {
        users {
          name
        }
      }
    ```

## [Part 2 - GraphQL Schema](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-2-skeleton)

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
           return users
         }
       },
       Mutation: {
         createUser: (_, user) => {
           users.push(user)
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
  - Test it!
    ```
      {
        users {
          name
        }
      }
    ```

## [Part 3 - graphql-hooks](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-3-graphql-hooks)

- Describe what GraphQL-hooks does
- `npm install graphql-hooks --save`
- Update the front-end to use ClientProvider
- import `useQuery` for the list
- import `useMutation` for the form
- Verify that both work and fix any issues

## [Part 4 - graphQL-hooks-memcache](https://github.com/nearform/graphql-hooks-workshop/tree/master/part-4-caching)

- `npm install graphql-hooks-memcache --save`
- `npm install @reach/router --save`
- Update the client provider
- The caching implementation is document based
- Create a hash of the operation and its options
- Store it in a simple k/v store
- Demonstrate the caching works by clicking on the Test Link

## [Part 5 - graphQL-hooks-ssr](https://github.com/nearform/graphql-hooks-workshop/tree/master/part-5-ssr)

- SSR - Server Side Rendering
- `npm install graphql-hooks-ssr --save`
- Implementation
  - Finds all the `useQuery`s and resolves them
  - Re-renders and verifies all queries have been resolved
  - Populates the cache with all of the queries
  - Serialises the cache in the html payload to the app
  - Parses the JSON and passes it to memcache as its initial value
- Update the code and fix issues
- View source code to demonstrate it works


## [Part 6 - graphQL pagination](https://github.com/nearform/graphql-hooks-workshop/tree/master/part-6-pagination)

- 2 types of Pagination
  - page based
  - infinite scrolling
- Demonstrate both

## Finale

- Next.js example
- If we have time, do the rewrite live
- Else clone `with-graphql-hooks` example
- Compare the code
- Compare the bundle sizes
