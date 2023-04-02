import React from 'react';
import { GrCode } from "react-icons/gr";
import { MdMonitor } from "react-icons/md";
import { imgSkill } from "../../assets/data/dataPortfolio";

const Skill = () => {
	return (
		<section id="skill">
			<div className="container">
				<h3 className="text-center text-[30px] font-bold mb-10">Skills</h3>
				<div className="md:flex flex-none justify-center">
					<div className="w-full mx-12 md:mx-0 mb-12 md:mb-0">
						<h3 className="flex justify-center items-center gap-1 text-center text-2xl font-semibold mb-6"><span><MdMonitor /></span> Front End</h3>
						<div className="grid grid-cols-4 gap-2 md:gap-1">
							{imgSkill[0].frontEnd.map(({ id, img, title, text }) => (
								<div className="text-center mb-4" key={id}>
									<div className="">
										<img src={img} alt="" className="mx-auto flex justify-center h-8 mb-3 object-contain  hover:scale-125 duration-300 ease-in  cursor-pointer animate-pulse" />
									</div>
									<h3 className="font-semibold leading-5 text-base">{title}</h3>
									<p className="text-gray-500 tracking-wide text-sm">{text}</p>
								</div>
							))}
						</div>
					</div>

					<div className="w-full mx-0 md:mx-12">
						<h3 className="flex justify-center items-center gap-1 text-center text-2xl font-semibold mb-6"><span><GrCode /></span> Back End</h3>
						<div className="grid grid-cols-2 gap-2 md:gap-1 md:grid-cols-4">
							{imgSkill[1].backEnd.map((item, index) => (
								<div className="text-center mb-4" key={index}>
									<div className="">
										<img src={item.img} alt="" className="mx-auto h-8 flex justify-center mb-3 object-contain  hover:scale-125 duration-300 ease-in cursor-pointer animate-pulse" />
									</div>
									<h3 className="font-semibold leading-5 text-base">{item.title}</h3>
									<p className="text-gray-500 tracking-wide text-sm">{item.text}</p>
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
