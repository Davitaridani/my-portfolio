import React, { useEffect } from 'react';
import { BsSend } from "react-icons/bs";
import { qualification } from "../../assets/data/dataPortfolio";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

	useEffect(() => {
		AOS.init();
	}, []);

	const handleClick = e => {
		e.preventDefault();

		const targetAttr = e.target.getAttribute("href");
		const locationTarget = document.querySelector(targetAttr).offsetTop;

		window.scrollTo({
			top: locationTarget - 80,
			left: 0,
		})
	}

	return (
		<section className='pt-8 md:pt-12' id="about">
			<div className="container overflow-hidden">
				<h1 className="text-center mb-8 font-bold text-[28px] md:text-3xl text-headingColor">About Me</h1>
				<div className="block md:flex">
					<div className="w-full basis-1/2">
						<h3 className='text-[24px] md:text-3xl font-bold text-headingColor leading-8 mb-4 md:mb-6' data-aos="fade-right"
							data-aos-duration="2000">Qualification</h3>
						<div className="h-[250px] overflow-y-auto p-2 scrollbar-hide mb-8 md:mb-0">
							<ol className='relative border-l border-headingColor' data-aos="fade-right"
								data-aos-duration="2500" data-aos-delay="250">
								{qualification.map((item, index) => (
									<li className='mb-4 md:mb-5 ml-4' key={index} >
										<div className='absolute w-3 h-3 rounded-full mt-1 -left-1.5 border-2 bg-primaryColor' >
										</div>
										<h3 className="text-headingColor font-semibold text-sm">{item.year}</h3>
										<p className="text-base md:text-lg font-bold leading-5 -headingColor">{item.school}</p>
										<span className="font-medium text-[15px] text-gray-500">{item.text}</span>
									</li>
								))}
							</ol>
						</div>
					</div>

					<div className="basis-1/2">
						<div className="mb-3" data-aos="fade-left"
							data-aos-duration="2000">
							<h3 className="text-[24px] md:text-3xl font-bold text-headingColor leading-6 md:leading-8">Ahmat Davit</h3>
							<p className="text-xs text-gray-400" data-aos="fade-left"
								data-aos-duration="2500">Developer & Photographer</p>
						</div>
						<p className="font-medium text-[15px] md:text-base  text-headingColor font-sans mb-7" data-aos="fade-left"
							data-aos-duration="2500" data-aos-delay="250">Hii, introduce my name is Ahmat Davit Ari Dani. I am a Front End Developer and Photographer. I graduated from the Jember State Polytechnic campus in 2022 and now I am participating in a fullstack developer bootcamp at Binar Academy from February to August 2023. I started coding at the beginning of college and I have experience in developing web applications such as Html, Css, Scss, Js, Bootstrap, Tailwind, React, Redux, RestApi, Web Animation and other web tools. Apart from that, I also have freelance photography work. So, here I can help you build your web interface and design your project.</p>
						<a onClick={handleClick} href='#contact' className='flex items-center gap-1 bg-primaryColor  max-w-fit text-[15px] text-white font-medium rounded-[5px] py-2 px-3 hover:bg-smallTextColor hover:text-white duration-200 ease-in'><span><BsSend /></span> Contact me</a>
						<div className="flex items-center gap-3">
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default About
