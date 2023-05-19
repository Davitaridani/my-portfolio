import imgGoldenStore from "../img/portfolio/golden-store.jpg";
import imgHooBank from "../img/portfolio/hoo-bank.jpg";
import imgMeetupDesigner from "../img/portfolio/meetup-designer.jpg";
import imgMyFirniture from "../img/portfolio/my-furniture.jpg";

import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { FaGitlab } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import scss from "../img/scss.png";
import bs from "../img/bs.png";
import tailwind from "../img/tailwind.png";
import react from "../img/react.png";
import git from "../img/git.png";
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
    id: 4,
    img: imgMyFirniture,
    title: "My Firniture",
    category: "Front End",
    technologies: ["React", "Redux", "Scss", "Bootstrap", "Aos"],
    demo: "https://myfiniture.vercel.app/home",
    sourceCode: "https://github.com/Davitaridani/my-furniture/",
    delayAos: 350,
  },
  {
    id: 2,
    img: imgHooBank,
    title: "Hook Bank",
    category: "Front End",
    technologies: ["React", "Tailwind", "Aos"],
    demo: "https://my-hoo-bank.vercel.app/",
    sourceCode: "https://github.com/Davitaridani/hoo-bank",
    delayAos: 450,
  },
];

export const qualification = [
  {
    year: "Feb 2023 - Agust 2023 / NOW",
    school: "Fullstack - Bootcamp Binar Academy",
    text: "Student",
  },
  {
    year: "Sep 2021 - April 2022",
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
      {
        id: 6,
        img: tailwind,
        title: "Tailwind",
        text: "Intermediate",
        delayAos: 150,
      },
      {
        id: 7,
        img: react,
        title: "React Js",
        text: "Intermediate",
        delayAos: 250,
      },
      {
        id: 8,
        img: git,
        title: "Git",
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
