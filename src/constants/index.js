import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  unisender,
  carrent,
  jobit,
  img_4,
  img_5,
  img_6,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React",
    icon: web,
  },
  {
    title: "Next.js",
    icon: creator,
  },
  {
    title: "Node.js",
    icon: backend,
  },
  {
    title: "Nest.js | Express",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "Unipay (Moscow, Russia)",
    icon: unisender,
    iconBg: "#383E56",
    date: "August 2024 - Fegruary 2025",
    points: [
      "Developed the marketplace functionality for 'Unipay' for digital goods and services, including a dynamic catalog and storefront, using SSR and ISR in Next.js for fast loading and content updates.",
      "Implemented seller authorization in the personal account using NextAuth.js (OAuth, JWT).",
      "Designed a user-friendly personal account for managing products, notifications, and profiles, optimized for SEO with server-side metadata generation.",
      "Optimized data handling with Prisma and PostgreSQL, speeding up seller onboarding through efficient queries and caching.",
      "Technologies: Next.js (SSR, ISR, SEO), TypeScript, Redux, Tailwind CSS, Node.js, Express.js, Prisma, PostgreSQL, Backblaze B2, NextAuth.js.",
      "Result: Accelerated seller onboarding by 30% and improved platform usability.",
    ],
  },
  {
    title: "Junior Software Developer (Frontend, React)",
    company_name: "EPAM Systems (Armenia)",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "August 2023 - March 2024",
    points: [
      "Developed scalable web applications using React with Redux for state management as part of the Equiniti project for a major client.",
      "Integrated frontend with backend via RESTful API, using JWT for authentication and request security.",
      "Optimized component loading, reducing rendering time by 20% through best practices.",
      "Participated in Agile processes, including daily standups, sprint planning, and releases, ensuring high-quality feature delivery.",
      "Technologies: React, Redux, TypeScript, REST, JWT.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "My Own Startup",
    icon: "",
    iconBg: "#383E56",
    date: "In process",
    points: [
      "Developed a job posting platform with professional social networking features, facilitating easy job searches and user interaction.",
      "Implemented an authentication system using Redis for session storage, introducing advanced authorization mechanisms for enhanced security.",
      "Optimized asynchronous processes, such as notification delivery, with BullMQ, enabling efficient handling of heavy operations and improving performance.",
      "Designed and integrated backend logic using Nest.js and GraphQL, configured data storage in PostgreSQL, and caching in Redis.",
      "Set up task automation with cron jobs and Docker for containerization, ensuring scalability and ease of deployment.",
      "Integrated third-party services: AWS for cloud infrastructure, Telegraf for Telegram API, and Stripe for payment processing.",
      "Built the frontend using Next.js with TypeScript, Zustand for state management, Zod and React Hook Form for form validation, and shadcn and Tailwind CSS for a modern interface. Used graphql-codegen and Apollo for efficient GraphQL queries.",
      "Status: The startup is in active development, focusing on refining functionality and scaling.",
      "Technologies: Next.js, TypeScript, Zustand, Zod, React Hook Form, shadcn, Tailwind CSS, graphql-codegen, Apollo, Nest.js, GraphQL, PostgreSQL, Redis, Docker, cron, BullMQ, AWS, Telegraf, Stripe.",
    ],
  },
  {
    title: "Intern (Frontend and Backend Developer)",
    company_name: "EPAM Systems (Armenia)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2022 - August 2023",
    points: [
      "Developed responsive interfaces in React with cross-browser compatibility.",
      "Integrated frontend with backend via GraphQL (Apollo) and WebSockets for real-time updates.",
      "Built and optimized GraphQL APIs with Nest.js, improving query performance.",
      "Participated in Agile processes, including standups, planning, and releases for enterprise projects.",
      "Technologies: React, GraphQL, Apollo, WebSockets, Nest.js.",
    ],
  },
  {
    title: "Training Program Participant (Frontend and Backend Development)",
    company_name: "EPAM Software Engineering School (Armenia)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2022 - September 2022",
    points: [
      "Mastered modern technologies: HTML5, CSS3, JavaScript, TypeScript, React, Redux, Node.js, Express, Nest.js.",
      "Worked with PostgreSQL, MongoDB, Docker, AWS (S3, EC2), Git.",
      "Studied algorithms and data structures for problem-solving.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Youtube Clone",
    linkTo: "https://yitube.netlify.app/",
    description:
      "The Youtube Clone faithfully replicates the original Youtube platform, allowing users to search, watch actual videos, and subscribe to channels using the original Youtube's database.",
    tags: [
      {
        name: "react/redux",
        color: "blue-text-gradient",
      },
      {
        name: "RTK Query",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Ed-960/yitube",
  },
  {
    name: "Jobbie",
    linkTo: "https://mega-project-teal.vercel.app/",
    description:
      "This is a website like Linkedin. Every user have an account. You can find jobs or create ones and so on...",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
      {
        name: "zod",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "blue-text-gradient",
      },
      {
        name: "next-auth",
        color: "green-text-gradient",
      },
      {
        name: "react-hook-form",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ed-960/Mega-project",
  },
  // {
  //   name: "Social-media app",
  //   linkTo: "https://social-mediathreads.vercel.app/",
  //   description: "Full Social Media App with both backend and front-end sides.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "mongoDb",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "webhooks",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "zod",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "shadcn",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "uploadThing",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "clerk",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/Ed-960/Social_media1.0_vers",
  // },
  {
    name: "Crypton",
    linkTo: "https://crypto-analyzes.netlify.app/",
    description:
      "This is a website with all the information about crypto: types, news, price chart and so on...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "chart.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "html-react-parser",
        color: "blue-text-gradient",
      },
      {
        name: "millify",
        color: "green-text-gradient",
      },
    ],
    image: img_4,
    source_code_link: "https://github.com/Ed-960/cryptoAnalyze",
  },
  {
    name: "Add Prompts",
    linkTo: "https://add-prompt.vercel.app/",
    description:
      "sign up with Google Auth to access a world of creativity. Share, view, and edit prompts and thoughts with ease. Explore other's profiles, and exchange ideas!",
    tags: [
      {
        name: "next.js react",
        color: "blue-text-gradient",
      },
      {
        name: "googleAuth",
        color: "green-text-gradient",
      },
      {
        name: "mongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: img_5,
    source_code_link: "https://github.com/Ed-960/AddPromptApp",
  },
  // {
  //   name: "Find a Job (mobile app)",
  //   linkTo:
  //     "https://expo.dev/@ed-960/react_native_tutorial?serviceType=classic",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react native",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "googleAuth",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindCss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: img_6,
  //   source_code_link: "https://github.com/Ed-960/JobFinder_React_Native",
  // },
];

export { services, technologies, experiences, testimonials, projects };
