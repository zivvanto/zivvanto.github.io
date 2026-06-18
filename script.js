const WHATSAPP_NUMBER = '919783081001';
const MAP_LINK = 'https://maps.app.goo.gl/FEpNd5dUJHxv2KTeA?g_st=ic';

const flavours = [
  "Chocolate",
  "Vanilla",
  "Butterscotch",
  "Black Forest",
  "Pineapple",
  "Strawberry"
];

const weights = [
  { label: '500g', factor: 0.5 },
  { label: '1kg', factor: 2 },
  { label: '1.5kg', factor: 3 },
  { label: '2kg', factor: 4 },
  { label: '2.5kg', factor: 5 },
  { label: '3kg', factor: 6 },
  { label: '5kg Celebration Cake', factor: 10 }
];

const cakeProducts = [
  {
    "id": "bc151",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Bento & Mini Cakes",
    "sku": "BC151",
    "name": "Royal Bento Chocolate Cake",
    "basePrice": 200,
    "description": "A cute chocolate bento cake perfect for small celebrations.",
    "image": "images/bc151.jpg"
  },
  {
    "id": "bc152",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Bento & Mini Cakes",
    "sku": "BC152",
    "name": "Mini Vanilla Celebration Cake",
    "basePrice": 200,
    "description": "Elegant mini cake with smooth vanilla finish.",
    "image": "images/bc152.jpg"
  },
  {
    "id": "bc153",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Bento & Mini Cakes",
    "sku": "BC153",
    "name": "Bento Red Velvet Love Cake",
    "basePrice": 200,
    "description": "Premium red velvet bento cake for gifting.",
    "image": "images/bc153.jpg"
  },
  {
    "id": "bc154",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Bento & Mini Cakes",
    "sku": "BC154",
    "name": "Mini Butterscotch Bento Cake",
    "basePrice": 200,
    "description": "Mini butterscotch cake with caramel-style finish.",
    "image": "images/bc154.jpg"
  },
  {
    "id": "bc155",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Bento & Mini Cakes",
    "sku": "BC155",
    "name": "Bento Black Forest Cake",
    "basePrice": 200,
    "description": "Small black forest cake with a premium bakery look.",
    "image": "images/bc155.jpg"
  },
  {
    "id": "bc156",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Bento & Mini Cakes",
    "sku": "BC156",
    "name": "Mini Pineapple Bento Cake",
    "basePrice": 200,
    "description": "Fresh pineapple mini cake for simple celebrations.",
    "image": "images/bc156.jpg"
  },
  {
    "id": "bc157",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Bento & Mini Cakes",
    "sku": "BC157",
    "name": "Bento Strawberry Cream Cake",
    "basePrice": 200,
    "description": "Cute strawberry bento cake with soft cream finish.",
    "image": "images/bc157.jpg"
  },
  {
    "id": "bc158",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Bento & Mini Cakes",
    "sku": "BC158",
    "name": "Mini Rasmalai Bento Cake",
    "basePrice": 200,
    "description": "Indian fusion mini cake with rasmalai-inspired flavour.",
    "image": "images/bc158.jpg"
  },
  {
    "id": "bc159",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Bento & Mini Cakes",
    "sku": "BC159",
    "name": "Bento Oreo Chocolate Cake",
    "basePrice": 200,
    "description": "Mini Oreo chocolate cake with cookie crunch.",
    "image": "images/bc159.jpg"
  },
  {
    "id": "bc160",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Bento & Mini Cakes",
    "sku": "BC160",
    "name": "Mini Blueberry Bento Cake",
    "basePrice": 200,
    "description": "Elegant blueberry mini cake for gifting and small moments.",
    "image": "images/bc160.jpg"
  },
  {
    "id": "sc251",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC251",
    "name": "Signature Chocolate Truffle Cake",
    "basePrice": 300,
    "description": "Rich chocolate cake with premium truffle finish.",
    "image": "images/sc251.jpg"
  },
  {
    "id": "sc252",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC252",
    "name": "Zivvanto Black Forest Special",
    "basePrice": 300,
    "description": "Classic black forest cake with a premium look.",
    "image": "images/sc252.jpg"
  },
  {
    "id": "sc253",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC253",
    "name": "Butterscotch Crunch Bestseller",
    "basePrice": 300,
    "description": "Butterscotch cake with crunchy caramel notes.",
    "image": "images/sc253.jpg"
  },
  {
    "id": "sc254",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC254",
    "name": "Dutch Chocolate Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc254.jpg"
  },
  {
    "id": "sc255",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC255",
    "name": "Rasmalai Fusion Bestseller Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc255.jpg"
  },
  {
    "id": "sc256",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC256",
    "name": "KitKat Chocolate Bestseller Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc256.jpg"
  },
  {
    "id": "sc257",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC257",
    "name": "Oreo Cream Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc257.jpg"
  },
  {
    "id": "sc258",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC258",
    "name": "Blueberry Cream Bestseller Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc258.jpg"
  },
  {
    "id": "sc259",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC259",
    "name": "Red Velvet Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc259.jpg"
  },
  {
    "id": "sc260",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC260",
    "name": "Pineapple Fresh Cream Bestseller",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc260.jpg"
  },
  {
    "id": "sc261",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC261",
    "name": "Strawberry Delight Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc261.jpg"
  },
  {
    "id": "sc262",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC262",
    "name": "Coffee Mocha Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc262.jpg"
  },
  {
    "id": "sc263",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC263",
    "name": "Chocolate Hazelnut Bestseller Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc263.jpg"
  },
  {
    "id": "sc264",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC264",
    "name": "White Forest Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc264.jpg"
  },
  {
    "id": "sc265",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC265",
    "name": "Choco Vanilla Fusion Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc265.jpg"
  },
  {
    "id": "sc266",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC266",
    "name": "Mango Cream Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc266.jpg"
  },
  {
    "id": "sc267",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC267",
    "name": "Caramel Crunch Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc267.jpg"
  },
  {
    "id": "sc268",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC268",
    "name": "Dark Chocolate Ganache Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc268.jpg"
  },
  {
    "id": "sc269",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC269",
    "name": "Fruit Overload Bestseller Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc269.jpg"
  },
  {
    "id": "sc270",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC270",
    "name": "Chocolate Chip Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc270.jpg"
  },
  {
    "id": "sc271",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC271",
    "name": "Ferrero Style Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc271.jpg"
  },
  {
    "id": "sc272",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC272",
    "name": "Nutty Chocolate Bestseller Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc272.jpg"
  },
  {
    "id": "sc273",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC273",
    "name": "Classic Truffle Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc273.jpg"
  },
  {
    "id": "sc274",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC274",
    "name": "Double Chocolate Bestseller Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc274.jpg"
  },
  {
    "id": "sc275",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC275",
    "name": "Fresh Fruit Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc275.jpg"
  },
  {
    "id": "sc276",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC276",
    "name": "Rose Rasmalai Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc276.jpg"
  },
  {
    "id": "sc277",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC277",
    "name": "Belgian Chocolate Style Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc277.jpg"
  },
  {
    "id": "sc278",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC278",
    "name": "Choco Almond Bestseller Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc278.jpg"
  },
  {
    "id": "sc279",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC279",
    "name": "Kesar Pista Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc279.jpg"
  },
  {
    "id": "sc280",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC280",
    "name": "Cookies & Cream Bestseller Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc280.jpg"
  },
  {
    "id": "sc281",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC281",
    "name": "Chocolate Mousse Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc281.jpg"
  },
  {
    "id": "sc282",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC282",
    "name": "Vanilla Caramel Bestseller Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc282.jpg"
  },
  {
    "id": "sc283",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC283",
    "name": "Blueberry Cheese Cream Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc283.jpg"
  },
  {
    "id": "sc284",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC284",
    "name": "Choco Strawberry Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc284.jpg"
  },
  {
    "id": "sc285",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC285",
    "name": "Premium Pineapple Bestseller Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc285.jpg"
  },
  {
    "id": "sc286",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC286",
    "name": "Butterscotch Almond Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc286.jpg"
  },
  {
    "id": "sc287",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC287",
    "name": "Choco Oreo Drip Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc287.jpg"
  },
  {
    "id": "sc288",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC288",
    "name": "Signature Choco Chips Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc288.jpg"
  },
  {
    "id": "sc289",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC289",
    "name": "Rasmalai Royale Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc289.jpg"
  },
  {
    "id": "sc290",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC290",
    "name": "Chocolate Brownie Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc290.jpg"
  },
  {
    "id": "sc291",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC291",
    "name": "Vanilla Fruit Bestseller Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc291.jpg"
  },
  {
    "id": "sc292",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC292",
    "name": "Coffee Chocolate Bestseller Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc292.jpg"
  },
  {
    "id": "sc293",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC293",
    "name": "Caramel Butterscotch Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc293.jpg"
  },
  {
    "id": "sc294",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC294",
    "name": "Truffle Crunch Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc294.jpg"
  },
  {
    "id": "sc295",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC295",
    "name": "Chocolate Overload Bestseller Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc295.jpg"
  },
  {
    "id": "sc296",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC296",
    "name": "Red Velvet Cream Bestseller",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc296.jpg"
  },
  {
    "id": "sc297",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC297",
    "name": "Blueberry Chocolate Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc297.jpg"
  },
  {
    "id": "sc298",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC298",
    "name": "Pista Rose Signature Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc298.jpg"
  },
  {
    "id": "sc299",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC299",
    "name": "Premium Choco Delight Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc299.jpg"
  },
  {
    "id": "sc300",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Signature Bestsellers",
    "sku": "SC300",
    "name": "Zivvanto Signature Celebration Cake",
    "basePrice": 300,
    "description": "One of our signature bestseller cake designs, perfect for birthdays and celebrations.",
    "image": "images/sc300.jpg"
  },
  {
    "id": "cc051",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC051",
    "name": "Classic Pineapple Cake",
    "basePrice": 350,
    "description": "Light and refreshing pineapple cake.",
    "image": "images/cc051.jpg"
  },
  {
    "id": "cc052",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC052",
    "name": "Classic Vanilla Cream Cake",
    "basePrice": 340,
    "description": "Simple, elegant, and loved by everyone.",
    "image": "images/cc052.jpg"
  },
  {
    "id": "cc053",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC053",
    "name": "Classic Strawberry Cake",
    "basePrice": 380,
    "description": "Soft strawberry cake with fresh-looking finish.",
    "image": "images/cc053.jpg"
  },
  {
    "id": "cc054",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC054",
    "name": "Classic Chocolate Cake",
    "basePrice": 340,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc054.jpg"
  },
  {
    "id": "cc055",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC055",
    "name": "Classic Black Forest Cake",
    "basePrice": 360,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc055.jpg"
  },
  {
    "id": "cc056",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC056",
    "name": "Classic Butterscotch Cake",
    "basePrice": 380,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc056.jpg"
  },
  {
    "id": "cc057",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC057",
    "name": "Classic Red Velvet Cake",
    "basePrice": 400,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc057.jpg"
  },
  {
    "id": "cc058",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC058",
    "name": "Classic Blueberry Cake",
    "basePrice": 420,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc058.jpg"
  },
  {
    "id": "cc059",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC059",
    "name": "Classic Mango Cake",
    "basePrice": 440,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc059.jpg"
  },
  {
    "id": "cc060",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC060",
    "name": "Classic Coffee Cake",
    "basePrice": 340,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc060.jpg"
  },
  {
    "id": "cc061",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC061",
    "name": "Classic White Forest Cake",
    "basePrice": 360,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc061.jpg"
  },
  {
    "id": "cc062",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC062",
    "name": "Classic Fresh Fruit Cake",
    "basePrice": 380,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc062.jpg"
  },
  {
    "id": "cc063",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC063",
    "name": "Classic Choco Vanilla Cake",
    "basePrice": 400,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc063.jpg"
  },
  {
    "id": "cc064",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC064",
    "name": "Classic Oreo Cake",
    "basePrice": 420,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc064.jpg"
  },
  {
    "id": "cc065",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC065",
    "name": "Classic KitKat Cake",
    "basePrice": 440,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc065.jpg"
  },
  {
    "id": "cc066",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC066",
    "name": "Classic Rasmalai Cake",
    "basePrice": 340,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc066.jpg"
  },
  {
    "id": "cc067",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC067",
    "name": "Classic Dutch Chocolate Cake",
    "basePrice": 360,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc067.jpg"
  },
  {
    "id": "cc068",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC068",
    "name": "Classic Truffle Cake",
    "basePrice": 380,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc068.jpg"
  },
  {
    "id": "cc069",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC069",
    "name": "Classic Vanilla Fruit Cake",
    "basePrice": 400,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc069.jpg"
  },
  {
    "id": "cc070",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC070",
    "name": "Classic Choco Chip Cake",
    "basePrice": 420,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc070.jpg"
  },
  {
    "id": "cc071",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC071",
    "name": "Classic Caramel Cake",
    "basePrice": 440,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc071.jpg"
  },
  {
    "id": "cc072",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC072",
    "name": "Classic Kesar Pista Cake",
    "basePrice": 340,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc072.jpg"
  },
  {
    "id": "cc073",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC073",
    "name": "Classic Rose Cake",
    "basePrice": 360,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc073.jpg"
  },
  {
    "id": "cc074",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC074",
    "name": "Classic Chocolate Cream Cake",
    "basePrice": 380,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc074.jpg"
  },
  {
    "id": "cc075",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC075",
    "name": "Classic Pineapple Cherry Cake",
    "basePrice": 400,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc075.jpg"
  },
  {
    "id": "cc076",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC076",
    "name": "Classic Cake Design 26",
    "basePrice": 420,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc076.jpg"
  },
  {
    "id": "cc077",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC077",
    "name": "Classic Cake Design 27",
    "basePrice": 440,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc077.jpg"
  },
  {
    "id": "cc078",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC078",
    "name": "Classic Cake Design 28",
    "basePrice": 340,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc078.jpg"
  },
  {
    "id": "cc079",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC079",
    "name": "Classic Cake Design 29",
    "basePrice": 360,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc079.jpg"
  },
  {
    "id": "cc080",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC080",
    "name": "Classic Cake Design 30",
    "basePrice": 380,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc080.jpg"
  },
  {
    "id": "cc081",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC081",
    "name": "Classic Cake Design 31",
    "basePrice": 400,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc081.jpg"
  },
  {
    "id": "cc082",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC082",
    "name": "Classic Cake Design 32",
    "basePrice": 420,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc082.jpg"
  },
  {
    "id": "cc083",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC083",
    "name": "Classic Cake Design 33",
    "basePrice": 440,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc083.jpg"
  },
  {
    "id": "cc084",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC084",
    "name": "Classic Cake Design 34",
    "basePrice": 340,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc084.jpg"
  },
  {
    "id": "cc085",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC085",
    "name": "Classic Cake Design 35",
    "basePrice": 360,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc085.jpg"
  },
  {
    "id": "cc086",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC086",
    "name": "Classic Cake Design 36",
    "basePrice": 380,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc086.jpg"
  },
  {
    "id": "cc087",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC087",
    "name": "Classic Cake Design 37",
    "basePrice": 400,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc087.jpg"
  },
  {
    "id": "cc088",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC088",
    "name": "Classic Cake Design 38",
    "basePrice": 420,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc088.jpg"
  },
  {
    "id": "cc089",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC089",
    "name": "Classic Cake Design 39",
    "basePrice": 440,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc089.jpg"
  },
  {
    "id": "cc090",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC090",
    "name": "Classic Cake Design 40",
    "basePrice": 340,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc090.jpg"
  },
  {
    "id": "cc091",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC091",
    "name": "Classic Cake Design 41",
    "basePrice": 360,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc091.jpg"
  },
  {
    "id": "cc092",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC092",
    "name": "Classic Cake Design 42",
    "basePrice": 380,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc092.jpg"
  },
  {
    "id": "cc093",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC093",
    "name": "Classic Cake Design 43",
    "basePrice": 400,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc093.jpg"
  },
  {
    "id": "cc094",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC094",
    "name": "Classic Cake Design 44",
    "basePrice": 420,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc094.jpg"
  },
  {
    "id": "cc095",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC095",
    "name": "Classic Cake Design 45",
    "basePrice": 440,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc095.jpg"
  },
  {
    "id": "cc096",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC096",
    "name": "Classic Cake Design 46",
    "basePrice": 340,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc096.jpg"
  },
  {
    "id": "cc097",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC097",
    "name": "Classic Cake Design 47",
    "basePrice": 360,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc097.jpg"
  },
  {
    "id": "cc098",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC098",
    "name": "Classic Cake Design 48",
    "basePrice": 380,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc098.jpg"
  },
  {
    "id": "cc099",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC099",
    "name": "Classic Cake Design 49",
    "basePrice": 400,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc099.jpg"
  },
  {
    "id": "cc100",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Classic Cakes",
    "sku": "CC100",
    "name": "Classic Cake Design 50",
    "basePrice": 420,
    "description": "A classic bakery cake design for simple and elegant celebrations.",
    "image": "images/cc100.jpg"
  },
  {
    "id": "dc351",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC351",
    "name": "Floral Designer Cake",
    "basePrice": 3000,
    "description": "Beautiful floral cake design for special moments.",
    "image": "images/dc351.jpg"
  },
  {
    "id": "dc352",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC352",
    "name": "Theme Cake",
    "basePrice": 3000,
    "description": "Custom-style theme cake for birthday celebrations.",
    "image": "images/dc352.jpg"
  },
  {
    "id": "dc353",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC353",
    "name": "Designer Cake",
    "basePrice": 3000,
    "description": "Elegant designer cake for premium celebrations.",
    "image": "images/dc353.jpg"
  },
  {
    "id": "dc354",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC354",
    "name": "Princess Theme Designer Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc354.jpg"
  },
  {
    "id": "dc355",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC355",
    "name": "Cartoon Theme Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc355.jpg"
  },
  {
    "id": "dc356",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC356",
    "name": "Photo Print Designer Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc356.jpg"
  },
  {
    "id": "dc357",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC357",
    "name": "Chocolate Drip Designer Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc357.jpg"
  },
  {
    "id": "dc358",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC358",
    "name": "Floral Cream Designer Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc358.jpg"
  },
  {
    "id": "dc359",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC359",
    "name": "Kids Birthday Theme Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc359.jpg"
  },
  {
    "id": "dc360",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC360",
    "name": "Elegant Anniversary Designer Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc360.jpg"
  },
  {
    "id": "dc361",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC361",
    "name": "Heart Shape Designer Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc361.jpg"
  },
  {
    "id": "dc362",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC362",
    "name": "Two Tier Designer Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc362.jpg"
  },
  {
    "id": "dc363",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC363",
    "name": "Number Cake Design",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc363.jpg"
  },
  {
    "id": "dc364",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC364",
    "name": "Alphabet Cake Design",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc364.jpg"
  },
  {
    "id": "dc365",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC365",
    "name": "Butterfly Theme Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc365.jpg"
  },
  {
    "id": "dc366",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC366",
    "name": "Jungle Theme Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc366.jpg"
  },
  {
    "id": "dc367",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC367",
    "name": "Cricket Theme Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc367.jpg"
  },
  {
    "id": "dc368",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC368",
    "name": "Football Theme Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc368.jpg"
  },
  {
    "id": "dc369",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC369",
    "name": "Makeup Theme Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc369.jpg"
  },
  {
    "id": "dc370",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC370",
    "name": "Unicorn Theme Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc370.jpg"
  },
  {
    "id": "dc371",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC371",
    "name": "Crown Theme Designer Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc371.jpg"
  },
  {
    "id": "dc372",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC372",
    "name": "Royal Blue Designer Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc372.jpg"
  },
  {
    "id": "dc373",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC373",
    "name": "Golden Designer Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc373.jpg"
  },
  {
    "id": "dc374",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC374",
    "name": "Minimal Floral Designer Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc374.jpg"
  },
  {
    "id": "dc375",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC375",
    "name": "Chocolate Loaded Designer Cake",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc375.jpg"
  },
  {
    "id": "dc376",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC376",
    "name": "Designer Special Cake Design 26",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc376.jpg"
  },
  {
    "id": "dc377",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC377",
    "name": "Designer Special Cake Design 27",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc377.jpg"
  },
  {
    "id": "dc378",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC378",
    "name": "Designer Special Cake Design 28",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc378.jpg"
  },
  {
    "id": "dc379",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC379",
    "name": "Designer Special Cake Design 29",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc379.jpg"
  },
  {
    "id": "dc380",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC380",
    "name": "Designer Special Cake Design 30",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc380.jpg"
  },
  {
    "id": "dc381",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC381",
    "name": "Designer Special Cake Design 31",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc381.jpg"
  },
  {
    "id": "dc382",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC382",
    "name": "Designer Special Cake Design 32",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc382.jpg"
  },
  {
    "id": "dc383",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC383",
    "name": "Designer Special Cake Design 33",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc383.jpg"
  },
  {
    "id": "dc384",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC384",
    "name": "Designer Special Cake Design 34",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc384.jpg"
  },
  {
    "id": "dc385",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC385",
    "name": "Designer Special Cake Design 35",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc385.jpg"
  },
  {
    "id": "dc386",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC386",
    "name": "Designer Special Cake Design 36",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc386.jpg"
  },
  {
    "id": "dc387",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC387",
    "name": "Designer Special Cake Design 37",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc387.jpg"
  },
  {
    "id": "dc388",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC388",
    "name": "Designer Special Cake Design 38",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc388.jpg"
  },
  {
    "id": "dc389",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC389",
    "name": "Designer Special Cake Design 39",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc389.jpg"
  },
  {
    "id": "dc390",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC390",
    "name": "Designer Special Cake Design 40",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc390.jpg"
  },
  {
    "id": "dc391",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC391",
    "name": "Designer Special Cake Design 41",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc391.jpg"
  },
  {
    "id": "dc392",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC392",
    "name": "Designer Special Cake Design 42",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc392.jpg"
  },
  {
    "id": "dc393",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC393",
    "name": "Designer Special Cake Design 43",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc393.jpg"
  },
  {
    "id": "dc394",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC394",
    "name": "Designer Special Cake Design 44",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc394.jpg"
  },
  {
    "id": "dc395",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC395",
    "name": "Designer Special Cake Design 45",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc395.jpg"
  },
  {
    "id": "dc396",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC396",
    "name": "Designer Special Cake Design 46",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc396.jpg"
  },
  {
    "id": "dc397",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC397",
    "name": "Designer Special Cake Design 47",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc397.jpg"
  },
  {
    "id": "dc398",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC398",
    "name": "Designer Special Cake Design 48",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc398.jpg"
  },
  {
    "id": "dc399",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC399",
    "name": "Designer Special Cake Design 49",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc399.jpg"
  },
  {
    "id": "dc400",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Designer Specials",
    "sku": "DC400",
    "name": "Designer Special Cake Design 50",
    "basePrice": 3000,
    "description": "A custom-style designer cake suitable for special celebrations and themes.",
    "image": "images/dc400.jpg"
  },
  {
    "id": "oc451",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC451",
    "name": "New Year Cake Design 01",
    "basePrice": 650,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc451.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc452",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC452",
    "name": "New Year Cake Design 02",
    "basePrice": 700,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc452.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc453",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC453",
    "name": "New Year Cake Design 03",
    "basePrice": 750,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc453.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc454",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC454",
    "name": "New Year Cake Design 04",
    "basePrice": 800,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc454.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc455",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC455",
    "name": "New Year Cake Design 05",
    "basePrice": 850,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc455.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc456",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC456",
    "name": "New Year Cake Design 06",
    "basePrice": 900,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc456.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc457",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC457",
    "name": "New Year Cake Design 07",
    "basePrice": 950,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc457.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc458",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC458",
    "name": "New Year Cake Design 08",
    "basePrice": 1000,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc458.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc459",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC459",
    "name": "New Year Cake Design 09",
    "basePrice": 650,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc459.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc460",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC460",
    "name": "New Year Cake Design 10",
    "basePrice": 700,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc460.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc461",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC461",
    "name": "New Year Cake Design 11",
    "basePrice": 750,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc461.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc462",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC462",
    "name": "New Year Cake Design 12",
    "basePrice": 800,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc462.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc463",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC463",
    "name": "New Year Cake Design 13",
    "basePrice": 850,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc463.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc464",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC464",
    "name": "New Year Cake Design 14",
    "basePrice": 900,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc464.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc465",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC465",
    "name": "New Year Cake Design 15",
    "basePrice": 950,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc465.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc466",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC466",
    "name": "New Year Cake Design 16",
    "basePrice": 1000,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc466.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc467",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC467",
    "name": "New Year Cake Design 17",
    "basePrice": 650,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc467.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc468",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC468",
    "name": "New Year Cake Design 18",
    "basePrice": 700,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc468.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc469",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC469",
    "name": "New Year Cake Design 19",
    "basePrice": 750,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc469.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc470",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC470",
    "name": "New Year Cake Design 20",
    "basePrice": 800,
    "description": "Special occasion cake design for New Year (1 Jan) celebrations.",
    "image": "images/oc470.jpg",
    "occasion": "New Year (1 Jan)"
  },
  {
    "id": "oc471",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC471",
    "name": "Valentine's Day Cake Design 01",
    "basePrice": 650,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc471.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc472",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC472",
    "name": "Valentine's Day Cake Design 02",
    "basePrice": 700,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc472.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc473",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC473",
    "name": "Valentine's Day Cake Design 03",
    "basePrice": 750,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc473.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc474",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC474",
    "name": "Valentine's Day Cake Design 04",
    "basePrice": 800,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc474.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc475",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC475",
    "name": "Valentine's Day Cake Design 05",
    "basePrice": 850,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc475.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc476",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC476",
    "name": "Valentine's Day Cake Design 06",
    "basePrice": 900,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc476.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc477",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC477",
    "name": "Valentine's Day Cake Design 07",
    "basePrice": 950,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc477.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc478",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC478",
    "name": "Valentine's Day Cake Design 08",
    "basePrice": 1000,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc478.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc479",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC479",
    "name": "Valentine's Day Cake Design 09",
    "basePrice": 650,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc479.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc480",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC480",
    "name": "Valentine's Day Cake Design 10",
    "basePrice": 700,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc480.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc481",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC481",
    "name": "Valentine's Day Cake Design 11",
    "basePrice": 750,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc481.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc482",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC482",
    "name": "Valentine's Day Cake Design 12",
    "basePrice": 800,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc482.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc483",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC483",
    "name": "Valentine's Day Cake Design 13",
    "basePrice": 850,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc483.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc484",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC484",
    "name": "Valentine's Day Cake Design 14",
    "basePrice": 900,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc484.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc485",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC485",
    "name": "Valentine's Day Cake Design 15",
    "basePrice": 950,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc485.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc486",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC486",
    "name": "Valentine's Day Cake Design 16",
    "basePrice": 1000,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc486.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc487",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC487",
    "name": "Valentine's Day Cake Design 17",
    "basePrice": 650,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc487.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc488",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC488",
    "name": "Valentine's Day Cake Design 18",
    "basePrice": 700,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc488.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc489",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC489",
    "name": "Valentine's Day Cake Design 19",
    "basePrice": 750,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc489.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc490",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC490",
    "name": "Valentine's Day Cake Design 20",
    "basePrice": 800,
    "description": "Special occasion cake design for Valentine's Day (14 Feb) celebrations.",
    "image": "images/oc490.jpg",
    "occasion": "Valentine's Day (14 Feb)"
  },
  {
    "id": "oc491",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC491",
    "name": "Mother's Day Cake Design 01",
    "basePrice": 650,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc491.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc492",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC492",
    "name": "Mother's Day Cake Design 02",
    "basePrice": 700,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc492.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc493",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC493",
    "name": "Mother's Day Cake Design 03",
    "basePrice": 750,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc493.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc494",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC494",
    "name": "Mother's Day Cake Design 04",
    "basePrice": 800,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc494.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc495",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC495",
    "name": "Mother's Day Cake Design 05",
    "basePrice": 850,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc495.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc496",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC496",
    "name": "Mother's Day Cake Design 06",
    "basePrice": 900,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc496.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc497",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC497",
    "name": "Mother's Day Cake Design 07",
    "basePrice": 950,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc497.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc498",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC498",
    "name": "Mother's Day Cake Design 08",
    "basePrice": 1000,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc498.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc499",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC499",
    "name": "Mother's Day Cake Design 09",
    "basePrice": 650,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc499.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc500",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC500",
    "name": "Mother's Day Cake Design 10",
    "basePrice": 700,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc500.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc501",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC501",
    "name": "Mother's Day Cake Design 11",
    "basePrice": 750,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc501.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc502",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC502",
    "name": "Mother's Day Cake Design 12",
    "basePrice": 800,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc502.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc503",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC503",
    "name": "Mother's Day Cake Design 13",
    "basePrice": 850,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc503.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc504",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC504",
    "name": "Mother's Day Cake Design 14",
    "basePrice": 900,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc504.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc505",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC505",
    "name": "Mother's Day Cake Design 15",
    "basePrice": 950,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc505.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc506",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC506",
    "name": "Mother's Day Cake Design 16",
    "basePrice": 1000,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc506.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc507",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC507",
    "name": "Mother's Day Cake Design 17",
    "basePrice": 650,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc507.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc508",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC508",
    "name": "Mother's Day Cake Design 18",
    "basePrice": 700,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc508.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc509",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC509",
    "name": "Mother's Day Cake Design 19",
    "basePrice": 750,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc509.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc510",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC510",
    "name": "Mother's Day Cake Design 20",
    "basePrice": 800,
    "description": "Special occasion cake design for Mother's Day (May) celebrations.",
    "image": "images/oc510.jpg",
    "occasion": "Mother's Day (May)"
  },
  {
    "id": "oc511",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC511",
    "name": "Father's Day Cake Design 01",
    "basePrice": 650,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc511.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc512",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC512",
    "name": "Father's Day Cake Design 02",
    "basePrice": 700,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc512.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc513",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC513",
    "name": "Father's Day Cake Design 03",
    "basePrice": 750,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc513.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc514",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC514",
    "name": "Father's Day Cake Design 04",
    "basePrice": 800,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc514.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc515",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC515",
    "name": "Father's Day Cake Design 05",
    "basePrice": 850,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc515.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc516",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC516",
    "name": "Father's Day Cake Design 06",
    "basePrice": 900,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc516.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc517",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC517",
    "name": "Father's Day Cake Design 07",
    "basePrice": 950,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc517.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc518",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC518",
    "name": "Father's Day Cake Design 08",
    "basePrice": 1000,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc518.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc519",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC519",
    "name": "Father's Day Cake Design 09",
    "basePrice": 650,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc519.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc520",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC520",
    "name": "Father's Day Cake Design 10",
    "basePrice": 700,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc520.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc521",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC521",
    "name": "Father's Day Cake Design 11",
    "basePrice": 750,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc521.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc522",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC522",
    "name": "Father's Day Cake Design 12",
    "basePrice": 800,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc522.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc523",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC523",
    "name": "Father's Day Cake Design 13",
    "basePrice": 850,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc523.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc524",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC524",
    "name": "Father's Day Cake Design 14",
    "basePrice": 900,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc524.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc525",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC525",
    "name": "Father's Day Cake Design 15",
    "basePrice": 950,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc525.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc526",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC526",
    "name": "Father's Day Cake Design 16",
    "basePrice": 1000,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc526.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc527",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC527",
    "name": "Father's Day Cake Design 17",
    "basePrice": 650,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc527.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc528",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC528",
    "name": "Father's Day Cake Design 18",
    "basePrice": 700,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc528.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc529",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC529",
    "name": "Father's Day Cake Design 19",
    "basePrice": 750,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc529.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc530",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC530",
    "name": "Father's Day Cake Design 20",
    "basePrice": 800,
    "description": "Special occasion cake design for Father's Day (June) celebrations.",
    "image": "images/oc530.jpg",
    "occasion": "Father's Day (June)"
  },
  {
    "id": "oc531",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC531",
    "name": "Friendship Day Cake Design 01",
    "basePrice": 650,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc531.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc532",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC532",
    "name": "Friendship Day Cake Design 02",
    "basePrice": 700,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc532.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc533",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC533",
    "name": "Friendship Day Cake Design 03",
    "basePrice": 750,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc533.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc534",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC534",
    "name": "Friendship Day Cake Design 04",
    "basePrice": 800,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc534.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc535",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC535",
    "name": "Friendship Day Cake Design 05",
    "basePrice": 850,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc535.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc536",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC536",
    "name": "Friendship Day Cake Design 06",
    "basePrice": 900,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc536.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc537",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC537",
    "name": "Friendship Day Cake Design 07",
    "basePrice": 950,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc537.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc538",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC538",
    "name": "Friendship Day Cake Design 08",
    "basePrice": 1000,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc538.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc539",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC539",
    "name": "Friendship Day Cake Design 09",
    "basePrice": 650,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc539.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc540",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC540",
    "name": "Friendship Day Cake Design 10",
    "basePrice": 700,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc540.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc541",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC541",
    "name": "Friendship Day Cake Design 11",
    "basePrice": 750,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc541.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc542",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC542",
    "name": "Friendship Day Cake Design 12",
    "basePrice": 800,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc542.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc543",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC543",
    "name": "Friendship Day Cake Design 13",
    "basePrice": 850,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc543.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc544",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC544",
    "name": "Friendship Day Cake Design 14",
    "basePrice": 900,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc544.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc545",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC545",
    "name": "Friendship Day Cake Design 15",
    "basePrice": 950,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc545.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc546",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC546",
    "name": "Friendship Day Cake Design 16",
    "basePrice": 1000,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc546.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc547",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC547",
    "name": "Friendship Day Cake Design 17",
    "basePrice": 650,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc547.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc548",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC548",
    "name": "Friendship Day Cake Design 18",
    "basePrice": 700,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc548.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc549",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC549",
    "name": "Friendship Day Cake Design 19",
    "basePrice": 750,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc549.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc550",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC550",
    "name": "Friendship Day Cake Design 20",
    "basePrice": 800,
    "description": "Special occasion cake design for Friendship Day (August) celebrations.",
    "image": "images/oc550.jpg",
    "occasion": "Friendship Day (August)"
  },
  {
    "id": "oc551",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC551",
    "name": "Christmas Cake Design 01",
    "basePrice": 650,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc551.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc552",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC552",
    "name": "Christmas Cake Design 02",
    "basePrice": 700,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc552.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc553",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC553",
    "name": "Christmas Cake Design 03",
    "basePrice": 750,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc553.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc554",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC554",
    "name": "Christmas Cake Design 04",
    "basePrice": 800,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc554.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc555",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC555",
    "name": "Christmas Cake Design 05",
    "basePrice": 850,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc555.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc556",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC556",
    "name": "Christmas Cake Design 06",
    "basePrice": 900,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc556.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc557",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC557",
    "name": "Christmas Cake Design 07",
    "basePrice": 950,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc557.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc558",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC558",
    "name": "Christmas Cake Design 08",
    "basePrice": 1000,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc558.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc559",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC559",
    "name": "Christmas Cake Design 09",
    "basePrice": 650,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc559.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc560",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC560",
    "name": "Christmas Cake Design 10",
    "basePrice": 700,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc560.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc561",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC561",
    "name": "Christmas Cake Design 11",
    "basePrice": 750,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc561.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc562",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC562",
    "name": "Christmas Cake Design 12",
    "basePrice": 800,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc562.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc563",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC563",
    "name": "Christmas Cake Design 13",
    "basePrice": 850,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc563.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc564",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC564",
    "name": "Christmas Cake Design 14",
    "basePrice": 900,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc564.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc565",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC565",
    "name": "Christmas Cake Design 15",
    "basePrice": 950,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc565.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc566",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC566",
    "name": "Christmas Cake Design 16",
    "basePrice": 1000,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc566.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc567",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC567",
    "name": "Christmas Cake Design 17",
    "basePrice": 650,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc567.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc568",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC568",
    "name": "Christmas Cake Design 18",
    "basePrice": 700,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc568.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc569",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC569",
    "name": "Christmas Cake Design 19",
    "basePrice": 750,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc569.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc570",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC570",
    "name": "Christmas Cake Design 20",
    "basePrice": 800,
    "description": "Special occasion cake design for Christmas (25 Dec) celebrations.",
    "image": "images/oc570.jpg",
    "occasion": "Christmas (25 Dec)"
  },
  {
    "id": "oc571",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC571",
    "name": "Karva Chauth Cake Design 01",
    "basePrice": 650,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc571.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc572",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC572",
    "name": "Karva Chauth Cake Design 02",
    "basePrice": 700,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc572.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc573",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC573",
    "name": "Karva Chauth Cake Design 03",
    "basePrice": 750,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc573.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc574",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC574",
    "name": "Karva Chauth Cake Design 04",
    "basePrice": 800,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc574.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc575",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC575",
    "name": "Karva Chauth Cake Design 05",
    "basePrice": 850,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc575.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc576",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC576",
    "name": "Karva Chauth Cake Design 06",
    "basePrice": 900,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc576.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc577",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC577",
    "name": "Karva Chauth Cake Design 07",
    "basePrice": 950,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc577.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc578",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC578",
    "name": "Karva Chauth Cake Design 08",
    "basePrice": 1000,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc578.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc579",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC579",
    "name": "Karva Chauth Cake Design 09",
    "basePrice": 650,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc579.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc580",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC580",
    "name": "Karva Chauth Cake Design 10",
    "basePrice": 700,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc580.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc581",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC581",
    "name": "Karva Chauth Cake Design 11",
    "basePrice": 750,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc581.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc582",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC582",
    "name": "Karva Chauth Cake Design 12",
    "basePrice": 800,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc582.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc583",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC583",
    "name": "Karva Chauth Cake Design 13",
    "basePrice": 850,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc583.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc584",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC584",
    "name": "Karva Chauth Cake Design 14",
    "basePrice": 900,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc584.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc585",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC585",
    "name": "Karva Chauth Cake Design 15",
    "basePrice": 950,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc585.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc586",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC586",
    "name": "Karva Chauth Cake Design 16",
    "basePrice": 1000,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc586.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc587",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC587",
    "name": "Karva Chauth Cake Design 17",
    "basePrice": 650,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc587.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc588",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC588",
    "name": "Karva Chauth Cake Design 18",
    "basePrice": 700,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc588.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc589",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC589",
    "name": "Karva Chauth Cake Design 19",
    "basePrice": 750,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc589.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc590",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC590",
    "name": "Karva Chauth Cake Design 20",
    "basePrice": 800,
    "description": "Special occasion cake design for Karva Chauth celebrations.",
    "image": "images/oc590.jpg",
    "occasion": "Karva Chauth"
  },
  {
    "id": "oc591",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC591",
    "name": "Teej Cake Design 01",
    "basePrice": 650,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc591.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc592",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC592",
    "name": "Teej Cake Design 02",
    "basePrice": 700,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc592.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc593",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC593",
    "name": "Teej Cake Design 03",
    "basePrice": 750,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc593.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc594",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC594",
    "name": "Teej Cake Design 04",
    "basePrice": 800,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc594.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc595",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC595",
    "name": "Teej Cake Design 05",
    "basePrice": 850,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc595.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc596",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC596",
    "name": "Teej Cake Design 06",
    "basePrice": 900,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc596.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc597",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC597",
    "name": "Teej Cake Design 07",
    "basePrice": 950,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc597.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc598",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC598",
    "name": "Teej Cake Design 08",
    "basePrice": 1000,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc598.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc599",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC599",
    "name": "Teej Cake Design 09",
    "basePrice": 650,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc599.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc600",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC600",
    "name": "Teej Cake Design 10",
    "basePrice": 700,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc600.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc601",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC601",
    "name": "Teej Cake Design 11",
    "basePrice": 750,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc601.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc602",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC602",
    "name": "Teej Cake Design 12",
    "basePrice": 800,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc602.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc603",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC603",
    "name": "Teej Cake Design 13",
    "basePrice": 850,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc603.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc604",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC604",
    "name": "Teej Cake Design 14",
    "basePrice": 900,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc604.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc605",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC605",
    "name": "Teej Cake Design 15",
    "basePrice": 950,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc605.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc606",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC606",
    "name": "Teej Cake Design 16",
    "basePrice": 1000,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc606.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc607",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC607",
    "name": "Teej Cake Design 17",
    "basePrice": 650,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc607.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc608",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC608",
    "name": "Teej Cake Design 18",
    "basePrice": 700,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc608.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc609",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC609",
    "name": "Teej Cake Design 19",
    "basePrice": 750,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc609.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc610",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC610",
    "name": "Teej Cake Design 20",
    "basePrice": 800,
    "description": "Special occasion cake design for Teej celebrations.",
    "image": "images/oc610.jpg",
    "occasion": "Teej"
  },
  {
    "id": "oc611",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC611",
    "name": "Engagement & Wedding Cake Design 01",
    "basePrice": 650,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc611.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc612",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC612",
    "name": "Engagement & Wedding Cake Design 02",
    "basePrice": 700,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc612.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc613",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC613",
    "name": "Engagement & Wedding Cake Design 03",
    "basePrice": 750,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc613.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc614",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC614",
    "name": "Engagement & Wedding Cake Design 04",
    "basePrice": 800,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc614.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc615",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC615",
    "name": "Engagement & Wedding Cake Design 05",
    "basePrice": 850,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc615.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc616",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC616",
    "name": "Engagement & Wedding Cake Design 06",
    "basePrice": 900,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc616.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc617",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC617",
    "name": "Engagement & Wedding Cake Design 07",
    "basePrice": 950,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc617.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc618",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC618",
    "name": "Engagement & Wedding Cake Design 08",
    "basePrice": 1000,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc618.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc619",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC619",
    "name": "Engagement & Wedding Cake Design 09",
    "basePrice": 650,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc619.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc620",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC620",
    "name": "Engagement & Wedding Cake Design 10",
    "basePrice": 700,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc620.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc621",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC621",
    "name": "Engagement & Wedding Cake Design 11",
    "basePrice": 750,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc621.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc622",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC622",
    "name": "Engagement & Wedding Cake Design 12",
    "basePrice": 800,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc622.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc623",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC623",
    "name": "Engagement & Wedding Cake Design 13",
    "basePrice": 850,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc623.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc624",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC624",
    "name": "Engagement & Wedding Cake Design 14",
    "basePrice": 900,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc624.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc625",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC625",
    "name": "Engagement & Wedding Cake Design 15",
    "basePrice": 950,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc625.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc626",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC626",
    "name": "Engagement & Wedding Cake Design 16",
    "basePrice": 1000,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc626.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc627",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC627",
    "name": "Engagement & Wedding Cake Design 17",
    "basePrice": 650,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc627.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc628",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC628",
    "name": "Engagement & Wedding Cake Design 18",
    "basePrice": 700,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc628.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc629",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC629",
    "name": "Engagement & Wedding Cake Design 19",
    "basePrice": 750,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc629.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc630",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC630",
    "name": "Engagement & Wedding Cake Design 20",
    "basePrice": 800,
    "description": "Special occasion cake design for Engagement / Wedding celebrations.",
    "image": "images/oc630.jpg",
    "occasion": "Engagement / Wedding"
  },
  {
    "id": "oc631",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC631",
    "name": "Baby Shower Cake Design 01",
    "basePrice": 650,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc631.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc632",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC632",
    "name": "Baby Shower Cake Design 02",
    "basePrice": 700,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc632.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc633",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC633",
    "name": "Baby Shower Cake Design 03",
    "basePrice": 750,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc633.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc634",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC634",
    "name": "Baby Shower Cake Design 04",
    "basePrice": 800,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc634.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc635",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC635",
    "name": "Baby Shower Cake Design 05",
    "basePrice": 850,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc635.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc636",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC636",
    "name": "Baby Shower Cake Design 06",
    "basePrice": 900,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc636.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc637",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC637",
    "name": "Baby Shower Cake Design 07",
    "basePrice": 950,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc637.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc638",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC638",
    "name": "Baby Shower Cake Design 08",
    "basePrice": 1000,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc638.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc639",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC639",
    "name": "Baby Shower Cake Design 09",
    "basePrice": 650,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc639.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc640",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC640",
    "name": "Baby Shower Cake Design 10",
    "basePrice": 700,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc640.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc641",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC641",
    "name": "Baby Shower Cake Design 11",
    "basePrice": 750,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc641.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc642",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC642",
    "name": "Baby Shower Cake Design 12",
    "basePrice": 800,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc642.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc643",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC643",
    "name": "Baby Shower Cake Design 13",
    "basePrice": 850,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc643.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc644",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC644",
    "name": "Baby Shower Cake Design 14",
    "basePrice": 900,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc644.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc645",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC645",
    "name": "Baby Shower Cake Design 15",
    "basePrice": 950,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc645.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc646",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC646",
    "name": "Baby Shower Cake Design 16",
    "basePrice": 1000,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc646.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc647",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC647",
    "name": "Baby Shower Cake Design 17",
    "basePrice": 650,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc647.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc648",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC648",
    "name": "Baby Shower Cake Design 18",
    "basePrice": 700,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc648.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc649",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC649",
    "name": "Baby Shower Cake Design 19",
    "basePrice": 750,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc649.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc650",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC650",
    "name": "Baby Shower Cake Design 20",
    "basePrice": 800,
    "description": "Special occasion cake design for Baby Shower celebrations.",
    "image": "images/oc650.jpg",
    "occasion": "Baby Shower"
  },
  {
    "id": "oc651",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC651",
    "name": "Housewarming Cake Design 01",
    "basePrice": 650,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc651.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc652",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC652",
    "name": "Housewarming Cake Design 02",
    "basePrice": 700,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc652.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc653",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC653",
    "name": "Housewarming Cake Design 03",
    "basePrice": 750,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc653.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc654",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC654",
    "name": "Housewarming Cake Design 04",
    "basePrice": 800,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc654.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc655",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC655",
    "name": "Housewarming Cake Design 05",
    "basePrice": 850,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc655.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc656",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC656",
    "name": "Housewarming Cake Design 06",
    "basePrice": 900,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc656.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc657",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC657",
    "name": "Housewarming Cake Design 07",
    "basePrice": 950,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc657.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc658",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC658",
    "name": "Housewarming Cake Design 08",
    "basePrice": 1000,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc658.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc659",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC659",
    "name": "Housewarming Cake Design 09",
    "basePrice": 650,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc659.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc660",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC660",
    "name": "Housewarming Cake Design 10",
    "basePrice": 700,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc660.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc661",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC661",
    "name": "Housewarming Cake Design 11",
    "basePrice": 750,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc661.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc662",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC662",
    "name": "Housewarming Cake Design 12",
    "basePrice": 800,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc662.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc663",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC663",
    "name": "Housewarming Cake Design 13",
    "basePrice": 850,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc663.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc664",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC664",
    "name": "Housewarming Cake Design 14",
    "basePrice": 900,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc664.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc665",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC665",
    "name": "Housewarming Cake Design 15",
    "basePrice": 950,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc665.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc666",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC666",
    "name": "Housewarming Cake Design 16",
    "basePrice": 1000,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc666.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc667",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC667",
    "name": "Housewarming Cake Design 17",
    "basePrice": 650,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc667.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc668",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC668",
    "name": "Housewarming Cake Design 18",
    "basePrice": 700,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc668.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc669",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC669",
    "name": "Housewarming Cake Design 19",
    "basePrice": 750,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc669.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc670",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC670",
    "name": "Housewarming Cake Design 20",
    "basePrice": 800,
    "description": "Special occasion cake design for Housewarming (Griha Pravesh) celebrations.",
    "image": "images/oc670.jpg",
    "occasion": "Housewarming (Griha Pravesh)"
  },
  {
    "id": "oc671",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC671",
    "name": "Farewell & Promotion Party Cake Design 01",
    "basePrice": 650,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc671.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc672",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC672",
    "name": "Farewell & Promotion Party Cake Design 02",
    "basePrice": 700,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc672.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc673",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC673",
    "name": "Farewell & Promotion Party Cake Design 03",
    "basePrice": 750,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc673.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc674",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC674",
    "name": "Farewell & Promotion Party Cake Design 04",
    "basePrice": 800,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc674.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc675",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC675",
    "name": "Farewell & Promotion Party Cake Design 05",
    "basePrice": 850,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc675.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc676",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC676",
    "name": "Farewell & Promotion Party Cake Design 06",
    "basePrice": 900,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc676.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc677",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC677",
    "name": "Farewell & Promotion Party Cake Design 07",
    "basePrice": 950,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc677.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc678",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC678",
    "name": "Farewell & Promotion Party Cake Design 08",
    "basePrice": 1000,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc678.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc679",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC679",
    "name": "Farewell & Promotion Party Cake Design 09",
    "basePrice": 650,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc679.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc680",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC680",
    "name": "Farewell & Promotion Party Cake Design 10",
    "basePrice": 700,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc680.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc681",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC681",
    "name": "Farewell & Promotion Party Cake Design 11",
    "basePrice": 750,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc681.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc682",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC682",
    "name": "Farewell & Promotion Party Cake Design 12",
    "basePrice": 800,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc682.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc683",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC683",
    "name": "Farewell & Promotion Party Cake Design 13",
    "basePrice": 850,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc683.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc684",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC684",
    "name": "Farewell & Promotion Party Cake Design 14",
    "basePrice": 900,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc684.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc685",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC685",
    "name": "Farewell & Promotion Party Cake Design 15",
    "basePrice": 950,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc685.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc686",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC686",
    "name": "Farewell & Promotion Party Cake Design 16",
    "basePrice": 1000,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc686.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc687",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC687",
    "name": "Farewell & Promotion Party Cake Design 17",
    "basePrice": 650,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc687.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc688",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC688",
    "name": "Farewell & Promotion Party Cake Design 18",
    "basePrice": 700,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc688.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc689",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC689",
    "name": "Farewell & Promotion Party Cake Design 19",
    "basePrice": 750,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc689.jpg",
    "occasion": "Farewell / Promotion Party"
  },
  {
    "id": "oc690",
    "type": "cake",
    "category": "Cakes",
    "subcategory": "Special Occasion",
    "sku": "OC690",
    "name": "Farewell & Promotion Party Cake Design 20",
    "basePrice": 800,
    "description": "Special occasion cake design for Farewell / Promotion Party celebrations.",
    "image": "images/oc690.jpg",
    "occasion": "Farewell / Promotion Party"
  }
];

const regularProducts = [
  {
    "id": "pastry-strawberry",
    "type": "regular",
    "category": "Pastries",
    "name": "Strawberry Pastry",
    "price": 30,
    "unit": "per piece",
    "description": "Fresh strawberry pastry with soft cream layers.",
    "image": "images/strawberry-pastry.jpg"
  },
  {
    "id": "pastry-butterscotch",
    "type": "regular",
    "category": "Pastries",
    "name": "Butterscotch Pastry",
    "price": 50,
    "unit": "per piece",
    "description": "Butterscotch pastry with caramel crunch notes.",
    "image": "images/butterscotch-pastry.jpg"
  },
  {
    "id": "pastry-pineapple",
    "type": "regular",
    "category": "Pastries",
    "name": "Pineapple Pastry",
    "price": 30,
    "unit": "per piece",
    "description": "Fresh pineapple pastry with light cream.",
    "image": "images/pineapple-pastry.jpg"
  },
  {
    "id": "pastry-chocolate",
    "type": "regular",
    "category": "Pastries",
    "name": "Chocolate Pastry",
    "price": 50,
    "unit": "per piece",
    "description": "Soft chocolate pastry with rich cream layers.",
    "image": "images/chocolate-pastry.jpg"
  },
  {
    "id": "pastry-black-forest",
    "type": "regular",
    "category": "Pastries",
    "name": "Black Forest Pastry",
    "price": 50,
    "unit": "per piece",
    "description": "Classic black forest pastry with chocolate shavings.",
    "image": "images/black-forest-pastry.jpg"
  },
  {
    "id": "pastry-red-velvet",
    "type": "regular",
    "category": "Pastries",
    "name": "Red Velvet Pastry",
    "price": 100,
    "unit": "per piece",
    "description": "Premium red velvet pastry with smooth frosting.",
    "image": "images/red-velvet-pastry.jpg"
  },
  {
    "id": "pastry-biscoff",
    "type": "regular",
    "category": "Pastries",
    "name": "Biscoff Pastry",
    "price": 100,
    "unit": "per piece",
    "description": "Premium Biscoff pastry with caramel biscuit flavour.",
    "image": "images/biscoff-pastry.jpg"
  },
  {
    "id": "pastry-truffle",
    "type": "regular",
    "category": "Pastries",
    "name": "Truffle Pastry",
    "price": 100,
    "unit": "per piece",
    "description": "Rich truffle pastry for chocolate lovers.",
    "image": "images/truffle-pastry.jpg"
  },
  {
    "id": "pastry-oreo",
    "type": "regular",
    "category": "Pastries",
    "name": "Oreo Pastry",
    "price": 100,
    "unit": "per piece",
    "description": "Oreo cream pastry with cookie crunch.",
    "image": "images/oreo-pastry.jpg"
  },
  {
    "id": "gourmet-choco-taco",
    "type": "regular",
    "category": "Gourmet Treats",
    "name": "Choco Taco",
    "price": 90,
    "unit": "each",
    "description": "A unique chocolate taco-style dessert treat.",
    "image": "images/choco-taco.jpg"
  },
  {
    "id": "gourmet-choco-ball",
    "type": "regular",
    "category": "Gourmet Treats",
    "name": "Choco Ball",
    "price": 50,
    "unit": "each",
    "description": "Chocolate-coated dessert ball for quick cravings.",
    "image": "images/choco-ball.jpg"
  },
  {
    "id": "gourmet-cake-jar",
    "type": "regular",
    "category": "Gourmet Treats",
    "name": "Cake Jar",
    "price": 120,
    "unit": "each",
    "description": "Layered cake and cream in a gifting jar.",
    "image": "images/cake-jar.jpg"
  },
  {
    "id": "gourmet-brownie",
    "type": "regular",
    "category": "Gourmet Treats",
    "name": "Brownie",
    "price": 80,
    "unit": "each",
    "description": "Dense chocolate brownie baked fresh.",
    "image": "images/brownie.jpg"
  },
  {
    "id": "gourmet-donut",
    "type": "regular",
    "category": "Gourmet Treats",
    "name": "Donut",
    "price": 70,
    "unit": "each",
    "description": "Soft donut with sweet glaze and toppings.",
    "image": "images/donut.jpg"
  },
  {
    "id": "gourmet-cupcake",
    "type": "regular",
    "category": "Gourmet Treats",
    "name": "Cupcake",
    "price": 60,
    "unit": "each",
    "description": "Mini cupcake for celebrations and gifting.",
    "image": "images/cupcake.jpg"
  },
  {
    "id": "gourmet-dessert-bowl",
    "type": "regular",
    "category": "Gourmet Treats",
    "name": "Dessert Bowl",
    "price": 120,
    "unit": "each",
    "description": "Elegant dessert bowl with creamy layers.",
    "image": "images/dessert-bowl.jpg"
  },
  {
    "id": "savory-aaloo-patties",
    "type": "regular",
    "category": "Savory Bakes",
    "name": "Aaloo Patties",
    "price": 30,
    "unit": "per piece",
    "description": "Flaky patties filled with spiced potato.",
    "image": "images/aaloo-patties.jpg"
  },
  {
    "id": "savory-paneer-patties",
    "type": "regular",
    "category": "Savory Bakes",
    "name": "Paneer Patties",
    "price": 50,
    "unit": "per piece",
    "description": "Paneer-filled savory patties baked fresh.",
    "image": "images/paneer-patties.jpg"
  },
  {
    "id": "savory-bakery-biscuits",
    "type": "regular",
    "category": "Savory Bakes",
    "name": "Bakery Biscuits",
    "price": 250,
    "unit": "per kg",
    "description": "Fresh bakery biscuits for tea-time and gifting.",
    "image": "images/bakery-biscuits.jpg"
  },
  {
    "id": "savory-cookies",
    "type": "regular",
    "category": "Savory Bakes",
    "name": "Cookies",
    "price": 300,
    "unit": "per kg",
    "description": "Fresh baked cookies with crisp and buttery texture.",
    "image": "images/cookies.jpg"
  },
  {
    "id": "bev-cold-coffee",
    "type": "beverage",
    "category": "Beverages & Shakes",
    "name": "Cold Coffee",
    "price": 50,
    "unit": "regular",
    "description": "Chilled creamy cold coffee.",
    "image": "images/cold-coffee.jpg"
  }
];

const cakeOccasions = [
  "New Year (1 Jan)",
  "Valentine's Day (14 Feb)",
  "Mother's Day (May)",
  "Father's Day (June)",
  "Friendship Day (August)",
  "Christmas (25 Dec)",
  "Karva Chauth",
  "Teej",
  "Engagement / Wedding",
  "Baby Shower",
  "Housewarming (Griha Pravesh)",
  "Farewell / Promotion Party"
];

const allProducts = [...cakeProducts, ...regularProducts];
const cakeSubcategories = ['All Cakes', 'Bento & Mini Cakes', 'Signature Bestsellers', 'Classic Cakes', 'Designer Specials', 'Special Occasion'];
let activeCakeSubcategory = 'Bento & Mini Cakes';
let activeCakeOccasion = 'All Occasions';

const elements = {};

document.addEventListener('DOMContentLoaded', () => {
  cacheElements();
  renderCatalog();
  bindEvents();
  revealProductFromHash();
});

function cacheElements() {
  elements.headerSearch = document.getElementById('headerSearch');
  elements.catalogSearch = document.getElementById('catalogSearch');
  elements.clearSearch = document.getElementById('clearSearch');
  elements.showAllBtn = document.getElementById('showAllBtn');
  elements.searchResults = document.getElementById('searchResults');
  elements.searchGrid = document.getElementById('searchGrid');
  elements.searchCount = document.getElementById('searchCount');
  elements.fullCatalog = document.getElementById('fullCatalog');
  elements.cakeTabs = document.getElementById('cakeTabs');
  elements.occasionTabs = document.getElementById('occasionTabs');
  if (!elements.occasionTabs && elements.cakeTabs) {
    elements.occasionTabs = document.createElement('div');
    elements.occasionTabs.id = 'occasionTabs';
    elements.occasionTabs.className = 'cake-tabs occasion-tabs';
    elements.cakeTabs.insertAdjacentElement('afterend', elements.occasionTabs);
  }
  elements.cakeGrid = document.getElementById('cakeGrid');
  elements.pastriesGrid = document.getElementById('pastriesGrid');
  elements.gourmetGrid = document.getElementById('gourmetGrid');
  elements.savoryGrid = document.getElementById('savoryGrid');
  elements.beveragesGrid = document.getElementById('beveragesGrid');
  elements.modal = document.getElementById('orderModal');
  elements.modalContent = document.getElementById('modalContent');
  elements.modalClose = document.getElementById('modalClose');
}

function bindEvents() {
  [elements.headerSearch, elements.catalogSearch].forEach(input => {
    input.addEventListener('input', event => {
      syncSearchInputs(event.target.value);
      handleSearch(event.target.value);
    });

    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  elements.clearSearch.addEventListener('click', clearSearch);
  elements.showAllBtn.addEventListener('click', clearSearch);
  elements.modalClose.addEventListener('click', closeModal);
  elements.modal.addEventListener('click', event => {
    if (event.target === elements.modal) closeModal();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !elements.modal.hidden) closeModal();
  });

  window.addEventListener('hashchange', revealProductFromHash);
}

function renderCatalog() {
  renderCakeTabs();
  renderCakeGrid();
  renderProductGrid(elements.pastriesGrid, productsByCategory('Pastries'));
  renderProductGrid(elements.gourmetGrid, productsByCategory('Gourmet Treats'));
  renderProductGrid(elements.savoryGrid, productsByCategory('Savory Bakes'));
  renderProductGrid(elements.beveragesGrid, productsByCategory('Beverages & Shakes'));
}

function renderCakeTabs() {
  elements.cakeTabs.innerHTML = cakeSubcategories.map(subcategory => `
    <button class="cake-tab ${subcategory === activeCakeSubcategory ? 'active' : ''}" type="button" data-subcategory="${escapeHtml(subcategory)}">
      ${escapeHtml(subcategory)}
    </button>
  `).join('');

  elements.cakeTabs.querySelectorAll('.cake-tab').forEach(button => {
    button.addEventListener('click', () => {
      activeCakeSubcategory = button.dataset.subcategory;
      if (activeCakeSubcategory !== 'Special Occasion') {
        activeCakeOccasion = 'All Occasions';
      }
      renderCakeTabs();
      renderCakeGrid();
    });
  });

  renderOccasionTabs();
}

function renderOccasionTabs() {
  if (!elements.occasionTabs) return;

  if (activeCakeSubcategory !== 'Special Occasion') {
    elements.occasionTabs.hidden = true;
    elements.occasionTabs.innerHTML = '';
    return;
  }

  const occasionFilters = ['All Occasions', ...cakeOccasions];
  elements.occasionTabs.hidden = false;
  elements.occasionTabs.innerHTML = occasionFilters.map(occasion => `
    <button class="cake-tab ${occasion === activeCakeOccasion ? 'active' : ''}" type="button" data-occasion="${escapeHtml(occasion)}">
      ${escapeHtml(occasion)}
    </button>
  `).join('');

  elements.occasionTabs.querySelectorAll('.cake-tab').forEach(button => {
    button.addEventListener('click', () => {
      activeCakeOccasion = button.dataset.occasion;
      renderOccasionTabs();
      renderCakeGrid();
    });
  });
}

function renderCakeGrid() {
  let products = activeCakeSubcategory === 'All Cakes'
    ? cakeProducts
    : cakeProducts.filter(product => product.subcategory === activeCakeSubcategory);

  if (activeCakeSubcategory === 'Special Occasion' && activeCakeOccasion !== 'All Occasions') {
    products = products.filter(product => product.occasion === activeCakeOccasion);
  }

  renderProductGrid(elements.cakeGrid, products);
}

function renderProductGrid(container, products) {
  if (!products.length) {
    container.innerHTML = '<div class="no-results">No products found. Try another search or category.</div>';
    return;
  }

  container.innerHTML = products.map(product => productCard(product)).join('');

  container.querySelectorAll('[data-product-id]').forEach(button => {
    button.addEventListener('click', () => {
      const selectedProduct = allProducts.find(product => product.id === button.dataset.productId);
      if (selectedProduct.type === 'cake') {
        openCakeModal(selectedProduct);
      } else {
        openRegularModal(selectedProduct);
      }
    });
  });
}

function productCard(product) {
  const isCake = product.type === 'cake';
  const priceText = isCake
    ? cakeStartingText(product)
    : `₹${formatPrice(product.price)} ${product.unit}`;

  const fallbackText = isCake ? 'Cake Design' : product.category;
  const imageMarkup = product.image
    ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" onerror="this.hidden=true; this.nextElementSibling.hidden=false;" /><span hidden>${escapeHtml(fallbackText)}</span>`
    : `<span>${escapeHtml(fallbackText)}</span>`;

  return `
    <article class="item-card" id="product-${escapeHtml(product.id)}">
      <div class="item-image">${imageMarkup}</div>
      <div class="item-body">
        <div class="item-kicker">
          ${isCake ? `<span class="sku-badge">Design Code: ${escapeHtml(product.sku)}</span>` : ''}
          <span class="category-badge">${escapeHtml(isCake ? product.subcategory : product.category)}</span>
          ${isCake && product.occasion ? `<span class="category-badge">${escapeHtml(product.occasion)}</span>` : ''}
        </div>
        <h4>${escapeHtml(product.name)}</h4>
        <p>${escapeHtml(product.description)}</p>
        <p class="item-price">${priceText}</p>
        <button class="btn-order" type="button" data-product-id="${escapeHtml(product.id)}">
          ${isCake ? 'Customize Cake' : 'Order on WhatsApp'}
        </button>
      </div>
    </article>
  `;
}

function productsByCategory(category) {
  return regularProducts.filter(product => product.category === category);
}

function handleSearch(value) {
  const query = value.trim().toLowerCase();

  if (!query) {
    elements.searchResults.hidden = true;
    elements.fullCatalog.hidden = false;
    return;
  }

  const results = allProducts.filter(product => {
    const searchable = [
      product.name,
      product.category,
      product.subcategory || '',
      product.occasion || '',
      product.sku || '',
      product.description
    ].join(' ').toLowerCase();
    return searchable.includes(query);
  });

  elements.searchResults.hidden = false;
  elements.fullCatalog.hidden = true;
  elements.searchCount.textContent = `${results.length} product${results.length === 1 ? '' : 's'} found`;
  renderProductGrid(elements.searchGrid, results);
}

function syncSearchInputs(value) {
  elements.headerSearch.value = value;
  elements.catalogSearch.value = value;
}

function clearSearch() {
  syncSearchInputs('');
  handleSearch('');
}

function openCakeModal(product) {
  const imageMarkup = product.image
    ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" onerror="this.hidden=true; this.nextElementSibling.hidden=false;" /><span hidden>Cake Design</span>`
    : '<span>Cake Design</span>';

  const flavourOptions = getCakeFlavourOptions(product);
  const weightOptions = getCakeWeightOptions(product);
  const defaultWeight = getDefaultCakeWeight(product);
  const flavourSection = flavourOptions.length ? `
        <section class="form-section">
          <h3>Select Flavour</h3>
          <div class="option-grid" id="flavourOptions">
            ${flavourOptions.map((flavour, index) => optionPill('cakeFlavour', flavour, index === 0)).join('')}
          </div>
        </section>
  ` : '';

  const weightSection = weightOptions.length ? `
        <section class="form-section">
          <h3>${product.subcategory === 'Bento & Mini Cakes' ? 'Cake Size' : 'Select Weight'}</h3>
          <div class="option-grid" id="weightOptions">
            ${weightOptions.map((weight, index) => optionPill('cakeWeight', weight.label, index === 0)).join('')}
          </div>
        </section>
  ` : '';

  elements.modalContent.innerHTML = `
    <div class="modal-inner">
      <div class="modal-product-head">
        <div class="item-image">${imageMarkup}</div>
        <div class="modal-title">
          <p class="eyebrow">Customize Cake</p>
          <h2 id="modalTitle">${escapeHtml(product.name)}</h2>
          <div class="modal-meta">
            <span class="sku-badge">Design Code: ${escapeHtml(product.sku)}</span>
            <span class="category-badge">${escapeHtml(product.subcategory)}</span>
            ${product.occasion ? `<span class="category-badge">${escapeHtml(product.occasion)}</span>` : ''}
          </div>
          <p>${escapeHtml(product.description)}</p>
          <p class="estimated-price" id="cakeEstimatedPrice">Estimated Price: ₹${formatPrice(calculateCakePrice(product.basePrice, defaultWeight))}</p>
          <p class="form-note">${escapeHtml(cakeOptionNote(product))}</p>
          <p class="form-note">Final availability and customization will be confirmed on WhatsApp.</p>
        </div>
      </div>

      <div class="form-grid">
        ${flavourSection}
        ${weightSection}

        <section class="form-section">
          <h3>Cake Tag</h3>
          <div class="option-grid" id="tagOptions">
            ${['No Tag', 'Happy Birthday', 'Happy Anniversary', 'Custom Message'].map((tag, index) => optionPill('cakeTag', tag, index === 0)).join('')}
          </div>
          <div class="field hidden-field" id="customTagWrap" style="margin-top: 14px;">
            <label for="customTagMessage">Enter your cake tag message</label>
            <input id="customTagMessage" type="text" placeholder="Example: Happy Birthday Riya" />
          </div>
        </section>

        <section class="form-section">
          <h3>Customer Details</h3>
          <div class="field-grid">
            <div class="field">
              <label for="cakeCustomerName">Customer Name</label>
              <input id="cakeCustomerName" type="text" placeholder="Your name" />
            </div>
            <div class="field">
              <label for="cakeDate">Date</label>
              <input id="cakeDate" type="date" />
            </div>
            <div class="field">
              <label for="cakeTime">Preferred Time</label>
              <input id="cakeTime" type="time" />
            </div>
            <div class="field">
              <label for="cakePickupDelivery">Pickup / Delivery</label>
              <select id="cakePickupDelivery">
                <option>Pickup from Store</option>
                <option>Delivery Required</option>
              </select>
            </div>
            <div class="field full hidden-field" id="cakeDeliveryWrap">
              <label for="cakeDeliveryAddress">Delivery Address</label>
              <input id="cakeDeliveryAddress" type="text" placeholder="Enter delivery address" />
            </div>
            <div class="field full">
              <label for="cakeInstructions">Special Instructions</label>
              <textarea id="cakeInstructions" placeholder="Any special design notes, colour, theme, etc."></textarea>
            </div>
          </div>
        </section>

        <section class="form-section full">
          <h3>Order Summary</h3>
          <div class="order-summary" id="cakeSummary"></div>
          <button class="form-button" type="button" id="sendCakeOrder">Place Order on WhatsApp</button>
          <p class="form-note">Your WhatsApp app will open with all details filled. Please send the message to confirm.</p>
        </section>
      </div>
    </div>
  `;

  openModal();
  setupCakeModal(product);
}

function setupCakeModal(product) {
  const watchedSelectors = [
    'input[name="cakeFlavour"]',
    'input[name="cakeWeight"]',
    'input[name="cakeTag"]',
    '#customTagMessage',
    '#cakeCustomerName',
    '#cakeDate',
    '#cakeTime',
    '#cakePickupDelivery',
    '#cakeDeliveryAddress',
    '#cakeInstructions'
  ];

  watchedSelectors.forEach(selector => {
    elements.modalContent.querySelectorAll(selector).forEach(element => {
      element.addEventListener('input', updateCakeSummary);
      element.addEventListener('change', updateCakeSummary);
    });
  });

  elements.modalContent.querySelector('#sendCakeOrder').addEventListener('click', () => {
    const state = getCakeState(product);
    const message = `Hello Zivvanto Bakery, I want to place an order.\n\nOrder Details:\n\nDesign Code / SKU: ${state.sku}\nProduct: ${state.product}\nProduct Link: ${state.productLink}\nCategory: ${state.category}\nSubcategory: ${state.subcategory}\nOccasion: ${state.occasion}\nFlavour: ${state.flavour}\nWeight: ${state.weight}\nCake Tag: ${state.tag}\nMessage on Cake: ${state.messageOnCake}\nEstimated Price: ₹${formatPrice(state.price)}\n\nCustomer Details:\n\nName: ${state.customerName}\nDate: ${state.date}\nTime: ${state.time}\nPickup/Delivery: ${state.pickupDelivery}\nDelivery Address: ${state.deliveryAddress}\nSpecial Instructions: ${state.instructions}\n\nPlease confirm availability and final price.`;
    openWhatsApp(message);
  });

  updateCakeSummary();

  function updateCakeSummary() {
    const state = getCakeState(product);
    const customTagWrap = elements.modalContent.querySelector('#customTagWrap');
    const deliveryWrap = elements.modalContent.querySelector('#cakeDeliveryWrap');
    customTagWrap.classList.toggle('hidden-field', state.tag !== 'Custom Message');
    deliveryWrap.classList.toggle('hidden-field', state.pickupDelivery !== 'Delivery Required');

    elements.modalContent.querySelector('#cakeEstimatedPrice').textContent = `Estimated Price: ₹${formatPrice(state.price)}`;
    elements.modalContent.querySelector('#cakeSummary').innerHTML = summaryList([
      ['Product Name', state.product],
      ['Design Code / SKU', state.sku],
      ['Product Link', state.productLink],
      ['Category', state.category],
      ['Subcategory', state.subcategory],
      ['Occasion', state.occasion],
      ['Selected Flavour', state.flavour],
      ['Selected Weight', state.weight],
      ['Cake Tag', state.tag],
      ['Message on Cake', state.messageOnCake],
      ['Estimated Price', `₹${formatPrice(state.price)}`],
      ['Customer Name', state.customerName],
      ['Date', state.date],
      ['Time', state.time],
      ['Pickup / Delivery', state.pickupDelivery],
      ['Delivery Address', state.deliveryAddress],
      ['Special Instructions', state.instructions]
    ]);
  }
}

function getCakeState(product) {
  const flavourOptions = getCakeFlavourOptions(product);
  const weightOptions = getCakeWeightOptions(product);
  const flavour = flavourOptions.length ? (getCheckedValue('cakeFlavour') || flavourOptions[0]) : 'Not required';
  const weight = weightOptions.length ? (getCheckedValue('cakeWeight') || weightOptions[0].label) : 'As per design';
  const tag = getCheckedValue('cakeTag') || 'No Tag';
  const customMessage = getValue('#customTagMessage');
  const pickupDelivery = getValue('#cakePickupDelivery') || 'Pickup from Store';

  return {
    product: product.name,
    productLink: productLink(product),
    sku: product.sku,
    category: product.category,
    subcategory: product.subcategory,
    occasion: product.occasion || '-',
    flavour,
    weight,
    tag,
    messageOnCake: tag === 'Custom Message' ? valueOrDash(customMessage) : tag,
    price: calculateCakePrice(product.basePrice, weight),
    customerName: valueOrDash(getValue('#cakeCustomerName')),
    date: valueOrDash(getValue('#cakeDate')),
    time: valueOrDash(getValue('#cakeTime')),
    pickupDelivery,
    deliveryAddress: pickupDelivery === 'Delivery Required' ? valueOrDash(getValue('#cakeDeliveryAddress')) : 'Not required',
    instructions: valueOrDash(getValue('#cakeInstructions'))
  };
}

function openRegularModal(product) {
  const isBeverage = product.type === 'beverage';
  const imageMarkup = product.image
    ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" onerror="this.hidden=true; this.nextElementSibling.hidden=false;" /><span hidden>${escapeHtml(product.category)}</span>`
    : `<span>${escapeHtml(product.category)}</span>`;

  elements.modalContent.innerHTML = `
    <div class="modal-inner">
      <div class="modal-product-head">
        <div class="item-image">${imageMarkup}</div>
        <div class="modal-title">
          <p class="eyebrow">Order Item</p>
          <h2 id="modalTitle">${escapeHtml(product.name)}</h2>
          <div class="modal-meta"><span class="category-badge">${escapeHtml(product.category)}</span></div>
          <p>${escapeHtml(product.description)}</p>
          <p class="estimated-price" id="regularEstimatedPrice">Estimated Total: ₹${formatPrice(product.price)}</p>
          <p class="form-note">Final availability will be confirmed on WhatsApp.</p>
        </div>
      </div>

      <div class="form-grid">
        ${isBeverage ? `
        <section class="form-section">
          <h3>Select Size</h3>
          <div class="option-grid">
            ${['Regular', 'Large'].map((size, index) => optionPill('drinkSize', size, index === 0)).join('')}
          </div>
          <p class="form-note">Large size adds ₹30. Current Cold Coffee Large price becomes ₹80.</p>
        </section>
        ` : ''}

        <section class="form-section">
          <h3>Quantity</h3>
          <div class="field">
            <label for="regularQuantity">Quantity</label>
            <input id="regularQuantity" type="number" min="1" value="1" />
          </div>
        </section>

        <section class="form-section ${isBeverage ? 'full' : ''}">
          <h3>Customer Details</h3>
          <div class="field-grid">
            <div class="field">
              <label for="regularCustomerName">Customer Name</label>
              <input id="regularCustomerName" type="text" placeholder="Your name" />
            </div>
            <div class="field">
              <label for="regularDate">Date</label>
              <input id="regularDate" type="date" />
            </div>
            <div class="field">
              <label for="regularTime">Preferred Time</label>
              <input id="regularTime" type="time" />
            </div>
            <div class="field full">
              <label for="regularInstructions">Special Instructions</label>
              <textarea id="regularInstructions" placeholder="Any special request"></textarea>
            </div>
          </div>
        </section>

        <section class="form-section full">
          <h3>Order Summary</h3>
          <div class="order-summary" id="regularSummary"></div>
          <button class="form-button" type="button" id="sendRegularOrder">Order on WhatsApp</button>
          <p class="form-note">Your WhatsApp app will open with all details filled. Please send the message to confirm.</p>
        </section>
      </div>
    </div>
  `;

  openModal();
  setupRegularModal(product);
}

function setupRegularModal(product) {
  const selectors = [
    '#regularQuantity',
    '#regularCustomerName',
    '#regularDate',
    '#regularTime',
    '#regularInstructions',
    'input[name="drinkSize"]'
  ];

  selectors.forEach(selector => {
    elements.modalContent.querySelectorAll(selector).forEach(element => {
      element.addEventListener('input', updateRegularSummary);
      element.addEventListener('change', updateRegularSummary);
    });
  });

  elements.modalContent.querySelector('#sendRegularOrder').addEventListener('click', () => {
    const state = getRegularState(product);
    const messageTitle = product.category === 'Pastries'
      ? 'Hello Zivvanto Bakery, I want to order pastries.'
      : `Hello Zivvanto Bakery, I want to order from ${product.category}.`;
    const sizeLine = product.type === 'beverage' ? `Size: ${state.size}\n` : '';
    const message = `${messageTitle}\n\nProduct: ${state.product}\nProduct Link: ${state.productLink}\nCategory: ${state.category}\n${sizeLine}Quantity: ${state.quantity}\nPrice per item: ₹${formatPrice(state.pricePerItem)}\nEstimated Total: ₹${formatPrice(state.total)}\nCustomer Name: ${state.customerName}\nDate: ${state.date}\nTime: ${state.time}\nSpecial Instructions: ${state.instructions}\n\nPlease confirm availability.`;
    openWhatsApp(message);
  });

  updateRegularSummary();

  function updateRegularSummary() {
    const state = getRegularState(product);
    elements.modalContent.querySelector('#regularEstimatedPrice').textContent = `Estimated Total: ₹${formatPrice(state.total)}`;
    const rows = [
      ['Product', state.product],
      ['Product Link', state.productLink],
      ['Category', state.category]
    ];
    if (product.type === 'beverage') rows.push(['Size', state.size]);
    rows.push(
      ['Quantity', state.quantity],
      ['Price per item', `₹${formatPrice(state.pricePerItem)}`],
      ['Estimated Total', `₹${formatPrice(state.total)}`],
      ['Customer Name', state.customerName],
      ['Date', state.date],
      ['Time', state.time],
      ['Special Instructions', state.instructions]
    );
    elements.modalContent.querySelector('#regularSummary').innerHTML = summaryList(rows);
  }
}

function getRegularState(product) {
  const quantity = Math.max(1, Number(getValue('#regularQuantity')) || 1);
  const size = getCheckedValue('drinkSize') || 'Regular';
  const sizeExtra = product.type === 'beverage' && size === 'Large' ? 30 : 0;
  const pricePerItem = product.price + sizeExtra;
  return {
    product: product.name,
    productLink: productLink(product),
    category: product.category,
    size,
    quantity,
    pricePerItem,
    total: pricePerItem * quantity,
    customerName: valueOrDash(getValue('#regularCustomerName')),
    date: valueOrDash(getValue('#regularDate')),
    time: valueOrDash(getValue('#regularTime')),
    instructions: valueOrDash(getValue('#regularInstructions'))
  };
}

function optionPill(name, value, checked = false) {
  return `
    <label class="option-pill">
      <input type="radio" name="${escapeHtml(name)}" value="${escapeHtml(value)}" ${checked ? 'checked' : ''} />
      <span>${escapeHtml(value)}</span>
    </label>
  `;
}

function getCakeFlavourOptions(product) {
  if (product.subcategory === 'Signature Bestsellers' || product.subcategory === 'Special Occasion') {
    return flavours;
  }
  return [];
}

function getCakeWeightOptions(product) {
  if (product.subcategory === 'Bento & Mini Cakes') {
    return [{ label: 'Approx 150-250gm' }];
  }
  if (product.subcategory === 'Designer Specials') {
    return [];
  }
  if (product.subcategory === 'Special Occasion') {
    return weights.filter(weight => weight.label !== '500g');
  }
  return weights;
}

function getDefaultCakeWeight(product) {
  const options = getCakeWeightOptions(product);
  return options.length ? options[0].label : 'As per design';
}

function cakeStartingText(product) {
  const defaultWeight = getDefaultCakeWeight(product);
  const startingPrice = calculateCakePrice(product.basePrice, defaultWeight);

  if (product.subcategory === 'Bento & Mini Cakes') {
    return `Approx 150-250gm ₹${formatPrice(startingPrice)}`;
  }
  if (product.subcategory === 'Designer Specials') {
    return `Design price ₹${formatPrice(startingPrice)}`;
  }
  if (product.subcategory === 'Special Occasion') {
    return `Starts at ₹${formatPrice(startingPrice)} / 1kg`;
  }
  return `Starts at ₹${formatPrice(startingPrice)} / ${defaultWeight}`;
}

function cakeOptionNote(product) {
  if (product.subcategory === 'Bento & Mini Cakes') {
    return 'Fixed mini cake size: approx 150-250gm. Flavour selection is not required for this category.';
  }
  if (product.subcategory === 'Signature Bestsellers') {
    return 'This category includes selected flavour options and all weight options.';
  }
  if (product.subcategory === 'Classic Cakes') {
    return 'This category includes weight options only. Flavour selection is not required.';
  }
  if (product.subcategory === 'Designer Specials') {
    return 'This category is design-based. Weight and flavour options are not required online.';
  }
  if (product.subcategory === 'Special Occasion') {
    return 'This category includes flavour options and weight options starting from 1kg.';
  }
  return 'Customize your cake and send details on WhatsApp.';
}

function calculateCakePrice(basePrice, weightLabel) {
  if (weightLabel === 'Approx 150-250gm' || weightLabel === 'Approx 250gm' || weightLabel === 'As per design') return basePrice;
  if (weightLabel === '500g') return basePrice + 50;
  const selectedWeight = weights.find(weight => weight.label === weightLabel);
  const factor = selectedWeight ? selectedWeight.factor : 2;
  return basePrice * factor;
}

function getCheckedValue(name) {
  const checked = elements.modalContent.querySelector(`input[name="${name}"]:checked`);
  return checked ? checked.value : '';
}

function getValue(selector) {
  const element = elements.modalContent.querySelector(selector);
  return element ? element.value.trim() : '';
}

function valueOrDash(value) {
  return value && String(value).trim() ? String(value).trim() : '-';
}

function summaryList(rows) {
  return `
    <dl>
      ${rows.map(([label, value]) => `
        <dt>${escapeHtml(label)}</dt>
        <dd>${escapeHtml(value)}</dd>
      `).join('')}
    </dl>
  `;
}


function productLink(product) {
  const cleanPath = window.location.pathname.replace(/index\.html$/, '');
  return `${window.location.origin}${cleanPath}#product-${product.id}`;
}

function revealProductFromHash() {
  const hash = window.location.hash || '';
  if (!hash.startsWith('#product-')) return;

  const productId = decodeURIComponent(hash.replace('#product-', ''));
  const product = allProducts.find(item => item.id === productId);
  if (!product) return;

  if (product.type === 'cake') {
    activeCakeSubcategory = product.subcategory || 'All Cakes';
    activeCakeOccasion = product.occasion || 'All Occasions';
    renderCakeTabs();
    renderCakeGrid();
  }

  setTimeout(() => {
    const card = document.getElementById(`product-${product.id}`);
    if (!card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.add('highlight-product');
    setTimeout(() => card.classList.remove('highlight-product'), 2600);
  }, 120);
}

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

function openModal() {
  elements.modal.hidden = false;
  document.body.classList.add('modal-open');
}

function closeModal() {
  elements.modal.hidden = true;
  document.body.classList.remove('modal-open');
  elements.modalContent.innerHTML = '';
}

function formatPrice(number) {
  return new Intl.NumberFormat('en-IN').format(Number(number) || 0);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
