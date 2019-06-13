# Part 5 - graphQL-hooks-ssr

- SSR - Server Side Rendering
- `npm install graphql-hooks-ssr --save`
- Implementation
  - Finds all the `useQuery`s and resolves them
  - Re-renders and verifies all queries have been resolved
  - Populates the cache with all of the queries
  - Serialises the cache in the html payload to the app
  - Parses the JSON and passes it to memcache as its initial value
- Update the code and fix issues
- View source code to demonstrate it works

## Fill in

- Install `graphql-hooks-ssr`
  - `npm install graphql-hooks-ssr --save`
- Install `isomorphic-unfetch`
  - `npm install isomorphic-unfetch --save`

- Modify `src/server/handlers/app-shell.js`
  ```js
  const { getInitialState } = require('graphql-hooks-ssr')

  <...>

  const client = new GraphQLClient({
    url: 'http://127.0.0.1:3000/graphql',
    cache: memCache(),
    fetch: require('isomorphic-unfetch'),
    logErrors: true
  })

  const App = (
    <ClientContext.Provider value={client}>
      <AppShell />
    </ClientContext.Provider>
  )

  const initialState = await getInitialState({ App, client })
  const content = ReactDOMServer.renderToString(App)
  const scripts = await renderScripts({ initialState })

  <...>

  async function renderScripts({ initialState }) {
    const appShellBundlePath = await getBundlePath('app-shell.js')
    return `
      <script type="text/javascript">
        window.__INITIAL_STATE__=${JSON.stringify(initialState).replace(
          /</g,
          '\\u003c'
        )};
      </script>
      <script src="${appShellBundlePath}"></script>
    `
  }
  ```

- Modify `src/client/js/app-shell.js` (replace 'render' with 'hydrate')
  ```js
  import { hydrate } from 'react-dom'

  <...>

  hydrate(App, document.getElementById('app-root'))
  ```
