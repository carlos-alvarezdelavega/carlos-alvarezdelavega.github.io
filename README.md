# Carlos Alvarez Personal Website

Personal website for Carlos Alvarez, a UX Researcher focused on AI-enabled research workflows for better decision-making.

The site presents selected research impact, experiments, working principles, and background in a clean static format designed for fast loading and easy maintenance on GitHub Pages.

## Run Locally

```bash
cd "/Users/carlos/Documents/Programming/Website sandbox/MVP"
python3 -m http.server 4175
```

Open `http://localhost:4175/`.

## Deploy To GitHub Pages

This repository is intended to publish at:

`https://carlos-alvarezdelavega.github.io`

GitHub Pages should serve the `main` branch from the repository root. No build step is required.

## Project Structure

- `index.html` sets up the page shell and loads the static assets.
- `content.js` contains the site content and logo references.
- `app.js` renders the page and handles interactions such as dark mode and expandable impact details.
- `styles.css` contains theme tokens, responsive layout, typography, and dark mode.
- `assets/` contains company logos used in the hero section.

## Updating The Site

Edit `content.js` for copy and content changes. Edit the token section at the top of `styles.css` for colors, fonts, spacing, and dark mode refinements.
