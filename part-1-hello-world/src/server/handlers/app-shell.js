const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { ServerLocation } = require('@reach/router')

// components
const { default: AppShell } = require('../../app/AppShell')

// helpers
const { getBundlePath } = require('../helpers/manifest')

function renderHead() {
  return `
    <head>
      <title>Hello World!</title>
    </head>
  `
}

async function appShellHandler(req, reply) {
  const head = renderHead()

  const App = (
    <ServerLocation url={req.raw.url}>
        <AppShell />
    </ServerLocation>
  )

  const content = ReactDOMServer.renderToString(App)

  const html = `
      <!DOCTYPE html>
      <html>
        ${head}
        <body>
          <div id="app-root">${content}</div>
        </body>
      </html>
    `

  reply.type('text/html').send(html)
}

module.exports = appShellHandler
