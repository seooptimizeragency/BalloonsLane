# Backend Notes — WordPress/WooCommerce dependencies

The live site runs WordPress + Elementor + WooCommerce. This static rebuild
preserves every original destination; nothing is faked.

## Order Inquiry forms (appear twice on the homepage)

- Original: Elementor Pro form widget POSTing to the WordPress backend
  (`admin-ajax.php`), with Cloudflare Turnstile ("Verify you are human") and a
  file upload ("Attach design you like").
- Static build: the form renders with all original fields, labels and occasion
  options. There is no form backend, so submitting shows an honest inline notice
  directing the visitor to call 718.427.0968 or email balloonslane@gmail.com.
  No data is collected or sent anywhere.
- To restore online submissions: point the form at a form service
  (e.g. Formspree, Basin) or a small server endpoint, and re-add a CAPTCHA.

## "Get A Quate" / "Shop Now" buttons

- `Get A Quate` → https://balloonslane.com/order-inquiry/ (original destination, kept)
- `Shop Now` → https://partyballoonsdelivery.com/shop-now/ (original destination, kept)

## Cart (`$ 0.00 0 Cart`)

- Original: WooCommerce mini-cart drawer (JS-driven, `#` link). No real cart
  state exists without WooCommerce, so the static header keeps the original
  `$ 0.00 / 0` display linking to `#`, exactly as the live homepage does.

## Search

- Original: Elementor search submitting `?s=` to WordPress site search.
- Static build: the search modal submits a GET to `https://balloonslane.com/?s=…`,
  i.e. the original WordPress search endpoint, so results still work while the
  WP site is live.

## "GET 10% OFF" tab

- Original: opens an Elementor popup (discount signup). Elementor popups need
  the WP backend; the tab links to `#catalog` in this build.

## Category / occasion / holiday cards

- All cards link to their original destinations (balloonslane.com subpages and,
  where the original does, partyballoonsdelivery.com / store.partyballoonsdelivery.com).
  Those subpages are not part of this homepage-only rebuild.

## Video embeds

- YouTube embeds use click-to-play facades (thumbnail + play button) that load
  the original `youtube.com/embed/<id>` only after the visitor clicks — the
  original video IDs are preserved.
