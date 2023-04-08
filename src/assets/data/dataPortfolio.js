import portfolioImg01 from "../img/portfolio-01.jpg";
import portfolioImg02 from "../img/portfolio-02.jpg";
import portfolioImg03 from "../img/portfolio-03.jpg";
import portfolioImg04 from "../img/portfolio-04.jpg";
import portfolioImg05 from "../img/portfolio-05.jpg";
import portfolioImg06 from "../img/portfolio-06.jpg";
import portfolioImg07 from "../img/portfolio-07.jpg";

// Img Portfolio
import imgGoldenStore from "../img/portfolio/golden-store.jpg";
import imgHooBank from "../img/portfolio/hoo-bank.jpg";
import imgMeetupDesigner from "../img/portfolio/meetup-designer.jpg";

// Iocn Herro
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { FaGitlab } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

// Img Skill
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import scss from "../img/scss.png";
import bs from "../img/bs.png";
import tailwind from "../img/tailwind.png";
import react from "../img/react.png";
import github from "../img/github.png";
import figma from "../img/figma.png";
import npm from "../img/npm.png";
import ps from "../img/ps.png";
import express from "../img/expressjs.png";
import nodeJs from "../img/node-js.png";

export const imgPortfolio = [
  {
    id: 1,
    img: imgGoldenStore,
    title: "Web App Golden Store",
    category: "Front End",
    technologies: ["React", "Scss", "Bootstrap", "Aos", "Swiper"],
    demo: "https://golden-store.vercel.app/",
    sourceCode: "https://github.com/Davitaridani/golden-store",
    delayAos: 100,
  },
  {
    id: 3,
    img: imgMeetupDesigner,
    title: "Meetup Designer",
    category: "Front End",
    technologies: ["React", "Scss", "Bootstrap", "Aos"],
    demo: "https://meetup-designer.vercel.app/",
    sourceCode: "https://github.com/Davitaridani/meet-up",
    delayAos: 250,
  },
  {
    id: 2,
    img: imgHooBank,
    title: "Hook Bank",
    category: "Front End",
    technologies: ["React", "Tailwind", "Aos"],
    demo: "https://my-hoo-bank.vercel.app/",
    sourceCode: "https://github.com/Davitaridani/hoo-bank",
    delayAos: 350,
  },
];

export const qualification = [
  {
    year: "Feb 2023 - Agust 2023 / NOW",
    school: "Fullstack - Bootcamp Binar Academy",
    text: "Student",
  },
  {
    year: "Nov 2021 - April 2022",
    school: "Mark Design, Surabaya",
    text: "Magang",
  },
  {
    year: "2019 - 2022",
    school: "Politeknik Negeri Jember",
    text: "Student",
  },
  {
    year: "2016 - 2019",
    school: "High school of SMAN 01 Balung, Jember",
    text: "Student",
  },
];

export const iconHero = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/davitt_ad/",
    delayAos: 50,
  },
  {
    icon: <IoLogoGithub />,
    link: "https://github.com/Davitaridani",
    delayAos: 150,
  },
  {
    icon: <FaGitlab />,
    link: "https://gitlab.com/Davitaridani",
    delayAos: 300,
  },
  {
    icon: <GrFacebookOption />,
    link: "https://www.facebook.com/davit.aridani",
    delayAos: 450,
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/ahmat-davit-ari-dani-1125721a1/",
    delayAos: 550,
  },
];

export const imgSkill = [
  {
    frontEnd: [
      { id: 1, img: html, title: "Html", text: "Advance", delayAos: 50 },
      { id: 2, img: css, title: "Css", text: "Advance", delayAos: 150 },
      { id: 3, img: js, title: "JS/ES6", text: "Intermediate", delayAos: 250 },
      { id: 4, img: scss, title: "Scss", text: "Intermediate", delayAos: 350 },
      { id: 5, img: bs, title: "Bootstrap", text: "Advance", delayAos: 50 },
      { id: 6, img: tailwind, title: "Tailwind", text: "Basic", delayAos: 150 },
      {
        id: 7,
        img: react,
        title: "React Js",
        text: "Basic",
        delayAos: 250,
      },
      {
        id: 8,
        img: github,
        title: "GitHub",
        text: "Intermediate",
        delayAos: 350,
      },
      { id: 9, img: figma, title: "Figma", text: "Basic", delayAos: 50 },
      { id: 10, img: ps, title: "PS", text: "Basic", delayAos: 150 },
      { id: 11, img: npm, title: "NPM", text: "Intermediate", delayAos: 250 },
    ],
  },
  {
    backEnd: [
      { img: nodeJs, title: "Node JS", text: "Basic", delayAos: 100 },
      { img: express, title: "Express JS", text: "Basic", delayAos: 200 },
    ],
  },
];

// export const imgPortfolio = [
//   {
//     id: "01",
//     img: imgGoldenStore,
//     title: "Web App Golden Store",
//     category: "Front End",
//     technologies: ["React", "Scss", "Bootstrap", "Aos", "Swiper"],
//     demo: "https://golden-store.vercel.app/",
//     sourceCode: "https://github.com/Davitaridani/golden-store",
//   },
//   {
//     id: "02",
//     img: imgHooBank,
//     title: "Landing Page - Hook Bank",
//     category: "Front End",
//     technologies: ["React", "Tailwind", "Aos"],

//     demo: "https://my-hoo-bank.vercel.app/",
//     sourceCode: "https://github.com/Davitaridani/hoo-bank",
//   },
// ];

//

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Front End",
    title: "Finance Technology Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: [
      "React",
      "Tailwind",
      "Node.js",
      "MongoDB",
      "Express JS",
      "JWT",
    ],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "UI/UX",
    title: "Video Conference Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "UI/UX",
    title: "Multimedia Sharing Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: portfolioImg05,
    category: "Front End",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg03,
    category: "Front End",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    siteUrl: "#",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "UI/UX",
    title: "Online Therapy Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Front End",
    title: "Appointment Booking Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "08",
    imgUrl: portfolioImg01,
    category: "Front End",
    title: "Finance Technology Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "09",
    imgUrl: portfolioImg02,
    category: "UI/UX",
    title: "Video Conference Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "10",
    imgUrl: portfolioImg03,
    category: "UI/UX",
    title: "File Sharing Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "11",
    imgUrl: portfolioImg04,
    category: "Front End",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "12",
    imgUrl: portfolioImg05,
    category: "Front End",
    title: "Landing Page",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "13",
    imgUrl: portfolioImg06,
    category: "Front End",
    title: "Online Therapy Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "14",
    imgUrl: portfolioImg07,
    category: "uI/UX",
    title: "Appointment Booking Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
];

export default portfolios;
