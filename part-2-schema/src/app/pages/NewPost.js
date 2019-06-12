import React, { useState } from 'react'
import { useMutation } from 'graphql-hooks'
import { navigate } from '@reach/router';

const CREATE_POST_MUTATION = `
  mutation CreatePost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      title,
      body
    }
  }
`

export default function NewPost ({ navigate }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const [createPost] = useMutation(CREATE_POST_MUTATION)

  const createNewPost = async () => {
    await createPost({ variables: { title, body } })
    setTitle('')
    setBody('')
    navigate('../')
  }

  return <>
    <label>
      Title
      <input type='text' onChange={e => setTitle(e.target.value)} value={title} />
    </label>

    <label>
      Body
      <textarea onChange={e => setBody(e.target.value)} value={body} />
    </label>

    <button onClick={createNewPost}>Save</button>
  </>
}
