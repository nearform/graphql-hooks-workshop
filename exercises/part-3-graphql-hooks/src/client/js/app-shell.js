import React from 'react'
import { render } from 'react-dom'

import AppShell from '../../app/AppShell'

// TODO: Create the GraphQL Hooks Client
// 1. Import GraphQLClient from graphql-hooks
// 2. Instantiate a GraphQLClient
// 3. It requries an object, with a required property url
// 4. This points to our GraphQL API, so it should be /graphql matching the server url

// TODO: Wrap the AppShell in GraphQL Hooks Provider
// 1. Import ClientContext from graphql-hooks
// 2. Render it as the AppShell's parent: <ClientContext.Provider>
// 3. Pass in the value prop as our client we just created value={client}

const App = (
  <AppShell />
)

render(App, document.getElementById('app-root'))
