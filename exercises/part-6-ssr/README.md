# Part 6: graphql-hooks-ssr

### Goals

- Ability to paginate between users
- Ability to infinitly load users

### Prerequisites

1. Install deps: `npm i`
2. Install `graphql-hooks-ssr`
3. Run the app: `npm run watch` -> `localhost:3000`

### Implementation Details

*Server-side rendering plumbing*
1. Update `src/server/handlers/app-shell.js`
1. Update the `appShellHandler` this should mimic what we've already done in `src/client/js/app-shell.js`
2. Create an instance of GraphQLClient(options)
3. `options.url` of http://127.0.0.1:3000/graphql
4. `options.fetch` Since `fetch` isn't a node global like it is in the browser we need to inject an implmentation let's use `isomorphic-unfetch`
5. options.cache - pass in an instace of memCache
6. Require the AppShell component and wrap it in the ClientContext.Provider
7. require ReactDOMServer from react-dom/server
8. Render the app using `const content = ReactDOMServer.renderToString(App)`
9. Place the content inside `<div id="app-root">${contnet}</div>`
10. Verify its rendering the page by viewing the page's source

*Server Routing*
The App doesn't know what route it's on so currently it'll always render the homepage route. We need to fix that!

1. Require `ServerLocation` from `@reach/router`
2. Wrap the `<ClientContext.Provider>` in `<ServerLocation url={req.raw.url}>`
3. Verify that the SSR work for each individual page.

*Render the page with the graphql queries resolved*
1. Require `getInitialState` from `graphql-hooks-ssr`
2. Call it *before* `ReactDOMServer.renderToString`, it passing in the App and client options
3. Await the response, storing it in a const called `initialState`
4. Pass in `initialState` to `renderScripts` - check out what it's doing with it!
5. Verify the page now renders the initialState in the source

*Hydrate the client app's cache with the initialState*
1. Go to `src/client/js/app-shell.js`
2. Grab the `initialState` from the window global defined by the server
3. Pass that into `memcache({ initialState })`
4. Verify the App is fully server-side rendered, no graphql request should be made when the app initially renders.
