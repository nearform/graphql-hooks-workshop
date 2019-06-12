import React from 'react'
import { useQuery } from 'graphql-hooks'

const LIST_POSTS_QUERY = `
  query ListPostsQuery {
    posts {
      title
    }
  }
`

export default function ListPosts () {
  const { loading, data = { posts: [] }, error } = useQuery(LIST_POSTS_QUERY)

  if (loading) {
    return <div>
      Loading...
    </div>
  }

  if (error) {
    return <div>
      Error occured.
    </div>
  }

  return (
    <ul>
      {data.posts.map(post => <li>
        {post.title}
      </li>)}
    </ul>
  )
}