# MISSING_ASSETS.md — Balloons Lane homepage assets

No missing assets. Every image URL found on the homepage was downloaded successfully
(82 files; 26 initially hit the site's JS bot-challenge on parallel requests and were
re-fetched sequentially with delays — all ultimately returned HTTP 200 with valid image bytes).

Skipped by design (not missing):
- `https://i.ytimg.com/vi/ID/hqdefault.jpg` — bogus placeholder from an empty video widget (task instruction).
- `https://balloonslane.com/wp-content/plugins/wp-rocket/assets/img/youtube.png` and
  `https://balloonslane.com/wp-content/plugins/perfmatters/img/youtube.svg` — lazy-load
  placeholder chrome for the video embeds; replaced by the real YouTube thumbnails
  (`/images/videos/video-9dyEpLwL4JM.avif`, `/images/videos/video-UjR9nzlifM4.avif`).
- WooCommerce payment SVGs (`loader.svg`, `visa/mastercard/laser/diners/maestro/jcb/amex/discover.svg`):
  downloaded and kept as-is in `assets/original-backup/svg-*.svg`; not copied into `public/`
  (third-party plugin chrome, no local path assigned).
