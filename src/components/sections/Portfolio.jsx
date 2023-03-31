import React, { useState, useEffect } from "react";
import data from "../../assets/data/dataPortfolio";
import Modal from "../UI/Modal";

const Portfolio = () => {

	const [nextItems, setNextItems] = useState(6)
	const [portfolio, setPortfolio] = useState(data)
	const [selectTab, setSelectTab] = useState("all")
	const [showModal, setShowModal] = useState(false)
	const [activeID, setActiveID] = useState(null)



	const handleLoadMore = () => {
		setNextItems(prev => prev + 3)
	}

	const handleShowModal = id => {
		setShowModal(true)
		setActiveID(id)
	}

	useEffect(() => {
		if (selectTab === "all") {
			setPortfolio(data)
		} else if (selectTab === "Front End") {
			const filterData = data.filter(item => item.category === "Front End")
			setPortfolio(filterData)
		} else if (selectTab === "UI/UX") {
			const filterData = data.filter(item => item.category === "UI/UX")
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

				<div className="flex items-center gap-4 flex-wrap mt-12">

					{portfolio?.slice(0, nextItems)?.map((portfolio, index) => (
						<div className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.3%] relative z-[1]" key={index}>
							<div className="img-portfolio">
								<img src={portfolio.imgUrl} alt="portfolio" className="rounded-[8px]" />
							</div>
							<div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
								<div className='w-full h-full flex items-center justify-center'>
									<button onClick={() => handleShowModal(portfolio.id)} className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-medium ease-in duration-300">See Detail</button>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-8">
					{
						nextItems < portfolio.length && data.length > 6 &&
						<button onClick={handleLoadMore} className="text-white bg-smallTextColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-medium ease-in duration-300">Load More</button>
					}
				</div>
			</div>

			{
				showModal && <Modal setShowModal={setShowModal} actvieID={activeID} />
			}
		</section>
	)
}

export default Portfolio
