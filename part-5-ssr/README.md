# Part 5 - graphQL-hooks-ssr

- SSR
- Npm i graphql-hooks-ssr
- Describe it’s implementation a little
- Finds all the useQuery’s and resolves them, re-renders and verify all queries have been resolved
- Populates the cache with all the queries
- Serialises the cache in the html payload to the app
- App code then parses the JSON and passes it to memcache as its initial value
- Update the code & demonstrate it works
