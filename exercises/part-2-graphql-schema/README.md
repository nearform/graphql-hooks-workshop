# Part 2: GraphQL Schema

### Goals

- Add a new mutation that allows us to create a new user

### Prerequisites

1. Install deps: `npm i`
2. Run the app: `npm run watch` -> `localhost:3000`

### Implementation Details

1. Add The Mutation type to the schema
2. Add a `createUser` mutation
3. Create user will take `name` parameter, which should be required
4. The `createUser` mutation should return a User type.
5. Add the Mutation resolver that implements the schema above
6. `createUser` should mutate the userList variable, adding the new user to it
