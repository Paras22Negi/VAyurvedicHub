export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const TRUST_BADGES = [
  { icon: "check-circle", label: "GMP Certified" },
  { icon: "heart-handshake", label: "Cruelty Free" },
  { icon: "flask-conical", label: "Lab Tested" },
];

export const CATEGORIES = [
  {
    id: 1,
    name: "Skincare",
    subtitle: "Natural Glow",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Haircare",
    subtitle: "Strong Roots",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Immunity",
    subtitle: "Daily Defense",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "Digestion",
    subtitle: "Gut Health",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200&h=200&fit=crop&crop=center",
  },
  {
    id: 5,
    name: "Stress Relief",
    subtitle: "Calm Mind",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&h=200&fit=crop&crop=center",
  },
];

export const FILTER_CATEGORIES = [
  "Herbal Supplements",
  "Essential Oils",
  "Teas & Infusions",
  "Hair & Body Care",
];

export const HEALTH_CONCERNS = [
  "Immunity",
  "Stress",
  "Sleep",
  "Digestion",
  "Energy",
];

export const DOSHAS = [
  "Vata (Air & Ether)",
  "Pitta (Fire & Water)",
  "Kapha (Earth & Water)",
];

export const SORT_OPTIONS = [
  { label: "Best Selling", value: "best-selling" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
  { label: "Top Rated", value: "top-rated" },
];

export const ALL_PRODUCTS = [
  {
    id: 1,
    slug: "organic-ashwagandha",
    name: "Organic Ashwagandha",
    description:
      "Ancient root for stress relief and energy boost. 100% Organic.",
    shortDesc: "Powerful adaptogen for stress relief and vitality.",
    longDesc:
      "Ashwagandha, also known as Indian Ginseng, has been a staple of Ayurvedic medicine for over 3,000 years. Our potent root powder is carefully harvested to preserve the full spectrum of withanolides, the active compounds responsible for its adaptogenic benefits.\n\nRegular consumption may help reduce cortisol levels, combat fatigue, and support a healthy immune system. It's grounding, calming, and restorative - perfect for today's fast-paced lifestyle.",
    price: 24.99,
    originalPrice: 32.99,
    discount: 25,
    rating: 4.9,
    reviewCount: 128,
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=600&h=600&fit=crop",
    ],
    category: "Herbal Supplements",
    badge: "Best Seller",
    isSale: true,
    sizes: ["100g", "250g Pouch", "500 Grams Pack"],
    benefits: [
      {
        title: "Boosts Energy",
        desc: "Naturally fights fatigue and improves stamina.",
      },
      {
        title: "Reduces Stress",
        desc: "Lowers cortisol and promotes calmness.",
      },
    ],
    ingredients: [
      { name: "Organic Ashwagandha Root", percent: 95 },
      { name: "Black Pepper Extract", percent: 5 },
    ],
    reviews: [
      {
        id: 1,
        name: "Jane Doe",
        verified: true,
        rating: 5,
        date: "3 weeks ago",
        title: "Changed my morning routine!",
        text: "I've been adding a scoop to my morning smoothie for about a month now. The difference in my energy levels is remarkable. I don't get that afternoon crash anymore. Highly recommend!",
      },
      {
        id: 2,
        name: "Michael R.",
        verified: true,
        rating: 4,
        date: "1 month ago",
        title: "Good quality, earthy taste",
        text: "The powder is very fine and mixes well. The taste is definitely 'earthy' as expected with Ashwagandha, but I mixed with honey and oat milk. It's very soothing before bed.",
      },
    ],
  },
  {
    id: 2,
    slug: "brahmi-hair-oil",
    name: "Brahmi Hair Oil",
    description: "Nourishing oil for scalp health and hair growth.",
    shortDesc: "Nourishing oil for scalp health and hair growth.",
    longDesc:
      "Our Brahmi Hair Oil is a traditional Ayurvedic formulation that combines the power of Brahmi (Bacopa Monnieri) with cold-pressed coconut oil. This potent blend penetrates deep into the scalp to nourish hair follicles and promote healthy growth.",
    price: 18.0,
    originalPrice: null,
    discount: null,
    rating: 4.7,
    reviewCount: 85,
    image:
      "https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop",
    ],
    category: "Hair & Body Care",
    badge: null,
    isSale: false,
    sizes: ["100ml", "200ml"],
    benefits: [
      {
        title: "Promotes Growth",
        desc: "Stimulates hair follicles naturally.",
      },
      {
        title: "Reduces Dandruff",
        desc: "Antibacterial properties cleanse scalp.",
      },
    ],
    ingredients: [
      { name: "Brahmi Extract", percent: 40 },
      { name: "Cold-Pressed Coconut Oil", percent: 55 },
      { name: "Vitamin E", percent: 5 },
    ],
    reviews: [
      {
        id: 1,
        name: "Priya S.",
        verified: true,
        rating: 5,
        date: "2 weeks ago",
        title: "Amazing for hair fall!",
        text: "My hair fall has reduced significantly in just one month of regular use.",
      },
    ],
  },
  {
    id: 3,
    slug: "triphala-support",
    name: "Triphala Support",
    description: "Digestive balance and gentle detox blend.",
    shortDesc: "Traditional blend for digestive support.",
    longDesc:
      "Triphala is one of the most time-tested Ayurvedic remedies, combining three powerful fruits - Amalaki, Bibhitaki, and Haritaki. This synergistic blend supports healthy digestion, regular elimination, and gentle detoxification.",
    price: 12.5,
    originalPrice: 22.0,
    discount: 43,
    rating: 4.8,
    reviewCount: 210,
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop",
    ],
    category: "Herbal Supplements",
    badge: null,
    isSale: true,
    sizes: ["100g", "250g"],
    benefits: [
      {
        title: "Aids Digestion",
        desc: "Supports healthy gut flora and regularity.",
      },
      { title: "Gentle Detox", desc: "Cleanses without harsh side effects." },
    ],
    ingredients: [
      { name: "Amalaki", percent: 33 },
      { name: "Bibhitaki", percent: 33 },
      { name: "Haritaki", percent: 34 },
    ],
    reviews: [],
  },
  {
    id: 4,
    slug: "kumkumadi-oil",
    name: "Kumkumadi Oil",
    description: "Miraculous beauty fluid for radiant skin.",
    shortDesc: "Miraculous beauty fluid for radiant skin.",
    longDesc:
      "Kumkumadi Thailam is a legendary Ayurvedic beauty oil made from a blend of precious herbs and saffron. It has been used for centuries to enhance complexion, reduce blemishes, and give the skin a natural, radiant glow.",
    price: 32.0,
    originalPrice: 40.0,
    discount: 20,
    rating: 4.6,
    reviewCount: 89,
    image:
      "https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?w=600&h=600&fit=crop",
    ],
    category: "Essential Oils",
    badge: "New",
    isSale: true,
    sizes: ["15ml", "30ml"],
    benefits: [
      {
        title: "Brightens Skin",
        desc: "Saffron-infused formula for natural glow.",
      },
      { title: "Anti-Aging", desc: "Reduces fine lines and pigmentation." },
    ],
    ingredients: [
      { name: "Saffron Extract", percent: 20 },
      { name: "Sandalwood Oil", percent: 30 },
      { name: "Sesame Oil Base", percent: 50 },
    ],
    reviews: [],
  },
  {
    id: 5,
    slug: "pure-turmeric",
    name: "Pure Turmeric",
    description: "High potency curcumin for inflammation support.",
    shortDesc: "High potency curcumin for inflammation support.",
    longDesc:
      "Our Pure Turmeric powder is sourced from the finest Lakadong turmeric, known for its exceptionally high curcumin content (7-12%). This premium variety offers maximum anti-inflammatory and antioxidant benefits.",
    price: 22.0,
    originalPrice: null,
    discount: null,
    rating: 5.0,
    reviewCount: 42,
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&h=600&fit=crop",
    ],
    category: "Herbal Supplements",
    badge: "Low Stock",
    isSale: false,
    sizes: ["100g", "250g"],
    benefits: [
      {
        title: "Anti-Inflammatory",
        desc: "Curcumin reduces inflammation naturally.",
      },
      { title: "Immune Support", desc: "Boosts overall immune function." },
    ],
    ingredients: [
      { name: "Lakadong Turmeric", percent: 95 },
      { name: "Black Pepper Extract", percent: 5 },
    ],
    reviews: [],
  },
  {
    id: 6,
    slug: "holy-basil-tea",
    name: "Holy Basil Tea",
    description: "Relaxing Tulsi blend for mind and body harmony.",
    shortDesc: "Relaxing Tulsi blend for mind and body harmony.",
    longDesc:
      "Our Holy Basil Tea is an aromatic blend of three types of Tulsi - Rama, Krishna, and Vana. This sacred herb has been revered in Ayurveda for its ability to promote mental clarity, reduce stress, and support respiratory health.",
    price: 10.0,
    originalPrice: null,
    discount: null,
    rating: 4.6,
    reviewCount: 88,
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&h=600&fit=crop",
    ],
    category: "Teas & Infusions",
    badge: null,
    isSale: false,
    sizes: ["25 bags", "50 bags"],
    benefits: [
      { title: "Calms Mind", desc: "Promotes mental clarity and focus." },
      { title: "Respiratory Health", desc: "Supports clear breathing." },
    ],
    ingredients: [
      { name: "Rama Tulsi", percent: 40 },
      { name: "Krishna Tulsi", percent: 30 },
      { name: "Vana Tulsi", percent: 30 },
    ],
    reviews: [],
  },
  {
    id: 7,
    slug: "chyawanprash-jam",
    name: "Chyawanprash Jam",
    description: "Traditional herbal jam for daily immunity.",
    shortDesc: "Traditional herbal jam for daily immunity.",
    longDesc:
      "Chyawanprash is an ancient Ayurvedic formulation made with over 40 herbs and spices. This nutrient-rich jam is centered around Amla (Indian Gooseberry), one of the richest known sources of Vitamin C.",
    price: 25.0,
    originalPrice: null,
    discount: null,
    rating: 4.9,
    reviewCount: 15,
    image:
      "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&h=600&fit=crop",
    ],
    category: "Herbal Supplements",
    badge: "New",
    isSale: false,
    sizes: ["250g", "500g"],
    benefits: [
      { title: "Daily Immunity", desc: "Rich in Vitamin C from Amla." },
      { title: "Energy Boost", desc: "Revitalizes body and mind." },
    ],
    ingredients: [
      { name: "Amla", percent: 50 },
      { name: "Ayurvedic Herb Blend", percent: 45 },
      { name: "Honey", percent: 5 },
    ],
    reviews: [],
  },
  {
    id: 8,
    slug: "neem-tulsi-soap",
    name: "Neem & Tulsi Soap",
    description: "Purifying cleanser for sensitive skin.",
    shortDesc: "Purifying cleanser for sensitive skin.",
    longDesc:
      "Handcrafted with the finest Neem and Tulsi extracts, this soap gently cleanses while protecting your skin's natural moisture barrier. Ideal for sensitive and acne-prone skin.",
    price: 8.5,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    reviewCount: 45,
    image:
      "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=600&h=600&fit=crop",
    ],
    category: "Hair & Body Care",
    badge: null,
    isSale: false,
    sizes: ["75g", "125g"],
    benefits: [
      { title: "Antibacterial", desc: "Neem fights acne-causing bacteria." },
      { title: "Gentle Cleanse", desc: "Won't strip natural oils." },
    ],
    ingredients: [
      { name: "Neem Extract", percent: 30 },
      { name: "Tulsi Extract", percent: 20 },
      { name: "Coconut Oil Base", percent: 50 },
    ],
    reviews: [],
  },
  {
    id: 9,
    slug: "lavender-essential-oil",
    name: "Lavender Essential Oil",
    description: "Calming aroma for relaxation and better sleep.",
    shortDesc: "Pure lavender oil for relaxation.",
    longDesc:
      "Steam-distilled from fresh lavender flowers, this essential oil offers a soothing floral aroma perfect for aromatherapy, massage, and promoting restful sleep.",
    price: 14.0,
    originalPrice: null,
    discount: null,
    rating: 4.7,
    reviewCount: 63,
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop",
    ],
    category: "Essential Oils",
    badge: null,
    isSale: false,
    sizes: ["10ml", "30ml"],
    benefits: [
      { title: "Better Sleep", desc: "Promotes deep, restful sleep." },
      { title: "Stress Relief", desc: "Calming floral aromatherapy." },
    ],
    ingredients: [{ name: "Pure Lavender Oil", percent: 100 }],
    reviews: [],
  },
];

// Best sellers subset for homepage
export const PRODUCTS = ALL_PRODUCTS.slice(0, 4).map((p) => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  description: p.shortDesc,
  price: p.price,
  originalPrice: p.originalPrice,
  rating: Math.round(p.rating),
  reviewCount: p.reviewCount,
  image: p.image,
  isSale: p.isSale,
}));

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Shop All", href: "/shop" },
    { label: "Wishlist", href: "/coming-soon" },
    { label: "Cart", href: "/coming-soon" },
    { label: "Publications", href: "/coming-soon" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/coming-soon" },
    { label: "Terms of Service", href: "/coming-soon" },
    { label: "Refund Policy", href: "/coming-soon" },
    { label: "Shipping Policy", href: "/coming-soon" },
    { label: "FAQ", href: "/coming-soon" },
  ],
};
