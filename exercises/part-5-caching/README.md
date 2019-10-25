# Part 5: Caching

We can cache each graphql request to avoid repeating identical requests. Caching is implemented as a _plugin_ to `graphql-hooks`. We've created an in-memory cache available through `graphql-hooks-memcache`.

`graphql-hooks-memcache` stores a hash of the operation and it's options, and the result of that query in a key-value store.

### Goals

- Cache each graphql request using graphql-hooks-memcache

### Prerequisites

1. Install deps: `npm i`
2. Install `graphql-hooks-memcache`
3. Run the app: `npm run watch` -> `localhost:3000`

### Implementation

1. Update `src/client/js/app-shell.js` import `graphql-hooks-memcache`
2. Create an instance of memcache and pass it in as the `cache` option to `GraphQLClient`
3. Verify it works by navigating to and from the hompage and list users page.
