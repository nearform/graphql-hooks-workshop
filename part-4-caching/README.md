# Part 4 - graphQL-hooks-memcache

- Caching
- `npm i graphql-hooks-memcache`
- Update the client provider
- Describe the caching implementation is document based, we create a hash of the operation and it’s options
- Store it in a simple k/v store
- Demonstrate the caching works


## Fill in
- Install graphql-hooks-memcache
  `npm install graphql-hooks-memcache --save`

- Modify `src/client/js/app-shell.js`
  ```js
  import memCache from 'graphql-hooks-memcache'

  const client = new GraphQLClient({
    url: '/graphql',
    cache: memCache({ initialState })
  })
  ```
