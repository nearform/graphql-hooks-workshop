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

// TODO: Update the schema
// 1. Add two parameters to users query limit and skip

const schema = `
  type User {
    name: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(name: String!): User
  }`

// TODO: Update the resolvers
// 1. Handle the limit and skip arguments within the users resolver
// 2. Test out the query and the new arguments in /graphiql

const resolvers = {
  Query: {
    users() {
      return userList
    }
  },
  Mutation: {
    createUser(_, user) {
      userList.push(user)
      return user
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
