# Part 1 - hello world (graphql/fastify/react)

- Set up a GraphQL server
  - clone repo
  `git clone git@github.com:nearform/graphql-hooks-workshop.git`
  - change directory to `part-1-hello-world`
- `npm install`
- `npm run watch`
- View site in browser: http://localhost:3000
- Fix installation issues
- View GraphiQL interface http://localhost:3000/graphiql.html

## Fill in

- Install fastify-gql

  ```npm install fastify-gql --save```

- Setup `fastify-gql` as a plugin for `fastify` server (`src/server/index.js`)

  ```js
    const graphqlPlugin = require('./graphql')

    app.register(graphqlPlugin)
  ```

- Create `src/graphql/index.js`

  ```js
  const fastifyGQL = require('fastify-gql')

  const schema = require('./schema')
  const resolvers = require('./resolvers')

  function registerGraphQL(fastify, opts, next) {
    fastify.register(fastifyGQL, {
      schema,
      resolvers,
      graphiql: true
    })

    next()
  }

  registerGraphQL[Symbol.for('skip-override')] = true

  module.exports = registerGraphQL
  ```

- Setup `src/server/graphql/resolvers.js`

  ```js
  const users = []

  module.exports = {
    Query: {
      users: (_, { skip = 0, limit }) => {
        const end = limit ? skip + limit : undefined
        return users.slice(skip, end)
      },
      firstUser: () => users[0],
      hello: (_, { name }) => `Hello ${name}`
    },
    Mutation: {
      createUser: (_, user) => {
        users.push(user)
        return user
      }
    }
  }
  ```

- Setup `src/server/graphql/schema.js`
  ```js
  module.exports = `
    type User {
      name: String
    }

    type Query {
      users(skip: Int, limit: Int): [User]
      firstUser: User
      hello(name: String): String
    }

    type Mutation {
      createUser(name: String!): User
    }
  `
  ```
