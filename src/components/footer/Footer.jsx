import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { RiFacebookFill, RiLinkedinBoxLine } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
import ScrollToTop from '../UI/ScrollToTop';

const Footer = () => {

	const handleClick = e => {
		e.preventDefault();

		const targetAttr = e.target.getAttribute("href");
		const locationTarget = document.querySelector(targetAttr).offsetTop;

		window.scrollTo({
			top: locationTarget - 80,
			left: 0,
		})
	}

	const dataIcon = [
		{
			icon: <FiInstagram />,
			link: "https://www.instagram.com/davitt_ad/",
		},
		{
			icon: <RiFacebookFill />,
			link: "https://www.facebook.com/davit.aridani",
		},
		{
			icon: <RiLinkedinBoxLine />,
			link: "https://www.linkedin.com/in/ahmat-davit-ari-dani-1125721a1/",
		},
		{
			icon: <AiFillGithub />,
			link: "https://github.com/Davitaridani",
		},
		{
			icon: <SiWhatsapp />,
			link: "https://api.whatsapp.com/send?phone=6282139948735"
		}
	]

	return (
		<footer className="bg-headingColor pt-12 pb-7" id="footer">
			<div className="container">
				<div className="flex mb-10 max-w-full md:max-w-[80%] mx-auto">
					<div className="basis-1/3">
						<h3 className='text-slate-200 text-[20px] md:text-[25px] font-semibold mb-1 md:mb-0'>Davit</h3>
						<p className="text-slate-300 text-[13px] md:text-base">Front End Developer </p>
					</div>

					<div className="basis-1/3">
						<h3 className='text-slate-200 text-[15px] md:text-[17px] font-semibold mb-3'>Links</h3>
						<ul className="text-slate-300 text-sm">
							<li className='mb-2'>
								<a onClick={handleClick} href="#about">About</a>
							</li>
							<li className='mb-2'>
								<a onClick={handleClick} href="#skill">Skill</a>
							</li>
							<li className='mb-2'>
								<a onClick={handleClick} href="#portfolio">Portfolio</a>
							</li>
							<li className='mb-2'>
								<a onClick={handleClick} href="#contact">Contact</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='mb-3 text-slate-200 text-[15px] md:text-[17px] font-medium'>Follow Me:</h3>
						<div className="flex items-center justify-center gap-[7px] md:gap-3 mb-3">
							{dataIcon.map((item, index) => (
								<div key={index}>
									<a href={item.link} target='_blank' rel="noreferrer" className='text-gray-300 text-[15px] md:text-[17px] flex gap-4 border border-solid h-[28px] w-[28px] md:h-[35px] md:w-[35px] justify-center items-center rounded-full hover:bg-slate-300 hover:text-headingColor duration-200 ease-in'>
										{item.icon}
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
				<p className="text-gray-400 text-sm tracking-wide text-center">&copy; Copyright Ahmat Davit. All rights reserved. </p>

				<ScrollToTop />
			</div>
		</footer >
	)
}

export default Footer
