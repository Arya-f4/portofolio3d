import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  php,
  flutter,
  magang,
  sql,
  jakpos,
  lrtams,
  lrtjak,
  unair,
  nextjs,
  jobit,
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
    title: "Search Engine Optimizator",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cyber Security",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html, },
  { name: "CSS 3", icon: css, },
  { name: "JavaScript", icon: javascript, },
  { name: "React JS", icon: reactjs, },
  { name: "Next JS", icon: nextjs, },
  { name: "Tailwind CSS", icon: tailwind, },
  { name: "Node JS", icon: nodejs, },
  { name: "MongoDB", icon: mongodb, },
  { name: "Three JS", icon: threejs, },
  { name: "Flutter", icon: flutter, },
  { name: "SQL", icon: sql, },
  { name: "git", icon: git, },
  { name: "PHP", icon: php, },
];

const experiences = [
  {
    title: "Data entry & SEO Analyzer",
    company_name: "Griya Media Nusantara / GWC-IZZ / Magangwfh",
    icon: magang,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - May 2021",
    points: [
      "Developing and maintaining SERP(Search Engine Result Page) in order to make the website rank #1 in the search engine result pages.",
      "Collaborating with others co-worker in order to gaining the best value for future.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intern Data Entry & SEO Analyzer",
    company_name: "Jakarta Post",
    icon: jakpos,
    iconBg: "#E6DEDD",
    date: "June 2021 - Aug 2021",
    points: [
     "Developing and maintaining SERP(Search Engine Result Page) in order to make the website rank #1 in the search engine result pages.",
      "Collaborating with others co-worker in order to gaining the best value for future.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance React Native Developer",
    company_name: "LRT Jakarta",
    icon: lrtams,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "System Information Student",
    company_name: "Universitas Airlangga",
    icon: unair,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Becoming colleger in Universitas Airlangga",
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
    name: "LRT AMS",
    description:
      "Web-based platform that allows users to manage users from LRT Jakarta, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name : "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: lrtjak,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };