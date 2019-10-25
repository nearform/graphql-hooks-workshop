# Part 3: graphql-hooks

### Goals

- Integrate `graphql-hooks`
- List users from graphql
- Create user form to call our `createUser` mutation

### Prerequisites

1. Install deps: `npm i`
2. Install the library: `graphql-hooks`
3. Run the app: `npm run watch` -> `localhost:3000`

### Implementation Details

*Create the GraphQL Hooks Client*
1. Go to `src/client/js/app-shell.js`
2. Import `GraphQLClient` from `graphql-hooks`
3. Instantiate a GraphQLClient
4. It requries an object, with a required property `url`
5. This points to our GraphQL API, so it should be `/graphql` matching the server url

*Wrap the AppShell in GraphQL Hooks Provider*
1. Import ClientContext from `graphql-hooks`
2. Render it as the AppShell's parent: <ClientContext.Provider>
3. Pass in the value prop as our client we just created `value={client}`
