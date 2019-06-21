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

const schema = `
  type User {
    name: String
  }

  type Query {
    users(skip: Int, limit: Int): [User]
  }

  type Mutation {
    createUser(name: String!): User
  }
`

const resolvers = {
  Query: {
    users (_, { skip = 0, limit }) {
      return limit ?
        userList.slice(skip, skip + limit) :
        userList.slice(skip)
    }
  },
  Mutation: {
    createUser: (_, user) => {
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
