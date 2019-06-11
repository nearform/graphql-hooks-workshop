# GraphQL Workshop:

## Introduction

- What is graphQL
- Back story
- Ask if anyone has used Apollo / Relay

## [Part 1 - hello world (graphql/fastify/react)](https://github.com/nearform/graphql-hooks-workshop/tree/master/part-1-hello-world)

- Set up a GraphQL server (clone repo, go to folder 1, part-1-hello-world)
- `npm install`
- `npm run watch`
- view site in browser: [http://localhost:3000](localhost:3000)
- Fix any issues with people
- install graphiQL - to view data (separate viewing)
- Visit graphQL endpoint and demonstrate

## [Part 2 - graphQL schema for connecting with `graphql-hooks`](https://github.com/nearform/graphql-hooks-workshop/tree/master/part-2-schema)

- Describe what we’re trying to build
- List of ‘post’ and a form that creates a new one
- create dummy data ?

## [Part 3 - graphQL-hooks](https://github.com/nearform/graphql-hooks-workshop/tree/master/part-3-hooks)

- Describe what GraphQL-hooks does
- npm i graphql-hooks
- Update the front-end to use ClientProvider
- Write a test component that uses useQuery
- Verify everything is working
- Now C&P the code the renders the list of stories - minus the graphql-hooks logic
- useQuery for the list
- useMutation for the form -> move to a later step...
- Verify that both work / fix people issues

## [Part 4 - graphQL-hooks-memcache](https://github.com/nearform/graphql-hooks-workshop/tree/master/part-4-caching)

- Caching
- `npm i graphql-hooks-memcache`
- Update the client provider
- Describe the caching implementation is document based, we create a hash of the operation and it’s options
- Store it in a simple k/v store
- Demonstrate the caching works

## [Part 5 - graphQL-hooks-ssr](https://github.com/nearform/graphql-hooks-workshop/tree/master/part-5-ssr)

- SSR
- Npm i graphql-hooks-ssr
- Describe it’s implementation a little
- Finds all the useQuery’s and resolves them, re-renders and verify all queries have been resolved
- Populates the cache with all the queries
- Serialises the cache in the html payload to the app
- App code then parses the JSON and passes it to memcache as its initial value
- Update the code & demonstrate it works


## [Part 6 - graphQL pagination](https://github.com/nearform/graphql-hooks-workshop/tree/master/part-6-pagination)

- Pagination
- 2 types, page based or infinite scrolling
- Demonstrate both

## Finale

- Next.js example
- If we have time, do the rewrite live
- Else clone `with-graphql-hooks` example
- Compare the code
- Compare the bundle sizes
