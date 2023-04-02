import React, { useRef, useEffect } from 'react'
import { BsSend } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import logoProfile from "../../assets/img/profile-about.jpg";

const Header = () => {

	const navLinks = [
		{ path: "#home", display: "Home", active: true, },
		{ path: "#about", display: "About", active: false, },
		{ path: "#skill", display: "Skill", active: false, },
		{ path: "#portfolio", display: "Portfolio", active: false, },
		{ path: "#contact", display: "Contact", active: false, }
	]

	const headerRef = useRef(null)

	const headerSticky = () => {
		window.addEventListener("scroll", () => {
			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				headerRef.current.classList.add("header-sticky")
			} else {
				headerRef.current.classList.remove("header-sticky")
			}
		})
	}

	useEffect(() => {
		headerSticky()
		return window.removeEventListener("scroll", headerSticky)
	}, [])

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
		<header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center ">
			<div className="container">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center gap-[8px]">
						<div className="flex items-center justify-center">
							<img src={logoProfile} alt="" className="h-8 w-8 rounded-full" />
						</div>
						<div className="leading-[20px]">
							<h3 className="text-[22px] font-bold text-smallTextColor">Davit</h3>
						</div>
					</div>

					<div className="menu">
						<ul className='flex items-center gap-10'>
							{navLinks.map((item, index) => (
								<li key={index}>
									<a onClick={handleClick} className="text-smallTextColor font-semibold" href={item.path}>{item.display}</a>
								</li>
							))}
						</ul>
					</div>

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
