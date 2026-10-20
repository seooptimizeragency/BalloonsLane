# Balloons Lane — Homepage Rebuild (Astro)

Faithful static rebuild of the **homepage only** of https://balloonslane.com/
(owner's own WordPress site), using Astro 5, semantic HTML, custom CSS and
vanilla JavaScript. No WordPress, no PHP, no JS frameworks.

## Requirements

- Node.js 18+ and npm

## Install

```bash
cd ~/workspace/balloons-lane-astro
npm install
```

## Develop

```bash
npm run dev
```

Opens a local dev server (default http://localhost:4321).

## Build

```bash
npm run build
```

Outputs a static site to `dist/` (`dist/index.html`). Preview it with:

```bash
npm run preview
```

## Deploy

`dist/` is a fully static site — drag-and-drop it onto Netlify Drop, or serve
it from any static host. `astro.config.mjs` sets `site: 'https://balloonslane.com/'`
and `build.format: 'file'`.

## Project structure

```
src/
  pages/index.astro          Homepage (all sections in original order)
  layouts/MainLayout.astro   <head> (SEO/OG/canonical), fonts, global scripts
  components/                Header, Hero, LedBanner, PromoBanner, IntroHeading,
                             InquiryForm, CategoryGrid, VideoSection, FamousPlaces,
                             SeoBlock, HappyClients, Faq, ClientsCarousel,
                             ReviewsCarousel, Footer, Icon
  data/site.js               All homepage copy/links (verbatim from live site)
  styles/global.css          Design tokens + shared styles
  scripts/main.js            Vanilla JS: mobile menu, search modal, FAQ, carousels,
                             inquiry form notice, click-to-play YouTube
public/
  images/...                 Original photos converted to AVIF (see IMAGE_MAPPING.md)
  videos/hero-balloons.mp4   Local copy of the hero video
assets/original-backup/      Untouched original downloads
```

## Docs

- `IMAGE_MAPPING.md` — every image → homepage section → local file
- `MISSING_ASSETS.md` — images that could not be retrieved (none substituted)
- `BACKEND_NOTES.md` — WordPress/WooCommerce dependencies that need a backend
- `COMPARISON_NOTES.md` — fidelity comparison vs the live homepage
- `work/content-inventory.md` — verbatim section-by-section content inventory
