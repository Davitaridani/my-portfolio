import React, { useState, useEffect } from "react";
import { imgPortfolio } from "../../assets/data/dataPortfolio";
// import Modal from "../UI/Modal";
import { TbWorldWww } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {

	const [nextItems, setNextItems] = useState(6)
	const [portfolio, setPortfolio] = useState(imgPortfolio)
	const [selectTab, setSelectTab] = useState("all")
	// const [showModal, setShowModal] = useState(false)
	// const [activeID, setActiveID] = useState(null)


	const handleLoadMore = () => {
		setNextItems(prev => prev + 3)
	}

	// const handleShowModal = id => {
	// 	setShowModal(true)
	// 	setActiveID(id)
	// }

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
		<section id="portfolio">
			<div className="container">
				<div className="flex items-center justify-between flex-wrap">
					<div className="mb-7 sm:mb-0">
						<h3 className='text-headingColor text-[30px] font-bold'>My Project</h3>
					</div>
					<div className="flex gap-3">
						<button onClick={() => setSelectTab("all")} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">All</button>
						<button onClick={() => setSelectTab("Front End")} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">Front End</button>
						<button onClick={() => setSelectTab("UI/UX")} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">UI/UX</button>
					</div>
				</div>

				<div className="flex items-center gap-4 flex-wrap mt-12 overflow-hidden">
					{portfolio?.slice(0, nextItems)?.map((portfolio, index) => (
						<div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.3%] relative z-[1]  " key={index}>
							<div className="img-portfolio overflow-hidden">
								<img src={portfolio.img} alt="portfolio" className="rounded-[8px] group-hover:scale-110 ease-in-out duration-500 cursor-pointer" />
							</div>
							<div className="p-3">
								<h3 className="text-[20px] font-semibold mb-4">{portfolio.title}</h3>
								<div className="gap-2 flex items-center flex-wrap">
									<h3 className="text-[15px] font-medium">Technology:</h3>
									{portfolio.technologies.map((item, index) => (
										<span
											key={index}
											className="bg-gray-200 py-[2px] px-[4px] rounded-[5px] text-[12px] leading-0 flex items-center"
										>{item}</span>
									))}
								</div>

								{/* <div className="flex items-center gap-3 mt-5 mb-6">
									<a
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1 bg-primaryColor rounded-[8px] py-2 px-3 font-medium text-white text-sm hover:bg-headingColor ease-in duration-200" href="#"><span><TbWorldWww /></span> Demo</a>

									<a
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1 bg-primaryColor rounded-[8px] py-2 px-3 font-medium text-white text-sm hover:bg-headingColor ease-in duration-200" href="#"><span><AiFillGithub /></span> Source Code</a>
								</div> */}

								{/* <div className="flex items-center gap-3 mt-5 mb-6">
									{portfolio.siteUrl.map(item => (

										<a
											target="_blank"
											rel="noreferrer"
											className="flex items-center gap-1 bg-primaryColor rounded-[8px] py-2 px-3 font-medium text-white text-sm hover:bg-headingColor ease-in duration-200" href={item.demo}><TbWorldWww /> Demo</a>
									))}

									{portfolio.siteUrl.map(data => {
										<a
											href={data.sourceCode}
											target="_blank"
											rel="noreferrer"
											className="flex items-center gap-1 bg-primaryColor rounded-[8px] py-2 px-3 font-medium text-white text-[15px] hover:bg-headingColor ease-in duration-200"
										><span><AiFillGithub /></span>Source Code</a>
									})}

								</div> */}

								<div className="flex items-center gap-3 mt-5 mb-6">
									<a
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1 bg-primaryColor rounded-[8px] py-2 px-3 font-medium text-white text-sm hover:bg-headingColor ease-in duration-200" href={portfolio.demo}><TbWorldWww /> Demo
									</a>

									<a
										href={portfolio.sourceCode}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1 bg-primaryColor rounded-[8px] py-2 px-3 font-medium text-white text-sm hover:bg-headingColor ease-in duration-200"
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
