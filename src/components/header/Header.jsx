import React from 'react'
import { BsSend } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
	return (
		<header className="w-full h-[80px] leading-[80px] flex items-center">
			<div className="container">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center gap-[10px]">
						<span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-semibold rounded-full flex items-center justify-center">D</span>

						<div className="leading-[20px]">
							<h3 className="text-xl font-bold text-smallTextColor">Davit</h3>
						</div>
					</div>

					{/* Logo End */}
					{/* menu Start */}
					<div className="menu">
						<ul className='flex items-center gap-10'>
							<li>
								<a className="text-smallTextColor font-semibold" href="#about">About</a>
							</li>
							<li>
								<a className="text-smallTextColor font-semibold" href="#service">Service</a>
							</li>
							<li>
								<a className="text-smallTextColor font-semibold" href="#portfolio">Portfolio</a>
							</li>
							<li>
								<a className="text-smallTextColor font-semibold" href="#contact">Contact</a>
							</li>
						</ul>
					</div>
					{/* menu End */}

					{/* Btn menu */}
					<div className="flex items-center gap-4">
						<button className="flex items-center gap-2 text-smallTextColor font-semibold border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in duration-300">
							Let's Talk
							<BsSend />
						</button>

						<span className='text-2xl text-headingColor md:hidden cursor-pointer'>
							<GiHamburgerMenu />
						</span>
					</div>
				</div>

			</div>

		</header >
	)
}

export default Header
