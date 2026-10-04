# Sanke Silas Portfolio

A personal portfolio for Sanke Silas, featuring an introduction, background, selected software and engineering projects, and contact links.

## Built with

- Semantic HTML5
- CSS3 with custom properties and responsive layouts
- Font Awesome icons

This is a static site with no build step or runtime package dependencies. The shared header and footer are loaded from `src/partials/` by `src/layout.js`. Prettier is an optional development dependency for formatting.

## Run locally

Because the shared layout uses `fetch`, serve the site over HTTP instead of opening the HTML files directly. Start a static file server from the `src` directory, then visit the address it prints:

```sh
cd src
python3 -m http.server 8000
```

## Pages

- `src/index.html` - introduction and social links
- `src/about.html` - profile and technical expertise
- `src/projects.html` - selected projects
- `src/contact.html` - contact options

## Sharing and deployment

No live demo URL or screenshot is configured yet. Open Graph previews use the publicly accessible eagle image stored in this repository. Once the portfolio is deployed, update the Open Graph image to a domain you control if preferred.

The shared navigation marks the current page automatically, while the header and footer markup each live in one partial.

## Formatting

Run Prettier before committing changes:

```sh
npm install
npm run format
```

To check formatting without changing files, run `npm run format:check`.
