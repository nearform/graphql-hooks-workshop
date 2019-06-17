// helpers
const { getBundlePath } = require('../helpers/manifest')

function renderHead() {
  return `
    <head>
      <title>Hello World!</title>
    </head>
  `
}

async function renderScripts() {
  const appShellBundlePath = await getBundlePath('app-shell.js')
  return `
    <script src="${appShellBundlePath}"></script>
  `
}

async function appShellHandler(req, reply) {
  const head = renderHead()
  const scripts = await renderScripts()

  const html = `
      <!DOCTYPE html>
      <html>
        ${head}
        <body>
          <div id="app-root"></div>
          ${scripts}
        </body>
      </html>
    `

  reply.type('text/html').send(html)
}

module.exports = appShellHandler
