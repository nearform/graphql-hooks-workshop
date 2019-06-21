# Part 2 - GraphQL schema

- Goals
  - Update the GraphQL schema to Create a User
  - Test it with GraphiQL
- GraphQL Schema Setup
  - change directory to `exercises/part-2-schema`
  - `npm install`
  - `npm run watch`
  - http://localhost:3000
- Modify schema in `src/server/graphql.js`
  ```
  const schema = `
    type User {
      name: String
    }

    type Query {
      users: [User]
    }

    type Mutation {
      createUser(name: String!): User
    }
  `
 ```
 - Modify resolvers in `src/server/graphql.js`
   ```
     const resolvers = {
       Query: {
         users() {
           return users
         }
       },
       Mutation: {
         createUser: (_, user) => {
           users.push(user)
           return user
         }
       }
     }
  ```
  - Test it in GraphiQL
    - http://localhost:3000/graphiql.html
    - Try this query
      ```
      mutation CreateUser($name: String!){
        createUser(name: $name) {
          name
        }
      }
      ```
    - With these Query variables
    ```
    {
      "name": "bob"
    }
    ```
  - Test it!
    ```
      {
        users {
          name
        }
      }
    ```
