import React from 'react'
import imgAbout from "../../assets/img/profile-about.jpg";
import { RiInstagramFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const About = () => {

	const dataSosmed = [
		{ icon: <RiInstagramFill /> },
		{ icon: <BsFacebook /> },
		{ icon: <FaTelegramPlane /> },
		{ icon: <RiWhatsappFill /> }
	]



	return (
		<section id="about">
			<div className="container">
				<h1 className="text-center mb-8 font-bold text-3xl">About Me</h1>
				<div className="flex flex-1">
					<div className="w-full basis-1/2 flex items-center justify-center">
						<img src={imgAbout} alt="" className="h-28 w-28 object-contain object-center rounded-full bg-white shadow-md" />
					</div>
					<div className="w-full basis-1/2 ">
						<div className="mb-3">
							<h3 className="text-3xl font-bold text-headingColor leading-8 ">Ahmat Davit</h3>
							<p className="text-xs text-gray-400">Developer & Photographer</p>
						</div>
						<p className="font-medium text-headingColor font-sans mb-5">Hii there, introducing my name is Ahmat Davit Ari Dani. I am Javascript Developer and Designer. I live in Indonesia from Garut, West Java. I am 20 years old and still a student at Siliwangi University, Tasikmalaya. I started coding at 17 years old and I have a lot of experience in development web application such as HTML, CSS, JS, Next Js, React Js, Web Animation and others. Besides that, I also have a hobby about designing especially in Vector and Pixel. So, here I can help you for build your web application and design your project.</p>
						<div className="flex items-center gap-3 ">
							<span className="flex items-center justify-center bg-primaryColor text-white text-xl rounded-full h-9 w-9 hover:bg-smallTextColor hover:text-white duration-300 ease-in ">
								<a href="#" className="">
									<RiInstagramFill />
								</a>
							</span>
							<span className="flex items-center justify-center bg-primaryColor text-white text-xl rounded-full h-9 w-9 hover:bg-smallTextColor hover:text-white duration-300 ease-in cursor-pointer">
								<a href="#">
									<BsFacebook />
								</a>
							</span>
							<span className="flex items-center justify-center bg-primaryColor text-white text-xl rounded-full h-9 w-9 hover:bg-smallTextColor hover:text-white duration-300 ease-in cursor-pointer">
								<a href="#">
									<FaTelegramPlane />
								</a>
							</span>
							<span className="flex items-center justify-center bg-primaryColor text-white text-xl rounded-full h-9 w-9 hover:bg-smallTextColor hover:text-white duration-300 ease-in cursor-pointer">
								<a href="#">
									<RiWhatsappFill />
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
