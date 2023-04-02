import React from 'react';
import { BsCloudArrowDownFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbApps } from "react-icons/tb";
import imgHero from "../../assets/img/profile.jpg";
import { iconHero } from "../../assets/data/dataPortfolio";

import Imgownload from "../../assets/img/Kosa.pdf";

const Hero = () => {

	return (
		<section className="pt-0" id="home">
			<div className="container pt-14">
				<div className="md:flex items-center justify-between sm:flex-col md:flex-row">
					{/* Content Left */}
					<div className="w-full md:basis-1/2">
						<h5 className="font-bold text-headingColor text-[40px] leading-[35px] sm:leading-[45px] mt-5">I'm Ahmat Davit <br />a <span className='text-primaryColor'>Front End Developer</span></h5>
						<div className="flex items-center gap-6 mt-7">
							<a href="mailto:davitaridani@gmail.com" ><span className='flex items-center bg-primaryColor text-white font-medium gap-1 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'><HiOutlineMail /> Hire Me</span>
							</a>
							<a href={Imgownload} download className="flex items-center text-smallTextColor font-semibold text-base py-2 px-4 rounded-[8px] border border-solid border-smallTextColor gap-1 hover:border-primaryColor hover:bg-primaryColor hover:text-white ease-in duration-300"> <BsCloudArrowDownFill /> Download CV</a>
						</div>
						<p className='flex gap-1 text-headingColor font-medium mt-12 text-[15px] leading-7 sm:pl-14 sm:pr-10'>
							<span className='pt-2'> <TbApps /> </span>
							I can help you build beautiful and attractive web interface <br /> for your projects. So let's talk!
						</p>
						<div className="flex items-center gap-4 mt-14">
							<span className="text-smallTextColor text-sm font-semibold">Follow Me : </span>
							{iconHero.map((item, index) => (
								<span className='border-solid border-2 border-primaryColor flex items-center justify-center h-[30px] w-[30px] rounded-full hover:bg-primaryColor duration-300 ease-in cursor-pointer group' key={index}>
									<a href={item.link} target="_blank" rel="noreferrer" className="text-smallTextColor duration-300 ease-in group-hover:text-white text-base font-semibold ">{item.icon}</a>
								</span>
							))}
						</div>
					</div>

					<div className="basis-1/3 mt-10 sm:mt-0">
						<div className="img-profile flex items-center justify-center">
							<img src={imgHero} alt="" className="rounded-tl-[125px] rounded-tr-[125px] rounded-bl-[25px] rounded-br-[25px] mt-8" />
						</div>
					</div>

					<div className="md:basis-1/12 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
						<div className="mb-10"></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
