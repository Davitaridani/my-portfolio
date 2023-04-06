import React, { useState, useEffect } from "react";
import { imgPortfolio } from "../../assets/data/dataPortfolio";
import { TbWorldWww } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {

	const [nextItems, setNextItems] = useState(6)
	const [portfolio, setPortfolio] = useState(imgPortfolio)
	const [selectTab, setSelectTab] = useState("all")

	const handleLoadMore = () => {
		setNextItems(prev => prev + 3)
	}

	useEffect(() => {
		AOS.init();
	}, []);

	useEffect(() => {
		if (selectTab === "all") {
			setPortfolio(imgPortfolio)
		} else if (selectTab === "Front End") {
			const filterData = imgPortfolio.filter(item => item.category === "Front End")
			setPortfolio(filterData)
		} else if (selectTab === "UI/UX") {
			const filterData = imgPortfolio.filter(item => item.category === "UI/UX")
			setPortfolio(filterData)
		}
	}, [selectTab])

	return (
		<section className="py-0 md:pt-12" id="portfolio">
			<div className="container">
				<div className="md:flex flex items-center justify-between md:flex-wrap">
					<div className="md:mb-7 sm:mb-0 ">
						<h3 className='text-headingColor text-[28px] text-3xl font-bold'>My Project</h3>
					</div>
					<div className="flex gap-[5px] md:gap-3">
						<button onClick={() => setSelectTab("all")} className="text-smallTextColor border border-solid border-smallTextColor text-sm md:text-base py-[5px] px-[8px] md:py-2 md:px-4 rounded-[8px]">All</button>
						<button onClick={() => setSelectTab("Front End")} className="text-smallTextColor border border-solid border-smallTextColor text-sm md:text-base py-[5px] px-[8px] md:py-2 md:px-4 rounded-[8px]">Front End</button>
						<button onClick={() => setSelectTab("UI/UX")} className="text-smallTextColor border border-solid border-smallTextColor text-sm md:text-base py-[3px] px-[5px] md:py-2 md:px-4 rounded-[8px]">Back End</button>
					</div>
				</div>

				<div className="flex items-center gap-4 flex-wrap mt-12 overflow-hidden">
					{portfolio?.slice(0, nextItems)?.map((portfolio, index) => (
						<div key={index} className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.3%] relative z-[1]" data-aos="fade-up" data-aos-duration="1500" data-aos-delay={portfolio.delayAos} data-aos-offset="200">
							<div className="img-portfolio overflow-hidden">
								<img src={portfolio.img} alt="portfolio" className="rounded-[8px] group-hover:scale-110 ease-in-out duration-500 cursor-pointer mb-2 md:mb-1 h-auto w-full md:h-56" />
							</div>
							<div className="p-3">
								<h3 className="text-[17px] md:text-[20px] font-semibold md:mb-4 mb-2 text-headingColor">{portfolio.title}</h3>
								<div className="gap-2 flex items-center flex-wrap ">
									<h3 className="text-[15px] font-medium text-headingColor">Technology:</h3>
									{portfolio.technologies.map((item, index) => (
										<span
											key={index}
											className="bg-gray-200 py-[2px] px-[4px] rounded-[5px] text-[12px] leading-0 flex items-center"
										>{item}</span>
									))}
								</div>

								<div className="flex items-center gap-3 my-6 md:mt-5 md:mb-6">
									<a
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1 bg-primaryColor rounded-[8px] py-[6px] px-[9px] md:py-2 md:px-3 font-medium text-white text-[13px] md:text-sm hover:bg-smallTextColor ease-in duration-200" href={portfolio.demo}><TbWorldWww /> Demo
									</a>

									<a
										href={portfolio.sourceCode}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1 bg-primaryColor rounded-[8px] py-[6px] px-[9px] md:py-2 md:px-3 font-medium text-white text-[13px] md:text-sm hover:bg-smallTextColor ease-in duration-200"
									><span><AiFillGithub /></span>Source Code
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-8">
					{nextItems < portfolio.length && imgPortfolio.length > 6 &&
						<button onClick={handleLoadMore} className="text-white bg-smallTextColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-medium ease-in duration-300">Load More</button>
					}
				</div>
			</div >
			{/* {
				showModal && <Modal setShowModal={setShowModal} actvieID={activeID} />
			} */}
		</section >
	)
}

export default Portfolio
