# Part 5 - graphQL-hooks-ssr

- SSR
- Npm i graphql-hooks-ssr
- Describe it’s implementation a little
- Finds all the useQuery’s and resolves them, re-renders and verify all queries have been resolved
- Populates the cache with all the queries
- Serialises the cache in the html payload to the app
- App code then parses the JSON and passes it to memcache as its initial value
- Update the code & demonstrate it works

## Fill in

- Install `graphql-hooks-ssr`
  `npm install graphql-hooks-ssr --save`

- Modify `src/server/handlers/app-shell.js`
  ```js
  const { getInitialState } = require('graphql-hooks-ssr')

  const App = (
    <ClientContext.Provider value={client}>
      <AppShell />
    </ClientContext.Provider>
  )

  const initialState = await getInitialState({ App, client })
  const scripts = await renderScripts({ initialState })

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
