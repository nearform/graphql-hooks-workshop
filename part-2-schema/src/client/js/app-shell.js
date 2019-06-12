import React from 'react'
import { hydrate } from 'react-dom'
import AppShell from '../../app/AppShell'

const App = (
  <AppShell />
)

hydrate(App, document.getElementById('app-root'))
