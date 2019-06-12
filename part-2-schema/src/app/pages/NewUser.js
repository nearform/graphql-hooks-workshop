import React, { useState } from 'react'

export default function NewUser ({ createUser, navigate }) {
  const [name, setName] = useState('')

  const createNewUser = async () => {
    await createUser({ name })
    navigate('../')
  }

  return <>
    <label>
      Name
      <input type='text' onChange={e => setName(e.target.value)} value={name} />
    </label>

    <button onClick={createNewUser}>Save</button>
  </>
}
