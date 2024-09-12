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
  tesla,
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
    title: "React.js Developer",
    company_name: "EPAM",
    icon: starbucks,
    iconBg: "#383E56",
    date: "september 2022 - jule 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "student",
    company_name: "EPAM",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "december 2021 - august 2022",
    points: [
      "at this course we learnt advanced javascript, typescript, redux, unit testing, css frameworkes as Material UI, bootstrap, TailwindCss",
      "Developing and maintaining a lot of web applications using React.js and other related technologies during this course.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "student",
    company_name: "TUMO - CENTER FOR CREATIVE TECHNOLOGIES",
    icon: tesla,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: ["Web programming cource.", "3D Modelling.", "Robotics."],
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
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ed-960/Mega-project",
  },
  {
    name: "Social-media app",
    linkTo: "https://social-mediathreads.vercel.app/",
    description: "Full Social Media App with both backend and front-end sides.",
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
        name: "mongoDb",
        color: "pink-text-gradient",
      },
      {
        name: "webhooks",
        color: "blue-text-gradient",
      },
      {
        name: "zod",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "blue-text-gradient",
      },
      {
        name: "uploadThing",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Ed-960/Social_media1.0_vers",
  },
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
        name: "html-react-parser",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "millify",
        color: "pink-text-gradient",
      },
      {
        name: "moment",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
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
  {
    name: "Find a Job (mobile app)",
    linkTo:
      "https://expo.dev/@ed-960/react_native_tutorial?serviceType=classic",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "googleAuth",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: img_6,
    source_code_link: "https://github.com/Ed-960/JobFinder_React_Native",
  },
];

export { services, technologies, experiences, testimonials, projects };
