# Carlos Alvarez MVP Website

This is a lightweight static personal website designed for GitHub Pages.

## Run Locally

```bash
cd "/Users/carlos/Documents/Programming/Website sandbox/MVP"
python3 -m http.server 4174
```

Open `http://localhost:4174/`.

## Deploy To GitHub Pages

Use the `MVP` folder as the site root. For the simplest GitHub Pages setup, copy this folder's contents to the root of the publishing branch, or configure a GitHub Actions workflow to publish this folder as a static artifact.

No build step is required.

## Edit Content And Theme

- Content: `content.js`
- Layout and interactions: `app.js`
- Theme tokens, colors, fonts, spacing, and dark mode: `styles.css`
