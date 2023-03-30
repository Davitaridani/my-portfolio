import React from 'react';
import CountUp from 'react-countup';
import imgHero from "../../assets/img/hero.svg";
import { HiOutlineMail } from "react-icons/hi";
import { TbApps } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { FaGitlab } from "react-icons/fa";

const Hero = () => {
	return (
		<section className="pt-0" id="about">
			<div className="container pt-14">
				<div className="md:flex items-center justify-between sm:flex-col md:flex-row">
					{/* Content Left */}
					<div className="w-full md:basis-1/2">
						<h3 className="text-headingColor font-semibold text-[16px]">Hello Word</h3>
						<h5 className="font-bold text-headingColor text-[40px] leading-[35px] sm:leading-[45px] mt-5">I'm Ahmat Davit <br />Front End Developer</h5>
						<div className="flex items-center gap-6 mt-7">

							<a href="" ><button className='flex items-center bg-primaryColor text-white font-medium gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'><HiOutlineMail /> Hire Me</button>
							</a>
							<a href="#portfolio" className="text-smallTextColor font-semibold text-base border-b border-solid border-smallTextColor">See Portfolio</a>
						</div>
						<p className='flex gap-1 text-headingColor font-medium mt-12 text-[15px] leading-7 sm:pl-14 sm:pr-10'>
							<span className='pt-2 '> <TbApps /> </span>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, praesentium pariatur. Neque laboriosam sit architecto soluta aperiam nulla, consequatur illo!
						</p>
						<div className="flex items-center gap-6 mt-14">
							<span className="text-smallTextColor text-sm font-semibold">Follow Me : </span>
							{/* Icon SOsmed */}
							<span>
								<a href="#" className="text-smallTextColor text-sm font-semibold"><FaInstagram /></a>
							</span>
							<span>
								<a href="#" className="text-smallTextColor text-sm font-semibold"><IoLogoGithub /></a>
							</span>
							<span>
								<a href="#" className="text-smallTextColor text-sm font-semibold"><GrFacebookOption /></a>
							</span>
							<span>
								<a href="#" className="text-smallTextColor text-sm font-semibold"><FaGitlab /></a>
							</span>

						</div>
					</div>
					{/* Herro Image */}
					<div className="basis-1/3 mt-10 sm:mt-0">
						<div className="img-profile flex items-center justify-center">
							<img src={imgHero} alt="" />
						</div>
					</div>

					{/* Content Right */}
					<div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
						<div className="mb-10"></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
