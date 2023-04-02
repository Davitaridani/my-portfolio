import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { RiFacebookFill } from "react-icons/ri";
import { RiLinkedinBoxLine } from "react-icons/ri"
import { AiFillGithub } from "react-icons/ai"
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {

	const dataIcon = [

		{ icon: <FiInstagram /> },
		{ icon: <RiFacebookFill /> },
		{ icon: <RiLinkedinBoxLine /> },
		{ icon: <AiFillGithub /> },
		{ icon: <SiWhatsapp /> }
	]
	return (
		<footer className="bg-headingColor pt-12 pb-7 " id="footer">
			<div className="container">
				<div className="flex mb-10 max-w-[80%] mx-auto">

					<div className="basis-1/3">
						<h3 className='text-white text-[25px] font-semibold'>Davit</h3>
						<p>Front End Developer </p>
					</div>

					<div className="basis-1/3">
						<h3 className='text-slate-400 text-[17px] font-semibold mb-3'>Links</h3>
						<ul className="text-slate-400 text-sm"	>
							<li className='mb-2'>
								<a href="">About</a>
							</li>
							<li className='mb-2'>
								<a href="">Skill</a>
							</li>
							<li className='mb-2'>
								<a href="">Portfolio</a>
							</li>
							<li className='mb-2'>
								<a href="">Contact</a>
							</li>
						</ul>
					</div>

					<div className="">
						<h3 className='mb-3'>Follow Me:</h3>
						<div className="flex items-center justify-center gap-3 mb-3">
							{dataIcon.map((item, index) => (
								<div key={index}>
									<a href='#' className='text-gray-300 text-[17px] flex gap-4 border border-solid h-[35px] w-[35px] justify-center items-center rounded-full hover:bg-slate-300 hover:text-headingColor duration-200 ease-in'>
										{item.icon}
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
				<p className="text-gray-400 text-sm tracking-wide text-center">&copy; Copyright Ahmat Davit. All rights reserved. </p>
			</div>
		</footer >
	)
}

export default Footer
