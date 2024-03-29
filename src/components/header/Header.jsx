import React, { useState } from 'react';
import logoProfile from "../../assets/img/profile-about.webp";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Header = () => {

	const [toggle, setToggle] = useState(false)

	const handleClick = e => {
		e.preventDefault();

		const targetAttr = e.target.getAttribute("href");
		const locationTarget = document.querySelector(targetAttr).offsetTop;

		window.scrollTo({
			top: locationTarget - 80,
			left: 0,
		})
	}

	const navLinks = [
		{ path: "#home", display: "Home", active: true, },
		{ path: "#about", display: "About", active: false, },
		{ path: "#skill", display: "Skill", active: false, },
		{ path: "#portfolio", display: "Portfolio", active: false, },
		{ path: "#contact", display: "Contact", active: false, }
	]

	return (
		<header className="w-full md:h-[70px] h-[65px] sticky backdrop-blur-sm backdrop-brightness-100 bg-white/40 top-0 z-[999] shadow-md md:leading-[70px] leading-[65px] flex items-center">
			<div className="container">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-[8px]">
						<div className="flex items-center justify-center">
							<img src={logoProfile} alt="" className="h-8 w-8 rounded-full" />
						</div>
						<div className="leading-[20px]">
							<h3 className="text-[21px] md:text-[25px] font-bold text-smallTextColor">Davit</h3>
						</div>
					</div>

					<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
						{navLinks.map((item, index) => (
							<li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
								<a onClick={handleClick} href={`${item.path}`} className=" text-smallTextColor font-semibold">
									{item.display}
								</a>
							</li>
						))}
					</ul>

					<div className="sm:hidden  flex flex-1 justify-end items-center">
						<button className='text-[28px] object-contain text-headingColor duration-400 ease-in' onClick={() => setToggle((prev) => !prev)}>{toggle ? <MdClose /> : <HiMenuAlt3 />}</button>
						<div className={`${toggle ? "flex" : "hidden"} p-[14px] bg-gradient  text-white absolute top-16 right-0 mx-4 my-[18px] min-w-[140px] bg-fixed rounded-xl sidebar duration-500 ease-in`}>
							<ul className='list-none flex flex-col justify-end items-center flex-1'>
								{navLinks.map((item, index) => (
									<li key={item.id} className={`font-semibold text-white leading-10 cursor-pointer text-[15px] ${index === navLinks.length - 1 ? "mr-0" : "mb-0"}`}>
										<a key={index} href={`${item.path}`} className="text-white ">
											{item.display}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* <div className="menu">
						<ul className='flex items-center gap-10'>
							{navLinks.map((item, index) => (
								<li key={index}>
									<a onClick={handleClick} className="text-smallTextColor font-semibold" href={item.path}>{item.display}</a>
								</li>
							))}
						</ul>
					</div> */}

					{/* <div className="flex items-center gap-4">
						<button className="flex items-center gap-2 text-smallTextColor font-semibold border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in duration-300">
							Let's Talk
							<BsSend />
						</button>


						<span className='text-2xl text-headingColor md:hidden cursor-pointer'>
							<GiHamburgerMenu />
						</span>
					</div> */}


				</div>
			</div>
		</header >
	)
}

export default Header
