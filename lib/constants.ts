import NamasteDevLogo from "@/assets/images/namastedev.png";
import CouseraLogo from "@/assets/images/coursera.png";

const projects = [
  {
    title: "Salesright.ai",
    description: [
      "Efficiently rendered large datasets (25–30k rows, 200 rows per page) using virtualization techniques to ensure smooth performance. Optimized re-renders with useMemo and useCallback for improved efficiency.",
      "Implemented role-based access control using Next.js middleware, intercepting routing requests to redirect users based on their roles.",
      "Built a feature to auto-check or disable item checkboxes based on valid input, with real-time toast notifications for errors or validation feedback.",
      "Developed advanced table filtering functionality with 9–10 filters, leveraging URL search params for seamless filter state management and sharing.",
      "Created dynamic data visualizations using Recharts, displaying performance insights based on salesperson and customer data.",
    ],
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Tailwind CSS", "AntDesign", "Recharts"],
    featured: false,
  },
  {
    title: "Trading With Vivek",
    description: [
      "Integrated Razorpay Payment Gateway to enable smooth and secure subscription plan purchases, enhancing the monetization flow.",
      "Implemented interactive PDF rendering from buffer data, delivering a flip-book-style experience with page-turn animations and sound effects for a realistic reading experience.",
      "Rebuilt the entire website using Next.js, achieving a 25% reduction in load time by optimizing core web vitals, compressing images, and minimizing network requests, resulting in an overall performance boost of 12%.",
      "Developed a community feature where users can post, edit, like, and comment on trading-related discussions, fostering engagement and user interaction.",
      "Integrated Sentry for real-time error logging and monitoring, improving issue tracking and system reliability.",
    ],
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next-15", "TypeScript", "RazorPay", "Sentry"],
    featured: false,
  },
  {
    title: "AI Agents based Consultancy App",
    description: [
      "Designed and developed scalable Super Admin, Admin, and User panel UIs from scratch using ShadCN and Tailwind CSS within a Monorepo architecture, enabling efficient code sharing, modular development, and unified dependency management across multiple apps.",
      "Implemented AI-driven features, including real-time streamed responses from the GPT model and custom AI-generated responses from user-uploaded PDFs.",
      "Enabled AI-based data visualization by dynamically generating graphs from extracted data in uploaded CSVs and documents.",
      "Integrated APIs for authentication, data extraction with Airbyte, and vector database queries.",
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
  { name: "TypeScript", level: 70, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Styling" },
  { name: "Shadcn/UI", level: 90, category: "UI Library" },
  { name: "Ant Design", level: 85, category: "UI Library" },
  { name: "Supabase", level: 80, category: "Backend" },
  { name: "React Native", level: 60, category: "App" },
  { name: "Git", level: 85, category: "Tools" },
];

const experience = [
  {
    title: "Frontend Engineer",
    company: "Squareboat",
    period: "Apr 2024 - Present",
    description: [
      "Led development of multiple Next.js projects having complex UI features and third-party integrations ensuring performance, scalability, and clean UI/UX.",
      "Collaborated with clients, designers, and backend teams to deliver features on time across mutliple projects.",
      "Mentored an intern by providing guidance, code reviews, and technical support throughout their first project.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Capgemini",
    period: "Apr 2021 - Aug 2022",
    description: [
      "Collaborated within a large team (35–40 members) to resolve client-reported bugs and internal tickets assigned by senior developers.",
      "Delivered assigned tasks efficiently, earning the Carnival Ninja Award for consistent and timely contributions.",
      "Provided Knowledge Transfer (KT) sessions to onboard and support new team members in understanding project workflows.",
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
  { href: "#projects", label: NavLink.Projects },
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

export {
  projects,
  skills,
  experience,
  links,
  navLinks,
  certificates,
  uxProjects,
};
