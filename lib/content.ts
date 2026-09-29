// All agency copy lives here, taken from "ABOUT BUZZ CREW.pdf" and the intro deck.

export const contact = {
  instagram: "@itsbuzzcrew",
  instagramUrl: "https://instagram.com/itsbuzzcrew",
  website: "www.thebuzzcrew.com",
  websiteUrl: "https://www.thebuzzcrew.com",
  email: "buzzcrewofficial@gmail.com",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#clients" },
];

export const whoWeAre = [
  "Founded in 2022 in Karachi, Buzz Crew is a full-service digital agency built for brands that want to move with purpose and speed. We partner with local and international businesses across social media marketing, SEO, web development and design.",
  "Every campaign and platform we build is grounded in strategy first, so creative decisions serve clear business objectives rather than trends alone.",
];

export const principles = [
  {
    icon: "target",
    title: "Strategy first",
    text: "Creative decisions serve clear business goals, not trends alone.",
  },
  {
    icon: "crew",
    title: "One crew, one roof",
    text: "Social, search, development, design and paid ads, working together.",
  },
  {
    icon: "shield",
    title: "Founder-led",
    text: "Direct founder-level involvement on every single account.",
  },
  {
    icon: "growth",
    title: "Measurable growth",
    text: "Clear numbers every cycle and a plan for what scales next.",
  },
] as const;

export const capabilities = [
  "Digital marketing",
  "Creative & graphic design",
  "Web / software development",
  "UI/UX design",
  "Video & content production",
  "Public relations",
  "Branding",
  "Copywriting",
  "AI & automation",
  "IoT & smart digital solutions",
];

export const stats = [
  { value: "4+", label: "Years", note: "In business since 2022" },
  { value: "90+", label: "Projects", note: "Completed across industries" },
  { value: "12+", label: "International clients", note: "Pakistan, UAE & UK" },
  { value: "3", label: "Photography awards", note: "Recognised craft" },
];

export const services = [
  {
    name: "Social Media",
    image: "/img/video.jpg",
    summary:
      "We turn social platforms into growth channels by building brand presence, engaging communities and driving real conversation.",
    items: [
      "Content strategy",
      "Community management",
      "Creative production",
      "Analytics & reporting",
    ],
  },
  {
    name: "SEO",
    image: "/img/network.jpg",
    summary:
      "Technical fixes, content and authority-building that grow organic visibility which compounds over time.",
    items: [
      "Keyword research",
      "On-page optimisation",
      "Technical SEO",
      "Performance reporting",
    ],
  },
  {
    name: "Web & Software",
    image: "/img/code.jpg",
    summary:
      "From marketing websites to custom software: fast, reliable digital products built to scale with your business.",
    items: [
      "Website design & dev",
      "Custom software",
      "E-commerce",
      "Maintenance & support",
    ],
  },
  {
    name: "UI / UX Design",
    image: "/img/design.jpg",
    summary:
      "Interfaces that feel intuitive, look on-brand, and make it easy for users to take action.",
    items: [
      "User research",
      "Wireframing & prototyping",
      "Visual design systems",
      "Usability testing",
    ],
  },
  {
    name: "Meta Ads",
    image: "/img/print.jpg",
    summary:
      "Paid campaigns that reach the right audience at the right moment and turn budget into measurable results.",
    items: [
      "Campaign strategy",
      "Audience targeting",
      "Ad creative & copy",
      "Performance tracking",
    ],
  },
];

export const process = [
  {
    title: "Discovery & audit",
    text: "We map the brand, the competition, and every gap in the current marketing.",
  },
  {
    title: "Strategy",
    text: "A content and channel plan built around real goals, not vanity metrics.",
  },
  {
    title: "Execution & creative",
    text: "Scripting, shooting, designing and building, in-house and on schedule.",
  },
  {
    title: "Reporting & growth",
    text: "Clear numbers each cycle, and a plan for what scales next.",
  },
];

export const industries = [
  {
    name: "Food & Beverages",
    detail: "Restaurants, catering, cafés & home kitchens",
  },
  { name: "Farmhouses", detail: "Event & picnic venues" },
  {
    name: "Healthcare & Dental",
    detail: "Automation systems for clinics & hospitals",
  },
  {
    name: "Education",
    detail: "Enrollment-focused marketing for schools & institutes",
  },
  { name: "E-Commerce", detail: "Customised e-commerce brand development" },
];

export const clients = [
  { name: "Halki Aanch by Ayesha", file: "halki-aanch.png" },
  { name: "Discovery Homes", file: "discovery-homes.png" },
  { name: "IG Civil Contractor", file: "ig-civil.png" },
  { name: "Islamabad Now", file: "islamabad-now.png" },
  { name: "Awami Web", file: "awami-web.png", bg: "#000000" },
  { name: "The Farm Villa", file: "farm-villa.png", bg: "#000000" },
  { name: "Nawab's Dynasty", file: "nawabs-dynasty.png" },
  { name: "Mr. Bawarchi", file: "mr-bawarchi.png" },
  { name: "AK Travels & Visa Consultant", file: "ak-travels.png" },
  { name: "Black Gold Farm", file: "black-gold.png", dark: true },
  { name: "Farzana's Kitchen", file: "farzanas-kitchen.png" },
  { name: "Dua Greens", file: "dua-greens.jpg" },
  { name: "Ibad Traders", file: "ibad-traders.jpg" },
  { name: "Decor Art", file: "decor-art.png", dark: true },
  { name: "Mercantile", file: "mercantile.png" },
  { name: "Pak Tape Industries", file: "pak-tape.png" },
  { name: "Kamil Atelier", file: "kamil-atelier.png", dark: true },
  { name: "AZee Trading & Haier Store", file: "azee-haier.png" },
  { name: "TEH Group", file: "teh-group.png", dark: true },
  { name: "Milton Group", file: "milton-group.png" },
  { name: "Frontline Pakistan", file: "frontline.png" },
  { name: "Malay Wheels", file: "malay-wheels.jpg", bg: "#000000" },
  { name: "Meena Bazar", file: "meena-bazar.jpg" },
  { name: "HR Clothing", file: "hr-clothing.png" },
];

export const testimonials = [
  {
    quote:
      "Buzz Crew captured our sites beautifully. Every reel felt emotional and cinematic.",
    name: "IG Civil Contractor",
    place: "Pakistan",
  },
  {
    quote:
      "The content they made elevated my food campaign beyond expectations.",
    name: "Halki Aanch by Ayesha",
    place: "Australia",
  },
  {
    quote:
      "Buzz Crew made us a customised and tailored CRM system for our client and lead flow. They were extremely professional throughout.",
    name: "Discovery Homes",
    place: "Dubai, UAE",
  },
];

export const journey = [
  {
    year: "2022",
    title: "The crew is born",
    text: "Abdul Rafay, Ms. Noor Khan & Bilal Shahid found The Buzz Crew.",
  },
  {
    year: "2023",
    title: "First clients onboard",
    text: "Local businesses trust us with their digital growth.",
  },
  {
    year: "2024",
    title: "Going international",
    text: "We expand services to clients in the UAE, UK and Australia.",
  },
  {
    year: "2026",
    title: "Full-service crew",
    text: "Five disciplines, one integrated agency.",
  },
];

export const founders = [
  { name: "Abdul Rafay", role: "FOUNDER" },
  { name: " Noor Khan", role: "CO-FOUNDER" },
  { name: "Bilal Shahid ", role: "CO-FOUNDER" },
  
];

