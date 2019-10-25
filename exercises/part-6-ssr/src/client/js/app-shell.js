import React from 'react'
import { render } from 'react-dom'

import AppShell from '../../app/AppShell'

// graphql-hooks
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import memCache from 'graphql-hooks-memcache'

// TODO
// 1. Grap the initialState from the window global we defined in the server
// 2. Pass that to memCache(options) as option.initialState

const client = new GraphQLClient({
  url: '/graphql',
  cache: memCache()
})

const App = (
  <ClientContext.Provider value={client}>
    <AppShell />
  </ClientContext.Provider>
)

render(App, document.getElementById('app-root'))
