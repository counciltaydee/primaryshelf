# PrimaryShelf

PrimaryShelf is a static, browser-based library for browsing Primary One lesson
plans, revision papers, and reading resources. The current catalog and client
behavior are defined in `app.js`; the page structure is in `index.html` and
the visual design is in `styles.css`.

## Run locally

There is no package manager, build step, or server script in this repository.
Serve the repository directory with any static web server, for example:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/> in a browser. Serving the files over HTTP
also makes the links behave like a deployed static site rather than relying on
`file://` browser behavior.

## Content and behavior

- The nine current resources are declared in the `resources` array in
  `app.js`. Update that array when adding or removing catalog entries.
- Each resource's `path` is used by both **Read online** and **Download**.
  Keep the referenced PDF at that relative path (including spaces), or update
  the path when moving the file.
- Search, type/subject filters, sorting, favorites, ratings, comments, and dark
  mode are client-side features. Favorites, ratings, comments, and the theme
  are persisted in the browser's `localStorage`; there is no backend or
  account system.
- The displayed collection is currently Primary One material from 2026. The
  resource count and subject list in the hero are currently written directly
  in `index.html`, so update those values if the catalog changes.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page markup, catalog controls, reader modal, and footer |
| `app.js` | Resource metadata and all search, filter, reader, and local-storage behavior |
| `styles.css` | Responsive layout, light/dark themes, and component styling |
