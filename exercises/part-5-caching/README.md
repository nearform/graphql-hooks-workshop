# Part 5 - graphQL-hooks Caching

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
