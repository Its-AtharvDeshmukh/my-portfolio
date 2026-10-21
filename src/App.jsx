import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import "./index.css";

/* All portfolio content and components live here. Add media using ASSET-GUIDE.md.
   Vite discovers these files at build time; absent files get intentional placeholders. */
const files = import.meta.glob(
  "./assets/**/*.{webp,png,jpg,jpeg,svg,mp4,webm,pdf,pptx}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);
const media = (path) => files[`./assets/${path}`] || null;
const PROFILE = {
  name: "Atharv Deshmukh",
  role: "Full-stack developer, AI builder & prompt engineer",
  location: "Nagpur, India",
  email: "its.atharvdeshmukh@gmail.com",
  phone: "+917058046311",
  github: "https://github.com/Its-AtharvDeshmukh",
  linkedin: "https://www.linkedin.com/in/atharv-deshmukh-711909372/",
  leetcode: "https://leetcode.com/u/Atharv__Deshmukh/",
  instagram: "https://www.instagram.com/_atharv_deshmukh__/",
  resume: media("documents/atharv-deshmukh-resume.pdf"),
};
const PROJECTS = [
  {
    id: "healthorbit",
    contribution:
      "Full-stack web development, report/OCR workflows, and the Health Connect integration within the Health Hub college group project.",
    youtube: "uWbg2LfsJs4",
    name: "HealthOrbit",
    label: "Digital health",
    icon: "pulse",
    color: "#398b8c",
    headline: "A clearer picture of health.",
    description:
      "Bringing medical documents and personal health information into one connected experience.",
    detail:
      "A college group project developed with Health Hub, connecting medical documents, normalized measurements, timeline views, trends, medicines, and authorized context-aware assistance. The Android companion connects supported Health Connect records to the same backend.",
    year: "2026 · In development",
    url: "https://healthorbit.onrender.com/",
    hasVideo: true,
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "Tesseract.js",
      "Gemini API",
    ],
    points: [
      "PDF/image reports, text extraction, OCR, and source-linked measurements.",
      "Timeline and deterministic trends over recorded health information.",
      "Authenticated, user-owned context for informational AI assistance.",
      "A Kotlin Android companion for supported Health Connect synchronization.",
    ],
    repo: "https://github.com/Its-AtharvDeshmukh/HealthOrbit",
  },
  {
    id: "meshflow",
    contribution:
      "Document-task decomposition, model routing, and execution telemetry in a Node.js and Express application.",
    youtube: "48DeXzujtDM",
    name: "MeshFlow X",
    label: "AI orchestration",
    icon: "mesh",
    color: "#7962b5",
    headline: "Many models. One flow.",
    description:
      "Connecting document tasks, model routing, and execution into a single workflow.",
    detail:
      "A multi-model AI workflow system created for the Mesh API Hackathon. It breaks document tasks into dependent steps, routes them across providers, and presents execution status and latency.",
    year: "July 2026 · Mesh API Hackathon",
    url: "https://meshflow-73bi.onrender.com/",
    hasVideo: true,
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Gemini API",
      "DAG routing",
    ],
    points: [
      "Dependency-aware task decomposition and automated execution.",
      "OpenAI and Gemini routing through one interface.",
      "Step status and latency telemetry, with secure API configuration.",
    ],
    repo: "https://github.com/Its-AtharvDeshmukh/MeshFlow",
  },
  {
    id: "roavista",
    contribution:
      "Full-stack listing workflows, authentication, image management, and Mapbox-based property discovery.",
    name: "Roavista",
    label: "Full-stack marketplace",
    icon: "compass",
    color: "#b47954",
    headline: "Find your next somewhere.",
    description:
      "An accommodation marketplace that connects listings, images, and location discovery.",
    detail:
      "A sanctuary booking platform with category discovery, property listings, host tools, reviews, interactive Mapbox maps, and a UPI booking interface. Built with Node.js, Express, MongoDB, and EJS.",
    year: "2025",
    url: "https://www.roavista.in/listings",
    hasVideo: false,
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Passport.js",
      "Cloudinary",
      "Mapbox",
    ],
    points: [
      "Category-based stay discovery and interactive Mapbox location views.",
      "Local/Google authentication and user-owned listing management.",
      "Cloudinary galleries, guest reviews, and booking/profile workflows.",
    ],
    repo: "https://github.com/Its-AtharvDeshmukh/Roavista",
  },
  {
    id: "travelbharat",
    contribution:
      "Internship project development: typed web interfaces and a state-wise tourism discovery product, currently in development.",
    name: "TravelBharat",
    label: "Travel discovery",
    icon: "compass",
    color: "#d99b60",
    headline: "One country. Countless stories.",
    description:
      "A state-wise India tourism discovery platform, developed during the Unified Mentor internship.",
    detail:
      "An in-development tourism platform organizing Indian states, cities, and destinations around culture, heritage, nature, and discovery. The repository documents the product direction and development roadmap.",
    year: "2026 · In development",
    url: null,
    repo: "https://github.com/Its-AtharvDeshmukh/unified-mentor-internship/tree/main/travel-bharat",
    hasVideo: false,
    stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
    points: [
      "State, city, and destination discovery as the central product idea.",
      "A planned content-management workflow for destination information.",
      "Developed as Project 01 of the Unified Mentor internship.",
    ],
  },
];
const PAPER = {
  title:
    "Healthorbit: An Integrated Digital Health Information Platform with a Framework for Context-Aware AI Assistance",
  authors: [
    "Ansh Shanane",
    "Atharv Deshmukh",
    "Sujal Arse",
    "Vansh Sakhare",
    "Prof. K. R. Sarode",
  ],
  journal:
    "International Journal for Research in Applied Science & Engineering Technology",
  issue: "Volume 14 · Issue IX · September 2026",
  pages: "98–107",
  id: "IJRASET84767",
  doi: "10.22214/ijraset.2026.84767",
  url: "https://www.ijraset.com/best-journal/healthorbit-an-integrated-digital-health-information-platform-with-a-framework-for-contextaware-ai-assistance",
  certificate:
    "https://www.ijraset.com/print-certificate/healthorbit-an-integrated-digital-health-information-platform-with-a-framework-for-contextaware-ai-assistance",
};
const CREDENTIALS = [
  {
    id: "sigma",
    title: "Delta · Full-Stack Web Development",
    issuer: "Apna College",
    date: "March 2026",
    type: "Course",
    icon: "code",
    file: "apna-college-sigma-7.png",
    document: "apna-college-sigma-7.pdf",
    text: "Full-stack development with React, Node.js, Express, and MongoDB.",
  },
  {
    id: "java",
    title: "Alpha · DSA with Java",
    issuer: "Apna College · Java",
    date: "November 2025",
    type: "Course",
    icon: "braces",
    file: "apna-college-dsa-java.png",
    document: "apna-college-dsa-java.pdf",
    text: "Data structures, algorithms, and object-oriented programming in Java.",
  },
  {
    id: "mesh",
    title: "Mesh API Hackathon",
    issuer: "Mesh API",
    date: "12 July 2026",
    type: "Hackathon",
    icon: "mesh",
    file: "mesh-api-hackathon.jpeg",
    text: "Participation with a multi-model AI workflow system exploring task decomposition and routing.",
  },
  {
    id: "college",
    title: "Intercollegiate Hackathon 2026",
    issuer: "Priyadarshini College of Engineering · Perficient",
    date: "2026",
    type: "Hackathon",
    icon: "spark",
    file: "inter-college-hackathons.jpeg",
    rotated: true,
    text: "Participated in the intercollegiate hackathon at Priyadarshini College of Engineering, Nagpur, organized in collaboration with Perficient. HealthOrbit was presented as a college group project.",
  },
];
const SKILLS = [
  [
    "React",
    "react",
    "#367c9d",
    "Component-driven interfaces with responsive layouts and reusable interaction patterns.",
  ],
  [
    "Node.js",
    "node",
    "#537d4b",
    "Server-side JavaScript for application logic, APIs, and integrations.",
  ],
  [
    "Java",
    "java",
    "#ae684e",
    "Object-oriented programming, data structures, and algorithms.",
  ],
  [
    "MongoDB",
    "leaf",
    "#4d886c",
    "Document data models, Mongoose schemas, and connected application data.",
  ],
  [
    "JavaScript",
    "js",
    "#9b8128",
    "Modern JavaScript across frontend interactions and backend workflows.",
  ],
  [
    "Express",
    "braces",
    "#647080",
    "Routes, middleware, authentication, and REST APIs.",
  ],
  [
    "Gemini",
    "spark",
    "#647eca",
    "API integration and context-aware AI application design.",
  ],
  [
    "Git & GitHub",
    "git",
    "#ae685d",
    "Version control, source collaboration, and incremental development.",
  ],
  [
    "Docker",
    "box",
    "#5282af",
    "Container-based development and deployment tooling.",
  ],
  [
    "HTML & CSS",
    "code",
    "#a36e90",
    "Semantic markup, adaptive styling, and accessible interaction.",
  ],
  [
    "OpenAI API",
    "mesh",
    "#626f83",
    "Multi-provider AI workflows and model orchestration.",
  ],
  [
    "Tesseract OCR",
    "scan",
    "#6a8499",
    "Extracting machine-readable text from supported documents.",
  ],
  [
    "Mapbox",
    "compass",
    "#827793",
    "Interactive maps and location-based discovery.",
  ],
  ["Cloudinary", "cloud", "#6e8bad", "Cloud image storage and media delivery."],
  [
    "Passport.js",
    "lock",
    "#63967c",
    "Authentication and protected application routes.",
  ],
  [
    "Kubernetes",
    "hex",
    "#6788bb",
    "Container orchestration fundamentals and deployment tooling.",
  ],
];
const CAPABILITIES = [
  {
    eyebrow: "Full-stack thinking",
    title: "Build the whole picture.",
    file: "capability-architecture.svg",
    theme: "architecture",
    body: "From a useful interface to the routes, data, and authentication behind it.",
    project: "healthorbit",
  },
  {
    eyebrow: "Interface craft",
    title: "Make complexity feel simple.",
    file: "capability-interface.svg",
    theme: "interface",
    body: "Clear layouts, considered interactions, and details that work on every screen.",
    project: "roavista",
  },
  {
    eyebrow: "Applied AI",
    title: "Connect intelligence to purpose.",
    file: "capability-intelligence.svg",
    theme: "intelligence",
    body: "Give models a meaningful role inside a workflow, with visible steps and outcomes.",
    project: "meshflow",
  },
  {
    eyebrow: "Strong foundations",
    title: "Care about what’s underneath.",
    file: "capability-foundations.svg",
    theme: "foundations",
    body: "Data structures, modular code, and a habit of refining the last detail.",
    project: null,
  },
];
const MORE_WORK = [
  [
    "HealthOrbit Android",
    "Kotlin companion · Health Connect",
    "HealthOrbit-Android",
    "phone",
  ],
  [
    "AI chat interface",
    "OpenAI & Gemini integrations",
    "ChatGPT-clone",
    "spark",
  ],
  [
    "Data Structures & Algorithms",
    "Java · LeetCode practice",
    "Data-Structures-and-Algorithms",
    "braces",
  ],
  ["Community records", "Node.js · EJS", "Area-Management-Detail", "people"],
  ["Oasis Infobyte projects", "Web development internship", "OIBSIP", "code"],
  ["StaySphere", "Accommodation application", "StaySphere", "compass"],
  ["Simon Says", "JavaScript memory game", "Simon-Says-Game", "hex"],
];
const PROFILES = [
  {
    id: "github",
    name: "GitHub",
    subtitle: "The code behind the work.",
    icon: "github",
    url: PROFILE.github,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    subtitle: "Experience & professional updates.",
    icon: "linkedin",
    url: PROFILE.linkedin,
  },
  {
    id: "leetcode",
    name: "LeetCode",
    subtitle: "Problem-solving in Java.",
    icon: "braces",
    url: PROFILE.leetcode,
  },
  // Paste your personal public profile URLs here. Do not use a portal's home page.
  {
    id: "indeed",
    name: "Indeed",
    subtitle: "Professional profile",
    icon: "document",
    url: null,
  },
  {
    id: "internshala",
    name: "Internshala",
    subtitle: "Internships & opportunities",
    icon: "code",
    url: null,
  },
  {
    id: "unstop",
    name: "Unstop",
    subtitle: "Challenges & participation",
    icon: "spark",
    url: null,
  },
  {
    id: "naukri",
    name: "Naukri",
    subtitle: "Professional profile",
    icon: "people",
    url: null,
  },
];
const TOOL_ALIASES = {
  React: "react",
  "Node.js": "nodejs",
  Java: "java",
  MongoDB: "mongodb",
  JavaScript: "js",
  Express: "express",
  "Git & GitHub": "git",
  Docker: "docker",
  "HTML & CSS": "html",
  Kubernetes: "kubernetes",
};
const TOOLS = [
  ...SKILLS.map(([name, icon, color, text]) => ({
    name,
    icon,
    color,
    text,
    brand: TOOL_ALIASES[name],
  })),
  ...[
    [
      "Kotlin",
      "kotlin",
      "Android companion development and typed application code.",
    ],
    [
      "Android Studio",
      "androidstudio",
      "Building and working on the HealthOrbit Android companion.",
    ],
    [
      "TypeScript",
      "typescript",
      "Typed components and application development in TravelBharat.",
    ],
    [
      "Next.js",
      "nextjs",
      "The React framework used in the TravelBharat project.",
    ],
    ["Bootstrap", "bootstrap", "Responsive interface styling in web projects."],
    ["Google Cloud", "gcp", "Cloud tooling in the development stack."],
    [
      "GitHub Actions",
      "githubactions",
      "Automation and continuous integration workflows.",
    ],
    [
      "Postman",
      "postman",
      "Exploring, testing, and debugging application APIs.",
    ],
    [
      "VS Code",
      "vscode",
      "An everyday workspace for building and refining software.",
    ],
    ["npm", "npm", "Managing JavaScript packages and development scripts."],
  ].map(([name, brand, text]) => ({
    name,
    brand,
    text,
    icon: "code",
    color: "#83a5c5",
  })),
];
// x, y, size, rotation: varied scale conveys depth without an expensive blur filter.
const TOOL_POSITIONS = [
  [12, 24, 88, -10],
  [33, 9, 76, 8],
  [69, 10, 82, -7],
  [88, 26, 92, 9],
  [92, 60, 100, -8],
  [76, 88, 74, 8],
  [53, 94, 76, -5],
  [25, 88, 67, 9],
  [8, 62, 88, 7],
  [5, 6, 48, -9],
  [47, 3, 48, 5],
  [20, 44, 49, -7],
  [80, 46, 48, 7],
  [96, 41, 45, -7],
  [38, 88, 43, 8],
  [13, 84, 43, -6],
  [84, 9, 50, 11],
  [19, 9, 47, -8],
  [2, 43, 50, 7],
  [95, 84, 49, -7],
  [4, 91, 50, 6],
  [17, 69, 42, -6],
  [83, 73, 45, 9],
  [64, 89, 42, -5],
  [59, 5, 42, 5],
  [97, 7, 43, -5],
];
const PHOTOS = [
  {
    id: "team",
    file: "team-building.jpg",
    title: "Building, together.",
    label: "Atharv with classmates working on the project",
  },
  {
    id: "hackathon",
    file: "healthorbit-at-hackathon.png",
    title: "HealthOrbit at the hackathon.",
    label: "HealthOrbit and the PCE participation certificate",
  },
  {
    id: "desk",
    file: "building-at-the-desk.jpg",
    title: "In the making.",
    label: "Atharv working at a laptop",
  },
  {
    id: "session",
    file: "project-session.jpg",
    title: "One more iteration.",
    label: "Atharv at a project session",
  },
];
function Icon({ name = "spark", className = "", ...props }) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const paths = {
    volume: (
      <>
        <path d="M4 9h4l5-4v14l-5-4H4Z" />
        <path d="M17 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />
      </>
    ),
    muted: (
      <>
        <path d="M4 9h4l5-4v14l-5-4H4Z" />
        <path d="m17 9 5 6m0-6-5 6" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    external: (
      <>
        <path d="M7 17 17 7M7 7h10v10" />
      </>
    ),
    chevron: <path d="m9 5 7 7-7 7" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    play: <path d="m9 5 11 7-11 7Z" />,
    pause: (
      <>
        <path d="M8 5v14M16 5v14" strokeWidth="3" />
      </>
    ),
    expand: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M7 3 3 5c0 9 7 16 16 16l2-4-5-3-2 2a13 13 0 0 1-6-6l2-2Z" />
    ),
    location: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    code: (
      <>
        <path d="m7 7-5 5 5 5m10-10 5 5-5 5M14 4 10 20" />
      </>
    ),
    braces: <path d="M8 3H6v6l-3 3 3 3v6h2M16 3h2v6l3 3-3 3v6h-2" />,
    pulse: (
      <>
        <path d="M2 12h5l3-7 4 14 3-7h5" />
      </>
    ),
    mesh: (
      <>
        <circle cx="12" cy="4" r="2" />
        <circle cx="4" cy="12" r="2" />
        <circle cx="20" cy="12" r="2" />
        <circle cx="12" cy="20" r="2" />
        <path d="m6 10 4-4m4 0 4 4M6 14l4 4m4 0 4-4M7 12h10M12 7v10" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m16 8-3 5-5 3 3-5Z" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z" />
      </>
    ),
    react: (
      <>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.2"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="11"
          ry="4.2"
          transform="rotate(120 12 12)"
        />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
      </>
    ),
    node: (
      <>
        <path d="m12 2 9 5v10l-9 5-9-5V7Z" />
        <path d="M9 9v7a2 2 0 0 1-3 1m7-2c0 3 5 3 5 0 0-2-5-1-5-4 0-3 5-3 5-1" />
      </>
    ),
    leaf: (
      <>
        <path d="M12 2c-10 10-7 16 0 20 7-4 10-10 0-20Z" />
        <path d="M12 7v16" />
      </>
    ),
    java: (
      <>
        <path d="M6 12h11v4a5 5 0 0 1-10 0v-4Zm11 1h2a2 2 0 0 1 0 4h-2M5 22h14M11 2c-5 4 6 3 0 7m5-8c-5 4 4 4 0 8" />
      </>
    ),
    js: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M11 9v8c0 3-4 3-4 0m8 0c0 3 5 3 5 0 0-3-5-1-5-5 0-3 5-3 5-1" />
      </>
    ),
    git: (
      <>
        <path d="m12 2 10 10-10 10L2 12Z" />
        <path d="M8 7v7l4 3m-4-7h6v4" />
        <circle cx="8" cy="7" r="1" />
        <circle cx="12" cy="17" r="1" />
        <circle cx="14" cy="14" r="1" />
      </>
    ),
    github: (
      <>
        <path d="M9 21v-4c-4 1-5-2-6-3m12 7v-4c0-1 0-2-1-2 4 0 7-2 7-6 0-2-1-3-2-4 0-1 0-2-1-3l-4 2a13 13 0 0 0-4 0L6 2C5 3 5 4 5 5 4 6 3 7 3 9c0 4 3 6 7 6-1 0-1 1-1 2" />
      </>
    ),
    linkedin: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M7 10v8m0-12v.1M11 18v-8m0 3c1-4 6-4 6 0v5" />
      </>
    ),
    box: (
      <>
        <path d="m12 2 9 5v10l-9 5-9-5V7Z" />
        <path d="m3 7 9 5 9-5M12 12v10M7 4.5l10 5" />
      </>
    ),
    cloud: <path d="M7 19a5 5 0 1 1-1-10 6 6 0 0 1 12-1 5.5 5.5 0 0 1 0 11Z" />,
    scan: (
      <>
        <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M7 8h10M7 12h10M7 16h6" />
      </>
    ),
    hex: (
      <>
        <path d="m12 2 9 5v10l-9 5-9-5V7Z" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 4v4m0 8v4M5 8l4 2m6 4 4 2M5 16l4-2m6-4 4-2" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="3" />
        <path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3" />
      </>
    ),
    photo: (
      <>
        <rect x="2" y="3" width="20" height="18" rx="4" />
        <circle cx="8" cy="9" r="2" />
        <path d="m3 18 6-6 4 4 3-3 5 5" />
      </>
    ),
    document: (
      <>
        <path d="M14 2H5v20h14V7Zm0 0v5h5M8 11h8M8 15h8M8 18h5" />
      </>
    ),
    presentation: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M12 17v5m-5 0 5-5 5 5M6 12l4-4 4 2 4-4" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21v-3a7 7 0 0 1 14 0v3m2-18a4 4 0 0 1 0 8m1 3a6 6 0 0 1 3 5v2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      className={`icon ${className}`}
      aria-hidden="true"
      {...shared}
      {...props}
    >
      {paths[name] || paths.spark}
    </svg>
  );
}
function External({ href, children, className = "", ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
      <Icon name="external" />
    </a>
  );
}
function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="section-head" data-reveal>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
      {children && <div className="section-intro">{children}</div>}
    </div>
  );
}
function Placeholder({ label, file, size, icon = "photo", className = "" }) {
  return (
    <div className={`media-placeholder ${className}`}>
      <span className="placeholder-icon">
        <Icon name={icon} />
      </span>
      <strong>{label}</strong>
      <span>{size}</span>
      {file && <code>{file}</code>}
    </div>
  );
}
function Research({ onOpen }) {
  const [page, setPage] = useState(1);
  const [previous, setPrevious] = useState(null);
  const [autoTurn, setAutoTurn] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const paperRef = useRef(null);
  const { enabled, modalOpen } = useContext(Motion);
  const turnTo = (next, manual = false) => {
    if (next === page) return;
    if (manual) setAutoTurn(false);
    setPrevious(page);
    setPage(next);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(paperRef.current);
    const visibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  useEffect(() => {
    if (
      !autoTurn ||
      !enabled ||
      !inView ||
      !pageVisible ||
      hovering ||
      modalOpen
    )
      return;
    const timer = setTimeout(() => turnTo(page === 6 ? 1 : page + 1), 6500);
    return () => clearTimeout(timer);
  }, [autoTurn, enabled, inView, pageVisible, hovering, modalOpen, page]);
  useEffect(() => {
    if (previous === null) return;
    const timer = setTimeout(() => setPrevious(null), 900);
    return () => clearTimeout(timer);
  }, [previous, page]);
  const file =
    page === 1 ? "healthorbit-paper.png" : `healthorbit-paper-page-${page}.png`;
  return (
    <section className="section-space research-reader-section" id="research">
      <AmbientField variant="research-graph" />
      <div className="shell">
        <SectionHead
          eyebrow="Published research"
          title={
            <>
              Built. Studied.<span>Shared.</span>
            </>
          }
        >
          <p>
            A college group project,
            <br />
            and the thinking we put on paper.
          </p>
        </SectionHead>
        <div className="research-reader" data-reveal>
          <div className="reader-story">
            <span className="publication-label">
              <Icon name="document" /> IJRASET · September 2026
            </span>
            <h3>
              From a working idea
              <br />
              to a published paper.
            </h3>
            <p className="paper-full-title">{PAPER.title}</p>
            <p>
              Our co-authored paper describes a framework connecting health
              information, medical documents, and context-aware AI assistance in
              HealthOrbit.
            </p>
            <dl className="paper-meta">
              <div>
                <dt>My role</dt>
                <dd>Co-author</dd>
              </div>
              <div>
                <dt>Article pages</dt>
                <dd>{PAPER.pages}</dd>
              </div>
              <div>
                <dt>Publication</dt>
                <dd>Vol. 14 · Issue IX</dd>
              </div>
            </dl>
            <div className="research-actions">
              <External
                className="button primary"
                href={
                  media("documents/healthorbit-research-paper.pdf") || PAPER.url
                }
              >
                Read full paper
              </External>
              <button
                className="text-link"
                onClick={() => onOpen({ kind: "paper" })}
              >
                Authors & details <Icon name="plus" />
              </button>
            </div>
            <External
              className="doi-link"
              href={`https://doi.org/${PAPER.doi}`}
            >
              DOI: {PAPER.doi}
            </External>
          </div>
          <div
            className="paper-desk"
            ref={paperRef}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onFocusCapture={() => setHovering(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget))
                setHovering(false);
            }}
          >
            <div className="reader-toolbar">
              <span>
                <Icon name="document" /> Article preview
              </span>
              <span>{page} / 6</span>
            </div>
            <button
              className="paper-preview"
              onClick={() =>
                onOpen({
                  kind: "photo",
                  item: { file, label: `HealthOrbit article preview ${page}` },
                  title: "Published article preview",
                })
              }
              aria-label={`Enlarge article preview ${page}`}
            >
              <img
                key={page}
                src={media(`images/${file}`)}
                alt={`Actual HealthOrbit article preview ${page}`}
                loading="lazy"
              />
              {previous !== null && (
                <span
                  className="paper-turn-leaf"
                  key={`turn-${page}`}
                  aria-hidden="true"
                >
                  <img
                    src={media(
                      `images/${previous === 1 ? "healthorbit-paper.png" : `healthorbit-paper-page-${previous}.png`}`,
                    )}
                    alt=""
                  />
                </span>
              )}
              <span className="enlarge-hint">
                <Icon name="plus" /> Enlarge page
              </span>
            </button>
            <div className="reader-controls">
              <button
                className="round-button"
                aria-label="Previous article preview"
                disabled={page === 1}
                onClick={() => turnTo(page - 1, true)}
              >
                <Icon name="chevron" className="turn-back" />
              </button>
              <div
                className="reader-pages"
                role="group"
                aria-label="Choose article preview"
              >
                {[1, 2, 3, 4, 5, 6].map((p) => (
                  <button
                    key={p}
                    aria-label={`Article preview ${p}`}
                    aria-pressed={p === page}
                    onClick={() => turnTo(p, true)}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button
                className="round-button"
                aria-label="Next article preview"
                disabled={page === 6}
                onClick={() => turnTo(page + 1, true)}
              >
                <Icon name="chevron" />
              </button>
            </div>
            <button
              className="paper-auto text-link"
              disabled={!enabled}
              aria-pressed={autoTurn && enabled}
              onClick={() => setAutoTurn((a) => !a)}
            >
              <Icon name={autoTurn && enabled ? "pause" : "play"} />
              {!enabled
                ? "Automatic turns paused"
                : autoTurn
                  ? "Pause automatic turns"
                  : "Resume automatic turns"}
            </button>
            <p className="reader-note">
              Six preview pages. Open the PDF for the complete publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section-space journey-eight" id="about">
      <div className="shell">
        <SectionHead
          eyebrow="Experience & education"
          title={
            <>
              Learning by doing.<span>Growing with every build.</span>
            </>
          }
        >
          <p>
            A Computer Engineering student with hands-on web development
            experience.
          </p>
        </SectionHead>
        <div className="journey-layout">
          <div className="journey-experience">
            {[
              [
                "01",
                "August 2026 — Present",
                "Unified Mentor",
                "Full-Stack Developer Intern",
                "Developing full-stack assignments and TravelBharat. Working through application structure, debugging, Git, and practical product development.",
              ],
              [
                "02",
                "2026 · One month",
                "Oasis Infobyte",
                "Web Development Intern",
                "Built responsive portfolio, utility, and productivity projects using HTML, CSS, JavaScript, Git, and GitHub.",
              ],
            ].map(([n, date, company, role, text]) => (
              <article className="journey-card" data-reveal key={company}>
                <div>
                  <p className="eyebrow">{date}</p>
                  <h3>{role}</h3>
                  <strong>{company}</strong>
                  <p>{text}</p>
                </div>
                <Icon name="code" />
              </article>
            ))}
            <div className="journey-strengths" data-reveal>
              <span>
                <Icon name="react" /> Interface design
              </span>
              <span>
                <Icon name="mesh" /> Prompt engineering
              </span>
              <span>
                <Icon name="braces" /> Java & problem-solving
              </span>
            </div>
          </div>
          <article className="journey-education" data-reveal>
            <span className="education-orbit" aria-hidden="true">
              <Icon name="braces" />
            </span>
            <p className="eyebrow">Education · Class of 2027</p>
            <h3>
              B.Tech in
              <br />
              Computer Engineering
            </h3>
            <p>
              Rashtrasant Tukadoji Maharaj
              <br />
              Nagpur University
            </p>
            <span className="graduation">
              Expected June 2027 <Icon name="arrow" />
            </span>
            <div className="education-divider" />
            <small>Higher Secondary Certificate · 2023</small>
            <p>Major Hemant Jakate College, Nagpur</p>
            <External className="text-link" href={PROFILE.resume}>
              View full résumé
            </External>
          </article>
        </div>
      </div>
    </section>
  );
}

const Motion = createContext({ enabled: true });
const clamp = (n, min = 0, max = 1) => Math.max(min, Math.min(n, max));
function useMotionPreference() {
  const [reduced, setReduced] = useState(false),
    [paused, setPaused] = useState(false);
  useEffect(() => {
    const q = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(q.matches);
    sync();
    q.addEventListener("change", sync);
    return () => q.removeEventListener("change", sync);
  }, []);
  return { enabled: !reduced && !paused, reduced, paused, setPaused };
}
function useReveal(root, enabled) {
  useEffect(() => {
    const nodes = root.current?.querySelectorAll("[data-reveal]") || [];
    if (!enabled || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.06) {
            e.target.classList.add("is-visible");
          } else if (
            e.boundingClientRect.bottom < 0 ||
            e.boundingClientRect.top > window.innerHeight
          ) {
            e.target.classList.remove("is-visible");
          }
        }),
      { threshold: [0, 0.06] },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [root, enabled]);
}
/* One passive listener and at most one frame per scroll event. No spring lag,
   React state updates, or continuously animated backdrop in the scroll scenes. */
function useScrollScene(ref, paint, enabled) {
  const painter = useRef(paint);
  painter.current = paint;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0,
      top = 0,
      height = 0,
      vh = 0;
    const update = () => {
      frame = 0;
      const relative = top - window.scrollY;
      if (relative > vh * 1.4 || relative + height < -vh * 0.2) return;
      painter.current(el, { top: relative, height, vh }, enabled);
    };
    const queue = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const measure = () => {
      top = el.getBoundingClientRect().top + window.scrollY;
      height = el.offsetHeight;
      vh = window.innerHeight;
      queue();
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    ro.observe(document.body);
    measure();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", measure);
    };
  }, [ref, enabled]);
}
function useSectionNavigation(root, enabled) {
  const initialAligned = useRef(false);
  useEffect(() => {
    let frame = 0;
    const alignInitial = () => {
      if (initialAligned.current) return;
      initialAligned.current = true;
      const target = document.getElementById(location.hash.slice(1));
      target?.scrollIntoView({ behavior: "instant", block: "start" });
    };
    const initialTimer = setTimeout(() => {
      frame = requestAnimationFrame(alignInitial);
    }, 180);
    const navigate = (event) => {
      const link = event.target.closest?.('a[href^="#"]');
      if (
        !link ||
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const target = document.getElementById(
        link.getAttribute("href").slice(1),
      );
      if (!target) return;
      event.preventDefault();
      clearTimeout(initialTimer);
      cancelAnimationFrame(frame);
      initialAligned.current = true;
      history.pushState(null, "", link.getAttribute("href"));
      const nearby =
        Math.abs(target.getBoundingClientRect().top) < innerHeight * 1.5;
      target.scrollIntoView({
        behavior: enabled && nearby ? "smooth" : "instant",
        block: "start",
      });
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    };
    const el = root.current;
    el?.addEventListener("click", navigate);
    return () => {
      clearTimeout(initialTimer);
      cancelAnimationFrame(frame);
      el?.removeEventListener("click", navigate);
    };
  }, [root, enabled]);
}

function Brand() {
  return (
    <span className="ad-mark">
      ad<span>.</span>
    </span>
  );
}
function Header({ appearance, onAppearance }) {
  const [open, setOpen] = useState(false),
    [active, setActive] = useState("");
  const menu = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            setActive(e.target.id === "overview" ? "" : e.target.id);
        }),
      { rootMargin: "-15% 0px -65% 0px" },
    );
    [
      "overview",
      "work",
      "approach",
      "skills",
      "research",
      "about",
      "contact",
    ].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        menu.current?.focus();
      }
    };
    const outside = (e) => {
      if (!e.target.closest(".site-header")) setOpen(false);
    };
    const resize = () => {
      if (innerWidth > 900) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a
          className="brand"
          href="#main"
          aria-label="Portfolio home"
          onClick={() => setOpen(false)}
        >
          <Brand />
        </a>
        <nav
          id="main-nav"
          className={open ? "nav-open" : ""}
          aria-label="Main navigation"
        >
          {[
            ["Work", "work"],
            ["How I build", "approach"],
            ["Tools", "skills"],
            ["Research", "research"],
            ["Journey", "about"],
          ].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Contact <Icon name="arrow" />
          </a>
          <External
            className="mobile-resume"
            href={PROFILE.resume}
            onClick={() => setOpen(false)}
          >
            Download résumé
          </External>
        </nav>
        <div className="nav-utilities">
          <button
            className="appearance-button"
            onClick={onAppearance}
            aria-label={
              appearance === "studio"
                ? "Switch to midnight appearance"
                : "Switch to studio appearance"
            }
          >
            <span className="appearance-symbol" />
          </button>
          <External className="nav-resume" href={PROFILE.resume}>
            Résumé
          </External>
          <button
            className="menu-button"
            ref={menu}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function AmbientField({ variant = "" }) {
  return (
    <div className={`ambient-field ${variant}`} aria-hidden="true">
      <svg viewBox="0 0 1200 650" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern
            id={`grid-${variant}`}
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M48 0H0V48"
              fill="none"
              stroke="currentColor"
              strokeWidth=".5"
            />
          </pattern>
        </defs>
        <rect
          width="1200"
          height="650"
          fill={`url(#grid-${variant})`}
          className="ambient-grid"
        />
        <g className="ambient-connections">
          <path d="M-20 480C160 480 120 250 310 250S410 410 570 410 690 130 880 130 1020 310 1240 310" />
          <path d="M-20 300C120 300 170 500 350 500S520 180 690 180 810 430 1020 430 1140 100 1240 100" />
        </g>
        {[
          [145, 380],
          [310, 250],
          [570, 410],
          [690, 180],
          [880, 130],
          [1020, 430],
        ].map(([x, y], i) => (
          <g
            className="ambient-node"
            style={{ "--delay": `${i * -0.7}s` }}
            key={x}
          >
            <circle cx={x} cy={y} r="18" />
            <circle cx={x} cy={y} r="4" />
          </g>
        ))}
      </svg>
      <span className="binary-stream binary-one">
        0101 0010 0110
        <br />
        0011 0101 1001
        <br />
        1010 0010 0101
      </span>
      <span className="binary-stream binary-two">
        0101
        <br />
        0010
        <br />
        1011
        <br />
        0101
      </span>
      <span className="ambient-code code-a">
        const idea = build(&#123; purpose: true &#125;);
      </span>
      <span className="ambient-code code-b">
        interface → API → data → experience
      </span>
    </div>
  );
}

/* A damped spring updates CSS variables directly, only while a fine pointer moves.
   Touch, reduced-motion, hidden tabs, and offscreen elements do not run the loop. */
function usePointerPhysics(ref) {
  const { enabled } = useContext(Motion);
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled || !matchMedia("(pointer: fine)").matches) return;
    let frame = 0,
      x = 0,
      y = 0,
      vx = 0,
      vy = 0,
      tx = 0,
      ty = 0,
      visible = true,
      last = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
      x = y = vx = vy = tx = ty = 0;
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };
    const tick = (now) => {
      if (!visible || document.hidden) {
        reset();
        return;
      }
      const dt = Math.min((now - (last || now - 16.7)) / 16.7, 2);
      last = now;
      vx = (vx + (tx - x) * 0.075 * dt) * Math.pow(0.74, dt);
      vy = (vy + (ty - y) * 0.075 * dt) * Math.pow(0.74, dt);
      x += vx * dt;
      y += vy * dt;
      el.style.setProperty("--ry", `${x.toFixed(3)}deg`);
      el.style.setProperty("--rx", `${(-y).toFixed(3)}deg`);
      if (
        Math.abs(tx - x) + Math.abs(ty - y) + Math.abs(vx) + Math.abs(vy) >
        0.015
      )
        frame = requestAnimationFrame(tick);
      else {
        frame = 0;
        last = 0;
      }
    };
    const start = () => {
      if (!frame && visible && !document.hidden)
        frame = requestAnimationFrame(tick);
    };
    const move = (e) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 7;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 7;
      start();
    };
    const leave = () => {
      tx = ty = 0;
      start();
    };
    const hide = () => {
      if (document.hidden) reset();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) reset();
    });
    observer.observe(el);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", hide);
    return () => {
      reset();
      observer.disconnect();
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", hide);
    };
  }, [ref, enabled]);
}

function Hero({ onOpen }) {
  const visual = useRef(null);
  usePointerPhysics(visual);
  return (
    <section
      className="hero studio-hero"
      id="overview"
      aria-labelledby="hero-title"
    >
      <AmbientField variant="hero-graph" />
      <div className="shell hero-layout">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">
            <span className="live-dot" /> Full-stack developer & AI builder
          </p>
          <h1 id="hero-title">
            Atharv
            <br />
            <span>Deshmukh.</span>
          </h1>
          <p className="hero-statement">
            Ideas into interfaces.
            <br />
            Interfaces into <em>something useful.</em>
          </p>
          <p className="hero-description">
            I build web products with clear interfaces, connected backends, and
            purposeful AI. A Computer Engineering student with an eye for
            design—and a love for making things work.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button primary">
              Explore my work <Icon name="arrow" />
            </a>
            <External href={PROFILE.resume} className="button secondary">
              View résumé
            </External>
          </div>
          <div className="hero-disciplines">
            <span>Full-stack development</span>
            <span>UI design</span>
            <span>Prompt engineering</span>
          </div>
        </div>
        <div className="hero-visual" data-reveal>
          <div className="portrait-stage" ref={visual}>
            <div className="portrait-orbit" aria-hidden="true" />
            <div className="hero-photo">
              <img
                src={media("images/atharv-at-desk.jpeg")}
                alt="Atharv at his desk"
                fetchPriority="high"
              />
            </div>
            <span className="portrait-node node-react" aria-hidden="true">
              <Icon name="react" />
            </span>
            <span className="portrait-node node-code" aria-hidden="true">
              <Icon name="braces" />
            </span>
            <div className="portrait-terminal">
              <span>
                <i /> developer.js
              </span>
              <code>
                <b>const</b> focus = [<br />
                &nbsp; <em>"design"</em>, <em>"code"</em>, <em>"people"</em>
                <br />
                ];<span className="code-caret">▍</span>
              </code>
            </div>
          </div>
          <button
            className="intro-link"
            onClick={() => onOpen({ kind: "intro", title: "Meet Atharv" })}
          >
            <span className="intro-play">
              <Icon name="play" />
            </span>
            <span>
              <strong>A little about me.</strong>
              <small>Watch my introduction · 27 seconds</small>
            </span>
            <Icon name="arrow" />
          </button>
        </div>
      </div>
      <div className="shell hero-footline">
        <span>
          <Icon name="location" /> Nagpur, India
        </span>
        <span>Computer Engineering · Class of 2027</span>
        <a href="#work">
          Explore what I’m building <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}

function useRail() {
  const ref = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const { enabled } = useContext(Motion);
  const update = () => {
    const e = ref.current;
    if (e)
      setEdge({
        start: e.scrollLeft < 8,
        end: e.scrollLeft + e.clientWidth >= e.scrollWidth - 8,
      });
  };
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const move = (direction) => {
    const e = ref.current;
    if (e)
      e.scrollBy({
        left: direction * ((e.firstElementChild?.clientWidth || 340) + 24),
        behavior: enabled ? "smooth" : "instant",
      });
  };
  return { ref, edge, update, move };
}
function RailControls({ rail, label }) {
  return (
    <div className="carousel-controls">
      <p>{label}</p>
      <div>
        <button
          className="round-button"
          aria-label="Previous cards"
          disabled={rail.edge.start}
          onClick={() => rail.move(-1)}
        >
          <Icon name="chevron" className="turn-back" />
        </button>
        <button
          className="round-button"
          aria-label="Next cards"
          disabled={rail.edge.end}
          onClick={() => rail.move(1)}
        >
          <Icon name="chevron" />
        </button>
      </div>
    </div>
  );
}

function ProjectArtwork({ project }) {
  return <ProjectCover project={project} />;
}

function ProjectCover({ project, compact = false }) {
  return (
    <div
      className={`project-cover ${compact ? "compact-cover" : ""}`}
      style={{ "--project-color": project.color }}
    >
      <img
        src={
          media(`screenshots/${project.id}.webp`) ||
          media(`illustrations/poster-${project.id}.svg`) ||
          media("illustrations/poster-intro.svg")
        }
        alt={
          media(`screenshots/${project.id}.webp`)
            ? `${project.name} desktop screenshot`
            : `${project.name} illustrated walkthrough cover`
        }
        loading="lazy"
      />
      {!project.hasVideo && (
        <span className="cover-status">
          {project.url ? "PROJECT OVERVIEW" : "IN DEVELOPMENT"}
        </span>
      )}
    </div>
  );
}

function CleanVideo({
  src,
  poster,
  title = "Portfolio film",
  autoplay = false,
  minimalControls = false,
}) {
  const ref = useRef(null),
    holder = useRef(null);
  const { modalOpen } = useContext(Motion);
  const [started, setStarted] = useState(autoplay),
    [playing, setPlaying] = useState(false),
    [volume, setVolume] = useState(70),
    [failed, setFailed] = useState(false);
  useEffect(() => {
    const stop = () => ref.current?.pause();
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) stop();
    });
    if (holder.current) observer.observe(holder.current);
    const hide = () => {
      if (document.hidden) stop();
    };
    document.addEventListener("visibilitychange", hide);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", hide);
    };
  }, []);
  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume / 100;
      ref.current.playbackRate = 1;
    }
  }, [volume, started]);
  useEffect(() => {
    if (modalOpen && !holder.current?.closest("dialog")) ref.current?.pause();
  }, [modalOpen]);
  const toggle = () => {
    if (!started) {
      setStarted(true);
      return;
    }
    if (ref.current?.paused) ref.current.play().catch(() => setPlaying(false));
    else ref.current?.pause();
  };
  return (
    <div className="clean-player" ref={holder}>
      <div className="player-canvas">
        {started ? (
          <video
            ref={ref}
            src={src}
            playsInline
            preload="metadata"
            poster={poster || undefined}
            autoPlay
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => {
              setPlaying(false);
              setStarted(false);
            }}
            onError={() => setFailed(true)}
            aria-label={title}
          />
        ) : (
          <button
            className="player-poster"
            aria-label={`Play ${title}`}
            onClick={toggle}
          >
            <img
              src={poster || media("illustrations/poster-intro.svg")}
              alt={`${title} cover`}
            />
            <span className="play-disc">
              <Icon name="play" />
            </span>
          </button>
        )}
      </div>
      <div
        className={`player-controls ${minimalControls ? "minimal-controls" : ""}`}
      >
        {!minimalControls && (
          <button
            onClick={toggle}
            aria-label={`${playing ? "Pause" : "Play"} ${title}`}
          >
            <Icon name={playing ? "pause" : "play"} />
            <span>{playing ? "Pause" : "Play"}</span>
          </button>
        )}
        <div className="volume-control">
          <button
            aria-label={volume ? `Mute ${title}` : `Unmute ${title}`}
            onClick={() => setVolume(volume ? 0 : 70)}
          >
            <Icon name={volume ? "volume" : "muted"} />
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-label={`${title} volume`}
          />
        </div>
        {minimalControls && started && (
          <button
            className="corner-playback"
            onClick={toggle}
            aria-label={`${playing ? "Pause" : "Play"} ${title}`}
          >
            <Icon name={playing ? "pause" : "play"} />
          </button>
        )}
      </div>
      {failed && (
        <p className="player-error">
          This video could not be played.{" "}
          <External href={src}>Open the video file</External>
        </p>
      )}
    </div>
  );
}

let youtubeReady;
function loadYouTubeAPI() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (youtubeReady) return youtubeReady;
  youtubeReady = new Promise((resolve, reject) => {
    const previous = window.onYouTubeIframeAPIReady;
    const timer = setTimeout(() => {
      youtubeReady = null;
      reject(new Error("Video player unavailable"));
    }, 15000);
    window.onYouTubeIframeAPIReady = () => {
      clearTimeout(timer);
      previous?.();
      resolve(window.YT);
    };
    let script = document.querySelector("script[data-portfolio-youtube]");
    if (!script) {
      script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.dataset.portfolioYoutube = "true";
      script.async = true;
      script.onerror = () => {
        clearTimeout(timer);
        script.remove();
        youtubeReady = null;
        reject(new Error("Video player unavailable"));
      };
      document.head.appendChild(script);
    }
  });
  return youtubeReady;
}

function ProjectVideo({
  project,
  autoplay = false,
  onSmallScreen,
  minimalControls = true,
}) {
  const native = media(`videos/${project.id}-demo.mp4`);
  const host = useRef(null),
    root = useRef(null),
    player = useRef(null);
  const [started, setStarted] = useState(autoplay),
    [ready, setReady] = useState(false),
    [playing, setPlaying] = useState(false),
    [volume, setVolume] = useState(70),
    [failed, setFailed] = useState(false);
  const { modalOpen } = useContext(Motion);
  const volumeSetting = useRef(volume);
  volumeSetting.current = volume;
  useEffect(() => {
    if (native || !started) return;
    let cancelled = false;
    setReady(false);
    setFailed(false);
    loadYouTubeAPI()
      .then((YT) => {
        if (cancelled || !host.current) return;
        const mount = document.createElement("div");
        host.current.replaceChildren(mount);
        player.current = new YT.Player(mount, {
          host: "https://www.youtube-nocookie.com",
          width: "100%",
          height: "100%",
          videoId: project.youtube,
          playerVars: {
            controls: 0,
            fs: 0,
            rel: 0,
            playsinline: 1,
            origin: window.location.origin,
            iv_load_policy: 3,
          },
          events: {
            onReady: (e) => {
              if (cancelled) return;
              setReady(true);
              e.target.getIframe().title = `${project.name} walkthrough`;
              e.target.setVolume(volumeSetting.current);
              e.target.playVideo();
            },
            onStateChange: (e) => {
              if (cancelled) return;
              setPlaying(e.data === 1);
              if (e.data === 0) setStarted(false);
            },
            onError: () => {
              if (!cancelled) setFailed(true);
            },
          },
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
      player.current?.destroy?.();
      player.current = null;
      host.current?.replaceChildren();
    };
  }, [started, native, project.id]);
  useEffect(() => {
    player.current?.setVolume?.(volume);
    if (volume) player.current?.unMute?.();
    else player.current?.mute?.();
  }, [volume]);
  useEffect(() => {
    const stop = () => {
      player.current?.pauseVideo?.();
      setPlaying(false);
    };
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) stop();
    });
    if (root.current) observer.observe(root.current);
    const hide = () => {
      if (document.hidden) stop();
    };
    document.addEventListener("visibilitychange", hide);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", hide);
    };
  }, []);
  useEffect(() => {
    if (modalOpen && !root.current?.closest("dialog")) {
      player.current?.pauseVideo?.();
      setPlaying(false);
    }
  }, [modalOpen]);
  const start = () => {
    const r = root.current
      ?.querySelector(".player-canvas")
      ?.getBoundingClientRect();
    if (onSmallScreen && r && (r.width < 200 || r.height < 200)) {
      onSmallScreen();
      return;
    }
    setStarted(true);
  };
  const toggle = () => {
    if (!started) {
      start();
      return;
    }
    if (playing) player.current?.pauseVideo?.();
    else player.current?.playVideo?.();
  };
  if (native)
    return (
      <CleanVideo
        src={native}
        poster={
          media(`screenshots/${project.id}.webp`) ||
          media(`illustrations/poster-${project.id}.svg`)
        }
        title={`${project.name} walkthrough`}
        autoplay={autoplay}
        minimalControls={minimalControls}
      />
    );
  return (
    <div className="clean-player youtube-clean-player" ref={root}>
      <div className="player-canvas">
        {started ? (
          <div className="youtube-host" ref={host} />
        ) : (
          <button
            className="player-poster"
            onClick={start}
            aria-label={`Play ${project.name} walkthrough`}
          >
            <ProjectCover project={project} />
            <span className="play-disc">
              <Icon name="play" />
            </span>
          </button>
        )}
      </div>
      <div
        className={`player-controls ${minimalControls ? "minimal-controls" : ""}`}
      >
        {!minimalControls && (
          <button
            onClick={toggle}
            disabled={started && !ready && !failed}
            aria-label={`${playing ? "Pause" : "Play"} ${project.name} walkthrough`}
          >
            <Icon name={playing ? "pause" : "play"} />
            <span>
              {started && !ready && !failed
                ? "Loading…"
                : playing
                  ? "Pause"
                  : "Play"}
            </span>
          </button>
        )}
        <div className="volume-control">
          <button
            disabled={started && !ready}
            aria-label={
              volume ? `Mute ${project.name}` : `Unmute ${project.name}`
            }
            onClick={() => setVolume(volume ? 0 : 70)}
          >
            <Icon name={volume ? "volume" : "muted"} />
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-label={`${project.name} volume`}
          />
        </div>
        {minimalControls && started && (
          <button
            className="corner-playback"
            disabled={!ready && !failed}
            onClick={toggle}
            aria-label={`${playing ? "Pause" : "Play"} ${project.name} walkthrough`}
          >
            <Icon name={playing ? "pause" : "play"} />
          </button>
        )}
      </div>
      {failed && (
        <p className="player-error">
          The video host is unavailable.{" "}
          <External href={`https://www.youtube.com/watch?v=${project.youtube}`}>
            Watch on YouTube
          </External>
        </p>
      )}
    </div>
  );
}

function ProjectStage({ onOpen }) {
  const [selected, setSelected] = useState(PROJECTS[0].id);
  const [direction, setDirection] = useState(1);
  const chooseProject = (id) => {
    setDirection(
      PROJECTS.findIndex((p) => p.id === id) >=
        PROJECTS.findIndex((p) => p.id === selected)
        ? 1
        : -1,
    );
    setSelected(id);
  };
  const project = PROJECTS.find((item) => item.id === selected);
  const openCase = () =>
    onOpen({ kind: "preview", item: project, onFinish: chooseProject });
  return (
    <section className="section-space work-section" id="work">
      <div className="shell">
        <SectionHead eyebrow="Selected work" title="Selected projects.">
          <p>
            Explore the build, the decisions,
            <br />
            and my part in making it happen.
          </p>
        </SectionHead>
        <div className="project-layout">
          <div
            className="project-index"
            role="group"
            aria-label="Choose a project"
          >
            {PROJECTS.map((item) => (
              <button
                key={item.id}
                aria-pressed={selected === item.id}
                onClick={() => chooseProject(item.id)}
              >
                <span className="project-index-icon">
                  <Icon name={item.icon} />
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.label}</small>
                </span>
                <Icon name="arrow" />
              </button>
            ))}
            <External className="index-source" href={PROFILE.github}>
              More on GitHub
            </External>
          </div>
          <div
            className="project-view"
            style={{ "--app-direction": direction }}
          >
            <div className="tablet-stage">
              <div className="tablet-frame">
                <span className="tablet-camera" aria-hidden="true" />
                <div className="tablet-viewport">
                  <div className="tablet-app" key={project.id}>
                    <div className="project-media">
                      {project.hasVideo ? (
                        <ProjectVideo
                          project={project}
                          onSmallScreen={() =>
                            onOpen({
                              kind: "film",
                              item: project,
                              title: `${project.name} walkthrough`,
                            })
                          }
                        />
                      ) : (
                        <button
                          className="project-concept"
                          onClick={openCase}
                          aria-label={`Explore ${project.name}`}
                        >
                          <ProjectCover project={project} />
                          <span>
                            Explore the project <Icon name="arrow" />
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <p className="tablet-caption">
                {project.hasVideo
                  ? "Project walkthrough · play at your pace"
                  : "Project overview · explore the build"}
              </p>
            </div>
            <div className="project-info" key={project.id}>
              <p className="eyebrow">{project.label}</p>
              <h3>{project.headline}</h3>
              <p>{project.description}</p>
              <div className="project-role">
                <span>My contribution</span>
                <p>{project.contribution}</p>
              </div>
              <div className="tag-list">
                {project.stack.slice(0, 5).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <button className="button primary" onClick={openCase}>
                  Inside the project <Icon name="plus" />
                </button>
                {project.url && (
                  <External className="text-link" href={project.url}>
                    Visit website
                  </External>
                )}
                <External className="text-link" href={project.repo}>
                  Source code
                </External>
              </div>
            </div>
          </div>
        </div>
        <details className="repository-collection">
          <summary>
            More things I’ve built.
            <Icon name="plus" />
          </summary>
          <div className="repository-grid">
            {MORE_WORK.map(([name, description, repo, icon]) => (
              <External
                href={`https://github.com/Its-AtharvDeshmukh/${repo}`}
                key={repo}
              >
                <Icon name={icon} />
                <span>
                  <strong>{name}</strong>
                  <small>{description}</small>
                </span>
              </External>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

function Approach({ onOpen }) {
  const [selected, setSelected] = useState(0);
  const steps = [
    {
      name: "Understand",
      title: "A real problem comes first.",
      text: "Before choosing the tools, I look at who needs the product, what they are trying to do, and where the experience gets in their way.",
      example:
        "HealthOrbit: bring scattered health information into one connected place.",
      code: [
        "const brief = {",
        '  person: "The one using it",',
        '  friction: "What gets in the way?",',
        '  goal: "A clearer next step"',
        "};",
      ],
      icon: "people",
    },
    {
      name: "Design",
      title: "Make the next step feel clear.",
      text: "I turn the problem into a useful flow, with clear actions, readable layouts, and feedback that works across screen sizes.",
      example:
        "Roavista: move from discovering a stay to understanding a listing.",
      code: [
        "const interfacePlan = {",
        '  actions: "Clear and purposeful",',
        '  layout: "Phone → desktop",',
        '  feedback: "Every state matters"',
        "};",
      ],
      icon: "react",
    },
    {
      name: "Connect",
      title: "Make the pieces work together.",
      text: "I connect the interface to APIs, authentication, and data. When AI is useful, I shape the prompt, context, and output around the task.",
      example:
        "MeshFlow X: route dependent tasks through a connected AI workflow.",
      code: [
        "const experience = connect({",
        '  interface: "What people use",',
        '  api: "Logic and authentication",',
        '  data: "Context that belongs",',
        "});",
      ],
      icon: "mesh",
    },
    {
      name: "Refine",
      title: "The details are part of the build.",
      text: "I revisit the full journey: small screens, loading states, empty screens, and the details that help the product feel considered.",
      example: "Each project is a chance to improve the next version.",
      code: [
        "const nextVersion = refine({",
        '  layout: "Check every screen",',
        '  journey: "Try the full flow",',
        '  details: "Keep improving"',
        "});",
      ],
      icon: "check",
    },
  ];
  const step = steps[selected];
  return (
    <section className="section-space build-section" id="approach">
      <AmbientField variant="build-graph" />
      <div className="shell">
        <SectionHead
          eyebrow="How I build"
          title={
            <>
              Small decisions.<span>A better whole.</span>
            </>
          }
        >
          <p>
            Understand the problem. Shape the interface.
            <br />
            Connect the systems. Keep improving.
          </p>
        </SectionHead>
        <div className="process-studio" data-reveal>
          <div
            className="process-sequence"
            role="group"
            aria-label="Explore the build process"
          >
            {steps.map((s, i) => (
              <button
                key={s.name}
                aria-pressed={selected === i}
                onClick={() => setSelected(i)}
              >
                <span className="process-step-icon">
                  <Icon name={s.icon} />
                </span>
                <span>
                  <small>{s.name}</small>
                  <strong>{s.title}</strong>
                </span>
                <Icon name="arrow" />
              </button>
            ))}
          </div>
          <div className="process-editor">
            <div
              className="process-layers"
              data-step={selected}
              aria-hidden="true"
            >
              <span className="layer-connector" />
              {[
                ["Interface", "Clear actions, considered details", "react"],
                ["Application", "Logic, authentication, workflows", "braces"],
                [
                  "Data & context",
                  "Useful information, connected safely",
                  "mesh",
                ],
              ].map(([title, subtitle, icon], i) => (
                <div
                  className={`process-layer layer-${i} ${selected === 0 || selected === 3 || (selected === 1 && i === 0) || (selected === 2 && i > 0) ? "layer-active" : ""}`}
                  key={title}
                >
                  <Icon name={selected === 3 ? "check" : icon} />
                  <span>
                    <strong>{title}</strong>
                    <small>{subtitle}</small>
                  </span>
                  <i />
                </div>
              ))}
            </div>
            <div className="process-detail" key={selected}>
              <p>{step.text}</p>
              <div className="build-code">
                <div>
                  <Icon name="braces" />
                  <span>Thinking in code</span>
                  <small>Illustrative sketch</small>
                </div>
                <pre>
                  <code>
                    {step.code.map((line, i) => (
                      <span key={i} style={{ "--line-delay": `${i * 0.06}s` }}>
                        <i aria-hidden="true">{i + 1}</i>
                        {line}
                        {i === step.code.length - 1 && (
                          <b className="code-caret">▍</b>
                        )}
                      </span>
                    ))}
                  </code>
                </pre>
              </div>
              <p className="process-example">{step.example}</p>
              <button
                className="text-link"
                onClick={() =>
                  onOpen({ kind: "capability", item: CAPABILITIES[selected] })
                }
              >
                Explore this part <Icon name="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [selected, setSelected] = useState(0),
    item = TOOLS[selected];
  return (
    <section className="skills-section section-space" id="skills">
      <div className="shell">
        <div className="skill-universe" data-reveal>
          <div className="skill-field-grid" aria-hidden="true" />
          <div className="skill-intro">
            <p className="eyebrow">Better together</p>
            <h2>
              The right tools.
              <br />
              <span>Working in concert.</span>
            </h2>
            <p className="skill-description" aria-live="polite" key={selected}>
              {item.text}
            </p>
            <span className="skill-selected">
              <Icon name={item.icon} />
              {item.name}
            </span>
            <small>Select an icon. Explore its part in the picture.</small>
          </div>
          <div className="skill-satellites" aria-label="Explore technologies">
            {TOOLS.map((tool, i) => {
              const [x, y, size, rotate] = TOOL_POSITIONS[i];
              const mobile = [
                [12, 10],
                [50, 5],
                [88, 10],
                [10, 34],
                [90, 34],
                [8, 62],
                [92, 62],
                [14, 88],
                [50, 94],
                [86, 88],
              ][i] || [0, 0];
              return (
                <button
                  key={tool.name}
                  className={`skill-satellite satellite-${i}`}
                  aria-label={`Explore ${tool.name}`}
                  aria-pressed={selected === i}
                  onClick={() => setSelected(i)}
                  style={{
                    "--mx": `${mobile[0]}%`,
                    "--my": `${mobile[1] * 4.7}px`,
                    "--mobile-launch-x": `${(50 - mobile[0]) * 3}px`,
                    "--mobile-launch-y": `${235 - mobile[1] * 4.7}px`,
                    "--x": `${x}%`,
                    "--y": `${y}%`,
                    "--size": `${size}px`,
                    "--rotate": `${rotate}deg`,
                    "--skill-color": tool.color,
                    "--depth": size < 52 ? 0.78 : 1,
                    "--drift-delay": `${-i * 0.7}s`,
                    "--launch-x": `${50 - x}cqw`,
                    "--launch-y": `${50 - y}cqh`,
                    "--land-delay": `${(i % 7) * 0.045}s`,
                    "--drift-duration": `${6 + (i % 5)}s`,
                  }}
                >
                  <span className="satellite-face">
                    {tool.brand && media(`icons/${tool.brand}.svg`) ? (
                      <img
                        src={media(`icons/${tool.brand}.svg`)}
                        alt=""
                        loading="lazy"
                      />
                    ) : (
                      <Icon name={tool.icon} />
                    )}
                  </span>
                  <span>{tool.name}</span>
                </button>
              );
            })}
          </div>
        </div>
        <p className="toolkit-footnote">
          Interfaces. Backends. Android. AI integrations. The tools change. The
          care stays.
        </p>
      </div>
    </section>
  );
}
function Credentials({ onOpen }) {
  const [filter, setFilter] = useState("All");
  const rail = useRail();
  const items = [
    ...CREDENTIALS,
    {
      id: "publication",
      title: "HealthOrbit · Published research",
      issuer: "IJRASET",
      date: "September 2026",
      type: "Research",
      icon: "document",
      file: "healthorbit-paper.png",
      isPaper: true,
      text: "Published HealthOrbit research paper. This is the article preview; a separate publication certificate has not been supplied.",
    },
  ];
  const visible = items.filter(
    (item) => filter === "All" || item.type === filter,
  );
  useEffect(() => {
    rail.ref.current?.scrollTo({ left: 0 });
    rail.update();
  }, [filter]);
  return (
    <section className="credentials-section section-space" id="credentials">
      <div className="shell">
        <SectionHead
          eyebrow="Learning, made visible"
          title={<>Proof of the process.</>}
        >
          <p>
            Coursework. Hackathons. Research.
            <br />
            Each one, a reason to keep going.
          </p>
        </SectionHead>
        <div className="credentials-top">
          <div className="segmented-control" aria-label="Filter credentials">
            {["All", "Course", "Hackathon", "Research"].map((type) => (
              <button
                key={type}
                aria-pressed={type === filter}
                onClick={() => setFilter(type)}
              >
                {type === "Course"
                  ? "Courses"
                  : type === "Hackathon"
                    ? "Hackathons"
                    : type}
              </button>
            ))}
          </div>
          <span>
            {visible.length} {visible.length === 1 ? "record" : "records"}
          </span>
        </div>
        <div
          className="credential-track"
          data-reveal
          ref={rail.ref}
          onScroll={rail.update}
        >
          {visible.map((item, i) => (
            <article
              className={`credential-card credential-${item.id}`}
              key={item.id}
            >
              <button
                className="certificate-visual"
                aria-label={`View ${item.title} ${item.isPaper ? "article" : "certificate"}`}
                onClick={() => onOpen({ kind: "credential", item })}
              >
                {media(
                  `${item.isPaper ? "images" : "certificates"}/${item.file}`,
                ) ? (
                  <div
                    className={`certificate-image-wrap ${item.rotated ? "scan-rotated" : ""}`}
                  >
                    <img
                      src={media(
                        `${item.isPaper ? "images" : "certificates"}/${item.file}`,
                      )}
                      alt={`${item.title} ${item.type === "Research" ? "article preview" : "certificate scan"}`}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="certificate-placeholder">
                    <div className="certificate-ribbon" />
                    <div className="certificate-glass">
                      <Icon name={item.icon} />
                      <span>CERTIFICATE IMAGE SPACE</span>
                      <strong>{item.title}</strong>
                      <small>{item.issuer}</small>
                      <code>{item.file}</code>
                    </div>
                  </div>
                )}
                <span className="round-action">
                  <Icon name="expand" />
                </span>
              </button>
              <div className="credential-copy">
                <span>
                  {item.type} · {item.date}
                </span>
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
              </div>
            </article>
          ))}
        </div>
        <RailControls
          rail={rail}
          label="Open a record to view its scan and details."
        />
      </div>
    </section>
  );
}
function Photos({ onOpen }) {
  return (
    <section className="section-space photos-section" id="photos">
      <div className="shell">
        <SectionHead
          eyebrow="Beyond the commits"
          title={
            <>
              Outside the editor.<span>Still building.</span>
            </>
          }
        >
          <p>
            A few moments with the people
            <br />
            and projects behind the work.
          </p>
        </SectionHead>
        <div className="moments-layout">
          {PHOTOS.map((photo, i) => (
            <button
              key={photo.id}
              className={`moment ${i === 0 ? "moment-lead" : ""}`}
              data-reveal
              onClick={() =>
                onOpen({ kind: "photo", item: photo, title: photo.title })
              }
              aria-label={`View ${photo.label}`}
            >
              <span className="moment-photo">
                <img
                  src={media(`images/${photo.file}`)}
                  alt={photo.label}
                  loading="lazy"
                />
              </span>
              <span className="moment-copy">
                <strong>{photo.title}</strong>
                <small>
                  {
                    [
                      "Learning and building with classmates.",
                      "HealthOrbit, shared beyond the classroom.",
                      "An idea, a laptop, and the next version.",
                      "Making time for the details.",
                    ][i]
                  }
                </small>
                <Icon name="expand" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false),
    timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      clearTimeout(timer.current);
      setCopied(true);
      timer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };
  return (
    <section className="contact-section" id="contact">
      <AmbientField variant="contact-graph" />
      <div className="shell">
        <div className="contact-top" data-reveal>
          <div>
            <p className="eyebrow">Let’s connect</p>
            <h2>
              Have something in mind?
              <br />
              <span>Let’s make it work.</span>
            </h2>
          </div>
          <div className="contact-invitation">
            <p>
              A role, a collaboration, or a conversation about a build. I’d be
              glad to hear from you.
            </p>
            <a
              className="button contact-button"
              href={`mailto:${PROFILE.email}`}
            >
              <Icon name="mail" /> Send me an email <Icon name="external" />
            </a>
            <div className="contact-address">
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              <button
                onClick={copy}
                aria-label="Copy email address"
                aria-live="polite"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>
        <div className="contact-profiles" data-reveal>
          {[
            ...PROFILES.slice(0, 3),
            {
              id: "instagram",
              name: "Instagram",
              icon: "instagram",
              url: PROFILE.instagram,
            },
          ].map((profile) => (
            <External key={profile.id} href={profile.url}>
              <Icon name={profile.icon} />
              <strong>{profile.name}</strong>
              <span className="contact-profile-arrow">
                <Icon name="arrow" />
              </span>
            </External>
          ))}
        </div>
        <div className="contact-bottom">
          <External href={PROFILE.resume}>View résumé</External>
          <a href={`tel:${PROFILE.phone}`}>
            <Icon name="phone" /> +91 70580 46311
          </a>
          <External href="https://wa.me/917058046311">
            Message on WhatsApp
          </External>
          <span>
            <Icon name="location" /> Nagpur, India
          </span>
        </div>
        {PROFILES.slice(3).some((p) => p.url) && (
          <div className="contact-portals">
            {PROFILES.slice(3)
              .filter((p) => p.url)
              .map((p) => (
                <External key={p.id} href={p.url}>
                  {p.name}
                </External>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

function PortfolioGuide() {
  const [open, setOpen] = useState(false),
    [topic, setTopic] = useState(0),
    trigger = useRef(null);
  const topics = [
    [
      "What do you build?",
      "Full-stack web products, backend workflows, and AI-integrated experiences. HealthOrbit, MeshFlow X, Roavista, and TravelBharat each explore a different problem.",
      "Explore projects",
      "work",
    ],
    [
      "What is the research about?",
      "The HealthOrbit paper documents a modular health-information architecture, medical-document processing, and a framework for context-aware assistance.",
      "See the publication",
      "research",
    ],
    [
      "What are you learning?",
      "Computer Engineering, full-stack development, Android integration, and data structures and algorithms in Java.",
      "Explore the toolkit",
      "skills",
    ],
    [
      "How can we connect?",
      "Email, LinkedIn, GitHub, Instagram, and WhatsApp are available in Contact. You can also view the full résumé.",
      "Let’s connect",
      "contact",
    ],
  ];
  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <div className="portfolio-guide">
      {open && (
        <section
          className="guide-panel"
          role="dialog"
          aria-label="Portfolio guide"
        >
          <div className="guide-panel-header">
            <span className="guide-mini-orb">
              ai<span>.</span>
            </span>
            <div>
              <strong>Portfolio guide</strong>
              <small>Quick answers from the portfolio.</small>
            </div>
            <button
              className="round-button"
              aria-label="Close portfolio guide"
              onClick={() => {
                setOpen(false);
                trigger.current?.focus();
              }}
            >
              <Icon name="close" />
            </button>
          </div>
          <div className="guide-topics" aria-label="Choose a question">
            {topics.map(([question], i) => (
              <button
                key={question}
                aria-pressed={topic === i}
                onClick={() => setTopic(i)}
              >
                {question}
              </button>
            ))}
          </div>
          <div className="guide-answer" key={topic} aria-live="polite">
            <p>{topics[topic][1]}</p>
            <a
              href={`#${topics[topic][3]}`}
              className="text-link"
              onClick={() => setOpen(false)}
            >
              {topics[topic][2]}
              <Icon name="arrow" />
            </a>
          </div>
        </section>
      )}
      <button
        ref={trigger}
        className="ai-guide-trigger"
        aria-label={open ? "Close portfolio guide" : "Open portfolio guide"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span>
          {open ? (
            <Icon name="close" />
          ) : (
            <>
              ai<i>.</i>
            </>
          )}
        </span>
      </button>
    </div>
  );
}
function ProjectCaseStudy({ project, onChoose }) {
  const index = PROJECTS.indexOf(project),
    next = PROJECTS[(index + 1) % PROJECTS.length];
  return (
    <div className="case-study" style={{ "--project-color": project.color }}>
      <div className="case-actions">
        {project.url && (
          <External className="button primary" href={project.url}>
            Open full website
          </External>
        )}
        <External className="button secondary" href={project.repo}>
          View source code
        </External>
        {project.youtube && (
          <External
            className="text-link"
            href={`https://www.youtube.com/watch?v=${project.youtube}`}
          >
            Watch on YouTube
          </External>
        )}
      </div>
      {project.hasVideo ? (
        <div className="case-video">
          <ProjectVideo key={project.id} project={project} />
        </div>
      ) : (
        <div className="case-illustration">
          <ProjectArtwork project={project} />
          <span>Illustrated project concept · {project.name}</span>
        </div>
      )}
      <div className="case-introduction">
        <div>
          <p className="case-headline">{project.headline}</p>
          <p>{project.detail}</p>
        </div>
        <dl>
          <div>
            <dt>Focus</dt>
            <dd>{project.label}</dd>
          </div>
          <div>
            <dt>My contribution</dt>
            <dd>{project.contribution}</dd>
          </div>
          <div>
            <dt>Project context</dt>
            <dd>{project.year}</dd>
          </div>
        </dl>
      </div>
      <div className="case-highlights">
        <div>
          <p className="eyebrow">What makes it work</p>
          <h3>The important details.</h3>
        </div>
        <ul>
          {project.points.map((point, i) => (
            <li key={point}>
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="case-stack">
        <span>Built with</span>
        <div className="tag-list">
          {project.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <details className="case-deck">
        <summary>
          Project presentation <Icon name="presentation" />
        </summary>
        {media(`presentations/${project.id}-presentation.pdf`) ? (
          <External
            className="text-link"
            href={media(`presentations/${project.id}-presentation.pdf`)}
          >
            View PDF slides
          </External>
        ) : media(`presentations/${project.id}-presentation.pptx`) ? null : (
          <Placeholder
            label={`${project.name} presentation`}
            file={`presentations/${project.id}-presentation.pdf`}
            size="PDF or PPTX · Add your project slides"
            icon="presentation"
          />
        )}
        {media(`presentations/${project.id}-presentation.pptx`) && (
          <a
            className="text-link"
            href={media(`presentations/${project.id}-presentation.pptx`)}
            download
          >
            Download PowerPoint
          </a>
        )}
      </details>
      <button className="case-next" onClick={() => onChoose(next.id)}>
        <span>
          Next project<strong>{next.name}</strong>
        </span>
        <Icon name="arrow" />
      </button>
    </div>
  );
}

function Modal({ content, onClose }) {
  const ref = useRef(null),
    id = useId();
  const [selected, setSelected] = useState(content.item?.id || "healthorbit"),
    [copied, setCopied] = useState(false);
  const item = content.item,
    project = PROJECTS.find((p) => p.id === selected) || PROJECTS[0];
  const title =
    content.kind === "preview" || content.kind === "project"
      ? project.name
      : content.kind === "paper"
        ? "Published thinking."
        : content.title || item?.name || item?.title;
  useEffect(() => {
    const dialog = ref.current,
      previous = document.activeElement,
      overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      previous?.focus?.({ preventScroll: true });
    };
  }, [content]);
  const filmPath =
    content.kind === "intro"
      ? media("videos/personal-introduction.mp4")
        ? "videos/personal-introduction.mp4"
        : "videos/portfolio-film.mp4"
      : `videos/${item?.id}-demo.mp4`;
  const film = media(filmPath);
  const dismiss = () => {
    if (content.kind === "preview" || content.kind === "project")
      content.onFinish?.(selected);
    onClose();
  };
  const cite = async () => {
    try {
      await navigator.clipboard.writeText(
        `${PAPER.authors.join(", ")}. (2026). ${PAPER.title}. ${PAPER.journal}, 14(IX), ${PAPER.pages}. https://doi.org/${PAPER.doi}`,
      );
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };
  return (
    <dialog
      ref={ref}
      className={`detail-dialog ${content.kind === "preview" || content.kind === "project" ? "case-dialog" : content.kind === "intro" ? "intro-dialog" : ""}`}
      aria-labelledby={id}
      onCancel={(e) => {
        e.preventDefault();
        dismiss();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          const r = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            dismiss();
        }
      }}
    >
      <button
        className="round-button dialog-close"
        aria-label="Close dialog"
        onClick={dismiss}
        autoFocus
      >
        <Icon name="close" />
      </button>
      <div className="dialog-body">
        <p className="eyebrow">
          {content.kind === "preview" || content.kind === "project"
            ? "Project case study"
            : content.kind === "paper"
              ? "Research"
              : content.kind === "credential"
                ? item.type
                : "A closer look"}
        </p>
        <h2 id={id} tabIndex="-1">
          {title}
        </h2>
        {(content.kind === "preview" || content.kind === "project") && (
          <ProjectCaseStudy
            project={project}
            onChoose={(nextId) => {
              setSelected(nextId);
              ref.current?.scrollTo({ top: 0, behavior: "auto" });
              document.getElementById(id)?.focus({ preventScroll: true });
            }}
          />
        )}
        {content.kind === "capability" && (
          <>
            <img
              className="capability-dialog-image"
              src={media(`illustrations/${item.file}`)}
              alt="Development capability illustration"
            />
            <p className="dialog-lead">{item.title}</p>
            <p>{item.body}</p>
            <a
              className="text-link"
              href={item.project ? "#work" : "#skills"}
              onClick={dismiss}
            >
              Explore a little further
              <Icon name="arrow" />
            </a>
          </>
        )}
        {(content.kind === "intro" || content.kind === "film") && (
          <>
            {content.kind === "intro" && (
              <p className="dialog-lead">
                Full-stack developer. AI builder. Prompt engineer.
              </p>
            )}
            {content.kind === "film" && item.youtube ? (
              <div className="film-player">
                <ProjectVideo project={item} autoplay />
              </div>
            ) : film ? (
              <div className="film-player">
                <CleanVideo
                  src={film}
                  poster={media("images/personal-introduction-poster.jpg")}
                  title={
                    content.kind === "intro"
                      ? "Atharv’s introduction"
                      : `${item.name} walkthrough`
                  }
                  autoplay
                />
              </div>
            ) : (
              <Placeholder
                label="Personal introduction video"
                file={filmPath}
                size="1920 × 1080 · MP4"
                icon="play"
              />
            )}
            <p>
              {content.kind === "intro"
                ? "A personal introduction to my work, interests, and approach to building."
                : `${item.name}: the project walkthrough, in my own words.`}
            </p>
            {!film && !(content.kind === "film" && item.youtube) && (
              <p className="dialog-note">
                Add this named file under src/assets when your video is ready.
              </p>
            )}
          </>
        )}
        {content.kind === "credential" && (
          <>
            {media(
              `${item.isPaper ? "images" : "certificates"}/${item.file}`,
            ) ? (
              <div
                className={`certificate-image-wrap certificate-full ${item.rotated ? "scan-rotated" : ""}`}
              >
                <img
                  src={media(
                    `${item.isPaper ? "images" : "certificates"}/${item.file}`,
                  )}
                  alt={`${item.title} ${item.isPaper ? "article preview" : "certificate"}`}
                />
              </div>
            ) : (
              <Placeholder
                label={`${item.title} certificate image`}
                file={`certificates/${item.file}`}
                size="2000 × 1414 px · original scan"
                icon={item.icon}
              />
            )}
            <p className="dialog-lead">{item.issuer}</p>
            <p>{item.date}</p>
            <p>{item.text}</p>
            {item.document && (
              <External
                className="button primary"
                href={media(`certificates/${item.document}`)}
              >
                Open original certificate PDF
              </External>
            )}
            {item.id === "college" && (
              <External
                className="text-link"
                href={media(`certificates/${item.file}`)}
              >
                Open original scan
              </External>
            )}
            {item.id === "publication" && (
              <External
                className="button primary"
                href={
                  media("documents/healthorbit-research-paper.pdf") || PAPER.url
                }
              >
                Read the published paper
              </External>
            )}
          </>
        )}
        {content.kind === "paper" && (
          <>
            <p className="paper-full-title">{PAPER.title}</p>
            <p className="authors">{PAPER.authors.join(" · ")}</p>
            <p>
              {PAPER.journal}
              <br />
              {PAPER.issue}
              <br />
              Pages {PAPER.pages} · {PAPER.id}
            </p>
            <p>
              The paper documents the project architecture and
              medical-document/OCR pathway, and describes a framework for
              contextual AI assistance. The project continues to evolve beyond
              the publication.
            </p>
            <div className="dialog-actions">
              <External
                className="button primary"
                href={
                  media("documents/healthorbit-research-paper.pdf") || PAPER.url
                }
              >
                Read the paper
              </External>
              <External
                className="text-link"
                href={`https://doi.org/${PAPER.doi}`}
              >
                Open DOI
              </External>
            </div>
            <button
              className="text-link citation-button"
              onClick={cite}
              aria-live="polite"
            >
              {copied ? "Citation copied" : "Copy citation"}
              <Icon name={copied ? "check" : "document"} />
            </button>
          </>
        )}
        {content.kind === "photo" && (
          <>
            {media(`images/${item.file}`) ? (
              <img
                className="photo-full"
                src={media(`images/${item.file}`)}
                alt={item.label}
              />
            ) : (
              <Placeholder
                label={item.label}
                file={`images/${item.file}`}
                size={item.size}
                icon={item.icon}
              />
            )}
          </>
        )}
        {content.kind === "asset" && (
          <>
            <Placeholder
              label={content.title}
              file={content.path}
              size={content.size}
              icon={content.icon}
            />
            <p>
              Place this file under <code>src/assets/{content.path}</code>.
            </p>
            {content.alternative && (
              <p>
                PowerPoint option: <code>src/assets/{content.alternative}</code>
                .
              </p>
            )}
            <p className="dialog-note">
              Use the exact filename, then rebuild. Your file automatically
              replaces this space.
            </p>
          </>
        )}
        {content.kind === "profile" && (
          <>
            <span className="profile-modal-icon">
              <Icon name="people" />
            </span>
            <p className="dialog-lead">A professional connection, soon.</p>
            <p>The public {content.title} profile link will be added here.</p>
            <External className="text-link" href={PROFILE.linkedin}>
              Connect on LinkedIn
            </External>
          </>
        )}
      </div>
    </dialog>
  );
}
export default function App() {
  const motion = useMotionPreference(),
    root = useRef(null);
  const [modal, setModal] = useState(null),
    [appearance, setAppearance] = useState("studio");
  useReveal(root, motion.enabled);
  useSectionNavigation(root, motion.enabled);
  useEffect(() => {
    const sections = root.current?.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.target.classList.toggle("scene-active", entry.isIntersecting),
        ),
      { rootMargin: "80px" },
    );
    sections?.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    try {
      const value = localStorage.getItem("atharv-appearance");
      if (value === "midnight") setAppearance(value);
    } catch {}
  }, []);
  const toggleAppearance = () => {
    const next = appearance === "studio" ? "midnight" : "studio";
    setAppearance(next);
    try {
      localStorage.setItem("atharv-appearance", next);
    } catch {}
  };
  return (
    <Motion.Provider value={{ ...motion, modalOpen: !!modal }}>
      <div
        className={`portfolio ${motion.enabled ? "motion-on" : "motion-off"}`}
        data-appearance={appearance}
        ref={root}
      >
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header appearance={appearance} onAppearance={toggleAppearance} />
        <main id="main" tabIndex="-1">
          <Hero onOpen={setModal} />
          <ProjectStage onOpen={setModal} />
          <Approach onOpen={setModal} />
          <Skills />
          <Research onOpen={setModal} />
          <Credentials onOpen={setModal} />
          <About />
          <Photos onOpen={setModal} />
          <Contact />
        </main>
        <footer className="site-footer">
          <div className="shell">
            <a href="#main" aria-label="Back to the top">
              <Brand />
            </a>
            <p>
              © {new Date().getFullYear()} · Design with intent. Build with
              care.
            </p>
            <button
              className="motion-toggle"
              aria-pressed={motion.paused}
              disabled={motion.reduced}
              onClick={() => motion.setPaused(!motion.paused)}
            >
              <Icon name={motion.enabled ? "pause" : "play"} />
              {motion.reduced
                ? "Reduced motion active"
                : motion.paused
                  ? "Resume animations"
                  : "Pause animations"}
            </button>
          </div>
        </footer>
        <PortfolioGuide />
        {modal && (
          <Modal
            key={`${modal.kind}-${modal.item?.id || modal.title || "detail"}`}
            content={modal}
            onClose={() => setModal(null)}
          />
        )}
      </div>
    </Motion.Provider>
  );
}
