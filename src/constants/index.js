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
  linkra,
  lrtjak,
  unair,
  nextjs,
  unair23,
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
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Next JS", icon: nextjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "Flutter", icon: flutter },
  { name: "SQL", icon: sql },
  { name: "git", icon: git },
  { name: "PHP", icon: php },
];

const experiences = [
  {
    title: "Intern Data entry & SEO Analyzer",
    company_name: "Griya Media Nusantara / GWC-IZZ / Magangwfh",
    icon: magang,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - May 2020",
    points: [
      "Developing and maintaining SERP(Search Engine Result Page) in order to make the website rank #1 in the search engine result pages.",
      "Collaborating with others co-worker in order to gaining the best value for future.",
   ],
  },
  {
    title: "Data Entry & SEO Analyzer",
    company_name: "Griya Media Nusantara / GWC-IZZ / Magangwfh",
    icon: magang,
    iconBg: "#E6DEDD",
    date: "May 2020 - July 2021",
    points: [
      "Working while studying in highschool for gaining money and experience.",
      "Collaborating with others co-worker in order to gaining the best value for future.",
      "Developing and maintaining SERP(Search Engine Result Page) in order to make the website rank #1 in the search engine result pages.",
      ],
  },
  {
    title: "Intern Data Entry & SEO Analyzer",
    company_name: "Jakarta Post",
    icon: jakpos,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Nov 2021",
    points: [
      "Developing and maintaining SERP(Search Engine Result Page) in order to make the website rank #1 in the search engine result pages.",
      "Collaborating with others co-worker in order to gaining the best value for future.",
    ],
  },
  {
    title: "Freelance React js Developer",
    company_name: "Linkra",
    icon: linkra,
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
    points: ["Becoming colleger in Universitas Airlangga"],
  },
];

const testimonials = [

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
        name: "SQL",
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
    name: "Angkatan 2023 Universitas Airlangga",
    description: "Journaling Website blog for all of my college friend",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: unair23,
    source_code_link: "https://github.com/Arya-f4/angkatan-23",
  },

];

export { services, technologies, experiences, testimonials, projects };
