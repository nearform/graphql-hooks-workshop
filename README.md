# GraphQL Workshop:

## Introduction

- What is graphQL
- Back story
- Ask if anyone has used Apollo / Relay

## [Part 1 - hello world (graphql/fastify/react)](https://github.com/nearform/graphql-hooks-workshop/tree/master/part-1-hello-world)

- Set up a GraphQL server
  - clone repo
  `git clone git@github.com:nearform/graphql-hooks-workshop.git`
  - change directory to `part-1-hello-world`
- `npm install`
- `npm run watch`
- View site in browser: http://localhost:3000
- Fix installation issues
- View GraphiQL interface http://localhost:3000/graphiql.html

## [Part 2 - graphQL skeleton for connecting with `graphql-hooks`](https://github.com/nearform/graphql-hooks-workshop/tree/master/part-2-skeleton)

- Display a list of 'users'
- Create a new 'user'
- Create a new file: `src/app/pages/ListUsers.js`

## [Part 3 - graphQL-hooks](https://github.com/nearform/graphql-hooks-workshop/tree/master/part-3-hooks)

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
