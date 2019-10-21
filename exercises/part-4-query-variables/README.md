# Part 4 - graphQL-hooks Query Variables

### Goals

Ability to paginate between users


### Implementation Details

1. Update the schema: users query to accept 2 new parameters `limit` and `skip`
2. Update the resolver to handle both parameters
3. Test the queries out on /graphiql
4. Update the Component
  - Manage state that store what page the user is on
  - Next and Prev buttons that mutate the state
  - Pass in `limit` and `skip` to the `useQuery` variables
5. Test it out!
