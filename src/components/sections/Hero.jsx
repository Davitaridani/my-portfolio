import React, { useEffect } from "react";
import { BsCloudArrowDownFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbApps } from "react-icons/tb";
import imgHero from "../../assets/img/profile.jpg";
import { iconHero } from "../../assets/data/dataPortfolio";
import Imgownload from "../../assets/img/Kosa.pdf";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section className="pt-0" id="home">
			<div className="container pt-14">
				<div className="md:flex items-center justify-between sm:flex-col md:flex-row">
					<div className="w-full md:basis-1/2">
						<h5 className="font-bold text-headingColor  text-[40px] leading-[35px] sm:leading-[45px] mt-5"
							data-aos="fade-right"
							data-aos-duration="2000"
						>I'm Ahmat Davit <br />a <span className='text-primaryColor' data-aos="fade-right"
							data-aos-duration="2000" data-aos-delay="300">Front End Developer</span></h5>
						<div className="flex items-center gap-6 mt-7">
							<a href="mailto:davitaridani@gmail.com" data-aos="fade-up" data-aos-duration="2000"><span className='flex items-center bg-primaryColor text-white font-medium gap-1 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'><HiOutlineMail /> Hire Me</span>
							</a>
							<a href={Imgownload} download className="flex items-center text-smallTextColor font-semibold text-base py-2 px-4 rounded-[8px] border border-solid border-smallTextColor gap-1 hover:border-primaryColor hover:bg-primaryColor hover:text-white ease-in duration-300" data-aos="fade-up" data-aos-duration="2000">  <BsCloudArrowDownFill /> Download CV</a>
						</div>
						<p className='flex gap-1 text-headingColor font-medium mt-12 text-[15px] leading-7 sm:pl-14 sm:pr-10' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300">
							<span className='pt-2'> <TbApps /> </span>
							I can help you build beautiful and attractive web interface <br /> for your projects. So let's talk!
						</p>
						<div className="flex items-center gap-4 mt-14">
							<span className="text-smallTextColor text-sm font-semibold">Follow Me : </span>
							{iconHero.map((item, index) => (
								<span key={index} className='border-solid border-2 border-primaryColor flex items-center justify-center h-[30px] w-[30px] rounded-full hover:bg-primaryColor duration-300 ease-in cursor-pointer group' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay={item.delayAos}>
									<a href={item.link} target="_blank" rel="noreferrer" className="text-smallTextColor duration-300 ease-in group-hover:text-white text-base font-semibold ">{item.icon}</a>
								</span>
							))}
						</div>
					</div>

					<div className="basis-1/3 mt-10 sm:mt-0">
						<div className="img-profile flex items-center justify-center overflow-hidden" data-aos="zoom-in-down" data-aos-duration="2500" data-aos-delay="300">
							<img src={imgHero} alt="" className="rounded-tl-[125px] rounded-tr-[125px] rounded-bl-[25px] rounded-br-[25px] mt-8 animate-shake" />
						</div>
					</div>

					<div className="md:basis-1/12 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
						<div className="mb-10"></div>
					</div>
				</div>
			</div>
		</section >
	)
}

export default Hero
