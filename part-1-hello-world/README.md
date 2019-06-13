# Part 1 - hello world (graphql/fastify/react)

- Set up a GraphQL server (clone repo, go to folder 1, part-1-hello-world)
- `npm install`
- `npm run watch`
- view site in browser: [http://localhost:3000](localhost:3000)
- Fix any issues with people
- install graphiQL - to view data (separate viewing)
- Visit graphQL endpoint and demonstrate

## Fill in

- Install fastify-gql

  ```npm install fastify-gql```

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


## GraphiQL

http://127.0.0.1:3000/graphiql.html
