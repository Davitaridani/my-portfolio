import React, { useEffect } from 'react';
import { GrCode } from "react-icons/gr";
import { MdMonitor } from "react-icons/md";
import { imgSkill } from "../../assets/data/dataPortfolio";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section className='pt-0 md:pt-12' id="skill">
			<div className="container">
				<h3 className="text-center text-[28px] md:text-[30px] font-bold mb-7 md:mb-10 text-headingColor">Skills</h3>
				<div className="md:flex flex-none justify-center">
					<div className="w-full mx-0 lg:mx-12 md:mx-0 mb-12 md:mb-0">
						<h3 className="flex justify-center items-center gap-1 text-center text-[24px] md:text-2xl font-semibold mb-6 text-headingColor"><span><MdMonitor /></span> Front End</h3>
						<div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-1">
							{imgSkill[0].frontEnd.map(({ id, img, title, text, delayAos }) => (
								<div className="text-center mb-4" key={id}>
									<div data-aos="zoom-in" data-aos-duration="2000" data-aos-offset="150" data-aos-delay={delayAos}>
										<img src={img} alt="icon" className="mx-auto flex justify-center h-8 mb-3 object-contain  hover:scale-125 duration-300 ease-in  cursor-pointer animate-pulse" />
									</div>
									<h3 className="font-semibold leading-5 text-base">{title}</h3>
									{/* <p className="text-gray-500 tracking-wide text-sm">{text}</p> */}
								</div>
							))}
						</div>
					</div>

					<div className="w-full mx-0 md:mx-12">
						<h3 className="flex justify-center items-center gap-1 text-center text-2xl font-semibold mb-6 text-headingColor"><span><GrCode /></span> Back End</h3>
						<div className="grid grid-cols-2 gap-2 md:gap-1 md:grid-cols-4">
							{imgSkill[1].backEnd.map((item, index) => (
								<div className="text-center mb-4" key={index}>
									<div className="">
										<img src={item.img} alt="" className="mx-auto h-8 flex justify-center mb-3 object-contain  hover:scale-125 duration-300 ease-in cursor-pointer animate-pulse" />
									</div>
									<h3 className="font-semibold leading-5 text-base">{item.title}</h3>
									{/* <p className="text-gray-500 tracking-wide text-sm">{item.text}</p> */}
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
