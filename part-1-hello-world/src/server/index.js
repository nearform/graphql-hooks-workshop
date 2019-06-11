const path = require('path')
const fastify = require('fastify')

// handlers
const appShellHandler = require('./handlers/app-shell')

module.exports = () => {
  const app = fastify({
    logger: true
  })

  app.register(require('fastify-static'), {
    root: path.join(process.cwd(), 'build/public')
  })

  app.get('/', appShellHandler)

  app.listen(3000)
}
