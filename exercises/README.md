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

## [Part 2 - GraphQL Schema for connecting with `graphql-hooks`](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-2-schema)

- Describe what we’re trying to build
- List of ‘post’ and a form that creates a new one
- create dummy data ?

## [Part 3 - graphQL-hooks](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-3-hooks)

- Describe what GraphQL-hooks does
- npm i graphql-hooks
- Update the front-end to use ClientProvider
- Write a test component that uses useQuery
- Verify everything is working
- Now C&P the code the renders the list of stories - minus the graphql-hooks logic
- useQuery for the list
- useMutation for the form -> move to a later step...
- Verify that both work / fix people issues

## [Part 4 - graphQL-hooks-memcache](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-4-caching)

- Caching
- `npm i graphql-hooks-memcache`
- Update the client provider
- Describe the caching implementation is document based, we create a hash of the operation and it’s options
- Store it in a simple k/v store
- Demonstrate the caching works

## [Part 5 - graphQL-hooks-ssr](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-5-ssr)

- SSR
- Npm i graphql-hooks-ssr
- Describe it’s implementation a little
- Finds all the useQuery’s and resolves them, re-renders and verify all queries have been resolved
- Populates the cache with all the queries
- Serialises the cache in the html payload to the app
- App code then parses the JSON and passes it to memcache as its initial value
- Update the code & demonstrate it works


## [Part 6 - graphQL pagination](https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises/part-6-pagination)

- Pagination
- 2 types, page based or infinite scrolling
- Demonstrate both

## Finale

- Next.js example
- If we have time, do the rewrite live
- Else clone `with-graphql-hooks` example
- Compare the code
- Compare the bundle sizes
