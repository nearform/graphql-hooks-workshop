module.exports = `
  type Post {
    title: String
    body: String
  }
  type Query {
    posts: [Post]
  }
  type Mutation {
    createPost(title: String!, body: String!): Post
  }
`
