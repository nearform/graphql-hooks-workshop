# Part 1 - Hello World
- Goals
  - Get a GraphQL Server up and running
  - Explore GraphiQL
- Stack
  - Node.js
  - Fastify
  - React
  - GraphQL
- Hello World Setup
  - change directory to `exercises/part-1-hello-world`
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
  - Try running a query
    ```
      {
        users {
          name
        }
      }
    ```
