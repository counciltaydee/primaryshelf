# PrimaryShelf

PrimaryShelf is a dependency-free static library for browsing Primary 1–3 and 5
lesson plans, reading materials, and revision papers. The page is rendered by
`index.html`, styled by `styles.css`, and builds its resource catalogue from
the `resourcePaths` manifest in `app.js`.

## Run locally

No package installation or build step is required. Serve the repository root
with any static HTTP server, then open the displayed address:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/> in a browser. Serving the files over HTTP keeps
PDF links, downloads, and browser behavior consistent with a deployed static
site; stop the server with `Ctrl-C`.

## Using the library

- Search by title, subject, or resource type. Press `/` to focus the search
  field.
- Filter by lesson plan, revision paper, reading resource, subject, or class.
- Use **Read online** to open a PDF in the browser, or **Download** to save it.
- Favorites, ratings, comments, and dark mode are stored in the browser's
  `localStorage`; they are not shared between users or devices.

The current collection contains 53 resources across Primary 1, 2, 3, and 5.
It covers English, Mathematics, Science, Social Studies, Religious Education,
and Luganda. The displayed catalogue and the files it links to must be kept in
sync.

## Adding or replacing a resource

1. Add the PDF under the appropriate `P<grade>/<subject>/notes` or
   `P<grade>/<subject>/papers and revision` directory.
2. Add the exact PDF path to the `resourcePaths` manifest near the top of
   `app.js`. The app derives the class, subject, type, title, and year from the
   path and filename.
3. If the total collection or subject/class coverage changes, update the
   corresponding values in the hero copy and filter controls in `index.html`.
4. Open the site locally and verify search, filters, the reader link, and the
   download link for the changed resource.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, catalogue controls, and reader modal |
| `styles.css` | Responsive light/dark theme styles |
| `app.js` | Catalogue manifest and client-side interactions |
| `P1/`, `P2/`, `P3/`, `P5/` | Bundled PDF learning resources by class |
