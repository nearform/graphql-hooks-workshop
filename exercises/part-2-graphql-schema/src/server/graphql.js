const fastifyGQL = require('fastify-gql')

const userList = [
  {
    name: 'Brian'
  },
  {
    name: 'Jack'
  },
  {
    name: 'Joe'
  },
  {
    name: 'Kristin'
  }
]

// TODO
// 1. Add The Mutation type to the schema
// 2. Add a `createUser` mutation
// 3. Create user will take `name` parameter, which should be required
// 4. The `createUser` mutation should return a User type.
const schema = `
  type User {
    name: String
  }

  type Query {
    users: [User]
  }
`

// TODO
// 1. Add the Mutation resolver that implements the schema above
// 2. `createUser` should mutate the userList variable, adding the new user to it
const resolvers = {
  Query: {
    users() {
      return userList
    }
  }
}

function registerGraphQL(fastify, opts, next) {
  fastify.register(fastifyGQL, {
    schema,
    resolvers,
    graphiql: true
  })

  next()
}

module.exports = registerGraphQL
