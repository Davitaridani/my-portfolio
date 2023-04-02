import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
	return (
		<section className="pb-16" id="contact">
			<div className="container">
				<h3 className="text-center font-bold text-[30px] text-2xl text-headingColor mb-12">Contact</h3>
				<div className="flex  gap-4">
					<div className="w-full basis-1/3  bg-white shadow-md px-4 py-7">
						<div className="flex items-center gap-[10px] mb-5">
							<a href="#" className='border-2 border-solid  text-[20px] flex items-center justify-center text-primaryColor border-primaryColor h-9 w-9 rounded-full hover:bg-smallTextColor hover:text-white duration-300 ease-in hover:border-smallTextColor '><MdEmail /></a>
							<div className="">
								<h3 className='text-headingColor text-base leading-4 font-semibold'>Email:</h3>
								<a href='#' className="text-sm text-gray-500 font-medium">davitaridani@gmail.com</a>
							</div>
						</div>
						<div className="flex items-center gap-[10px] mb-5">
							<a href="#" className='border-2 border-solid  text-[20px] flex items-center justify-center text-primaryColor border-primaryColor h-9 w-9 rounded-full hover:bg-smallTextColor hover:text-white duration-300 ease-in hover:border-smallTextColor'><RiWhatsappFill /></a>
							<div className="">
								<h3 className='text-headingColor text-base leading-4 font-semibold'>Whatsapp:</h3>
								<a href="#" className="text-sm text-gray-500 font-medium">+62 821-3994-8735</a>
							</div>
						</div>
						<div className="flex items-center gap-[10px] mb-5">
							<span className='border-2 border-solid  text-[20px] flex items-center justify-center text-primaryColor border-primaryColor h-9 w-9 rounded-full  hover:bg-smallTextColor hover:text-white duration-300 ease-in hover:border-smallTextColor'><MdLocationPin /></span>
							<div className="">
								<h3 className='text-headingColor text-base leading-4 font-semibold'>Location:</h3>
								<p className="text-sm text-gray-500 font-medium">Kec.Balung Kab. Jember, Jawa Timur.</p>
							</div>
						</div>

						<div className="">
							<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d318429.3473594949!2d113.42535445500475!3d-8.200323654166452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTcnMzIuNCJTIDExM8KwMzEnMzguNiJF!5e0!3m2!1sid!2sid!4v1680351907243!5m2!1sid!2sid" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-[340px] h-[250px] border-0'></iframe>
						</div>
					</div>

					<div className="w-full py-5 px-4 bg-white shadow-md">

						<form action="" method="post">

							<input type="text" placeholder='Name' className="border border-gray-300 w-full rounded-[4px]  py-1 pl-[10px] focus:border-sky-500 focus:outline-primaryColor mb-4" />

							<input type="email" placeholder='Email' className="border border-gray-300 w-full rounded-[4px]  py-1 pl-[10px] focus:border-sky-500 focus:outline-primaryColor mb-4" />

							<textarea cols="10" rows="10" placeholder='Message' className="border border-gray-300 w-full rounded-[4px]  py-1 pl-[10px] focus:border-sky-500 focus:outline-primaryColor"></textarea>

							<button type="submit" className=" bg-primaryColor py-2 px-3 rounded-md text-white mt-4 ">Send Message</button>

						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
