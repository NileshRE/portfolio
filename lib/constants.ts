import CouseraLogo from "@/assets/images/coursera.png";
import NamasteDevLogo from "@/assets/images/namastedev.png";

const heroSectionData = {
  highlightedText: "Frontend Developer with 3.5+ years",
  description:
    "of experience building scalable, high-performance web applications using React.js and Next.js. I specialize in SSR/SSG, state management, responsive UI, and performance optimization, and have delivered projects handling large datasets, AI-driven features, dashboards, and secure payment workflows. I focus on creating user-friendly, maintainable, and efficient frontends that solve real-world problems.",
};
const projects = [
  {
    title: "Trading With Vivek",
    description: [
      "Integrated Razorpay Payment Gateway with secure subscription workflows and webhook handling to improve payment reliability.",
      "Rebuilt the platform using Next.js SSR with code-splitting, server API calls, image optimization, and request minimization, achieving 25% faster loads and a 12% higher Lighthouse performance score.",
      "Implemented a custom PDF renderer using react-pdf with buffer streaming, keyboard accessibility support (Esc, arrows, zoom) and legacy browser compatibility fixes.",
      "Engineered a community module with CRUD operations, optimistic UI updates for like feature, API throttling, and a responsive 4*4 image gallery with modal preview.",
      "Designed secure authentication with single-session enforcement and integrated Sentry monitoring for real-time error tracking",
    ],
    image: "/placeholder.svg?height=300&width=500",
    technologies: [
      "Next-15",
      "TypeScript",
      "RazorPay",
      "Sentry",
      "Accessibility",
    ],
    featured: false,
    live: "https://tradingwithvivek.com/",
  },
  {
    title: "Salesright.ai",
    description: [
      "Efficiently rendered large datasets (25–30k rows, 200 rows per page) using virtualization techniques to ensure smooth performance. Optimized re-renders with useMemo and useCallback for improved efficiency.",
      "Implemented role-based access control using Next.js middleware, intercepting routing requests to redirect users based on their roles.",
      "Built a feature to auto-check or disable item checkboxes based on valid input, with real-time toast notifications for errors or validation feedback.",
      "Developed advanced table filtering functionality with 9–10 filters, leveraging URL search params for seamless filter state management and sharing.",
      "Created dynamic data visualizations using Recharts, displaying performance insights based on salesperson and customer data.",
      "Built a chatbot using Google Dialogflow CX supporting multi-language, form-rendering, clickable chips, and custom payloads using vanilla JS.",
    ],
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Tailwind CSS", "AntDesign", "Recharts"],
    featured: false,
    live: "https://scuderiacarparts.salesright.ai",
  },
  {
    title: "AI Agents based Consultancy App",
    description: [
      "Designed and developed scalable Super Admin, Admin, and User panel UIs from scratch using ShadCN and Tailwind CSS within a Monorepo architecture, enabling efficient code sharing, modular development, and unified dependency management across multiple apps.",
      "Implemented AI-driven features, including real-time streamed responses from the GPT model and custom AI-generated responses from user-uploaded PDFs.",
      "Enabled AI-based data visualization by dynamically generating graphs from extracted data in uploaded CSVs and documents.",
      "Integrated APIs for authentication, data extraction with Airbyte, and vector database queries.",
      "Developed BFF (Backend-for-Frontend) layer for rendering dynamic forms, improving performance and separation of concerns between frontend and backend.",
      "AI agents based consultancy web app which offers comprehensive admin dashboard for managing business, website and analytics with real-time data visualization.",
    ],
    image: "/placeholder.svg?height=300&width=500",
    technologies: [
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "Shadcn/ui",
      "Chart.js",
    ],
    featured: false,
  },
  {
    title: "Calendly like Appointment App",
    description: [
      "Designed and built intuitive interfaces for both admin and user-facing applications, enabling smooth management of services, availability, and bookings, ensuring a seamless user experience.",
      "Implemented features allowing admins to set multiple time slots for services, manage availability, and dynamically edit, add, or delete time ranges, providing flexible scheduling options.",
      "Utilized Axios Interceptor for centralized API call management and error handling.",
      "Used React Portal and React Query to manage loading and error states in UI.",
      "Enhanced security with Google Captcha and handled edge cases like token changed or expire in authentication.",
    ],
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Vite", "Axios", "Context", "Formik", "Bootstrap"],
    featured: false,
  },
  {
    title: "Moving Frames",
    description: [
      "Developed a YouTube Clone featuring a video list with live chat and a real-time comment feature.",
      "Implemented Debouncing and Auto-suggest in the Search Bar to optimize API calls, enhancing the user experience.",
      "Integrated Dark and Light modes, live-chat functionality, and real-time comments using the Redux store.",
      "Acquired knowledge of Web sockets & API Polling and successfully implemented a fully optimized live chat system along with other components.",
      "Youtube clone with real-time trending videos, light-dark mode and nested-comment feature.",
    ],
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Javascript", "React", "React Hooks", "Redux"],
    github: "https://github.com/NileshRE/fimvideoapp",
    live: "https://movingframes.netlify.app/",
    featured: false,
    personal: true,
  },
];

const skills = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "Angular", level: 50, category: "Frontend" },
  { name: "Redux", level: 80, category: "State Management" },
  { name: "Zustand", level: 75, category: "State Management" },
  { name: "Tailwind CSS", level: 95, category: "Styling" },
  { name: "Shadcn/UI", level: 90, category: "UI Library" },
  { name: "Ant Design", level: 85, category: "UI Library" },
  { name: "Supabase", level: 80, category: "Backend" },
  { name: "Git", level: 75, category: "Tools" },
  { name: "Jest (Unit Testing)", level: 70, category: "Tools" },
  { name: "TypeScript", level: 70, category: "Language" },
  { name: "React Native", level: 60, category: "App" },
];

const experience = [
  {
    title: "Software Development Engineer (SDE) - 1",
    company: "X-35 Innovation Studio Pvt. Ltd.",
    period: "Feb 2026 - Present",
    location: "Noida, Uttar Pradesh, India",
    description: [
      "Working on lending platform with multi-step onboarding for suppliers and borrowers.",
      "Architected a low-code cross-platform SDK configuration system that exports Android resource files (colors, dimens, booleans, strings) and iOS plist configurations, with validation, live preview, and platform consistency checks to streamline SDK customization and reduce integration effort.",
      "Built an Angular-based workflow editor using JointJS for drag-and-drop workflow creation and editing.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Squareboat",
    period: "Apr 2024 - Jan 2026",
    location: "Gurugram, Haryana, India",
    description: [
      "Owned end-to-end development of multiple Next.js applications, delivering complex UI features and third-party integrations with a strong focus on performance, scalability, and maintainability.",
      "Improved page load performance by 25% and Core Web Vitals by 12% through SSR/SSG, code-splitting, image optimization, and memoization.",
      "Built secure subscription and authentication flows with Razorpay, single-session enforcement, and production monitoring using Sentry.",
      "Optimized rendering of large datasets (25–30k rows) using virtualization and pagination, reducing render timeby 40%.",
      "Built and maintained internationalized interfaces, including right-to-left (RTL) support for Arabic, handling layout direction, component mirroring, and localization edge cases in Next.js.",
      "Implemented role-based access control and middleware-driven routing with real-time validations for multi-role platforms.",
      "Developed advanced dashboards and data tables with URL-synced filters and Recharts visualizations for actionable insights.",
      "Designed and delivered admin panels (Super Admin/Admin/User) using Shadcn UI, Tailwind, and a Monorepo architecture, improving team productivity by 30%.",
      "Built AI-driven features including streamed GPT responses, PDF-based insights, vector DB queries, and dynamic graph generation from documents.",
      "Implemented a Backend-for-Frontend (BFF) layer to render dynamic forms and reduce API payload size by 20%",
      "Integrated web push notifications using Service Workers and Firebase, improving user re-engagement across supported browsers.",
    ],
  },
  {
    title: "Software Engineer / Analyst",
    company: "Capgemini",
    period: "Apr 2021 - Aug 2022",
    location: "Navi Mumbai, Maharashtra, India",
    description: [
      "Designed and built a Calendly-like scheduling feature, enabling availability management, slot booking, conflict prevention, and automated confirmations.",
      "Recognized with the Carnival Ninja Award for completing high-priority tasks within tight timelines while maintaining quality.",
      "Managed ticket assignment, monitoring, and resolution workflows for tasks assigned by senior members, ensuring timely delivery across parallel workstreams.",
      "Collaborated within a 35+ member cross-functional team, coordinating with frontend, backend, QA, and product stakeholders.",
      "Conducted onboarding and knowledge-transfer (KT) sessions for new joiners as part of team-wide knowledge sharing.",
    ],
  },
];

const certificates = [
  {
    image: NamasteDevLogo,
    title: "Namaste Node",
    issuer: "Namaste Dev",
    link: "https://namastedev.com/nilesh.202310/certificates/namaste-node",
  },
  {
    image: NamasteDevLogo,
    title: "Namaste FrontEnd System Design",
    issuer: "Namaste Dev",
    link: "https://namastedev.com/nilesh.202310/certificates/namaste-frontend-system-design",
  },
  {
    image: NamasteDevLogo,
    title: "Namaste React",
    issuer: "Namaste Dev",
    link: "https://namastedev.com/nilesh.202310/certificates/namaste-react",
  },
  {
    image: CouseraLogo,
    title: "Google UX Design",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/C4W6ZBVJ7GUZ",
  },
];

const links = {
  github: "https://github.com/NileshRE",
  codingGH: "https://github.com/NileshRE/Coding_Practice",
  machineCodGH: "https://github.com/NileshRE/Machine-Coding-Q-s",
  mail: "mailto:19nilesh.kumar@gmail.com",
  linkedin: "https://www.linkedin.com/in/nileshkumar19/",
  wordpress: "https://innilesh87e.wordpress.com/",
  resume:
    "https://drive.google.com/file/d/1rpt97CBXoxnOI2PVzMt0mH7byBr2RON8/view?usp=drive_link",
  whatsapp: "https://api.whatsapp.com/send/?phone=919304411983",
};

enum NavLink {
  Home = "Home",
  About = "About",
  Projects = "Projects",
  Skills = "Skills",
  Certificates = "Certificates",
  UX = "UX",
  Contact = "Contact",
}

const navLinks = [
  { href: "#home", label: NavLink.Home },
  { href: "#about", label: NavLink.About },
  { href: "#all-projects", label: NavLink.Projects },
  { href: "#skills", label: NavLink.Skills },
  { href: "#certificates", label: NavLink.Certificates },
  { href: "#ux", label: NavLink.UX },
  { href: "#contact", label: NavLink.Contact },
];

const uxProjects = [
  {
    title: "Threads of Change",
    description: [
      "Promotes sustainable fashion by encouraging optimal garment use, reducing waste, and extending clothing life through upcycling, donation, and smart styling.",
      "Personalized styling and wardrobe management features help users mix and match clothes, customize outfits by season or occasion, and avoid impulsive shopping.",
      "Educational content and awareness on fast fashion impacts, with tutorials and tips to repurpose old garments creatively.",
      "Revenue through referral marketing of sustainable brands and subscription-based personalized fashion suggestions.",
      "Developed in collaboration with a fashion designer — while she led the research, ideation, and concept development, I was responsible for designing the complete user interface and user experience.",
    ],
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["User Flow", "Wireframing", "Prototyping", "UI Design"],
    live: "https://www.behance.net/gallery/215391479/THREADS-OF-CHANGE-%28A-mobile-app%29-by-Trishika-Gupta",
    multiple: true,
  },
  {
    title: "Kharcha - Expense Tracker App",
    description: [
      "Developed a comprehensive Expense Tracker app enabling users to monitor daily, monthly, and quarterly expenses, incomes, investments, and manage outstanding amounts like lent or withdrawn funds.",
      "Integrated advanced features including automated upcoming expense reminders, spending analysis, customizable budgets with reverse EMI planning, EMI calculators, and currency conversion.",
      "Added unique functionality to track leftover coins from purchases, enhancing user savings and financial awareness.",
    ],
    image: "/placeholder.svg?height=300&width=500",
    technologies: [
      "User Research",
      "User Flow",
      "Wireframing",
      "Prototyping",
      "UI Design",
    ],
    personal: true,
    live: "https://www.behance.net/gallery/150118193/Kharcha-An-Expense-Tracker-App",
  },
  {
    title: "UX Research on Home Rental website",
    description: [
      "Redesigned the rental experience for PG seekers on platforms like NoBroker by identifying key user pain points such as rental scams, fake listings, and lack of trust.",
      "Proposed UX solutions like verified property/owner badges, categorized real user reviews, scam alerts, and trust-building profiles to enhance safety, transparency, and user confidence.",
    ],
    image: "/placeholder.svg?height=300&width=500",
    technologies: [
      "Secondary Research",
      "Brainstorming",
      "Heuristic Evaluation",
      "Competitive Evaluation",
    ],
    personal: true,
    live: "https://innilesh87e.wordpress.com/2024/04/23/ux-research-on-home-rental-website/",
  },
];
const quickQuestions = [
  "Give me brief intro about Nilesh?",
  "What are the projects he has built?",
  "What are the challenges he has faced on live projects?",
  "What are the UI features he has build and deployed?",
];

const projectProblems = [
  {
    project: "Trading With Vivek",
    problems: [
      {
        title: "PDF Rendering Compatibility",
        desc: "Faced an issue where rendering PDFs using array buffer data failed on older Chrome and Safari versions due to ES6 compilation limitations. Resolved it by downgrading the library for compatibility and ensured PDF content was secure—non-downloadable and non-copyable.",
      },
    ],
  },
  {
    project: "Salesright.ai",
    problems: [
      {
        title: "Dialogflow CX Integration",
        desc: "Rewrote legacy PHP code for manipulating Dialogflow CX into a Next.js-compatible solution. Overcame the challenge of accessing shadow DOM elements (not immediately available) by combining React Refs with polling to reliably interact with nested elements.",
      },
      {
        title: "UI Flickering in Auth Flows",
        desc: "Encountered UI flickering when unauthorized users accessed protected routes via higher-order components. Fixed this by leveraging Next.js middleware to intercept routing requests at runtime, ensuring smoother redirection and stable UI rendering.",
      },
    ],
  },
  {
    project: "AI Agents based Consultancy App",
    problems: [
      {
        title: "Real-Time Graph Rendering from AI Data",
        desc: "Implemented dynamic graph rendering from AI responses in real time. Addressed challenges with error handling, loading states, and inconsistent data to ensure smooth visualization.",
      },
    ],
  },
  {
    project: "Qyubic",
    problems: [
      {
        title: "Handling Arabic language and SEO",
        desc: "Implemented RTL support for Arabic language and handled duplicates pages indexed by setting canonical urls and redirections. Handled country-based content variations using query parameters and dynamic rendering to ensure accurate content delivery.",
      },
    ],
  },
];

export {
  certificates,
  experience,
  heroSectionData,
  links,
  NavLink,
  navLinks,
  projectProblems,
  projects,
  quickQuestions,
  skills,
  uxProjects,
};
