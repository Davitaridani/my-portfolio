import React from 'react';
import { MdMonitor } from "react-icons/md";
import { GrCode } from "react-icons/gr";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import js from "../../assets/img/js.png";
import scss from "../../assets/img/scss.png";
import bs from "../../assets/img/bs.png";
import tailwind from "../../assets/img/tailwind.png";
import react from "../../assets/img/react.png";
import github from "../../assets/img/github.png";
import figma from "../../assets/img/figma.png";
import npm from "../../assets/img/npm.png";
import ps from "../../assets/img/ps.png";
import express from "../../assets/img/expressjs.png";
import nodeJs from "../../assets/img/node-js.png";

const data = [
	{ img: html, title: "Html", text: "Advance" },
	{ img: css, title: "Css", text: "Advance" },
	{ img: js, title: "JS/ES6", text: "Intermediate" },
	{ img: scss, title: "Scss", text: "Intermediate" },
	{ img: bs, title: "Bootstrap", text: "Advance" },
	{ img: tailwind, title: "Tailwind", text: "Basic" },
	{ img: react, title: "React Js", text: "Intermediate" },
	{ img: github, title: "GitHub", text: "Intermediate" },
	{ img: figma, title: "Figma", text: "Basic" },
	{ img: ps, title: "PS", text: "Basic" },
	{ img: npm, title: "NPM", text: "Intermediate" },
]
const be = [
	{ img: nodeJs, title: "Node JS", text: "Basic" },
	{ img: express, title: "Express JS", text: "Basic" },
]


const Skill = () => {
	return (
		<section id="skill">
			<div className="container">
				<h3 className="text-center text-[30px] font-bold mb-16">Skills</h3>
				<div className="md:flex flex-none justify-center">
					<div className="w-full mx-12 md:mx-0 mb-12 md:mb-0">
						<h3 className="flex justify-center items-center gap-1 text-center text-2xl font-semibold mb-6"><span><MdMonitor /></span> Front End</h3>
						<div className="grid grid-cols-4 gap-4 md:gap-2">
							{data.map((item, index) => (
								<div className="text-center " key={index}>
									<div className="md:p-4">
										<img src={item.img} alt="" className="mx-auto flex justify-center h-10 mb-1 object-contain  hover:scale-125 duration-300 ease-in  cursor-pointer" />
									</div>
									<h3 className="font-semibold leading-5 text-lg">{item.title}</h3>
									<p className="text-gray-500 tracking-wide">{item.text}</p>
								</div>
							))}
						</div>
					</div>

					<div className="w-full mx-0 md:mx-12">
						<h3 className="flex justify-center items-center gap-1 text-center text-2xl font-semibold mb-6"><span><GrCode /></span> Back End</h3>
						<div className="grid grid-cols-2 gap-2 md:grid-cols-4">
							{be.map((item, index) => (
								<div className="text-center" key={index}>
									<div className="">
										<img src={item.img} alt="" className="mx-auto h-10 flex justify-center mb-1 object-contain  hover:scale-125 duration-300 ease-in  cursor-pointer" />
									</div>
									<h3 className="font-semibold leading-5 text-lg">{item.title}</h3>
									<p className="text-gray-500 tracking-wide">{item.text}</p>
								</div>
							))}
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Skill
