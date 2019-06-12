const posts = []

module.exports = {
  Query: {
    posts: (_, {}) => posts
  },
  Mutation: {
    createPost: (_, post) => {
      posts.push(post)
      return post
    }
  }
}