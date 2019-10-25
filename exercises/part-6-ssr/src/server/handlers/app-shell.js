const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { ServerLocation } = require("@reach/router");

// graphql-hooks
const { getInitialState } = require("graphql-hooks-ssr");
const { GraphQLClient, ClientContext } = require("graphql-hooks");
const memCache = require("graphql-hooks-memcache");

// helpers
const { getBundlePath } = require("../helpers/manifest");

function renderHead() {
  return `
    <head>
      <title>Hello World!</title>
    </head>
  `;
}

async function renderScripts({ initialState = {} } = {}) {
  const appShellBundlePath = await getBundlePath("app-shell.js");

  // NOTE
  // Here we're serialising the cache's state
  // We'll add code in `src/client/js/app-shell.js` that picks this up
  // and uses it as memcache's initial state on the client
  return `
    <script type="text/javascript">
      window.__INITIAL_STATE__=${JSON.stringify(initialState).replace(
        /</g,
        "\\u003c"
      )};
    </script>
    <script src="${appShellBundlePath}"></script>
  `;
}

// TODO - render the AppShell component
// 1. This should mimic what we've already done in `src/client/js/app-shell.js`
// 2. Create an instance of GraphQLClient(options)
// 3. `options.url` of http://127.0.0.1:3000/graphql
// 4. `options.fetch` Since `fetch` isn't a node global
//     like it is in the browser we need to inject an implmentation
//     let's use require('isomorphic-unfetch')
// 5. options.cache - pass in an instace of memCache
// 6. Require the AppShell component and wrap it in the ClientContext.Provider
// 7. require ReactDOMServer from react-dom/server
// 8. Render the app using `const content = ReactDOMServer.renderToString(App)`
// 9. Place the content inside <div id="app-root">${contnet}</div>
// 10. Verify its rendering the page by viewing the page's source

// TODO: Let the AppShell know what route to render
// 1. require ServerLocation from @reach/router
// 2. Wrap the <ClientContext.Provider> in <ServerLocation url={req.raw.url}>

// TODO: Render the page with the graphql queries resolved
// 1. require getInitialState from graphql-hooks-ssr
// 2. Call *before* ReactDOMServer.renderToString, it passing in the App and client options
// 3. Await the response, storing it in a const called `initialState`
// 4. Pass in `initialState` to renderScripts - check out what it's doing with it!
// 5. Verify the page now render with the data by view the page's source

// Go to `src/client/js/app-shell.js` to finish things off.

async function appShellHandler(req, reply) {
  const head = renderHead();
  const scripts = await renderScripts();

  const html = `
      <!DOCTYPE html>
      <html>
        ${head}
        <body>
          <div id="app-root"></div>
          ${scripts}
        </body>
      </html>
    `;

  reply.type("text/html").send(html);
}

module.exports = appShellHandler;
