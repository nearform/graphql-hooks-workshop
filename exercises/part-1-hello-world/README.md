# Part 1 - hello world
- We will run:
  - node.js
  - fastify
  - react
      - graphQL
    - Set up a GraphQL server
      - clone repo
      `git clone git@github.com:nearform/graphql-hooks-workshop.git`
      - change directory to `part-1-hello-world`
    - `npm install`
    - `npm run watch`
    - View site in browser: http://localhost:3000
    - Fix installation issues
- Look at `src/graphql.js`
  - fastify-gql
  - schema
  - resolvers
  - data
- View GraphiQL interface http://localhost:3000/graphiql.html
- See data by running
  - ```
    {
      users {
        name
      }
    }
    ```
