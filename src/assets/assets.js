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
};

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "MERN", label: "Core stack" },
  { value: "12+", label: "Projects shipped" },
  { value: "API", label: "Backend focus" },
  { value: "UI", label: "Frontend polish" },
];

export const expertiseAreas = [
  {
    title: "Frontend Systems",
    description:
      "Responsive React interfaces, clean component architecture, motion, and polished UX with Tailwind CSS.",
  },
  {
    title: "Backend Services",
    description:
      "Node.js and Express APIs with authentication, role-based access, validation, and maintainable server structure.",
  },
  {
    title: "Database Design",
    description:
      "MongoDB schema design, relational thinking for data flow, and backend logic shaped around real product needs.",
  },
  {
    title: "Fullstack Delivery",
    description:
      "Connecting client and server, building dashboards, managing state, and shipping complete MERN products end-to-end.",
  },
];

export const serviceHighlights = [
  "Build responsive MERN applications from idea to deployment",
  "Design REST APIs for auth, dashboards, admin flows, and CRUD-heavy products",
  "Turn rough ideas into production-ready interfaces with clear UX structure",
  "Collaborate quickly, communicate clearly, and iterate fast on feedback",
];

export const projectCategories = [
  {
    id: "frontend",
    label: "Frontend",
    eyebrow: "UI Engineering",
    description:
      "Real frontend work focused on interface quality, responsiveness, animation, and clean user experience.",
  },
  {
    id: "backend",
    label: "Backend",
    eyebrow: "Server-Side Builds",
    description:
      "Production-ready REST APIs covering auth, QR systems, real-time events, and full order lifecycles — built with Node.js, Express, and MongoDB.",
  },
  {
    id: "fullstack",
    label: "Fullstack",
    eyebrow: "MERN Products",
    description:
      "End-to-end MERN applications shipped with real users — from hackathon tools to Telegram-powered storefronts and smart attendance platforms.",
  },
];

export const projectsData = [
  {
    id: 1,
    category: "frontend",
    title: "My-Estate",
    summary: "Real estate landing experience with motion-rich UI.",
    description:
      "A polished property landing page built for high-conversion presentation. The project focuses on responsive layout, strong hero storytelling, interactive sections, and smooth user flow from first impression to contact.",
    image: project_img_1,
    stack: ["React", "Tailwind CSS", "Motion", "Toastify"],
    highlights: [
      "Responsive property-first marketing UI",
      "Smooth transitions and animated content flow",
      "Clean conversion path with interactive contact form",
    ],
    code: "https://github.com/ibsa-a1/My-Estate.git",
    demo: "https://my-estate-black.vercel.app/",
    status: "Live project",
  },
  {
    id: 2,
    category: "frontend",
    title: "Online Code Editor",
    summary: "Interactive browser editor with multi-language support.",
    description:
      "A frontend-heavy coding environment designed for quick experimentation. It balances usability and dynamic state updates while letting users work with multiple languages inside a clean interface.",
    image: project_img_2,
    stack: ["React", "Chakra UI", "Piston API", "Toastify"],
    highlights: [
      "Editor experience optimized for clarity and speed",
      "Multi-language snippets and execution flow",
      "Error states surfaced through friendly UI feedback",
    ],
    code: "https://github.com/ibsa-a1/Online-Code-Editor.git",
    demo: "https://onlinecoder.vercel.app/",
    status: "Live project",
  },
  {
    id: 3,
    category: "frontend",
    title: "Movie App",
    summary: "Media discovery UI with search, favorites, and trailers.",
    description:
      "A content-rich movie experience with API-driven rendering, searchable discovery, favorites persistence, and clean card-based browsing across devices.",
    image: project_img_3,
    stack: ["React", "CSS", "TMDB API", "Local Storage"],
    highlights: [
      "Fast search and dynamic movie browsing",
      "Favorites saved locally for returning users",
      "Trailer and metadata flows designed for engagement",
    ],
    code: "https://github.com/ibsa-a1/React-Movie-App.git",
    demo: "https://ibsa-movie-app.vercel.app/",
    status: "Live project",
  },
  {
    id: 4,
    category: "frontend",
    title: "Addis Ababa Centered Map",
    summary: "Location-focused map interface built for Ethiopian users.",
    description:
      "A map application centered on Addis Ababa with a practical, location-aware interface. It demonstrates handling maps, search interactions, and context-specific UI for a local user base.",
    image: project_img_4,
    stack: ["React", "Leaflet", "OpenStreetMap", "CSS"],
    highlights: [
      "Place-focused UI tailored for Addis Ababa",
      "Map interactions with fast visual feedback",
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
    summary: "REST API for products, cart, and orders — built for GDG.",
    description:
      "A learning-focused e-commerce backend built with Node.js, Express, and MongoDB Atlas following MVC architecture. Covers full product CRUD with filtering, cart management with stock validation, and order creation with automatic stock reduction.",
    image: project_img_1,
    stack: ["Node.js", "Express", "MongoDB Atlas", "MVC"],
    highlights: [
      "Product CRUD with category and price-range filtering",
      "Cart with per-item stock validation and quantity control",
      "Order flow that calculates total, reduces stock, and clears cart",
    ],
    code: "https://github.com/ibsa-a1/GDG-Mini-Project-Ibsa-Abera.git",
    demo: null,
    status: "Backend project",
  },
  {
    id: 6,
    category: "backend",
    title: "Dynamic QR Attendance API",
    summary: "Secure attendance backend with time-limited QR and device binding.",
    description:
      "The server layer of a MERN attendance system where teachers generate short-lived QR codes and students scan to mark presence. Device binding prevents credential sharing — each scan is tied to the student's device fingerprint for integrity.",
    image: project_img_2,
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
      "A Node.js/Express REST API for a university food ordering system. Students register with their Student ID, must be verified by an admin before ordering, and can browse the menu, manage their cart with per-item instructions, place orders, save favorites, and leave post-order reviews.",
    image: project_img_3,
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
      "The server-side engine of FuelPass, a hackathon-built fuel distribution system. Handles QR code issuance per vehicle, AI-assisted quota management, real-time socket events for fuel station dashboards, and full CRUD across vehicle registrations, quotas, and transactions.",
    image: project_img_4,
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
    summary: "AI-powered QR fuel distribution platform — GDG Hackathon.",
    description:
      "A fullstack MERN system built during a GDG hackathon to modernize government fuel distribution. Citizens register vehicles, receive unique QR codes, and fuel stations scan them for real-time allocation. AI logic prevents quota abuse and surfaces anomalies across the live dashboard.",
    image: project_img_4,
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "AI"],
    highlights: [
      "QR-based vehicle identity and fuel quota enforcement",
      "Live station dashboard with Socket.IO real-time updates",
      "AI-assisted quota fraud detection built under hackathon time pressure",
    ],
    code: "https://github.com/G1-Hackathon-GDG",
    demo: "https://fuelpass-delta.vercel.app/",
    status: "Live · Hackathon project",
  },
  {
    id: 10,
    category: "fullstack",
    title: "Dynamic QR Attendance System",
    summary: "MERN attendance platform with time-limited QR and device binding.",
    description:
      "A secure fullstack web application where teachers generate time-limited QR codes for each class session and students mark attendance by scanning. Device binding ensures every scan is tied to a verified physical device — eliminating proxy attendance without any extra hardware.",
    image: project_img_2,
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "QR"],
    highlights: [
      "Time-limited QR codes regenerated per session by teachers",
      "Device fingerprint binding prevents credential sharing",
      "Role-separated dashboards for teachers and students",
    ],
    code: "https://github.com/ibsa-a1/Dynamic-QR-Based-Class-Attendance-System.git",
    demo: "https://dynamic-qr-based-class-attendance-s.vercel.app",
    status: "Live project",
  },
  {
    id: 11,
    category: "fullstack",
    title: "ShopSync",
    summary: "Telegram-powered storefront — post a product, it goes live instantly.",
    description:
      "A fullstack MERN ecommerce platform that uses a Telegram channel as its CMS. Shop owners post products directly to their Telegram channel and a bot handles syncing to the live storefront automatically — no admin panel needed. Built for small businesses that already live inside Telegram.",
    image: project_img_1,
    stack: ["React", "Node.js", "Express", "MongoDB", "Telegram Bot API"],
    highlights: [
      "Telegram channel acts as the product management backend",
      "Bot auto-syncs new posts to the live store in real time",
      "Full cart, order, and storefront UX without a separate admin panel",
    ],
    code: "https://github.com/ibsa-a1/ShopSync.git",
    demo: null,
    status: "In development",
  },
];
