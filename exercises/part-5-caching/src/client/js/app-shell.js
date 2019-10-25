import React from 'react'
import { render } from 'react-dom'

import AppShell from '../../app/AppShell'

// graphql-hooks
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import memCache from 'graphql-hooks-memcache'

// TODO
// 1. Import memCache from graphql-hooks (default export)
// 2. Instantiate memCache and pass it to GraphQLClient as the `cache` option
const client = new GraphQLClient({
  url: '/graphql'
})

const App = (
  <ClientContext.Provider value={client}>
    <AppShell />
  </ClientContext.Provider>
)

render(App, document.getElementById('app-root'))
