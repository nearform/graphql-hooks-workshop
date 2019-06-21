import React from 'react'
import { render } from 'react-dom'

import AppShell from '../../app/AppShell'

// graphql-hooks
import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
  url: '/graphql',
})

const App = (
  <ClientContext.Provider value={client}>
    <AppShell />
  </ClientContext.Provider>
)

render(App, document.getElementById('app-root'))
