const fastifyGQL = require('fastify-gql')

const users = [
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

const schema = `
  type User {
    name: String
  }

  type Query {
    users(skip: Int, limit: Int): [User]
  }
`

const resolvers = {
  Query: {
    users() {
      return users
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
