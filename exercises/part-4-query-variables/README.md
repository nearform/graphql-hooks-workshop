# Part 4: Pagination

### Goals

- Ability to paginate between users
- Ability to infinitly load users

### Prerequisites

1. Install deps: `npm i`
2. Run the app: `npm run watch` -> `localhost:3000`

### Implementation Details

*Pagination*
1. Update the schema: users query to accept 2 new parameters `limit` and `skip`
2. Update the resolver to handle both parameters
3. Test the queries out on /graphiql
4. Update the Component
  - Manage state that store what page the user is on
  - Next and Prev buttons that mutate the state
  - Pass in `limit` and `skip` to the `useQuery` variables
5. Test it out!

*Infinite Loading*
1. Give the `updateData` function to the useQuery options
2. It has the following signature: (prevData, newData) => data
3. The `updateData` function should manipluate data.users
4. Append `data.users` to the previous `data.users`
5. Test it out!
