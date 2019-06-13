import React, { useState } from 'react'
import { useMutation } from 'graphql-hooks'

const CREATE_USER_MUTATION = `
  mutation CreateUser($name: String!) {
    createUser(name: $name) {
      name
    }
  }
`

export default function NewUser ({ navigate }) {
  const [name, setName] = useState('')

  const [createUser] = useMutation(CREATE_USER_MUTATION)

  const createNewUser = async () => {
    await createUser({ variables: { name } })
    navigate('../')
  }

  return <>
    <br />
    <label>Name:
      <input type='text' onChange={e => setName(e.target.value)} value={name} />
    </label>
    <button onClick={createNewUser}>Save</button>
  </>
}
