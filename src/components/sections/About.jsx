import React from 'react';
import { BsSend } from "react-icons/bs";
import { qualification } from "../../assets/data/dataPortfolio";

const About = () => {

	return (
		<section id="about">
			<div className="container">
				<h1 className="text-center mb-8 font-bold text-3xl">About Me</h1>
				<div className="flex">
					<div className="w-full basis-1/2">
						<h3 className='text-3xl font-bold  text-headingColor leading-8 mb-6'>Qualification</h3>
						<div className="h-[250px] overflow-y-auto p-2 scrollbar-hide">
							<ol className='relative border-l border-headingColor'>
								{qualification.map((item, index) => (
									<li className='mb-5 ml-4' key={index}>
										<div className='absolute w-3 h-3 rounded-full mt-1 -left-1.5 border-2   bg-primaryColor'>
										</div>
										<h3 className="text-headingColor font-semibold text-sm">{item.year}</h3>
										<p className="text-lg font-bold leading-5">{item.school}</p>
										<span className="font-medium text-[15px] text-gray-500">{item.text}</span>
									</li>
								))}
							</ol>
						</div>
					</div>

					<div className=" basis-1/2 ">
						<div className="mb-3">
							<h3 className="text-3xl font-bold text-headingColor leading-8 ">Ahmat Davit</h3>
							<p className="text-xs text-gray-400">Developer & Photographer</p>
						</div>
						<p className="font-medium text-headingColor font-sans mb-7">Hi, introduce my name is Ahmat Davit Ari Dani. I am a Front End Developer and Photographer. I graduated from the Jember State Polytechnic campus in 2022 and now I am participating in a fullstack developer bootcamp at Binar Academy from February to August 2023. I started coding at the beginning of college and I have experience in developing web applications such as Html, Css, Scss, Js, Bootstrap , Tailwind, ReactJs, Web Animation and other web tools. Apart from that, I also have freelance photography work. So, here I can help you build your web interface and design your project.</p>
						<a href='#contact' className='flex items-center gap-1 bg-primaryColor  max-w-fit   text-[15px] text-white font-medium rounded-[5px] py-2 px-3'><span><BsSend /></span> Contact me</a>
						<div className="flex items-center gap-3">
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default About
