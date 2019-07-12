# Part 6 - graphQL-hooks SSR

- SSR - Server Side Rendering
- SSR Setup
  - change directory to `exercises/part-6-ssr`
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
