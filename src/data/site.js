// Central content data for the Balloons Lane homepage rebuild.
// Extracted verbatim from https://balloonslane.com/ (owner's own site).
// Image paths are filled in during the wiring pass from IMAGE_MAPPING.md.

export const META = {
  title: '#1 Top Rated Balloon Delivery New York City | Balloons Lane',
  description:
    'Balloons Lane offers Birthday Baby Bar/Bat Mitzvah Corporate Parties & Anniversary Balloon Delivery & Decorations in New York City, NJ, Staten Island & Brooklyn',
  canonical: 'https://balloonslane.com/',
  ogImage: '/images/logo/balloons-lane-og.jpg'
};

export const CONTACT = {
  phoneDisplay: '718.427.0968',
  phoneHref: 'tel:7184270968',
  phonePlain: '7184270968',
  email: 'balloonslane@gmail.com',
  emailHref: 'mailto:balloonslane@gmail.com',
  website: 'Balloonslane.com',
  websiteHref: 'https://balloonslane.com/',
  whatsapp: 'https://api.whatsapp.com/send/?phone=%2B17184270968&text&app_absent=0',
  hours: [
    { days: 'Monday - Saturday', time: '9 am to 8 pm' },
    { days: 'Sunday', time: '10 am to 6 pm' }
  ]
};

export const NAV_LINKS = [
  { label: 'Home', href: 'https://balloonslane.com/' },
  { label: 'Catalog', href: '#catalog' },
  { label: 'Events', href: '#events' },
  { label: 'Holidays', href: '#holidays' },
  { label: 'Color', href: '#color' }
];

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/balloonslane/' },
  { label: 'Twitter', href: 'https://twitter.com/balloonslane' },
  { label: 'Instagram', href: 'https://www.instagram.com/balloonslane2/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/balloonslane/' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/balloonslane/' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCdsIWq3AVAGaRpFoQ8-T3CA' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@balloons_lane' }
];

export const HEADER_EXTRA = {
  shopNow: { label: 'Shop Now', href: 'https://partyballoonsdelivery.com/shop-now/' },
  cartLabel: '$ 0.00',
  cartHref: '#'
};

export const HERO = {
  title: 'BALLOONS LANE',
  tagline:
    'Balloons Lane Balloon DELIVERY| Arch Columns Centerpieces|Bouquet Number|Letter|Latex|Mylar',
  ctaLabel: 'Order Inquiry',
  ctaHref: 'https://balloonslane.com/order-inquiry/',
  videoSrc: '/videos/hero-balloons.mp4'
};

export const LED_BANNER = {
  heading: 'LED BALLOONS',
  text: 'Balloon Decorations for Every Occasion – From Sweet 16s to Grand Openings, We Bring Color, Love & Celebration!'
};

export const INTRO = {
  h1: '#1 Top Rated Balloon Delivery New York City | Balloons lane',
  sub: 'Balloons Lane offers Birthday Baby Bar/Bat Mitzvah Corporate Parties & Anniversary Balloon Delivery & Decoration'
};

// Catalog / Everyday cards (21 + Coming Soon tile) — image paths wired later
export const CATALOG_EVERYDAY = [
  { name: 'Tulle Confetti', href: 'https://balloonslane.com/tulle-balloons/', alt: 'tulle confetti glitter sparkle balloons' },
  { name: 'Round Jumbo', href: 'https://balloonslane.com/big-balloon/', alt: 'round jumbo LED clear personalize balloons' },
  { name: 'Letter Balloons', href: 'https://balloonslane.com/letter-number-balloons/', alt: 'number name letters age milestone balloons' },
  { name: 'Number Balloons', href: 'https://balloonslane.com/gold-number-balloons/', alt: 'gold number balloons' },
  { name: 'Confetti Chrome', href: 'https://balloonslane.com/confetti-balloons/', alt: 'confetti chrome glitter balloons' },
  { name: 'Big Round Balloon', href: 'https://balloonslane.com/big-giant-large-round-jumbo-balloons/', alt: 'big giant large round jumbo balloons' },
  { name: 'Tower Balloons', href: 'https://balloonslane.com/balloons-tower-stand/', alt: 'balloons tower stand' },
  { name: 'Half Arch Balloons', href: 'https://balloonslane.com/balloons-half-arch/', alt: 'balloons half arch' },
  { name: 'Centerpiece Bouquet', href: 'https://balloonslane.com/balloon-centerpieces/', alt: 'balloons centerpiece bouquet bunch set' },
  { name: 'Column Balloon', href: 'https://balloonslane.com/balloon-column/', alt: 'balloon column' },
  { name: 'Organic Balloon', href: 'https://balloonslane.com/arch-balloon-organic-garland/', alt: 'arch balloon organic garland' },
  { name: 'Love', href: 'https://balloonslane.com/valentines-day-balloons/', alt: 'love balloons 30th birthday display' },
  { name: 'Staten Island', href: 'https://balloonslane.com/staten-island-balloon/', alt: 'staten island balloon arch' },
  { name: 'NYC Balloons', href: 'https://balloonslane.com/nyc-balloons/', alt: 'nyc balloons storefront' },
  { name: 'NJ Balloons', href: 'https://balloonslane.com/nj-balloons/', alt: 'nj balloons columns' },
  { name: 'Manhattan Balloons', href: 'https://balloonslane.com/manhattan-balloons/', alt: 'manhattan balloons' },
  { name: 'Brooklyn Balloon', href: 'https://balloonslane.com/brooklyn-balloons/', alt: 'brooklyn balloon display' },
  { name: 'Balloon Blog', href: 'https://balloonslane.com/balloon-blog/', alt: 'balloon blog magazine cover' },
  { name: 'Shapes And Arranagment', href: 'https://balloonslane.com/shop-arrangements/', alt: 'shapes and arrangement magazine cover' },
  { name: 'School Balloons', href: 'https://balloonslane.com/school-balloon/', alt: 'school balloons poster' },
  { name: 'Balloon Arch', href: 'https://partyballoonsdelivery.com/arch-balloons/', alt: 'balloons arch hallway' }
];

export const OCCASIONS = [
  { name: 'Prom Balloons', href: 'https://balloonslane.com/prom-balloons/', alt: 'prom balloons' },
  { name: 'Winter Wonderland', href: 'https://balloonslane.com/winter-wonderland/', alt: 'winter wonderland balloons' },
  { name: 'First Birthday', href: 'https://balloonslane.com/first-birthday-balloon/', alt: 'first birthday balloon' },
  { name: 'Communion Balloons', href: 'https://balloonslane.com/communion-balloons/', alt: 'communion balloons' },
  { name: 'Birthday Anniversary', href: 'https://balloonslane.com/birthday-anniversary-christening-balloons/', alt: 'birthday anniversary christening balloons' },
  { name: '1st Birthday', href: 'https://balloonslane.com/1st-birthday-party/', alt: '1st birthday party balloons' },
  { name: 'Graduation Balloon', href: 'https://balloonslane.com/graduation-balloonss/', alt: 'graduation balloons' },
  { name: 'Engagement Balloons', href: 'https://balloonslane.com/engagement-balloons/', alt: 'engagement balloons' },
  { name: 'Sweet 16 Balloons', href: 'https://balloonslane.com/sweet-16-balloon/', alt: 'sweet 16 balloons' },
  { name: 'Wedding Balloons', href: 'https://partyballoonsdelivery.com/weeding-balloons/', alt: 'wedding balloons' }
];

export const HOLIDAYS = [
  { name: 'Valentine Day', href: 'https://balloonslane.com/valentine-balloons-delivery-near-me/', alt: 'valentines day balloons' },
  { name: 'Easter Balloons', href: 'https://balloonslane.com/easter-balloons/', alt: 'easter balloons' },
  { name: 'Christmas Balloons', href: 'https://balloonslane.com/christmas-balloons/', alt: 'christmas balloons' },
  { name: 'New Year Balloons', href: 'https://balloonslane.com/new-year-balloons', alt: 'new year balloons' },
  { name: 'ST Patricks Day Balloons', href: 'https://balloonslane.com/st-patricks-day-balloons/', alt: 'st patricks day balloons' },
  { name: 'Motheer Day Balloon', href: 'https://balloonslane.com/mother-day-balloons/', alt: 'mother\'s day balloons' },
  { name: 'Father Day Balloon', href: 'https://balloonslane.com/father-day-balloon/', alt: 'father\'s day balloons' }
];

export const COLOR_STORE = [
  { name: 'Balloon Color Chart', href: 'https://balloonslane.com/balloons-color-chart/', alt: 'balloons color chart' },
  { name: 'Color Guide', href: 'https://balloonslane.com/color-guide-for-latex-balloon/', alt: 'color guide for latex balloons' },
  { name: 'Prime Colors', href: 'https://balloonslane.com/prime-custom-latex-balloon-color-charts-2/', alt: 'prime custom latex balloon colors' },
  { name: 'Store Page', href: 'https://store.partyballoonsdelivery.com/', alt: 'store product line' }
];

export const INQUIRY_OCCASIONS = [
  'Select an option', 'Anniversary Celebration', 'Baby Shower', 'Birthday Party',
  'Bridal Shower', 'Celebration', 'Christening', 'College Event', 'Corporate Event',
  'Engagement Party', 'Fundraiser', 'Graduation Party', 'Mitzvah', 'Rehearsal Dinner',
  'Retirement Celebration', 'School Event', 'Shop Event', 'Wedding', 'Other'
];

export const VIDEOS = [
  { id: '9dyEpLwL4JM', title: 'Party Balloons Delivery Video' },
  { id: 'UjR9nzlifM4', title: 'Party Balloons Delivery Video' }
];

export const FAMOUS_PLACES = [
  {
    name: 'Brooklyn',
    href: 'https://store.partyballoonsdelivery.com/brooklyn-ny-neighborhoods-and-zipcode-we-deliver/',
    alt: 'View from above of cars on the Brooklyn Bridge'
  },
  {
    name: 'New Jersey',
    href: 'https://store.partyballoonsdelivery.com/new-jersey-nj-neighborhoods-and-zipcode-we-deliver/',
    alt: 'Urban landscape of New Jersey featuring modern skyscrapers'
  },
  {
    name: 'Staten Island',
    href: 'https://store.partyballoonsdelivery.com/staten-island-ny-neighborhoods-and-zipcode-we-deliver/',
    alt: 'An orange Staten Island Ferry sails across calm waters'
  },
  {
    name: 'Manhattan',
    href: 'https://store.partyballoonsdelivery.com/manhattan-nyc-neighborhoods-and-zipcode-we-deliver/',
    alt: 'Bustling Times Square in New York City'
  }
];

export const DESIGNS_LINKS = [
  { label: 'Catalog', href: '#catalog' },
  { label: 'Colors Chart', href: 'https://balloonslane.com/balloons-color-chart/' },
  { label: 'Blog', href: 'https://balloonslane.com/balloon-blog/' },
  { label: 'Contact', href: 'https://balloonslane.com/contact-us/' }
];

export const VIDEO_GALLERY_URL = 'https://www.youtube.com/@PartyBalloonsDelivery?sub_confirmation=1';

export const HAPPY_CLIENTS = [
  {
    text: 'Absolutely stunning balloon arch in Brooklyn! We ordered a birthday balloon garland last minute, and Balloons Lane handled everything from design to setup. The colors were perfect, and the team was so friendly. Highly recommended!',
    name: 'Jessica R., Brooklyn, NY'
  },
  {
    text: 'Professional balloon decoration in New York at its best. They made our corporate event look classy with chrome balloons and a logo balloon wall. The team arrived early, set up everything perfectly, and even helped with cleanup.',
    name: 'Michael T., Manhattan, NY'
  },
  {
    text: 'Same-day balloon delivery Staten Island – super reliable! I ordered a happy birthday balloon bouquet for my wife, and it arrived in just two hours, beautifully packaged. She loved it!',
    name: 'Daniel L., Staten Island, NY'
  },
  {
    text: 'Best balloon delivery service near Jersey City! Ordered custom balloons for our baby shower, so many compliments! The colors matched our theme exactly.',
    name: 'Priya P., Jersey City, NJ'
  },
  {
    text: 'They made our 50th birthday unforgettable. We went for a rose gold number balloon setup and ceiling balloons. Looked amazing in the photos, everyone asked where we got them from!',
    name: 'Amanda S., Upper East Side, NY'
  }
];

export const VENUE_LINKS = [
  { label: 'Seguine Mansion', href: 'http://seguinemansion.org/' },
  { label: 'Brooklyn Botanic Garden', href: 'https://bbg.org/' },
  { label: 'National Museum of the American Indian', href: 'https://www.americanindian.si.edu/' },
  { label: 'Hoboken Historical Museum', href: 'http://www.hobokenmuseum.org/' }
];

export const FAQS = [
  {
    q: 'Do you do balloon delivery the same day?',
    a: 'Indeed! For last-minute surprises or urgent event setups, we offer same-day balloon delivery throughout Staten Island, Brooklyn, Manhattan, Jersey City, and the surrounding areas.'
  },
  {
    q: 'What kinds of balloons are available?',
    a: 'We have hundreds of colors and sizes of latex, foil (Mylar), chrome, and confetti balloons, ranging from 12 to 36 inches. We also have balloon bouquets, number balloons, and letter balloons.'
  },
  {
    q: 'Is it possible for me to personalize my balloon design?',
    a: 'Of course! For weddings, birthdays, baby showers, and business gatherings, we design unique balloon arches, garlands, columns, and centerpieces to fit your theme, brand, or event style.'
  },
  {
    q: 'Where do you deliver?',
    a: 'We provide services to Staten Island, Brooklyn, Manhattan, Hoboken, Jersey City, and all of New Jersey and New York City.'
  },
  {
    q: 'What distinguishes Balloons Lane from other establishments?',
    a: 'We are passionate, imaginative, and locally owned. We are your first choice whether looking for balloon delivery near me, same-day balloon delivery NYC, or custom balloon decorations near me. We are well-known for our quick delivery, personalized balloon designs, expert styling, and amiable service.'
  },
  {
    q: 'How do I place a balloon order?',
    a: 'You can message us online, via phone, or by SMS. We’ll assist you in selecting the ideal hues, patterns, and dimensions, and promptly verify delivery or setup information.'
  },
  {
    q: 'What is the lifespan of helium balloons?',
    a: 'Mylar and foil balloons float for three to five days indoors, although latex balloons usually survive 12 to 24 hours.'
  },
  {
    q: 'Are you able to provide balloons for branded or corporate events?',
    a: 'Indeed! Our specialty is corporate balloon décor, which includes stage arches, branded color schemes, logo walls, and photo backdrops for conferences, office gatherings, and product launches.'
  },
  {
    q: 'Is there a minimum order fee?',
    a: 'Local deliveries don’t require a minimum order. Whether it’s a single birthday bouquet or a large event setup, we deliver with the same care, creativity, and professionalism.'
  },
  {
    q: 'Do you offer balloons for anniversaries and weddings?',
    a: 'Indeed! We provide anniversary decorations like 25th, 50th, and milestone celebrations, as well as wedding balloon decorations, including balloon arches, ceiling installations, centerpieces, and romantic garlands, all tailored to fit your venue and theme.'
  },
  {
    q: 'Can you match balloons to the colors of my brand or event?',
    a: 'Of course! We design unique balloons, such as chrome, metallic, and confetti balloons, that precisely complement your event’s colors, theme, or brand palette.'
  }
];

export const CLIENT_LOGOS = [
  { name: "McDonald's", alt: "McDonald's logo" },
  { name: 'Nike', alt: 'Nike logo' },
  { name: 'Google', alt: 'Google logo' },
  { name: 'Ulta Beauty', alt: 'Ulta Beauty logo' },
  { name: 'JBL', alt: 'JBL logo' },
  { name: 'NYU', alt: 'NYU logo' },
  { name: 'CVS', alt: 'CVS Pharmacy logo' },
  { name: 'TD', alt: 'TD logo' },
  { name: 'Coca-Cola', alt: 'Coca-Cola logo' },
  { name: 'T-Mobile', alt: 'T-Mobile logo' },
  { name: 'Facebook', alt: 'Facebook logo' }
];

export const REVIEWS = [
  {
    name: 'DENARD E. HINES',
    title: 'Black guys on film',
    text: "My Wife and I both agree the decorations added a elegant and festive touch to our Daughter's sweet 16 Birthday party. Sam brought our ideas to life in a economical fashion. Thank you Sam. We Highly recommend for all occasions.!!!!!!"
  },
  {
    name: 'Nicole Link',
    title: '',
    text: 'I’ve ordered from Sam twice this year and both times he’s amazed me! Our ballon centerpieces were gorgeous and stayed inflated so long at home for weeks to come. I highly recommend Balloons Lane to anyone looking to add something extra special to your party!'
  },
  {
    name: 'Odile T',
    title: '',
    text: 'Amazing!! Sam did a great job! Exactly what I asked for. We couldn’t have been happier. He was also super easy to work with and quickly answered each and every single message I left and question I had! Will be using Balloons Lane for every event we have. Ty Ty!'
  }
];

export const FOOTER_LEARN_MORE = [
  { label: 'Blog', href: 'https://balloonslane.com/balloon-blog/' },
  { label: 'Terms and condition', href: 'https://balloonslane.com/terms-and-conditions' },
  { label: 'privacy policy', href: 'https://balloonslane.com/privacy-policy' },
  { label: 'About us', href: 'https://balloonslane.com/about-us' }
];

export const MAP_EMBED =
  'https://maps.google.com/maps?q=Balloons%20Lane%20Balloon%20DELIVERY&t=m&z=12&output=embed&iwloc=near';
