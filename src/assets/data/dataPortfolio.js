import imgGoldenStore from "../img/portfolio/golden-store.webp";
import imgHooBank from "../img/portfolio/hoo-bank.webp";
import imgMeetupDesigner from "../img/portfolio/meetup-designer.webp";
import imgMyFirniture from "../img/portfolio/my-furniture.webp";
import imgRestApi from "../img/portfolio/crud-restapi.webp";
import imgGame from "../img/portfolio/game.jpg";
import imgGalaxicarpet from "../img/portfolio/galaxi-carpet.webp";

import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { FaGitlab } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import html from "../img/html.webp";
import css from "../img/css.webp";
import js from "../img/js.webp";
import scss from "../img/scss.webp";
import bs from "../img/bs.webp";
import tailwind from "../img/tailwind.webp";
import react from "../img/react.webp";
import git from "../img/git.webp";
import figma from "../img/figma.webp";
import ps from "../img/ps.webp";
import express from "../img/expressjs.webp";
import nodeJs from "../img/node-js.webp";
import redux from "../img/redux.webp";
import nextJs from "../img/next-js.webp";

export const imgPortfolio = [
  {
    id: 1,
    img: imgGalaxicarpet,
    title: "Galaxi Carpet - Project Freelance",
    category: "Front End",
    technologies: ["Next Js", "Tailwind", "Aos"],
    demo: "https://galaxicarpet.com/home",
    sourceCode: "https://github.com/Davitaridani/galaxicarpet",
    delayAos: 100,
  },
  {
    id: 2,
    img: imgRestApi,
    title: "Rest Api - Server Local",
    category: "Front End",
    technologies: ["React", "Axios", "Json-Server", "Scss", "Bootstrap"],
    demo: "https://restapi-crud.vercel.app/",
    sourceCode: "https://github.com/Davitaridani/crud-restapi",
    delayAos: 200,
  },
  {
    id: 3,
    img: imgMyFirniture,
    title: "My Firniture",
    category: "Front End",
    technologies: ["React", "Redux", "Axios", "Scss", "Bootstrap", "Aos"],
    demo: "https://myfiniture.vercel.app/home",
    sourceCode: "https://github.com/Davitaridani/my-furniture/",
    delayAos: 300,
  },
  {
    id: 4,
    img: imgGoldenStore,
    title: "Web App Golden Store",
    category: "Front End",
    technologies: ["React", "Scss", "Bootstrap", "Aos", "Swiper"],
    demo: "https://golden-store.vercel.app/",
    sourceCode: "https://github.com/Davitaridani/golden-store",
    delayAos: 400,
  },
  {
    id: 5,
    img: imgMeetupDesigner,
    title: "Meetup Designer",
    category: "Front End",
    technologies: ["React", "Scss", "Bootstrap", "Aos"],
    demo: "https://meetup-designer.vercel.app/",
    sourceCode: "https://github.com/Davitaridani/meet-up",
    delayAos: 100,
  },
  {
    id: 6,
    img: imgHooBank,
    title: "Hook Bank",
    category: "Front End",
    technologies: ["React", "Tailwind", "Aos"],
    demo: "https://my-hoo-bank.vercel.app/",
    sourceCode: "https://github.com/Davitaridani/hoo-bank",
    delayAos: 200,
  },
  {
    id: 7,
    img: imgGame,
    title: "Game - Landing Page",
    category: "Front End",
    technologies: ["Express", "EJS", "Bootstrap", "Scss"],
    demo: "https://joyous-newt-flip-flops.cyclic.app/",
    sourceCode: "https://github.com/Davitaridani/landing-page-game",
    delayAos: 300,
  },
];

export const qualification = [
  {
    year: "Juli 2023 - Agust 2023",
    school: "Gamic Studio - Kamboja ",
    text: "Employee",
  },
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
      { img: html, title: "Html", text: "Advance", delayAos: 50 },
      { img: css, title: "Css", text: "Advance", delayAos: 150 },
      { img: js, title: "JS/ES6", text: "Intermediate", delayAos: 250 },
      { img: scss, title: "Scss", text: "Intermediate", delayAos: 350 },
      { img: bs, title: "Bootstrap", text: "Advance", delayAos: 50 },
      {
        img: tailwind,
        title: "Tailwind",
        text: "Intermediate",
        delayAos: 150,
      },
      {
        img: react,
        title: "React Js",
        text: "Intermediate",
        delayAos: 250,
      },
      {
        img: nextJs,
        title: "Next Js",
        text: "Intermediate",
        delayAos: 350,
      },
      {
        img: redux,
        title: "Redux",
        text: "Intermediate",
        delayAos: 50,
      },
      {
        img: git,
        title: "Git",
        text: "Intermediate",
        delayAos: 150,
      },
      { img: figma, title: "Figma", text: "Basic", delayAos: 250 },
      { img: ps, title: "PS", text: "Basic", delayAos: 350 },
    ],
  },
  {
    backEnd: [
      { img: nodeJs, title: "Node JS", text: "Basic", delayAos: 100 },
      { img: express, title: "Express JS", text: "Basic", delayAos: 200 },
    ],
  },
];
