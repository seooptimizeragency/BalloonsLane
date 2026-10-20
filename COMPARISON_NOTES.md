# Comparison Notes — Astro rebuild vs live balloonslane.com homepage

Baseline: full saved HTML of the live homepage (WordPress + Elementor, fetched
2026-10-19) plus a written visual study of the rendered page. No reference
screenshots were available (headless Chromium cannot render in this sandbox);
comparison is structural (markup order, copy, links, images, styles).

## What matches

- **Section order (top → bottom):** floating pill header + left social rail →
  hero (video + tagline H2 + Order Inquiry) → LED BALLOONS photo banner →
  H1 intro block over banquet-hall photo → Order Inquiry form → Catalog /
  EveryDay (21 cards + Coming Soon) → Occassion / Event (10) → Holiday + (7)
  → Color + / Store (4) → second Order Inquiry form → video section (2
  YouTube embeds + Video Gallery) → Famous Places (4 cards) → "Click here for
  more designs" → 28-H3 SEO block → Happy Clients bullets → venue links →
  F.A.Q. (11 accordions) → Our Clients logo carousel (11) → Client Review
  carousel (3) → footer (map, Learn More, Store Hours, contact, socials).
- **Copy:** all headings, paragraphs, FAQ Q&A, testimonials, form labels,
  occasion dropdown options, footer text are verbatim from the live site,
  including quirks: `Get A Quate`, `Occassion / Event`, `Motheer Day Balloon`,
  `Shapes And Arranagment`, `Terms and condition`, `weeding-balloons`,
  `graduation-balloonss`.
- **Links:** every card/venue/footer/social destination preserved, including
  off-site ones (partyballoonsdelivery.com, store.partyballoonsdelivery.com,
  venue sites). `tel:7184270968`, `mailto:balloonslane@gmail.com`, WhatsApp
  link kept.
- **Images:** 83/83 homepage images retrieved; 72 converted to AVIF
  (libaom-av1, CRF 18–20), logo kept as PNG, hero video kept as MP4
  (compressed to 1.6 MB). Zero substitutions, zero stock/AI images.
  See IMAGE_MAPPING.md; MISSING_ASSETS.md is empty (nothing missing).
- **SEO:** original title, meta description, canonical, OG/Twitter tags;
  semantic H1–H4 hierarchy; descriptive alt text on all images; width/height
  on images; lazy-loading below the fold; eager hero.
- **Interactions:** mobile hamburger menu, full-screen search modal (submits
  to the original WP search endpoint), FAQ accordion, logo/review carousels
  with prev/next arrows, click-to-play YouTube facades, keyboard focus states,
  skip link.

## What could not be reproduced exactly

1. **Elementor popup ("GET 10% OFF")** — needs the WP backend; the tab links
   to #catalog instead (documented in BACKEND_NOTES.md).
2. **Order Inquiry submission + Cloudflare Turnstile** — Elementor form
   backend doesn't exist statically; submit shows an honest notice pointing
   to phone/email. Documented in BACKEND_NOTES.md.
3. **WooCommerce mini-cart** — no cart state without WooCommerce; header keeps
   the original `$ 0.00 / 0` display linking to `#`, as the live page does.
4. **Fonts** — the live page's inline stacks reference Epilogue/Urbanist/Open
   Sans but only Poppins is actually enqueued, so most text falls back to
   system sans; this build loads Epilogue/Urbanist/Open Sans plus Anton for
   the condensed display headings the visual study observed. Close, not
   pixel-identical.
5. **Theme footer extras** — the saved HTML contains no copyright line,
   payment icons, or address in the footer; a minimal sign-off + © line and
   the site's published Staten Island address were added (all from the site's
   own copy/schema, nothing invented).
6. **Testimonial stars** — the live markup has no star ratings (photo + name +
   text only); none were invented. The star-bullet list under "Happy Clients"
   mirrors the live page's ⭐ bullets.
7. **Pixel-perfect spacing** — Elementor's exact paddings were approximated
   from the visual study; layout, order, colors and density match, but
   sub-pixel spacing may differ.
