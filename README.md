# PrimaryShelf

PrimaryShelf is a dependency-free static library for browsing Primary One lesson
plans, reading materials, and revision papers. The page is rendered by
`index.html`, styled by `styles.css`, and gets its resource catalogue from the
`resources` array in `app.js`.

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
- Filter by lesson plan, revision paper, reading resource, or subject.
- Use **Read online** to open a PDF in the browser, or **Download** to save it.
- Favorites, ratings, comments, and dark mode are stored in the browser's
  `localStorage`; they are not shared between users or devices.

The current collection contains nine resources across English, Mathematics,
Science, Social Studies, Religious Education, and Luganda. The displayed
catalogue and the files it links to must be kept in sync.

## Adding or replacing a resource

1. Add the PDF under the appropriate `P1/<subject>/notes` or
   `P1/<subject>/papers and revision` directory.
2. Add or update one object in the `resources` array at the top of `app.js`.
   Its `path` must match the PDF path exactly, including spaces and
   capitalization. `title`, `subject`, `type`, `typeLabel`, `description`,
   `year`, `pages`, and `rating` drive the card and filters.
3. If the total collection or subject count changes, update the corresponding
   values in the hero copy in `index.html`.
4. Open the site locally and verify search, filters, the reader link, and the
   download link for the changed resource.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, catalogue controls, and reader modal |
| `styles.css` | Responsive light/dark theme styles |
| `app.js` | Catalogue data and client-side interactions |
| `P1/` | Bundled PDF learning resources |
