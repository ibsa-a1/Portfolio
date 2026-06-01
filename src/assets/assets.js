import profile_img from "./profile_img.webp";
import github_icon from "./github_icon.svg";
import linkedin_icon from "./linkedin_icon.svg";
import about_image from "./about_image.jpg";
import dev_img from "./dev_img.png";
import resume from "./Ibsa_Abera_CV-1.pdf";
import project_img_1 from "./project_img_1.jpg";
import project_img_2 from "./project_img_2.jpg";
import project_img_3 from "./project_img_3.jpg";
import project_img_4 from "./project_img_4.jpg";
import fuelPass_img from "./FuelPass.jpg";
import shopSync_img from "./ShopSync.jpg";
import attendQR_img from "./AttendQR.jpg";

const backendProjectImages = {
  ecommerce:
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80",
  restaurant:
    "https://images.unsplash.com/photo-1760888549280-4aef010720bd?auto=format&fit=crop&w=1400&q=80",
};

export const assets = {
  profile_img,
  github_icon,
  linkedin_icon,
  about_image,
  dev_img,
  resume,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  fuelPass_img,
  shopSync_img,
  attendQR_img,
};

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "11+", label: "Projects built & shipped" },
  { value: "MERN", label: "Primary stack" },
  { value: "3", label: "Live fullstack products" },
  { value: "4", label: "Backend APIs designed" },
];

export const expertiseAreas = [
  {
    title: "Frontend Engineering",
    description:
      "Responsive React interfaces with clean component architecture, smooth motion, and polished UX using Tailwind CSS.",
  },
  {
    title: "Backend Services",
    description:
      "RESTful APIs with Node.js and Express, featuring secure authentication, role-based access, input validation, and maintainable architecture.",
  },
  {
    title: "Database Design",
    description:
      "MongoDB schema design with relational thinking, optimized data flow, and backend logic built around real product requirements.",
  },
  {
    title: "Fullstack Delivery",
    description:
      "End-to-end MERN products connecting React clients to Express APIs, with state management, dashboards, and production deployment.",
  },
];

export const serviceHighlights = [
  "Build and deploy complete MERN applications — from database schema to polished UI",
  "Design secure REST APIs with JWT auth, role-based access, and real-time updates",
  "Turn rough ideas into clean, production-ready interfaces people actually enjoy using",
  "Collaborate closely, communicate clearly, and ship iteratively based on real feedback",
];

export const projectCategories = [
  {
    id: "frontend",
    label: "Frontend",
    eyebrow: "UI Engineering",
    description:
      "React interfaces built for real use — responsive, interactive, and designed to feel finished.",
  },
  {
    id: "backend",
    label: "Backend",
    eyebrow: "API & Server Builds",
    description:
      "Node.js + Express APIs powering authentication, real-time events, QR systems, and complete order lifecycles.",
  },
  {
    id: "fullstack",
    label: "Fullstack",
    eyebrow: "Complete MERN Products",
    description:
      "End-to-end applications used by real people — from hackathon builds to Telegram-powered storefronts.",
  },
];

export const projectsData = [
  {
    id: 1,
    category: "frontend",
    title: "My-Estate",
    summary: "Conversion-focused real estate landing page",
    description:
      "A polished property landing page built for high-conversion presentation. Responsive layout, strong hero storytelling, and a smooth flow from first impression to contact — designed to feel like a real product, not a tutorial project.",
    image: project_img_1,
    stack: ["React", "Tailwind CSS", "Motion", "Toastify"],
    highlights: [
      "Responsive property-first marketing UI with mobile-first layout",
      "Smooth page transitions and animated content reveals",
      "Complete conversion path: hero → features → contact form",
    ],
    code: "https://github.com/ibsa-a1/My-Estate.git",
    demo: "https://my-estate-black.vercel.app/",
    status: "Live project",
    featured: true,
  },
  {
    id: 2,
    category: "frontend",
    title: "Online Code Editor",
    summary: "Browser-based multi-language coding environment",
    description:
      "A browser-based coding environment for quick experimentation. Supports multiple languages with real-time execution via the Piston API and a clean, focused interface.",
    image: project_img_2,
    stack: ["React", "Chakra UI", "Piston API", "Toastify"],
    highlights: [
      "Clean editor UX optimized for focus and speed",
      "Multi-language support with real-time code execution",
      "Clear error feedback and execution state management",
    ],
    code: "https://github.com/ibsa-a1/Online-Code-Editor.git",
    demo: "https://onlinecoder.vercel.app/",
    status: "Live project",
  },
  {
    id: 3,
    category: "frontend",
    title: "Movie App",
    summary: "API-driven media discovery interface",
    description:
      "A movie discovery app powered by the TMDB API with search, favorites, and clean card-based browsing. Persistent local storage keeps favorites between sessions.",
    image: project_img_3,
    stack: ["React", "CSS", "TMDB API", "Local Storage"],
    highlights: [
      "Instant search with dynamic filtering across genres",
      "Persistent favorites using localStorage for returning users",
      "Trailer integration and rich metadata display",
    ],
    code: "https://github.com/ibsa-a1/React-Movie-App.git",
    demo: "https://ibsa-movie-app.vercel.app/",
    status: "Live project",
  },
  {
    id: 4,
    category: "frontend",
    title: "Addis Ababa Centered Map",
    summary: "Location-aware map interface for local users",
    description:
      "An interactive map centered on Addis Ababa with practical search and place discovery UX, built with Leaflet and OpenStreetMap for context-specific local use.",
    image: project_img_4,
    stack: ["React", "Leaflet", "OpenStreetMap", "CSS"],
    highlights: [
      "Place-focused UI with Addis Ababa-specific context",
      "Interactive map with responsive search and fast feedback",
      "Foundation for future geolocation-driven products",
    ],
    code: "https://github.com/ibsa-a1/Addis-Ababa-Centered-React-Leaflet.git",
    demo: "https://addis-ababa-map.vercel.app/",
    status: "Live project",
  },
  {
    id: 5,
    category: "backend",
    title: "E-commerce Backend",
    summary: "Complete REST API for products, cart & orders",
    description:
      "A production-style e-commerce backend using MVC architecture. Features product CRUD with filtering, cart management with stock validation, and automated order processing with inventory updates — built for a GDG project.",
    image: backendProjectImages.ecommerce,
    stack: ["Node.js", "Express", "MongoDB Atlas", "MVC"],
    highlights: [
      "Product CRUD with category and price-range filtering",
      "Cart with per-item stock validation and quantity control",
      "Automated order flow: calculates total → reduces stock → clears cart",
    ],
    code: "https://github.com/ibsa-a1/GDG-Mini-Project-Ibsa-Abera.git",
    demo: null,
    status: "Backend project",
    featured: true,
  },
  {
    id: 6,
    category: "backend",
    title: "Dynamic QR Attendance API",
    summary: "Secure attendance backend with time-limited QR and device binding.",
    description:
      "Server layer for a MERN attendance system where teachers generate session-based QR codes and students scan to mark presence. Device fingerprinting prevents proxy attendance by binding each scan to a verified device.",
    image: attendQR_img,
    stack: ["Node.js", "Express", "MongoDB", "JWT", "QR"],
    highlights: [
      "Time-limited QR code generation per session",
      "Device binding logic to block proxy attendance",
      "JWT-secured teacher and student role separation",
    ],
    code: "https://github.com/ibsa-a1/Dynamic-QR-Based-Class-Attendance-System.git",
    demo: null,
    status: "Private repo",
  },
  {
    id: 7,
    category: "backend",
    title: "University Restaurant API",
    summary: "Full-featured ordering backend with student ID verification.",
    description:
      "A Node.js/Express REST API powering a university food ordering system. Students register and verify their ID before browsing menus, managing carts with custom instructions, placing orders, saving favorites, and leaving reviews.",
    image: backendProjectImages.restaurant,
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Refresh Tokens"],
    highlights: [
      "JWT access + refresh token auth with Student ID format validation",
      "Admin verification gate before students can place orders",
      "Cart with special instructions, favorites, reviews, and order status lifecycle",
    ],
    code: "https://github.com/gdg-group8-restaurant-system/backend.git",
    demo: null,
    status: "Backend project",
  },
  {
    id: 8,
    category: "backend",
    title: "FuelPass Backend",
    summary: "AI-powered QR fuel distribution API — GDG Hackathon.",
    description:
      "Server-side engine for FuelPass, a hackathon fuel distribution system. Manages vehicle QR codes, AI-assisted quota tracking, real-time Socket.IO updates for station dashboards, and full CRUD for registrations and transactions.",
    image: fuelPass_img,
    stack: ["Node.js", "Express", "MongoDB", "Socket.IO", "AI"],
    highlights: [
      "Dynamic QR generation tied to vehicle and quota records",
      "Real-time socket events for live station updates",
      "AI-assisted fraud detection and quota distribution logic",
    ],
    code: "https://github.com/G1-Hackathon-GDG/backend.git",
    demo: null,
    status: "Hackathon project",
  },
  {
    id: 9,
    category: "fullstack",
    title: "FuelPass",
    summary: "AI-powered QR fuel distribution platform",
    description:
      "A fullstack MERN system built at a GDG hackathon to modernize fuel distribution. Citizens register vehicles and receive QR codes for real-time allocation at fuel stations. AI logic prevents quota abuse and surfaces anomalies on a live dashboard.",
    image: fuelPass_img,
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "AI"],
    highlights: [
      "QR-based vehicle identity and fuel quota enforcement",
      "Live station dashboard with Socket.IO real-time updates",
      "AI-assisted fraud detection built under hackathon time pressure",
    ],
    code: "https://github.com/G1-Hackathon-GDG",
    demo: "https://fuelpass-delta.vercel.app/",
    status: "Live · Hackathon project",
    featured: true,
  },
  {
    id: 10,
    category: "fullstack",
    title: "Dynamic QR Attendance System",
    summary: "Secure attendance platform with device-bound QR codes",
    description:
      "A secure fullstack application where teachers generate session-based QR codes and students mark attendance by scanning. Device binding ties every scan to a verified physical device — eliminating proxy attendance without extra hardware.",
    image: attendQR_img,
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "QR"],
    highlights: [
      "Time-limited QR codes regenerated per session by teachers",
      "Device fingerprint binding prevents credential sharing",
      "Role-separated dashboards for teachers and students",
    ],
    code: "https://github.com/ibsa-a1/Dynamic-QR-Based-Class-Attendance-System.git",
    demo: "https://dynamic-qr-based-class-attendance-s.vercel.app",
    status: "Live project",
    featured: true,
  },
  {
    id: 11,
    category: "fullstack",
    title: "ShopSync",
    summary: "Telegram-powered e-commerce storefront",
    description:
      "A MERN e-commerce platform using Telegram as its CMS. Shop owners post products to their channel, and a bot automatically syncs them to the live storefront — no admin panel needed. Purpose-built for small businesses already on Telegram.",
    image: shopSync_img,
    stack: ["React", "Node.js", "Express", "MongoDB", "Telegram Bot API"],
    highlights: [
      "Telegram channel acts as the product management backend",
      "Bot auto-syncs new posts to the live store in real time",
      "Full cart, order, and storefront UX — no separate admin panel",
    ],
    code: "https://github.com/ibsa-a1/ShopSync.git",
    demo: null,
    status: "In development",
    featured: true,
  },
];
