import { StaticImageData } from "next/image";
import profile_img from "../assets/profile_img.webp";
import github_icon from "../assets/github_icon.svg";
import linkedin_icon from "../assets/linkedin_icon.svg";
import about_image from "../assets/about_image.jpg";
import dev_img from "../assets/dev_img.png";
// resume pdf is now in public/Ibsa_Abera_CV.pdf, we don't import it via webpack/turbopack.
// It will be referenced by path "/Ibsa_Abera_CV.pdf" directly in components.
import project_img_1 from "../assets/project_img_1.jpg";
import project_img_2 from "../assets/project_img_2.jpg";
import project_img_3 from "../assets/project_img_3.jpg";
import project_img_4 from "../assets/project_img_4.jpg";
import fuelPass_img from "../assets/FuelPass.jpg";
import shopSync_img from "../assets/ShopSync.jpg";
import attendQR_img from "../assets/AttendQR.jpg";

export interface Project {
  id: number | string;
  category: string;
  title: string;
  summary: string;
  description: string;
  image: StaticImageData | string;
  stack: string[];
  highlights: string[];
  code: string;
  demo: string | null;
  status: string;
  featured?: boolean;
}

export interface ExpertiseArea {
  title: string;
  description: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface ProjectCategory {
  id: string;
  label: string;
  eyebrow: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

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
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  fuelPass_img,
  shopSync_img,
  attendQR_img,
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Frontend Engineering",
    description:
      "Responsive React and Next.js interfaces written in TypeScript, styled with Tailwind CSS and built from clean, reusable components.",
  },
  {
    title: "Backend Services",
    description:
      "REST APIs with Node.js and Express in TypeScript, including authentication, middleware, role-based access and maintainable architecture.",
  },
  {
    title: "Database Design",
    description:
      "PostgreSQL schemas and data models in professional work, and MongoDB in personal and hackathon projects.",
  },
  {
    title: "Fullstack Delivery",
    description:
      "Features shipped end to end, from schema and API to UI, reviewed through Git pull requests and deployed with Vercel and Render.",
  },
];

export const serviceHighlights: string[] = [
  "Build full-stack features end to end with Next.js, TypeScript, Express and PostgreSQL",
  "Design REST APIs and database schemas with authentication and clean, maintainable architecture",
  "Debug, refactor and ship through Git branches, pull requests and code review",
  "Work independently, communicate clearly and deliver ahead of release milestones",
];

export const projectCategories: ProjectCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    eyebrow: "UI Engineering",
    description:
      "React interfaces built for real use: responsive, interactive and designed to feel finished.",
  },
  {
    id: "backend",
    label: "Backend",
    eyebrow: "API & Server Builds",
    description:
      "Node.js and Express APIs covering authentication, real-time events, QR systems and complete order lifecycles.",
  },
  {
    id: "fullstack",
    label: "Fullstack",
    eyebrow: "End-to-End Products",
    description:
      "End-to-end applications used by real people, from a hackathon-placing fuel platform to a Telegram-synced storefront.",
  },
];

export const projectsData: Project[] = [
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
    summary:
      "Secure attendance backend with time-limited QR and device binding.",
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
      "Server-side engine for FuelPass, a hackathon fuel distribution system. Manages vehicle QR codes, Gemini-based fuel allocation, real-time Socket.IO updates for station dashboards, and full CRUD for registrations and transactions.",
    image: fuelPass_img,
    stack: ["Node.js", "Express", "MongoDB", "Socket.IO", "Google Gemini"],
    highlights: [
      "Dynamic QR generation tied to vehicle and quota records",
      "Real-time socket events for live station updates",
      "AI-based fuel allocation logic using Google Gemini",
    ],
    code: "https://github.com/G1-Hackathon-GDG/backend.git",
    demo: null,
    status: "Hackathon project",
  },
  {
    id: 9,
    category: "fullstack",
    title: "FuelPass",
    summary: "Digitizing Ethiopia's fuel rationing with QR vouchers and AI",
    description:
      "A MERN-stack application, built at a GDG hackathon, that digitizes Ethiopia's fuel rationing system. Citizens receive QR-code vouchers that fuel stations redeem, with AI-based allocation logic and real-time updates.",
    image: fuelPass_img,
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Google Gemini"],
    highlights: [
      "QR-code voucher generation and redemption",
      "AI-based fuel allocation logic using Google Gemini",
      "Real-time updates powered by Socket.io",
    ],
    code: "https://github.com/G1-Hackathon-GDG",
    demo: "https://fuelpass-delta.vercel.app/",
    status: "Live · 4th of 20+ teams",
    featured: true,
  },
  {
    id: 10,
    category: "fullstack",
    title: "Dynamic QR Attendance System",
    summary: "Dynamic QR codes replace manual attendance check-in",
    description:
      "A full-stack system that replaces manual check-in with a faster digital flow. Teachers generate session-based QR codes and students scan to mark attendance, with device binding to discourage proxy attendance.",
    image: attendQR_img,
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "QR"],
    highlights: [
      "Dynamic QR code generation for each session",
      "Authentication, session management and role-based access control",
      "Backend APIs and database integration for real-time attendance recording and reporting",
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
    summary: "Telegram channel to live storefront, automatically",
    description:
      "An automated pipeline that syncs products from a Telegram channel, through the Telegram Bot API, to a live web storefront, with images stored on Cloudinary. Built for small businesses that already sell on Telegram.",
    image: shopSync_img,
    stack: ["React", "Node.js", "Express", "MongoDB", "Telegram Bot API", "Cloudinary"],
    highlights: [
      "Automated Telegram-to-storefront product sync",
      "Fuzzy duplicate-product detection keeps the catalog accurate",
      "7 custom React hooks power cart, auth, categories, products and sync logs",
    ],
    code: "https://github.com/ibsa-a1/ShopSync.git",
    demo: "https://shop-sync-sand.vercel.app/",
    status: "Live project",
    featured: true,
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  stack: string[];
  points: string[];
  /** Optional proof link; the button only shows when this is set. */
  certificate?: { label: string; href: string };
}

export const experience: ExperienceItem[] = [
  {
    role: "Backend Developer & IT Team",
    company: "AASTU Gibigubae",
    period: "Current",
    stack: ["TypeScript", "Express", "PostgreSQL"],
    points: [
      "Designed and built backend services to support core platform features, with a focus on clean, maintainable architecture.",
      "Implemented REST API endpoints and database schemas, working independently to debug, test and refine backend functionality ahead of release milestones.",
      "Continuing on the Gibigubae IT team, working on technical and IT projects such as SSO authentication and authorization.",
    ],
    // certificate: { label: "View certificate", href: "https://..." },
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Everline Technologies",
    period: "Completed",
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL"],
    points: [
      "Built and shipped full-stack features end to end across a live production SaaS codebase.",
      "Implemented REST API endpoints and PostgreSQL-backed data models, and debugged and refactored existing code through Git-based pull request review.",
      "Collaborated with the engineering team to ship features on a real product used by real users.",
    ],
    // certificate: { label: "View certificate", href: "https://..." },
  },
];

export interface ContributionItem {
  title: string;
  project: string;
  period: string;
  summary: string;
  stack: string[];
  points: string[];
  outcome: string;
  link: { label: string; href: string };
}

export const contribution: ContributionItem = {
  title: "Open-source contribution",
  project: "Beleqet platform",
  period: "Jul 2026",
  summary:
    "Built an immutable audit trail for the Beleqet platform, with database-level append-only protection, GDPR-aware payload sanitization and an admin search dashboard.",
  stack: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "Jest"],
  points: [
    "Closed a TRUNCATE loophole found in review: row-level triggers never fire on TRUNCATE, so I added a statement-level BEFORE TRUNCATE trigger reusing the same guard function and verified it against the database.",
    "Fixed sanitizer edge cases (arrays of objects skipped redaction, Date objects collapsed to {}) by recursing into arrays and preserving dates, with tests for both.",
    "Fixed a migration that passed on my long-lived dev database but failed on CI's fresh one, and now run prisma migrate reset locally before pushing.",
    "Kept the branch current as main moved, resolving conflicts with an RBAC refactor and guard changes and repairing broken imports and test dependencies each time.",
  ],
  outcome:
    "Merged into main after four rounds of security-focused review, with 10/10 CI checks passing and a maintainer approval. Closed issue #24, \"Audit Trail: (Admin & Control)\".",
  link: {
    label: "View pull request #147",
    href: "https://github.com/Beleqet-Main-Ecosystem/beleqet-ecosystem-updated/pull/147",
  },
};

// Stats are computed from the project data so they cannot drift out of date.
const liveFullstackCount = projectsData.filter(
  (project) => project.category === "fullstack" && project.demo,
).length;

export const heroStats: HeroStat[] = [
  { value: "2", label: "Engineering roles" },
  { value: `${liveFullstackCount}+`, label: "Live full-stack projects" },
  { value: `${projectsData.length}+`, label: "Projects built & shipped" },
];
