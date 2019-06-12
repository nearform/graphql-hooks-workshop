import React from 'react'
import { hydrate } from 'react-dom'
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import AppShell from '../../app/AppShell'

const client = new GraphQLClient({
  url: '/graphql'
})

const App = (
  <ClientContext.Provider value={client}>
    <AppShell />
  </ClientContext.Provider>
)

hydrate(App, document.getElementById('app-root'))
