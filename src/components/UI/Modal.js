import React from "react";
import portfolios from "../../assets/data/dataPortfolio";
import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

const Modal = ({ actvieID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === actvieID);

  return (
    <div className="w-full h-full fixed lef-0 top-0 z-20 bg-headingColor bg-opacity-40">
      <div className="max-w-[600px] absolute top-1/2 left-1/2 z-30 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-4">
        <div class="img-modal">
          <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
        </div>
        <div className="">
          <h3 className="text-2xl text-headingColor font-bold my-5">
            {portfolio.title}
          </h3>
          <p className="text-[15px] leading-7">{portfolio.description}</p>
          <div class="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-lg font-bold">Technology</h4>
            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-base leading-0"
              >
                {item}
              </span>
            ))}
          </div>

          <div target="_blank" className="flex items-center gap-3 mt-5 mb-6">
            <a
              href={portfolio.siteUrl}
              target="_blank"
              className="flex items-center gap-1 bg-primaryColor rounded-[8px] py-2 px-4 font-medium text-white text-[15px] hover:bg-headingColor ease-in duration-200"
            >
              <span>
                <TbWorldWww />
              </span>
              Demo
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-1 bg-primaryColor rounded-[8px] py-2 px-4 font-medium text-white text-[15px] hover:bg-headingColor ease-in duration-200"
            >
              <span>
                <AiFillGithub />
              </span>
              Source Code
            </a>
          </div>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="w-[25px] h-[25px] rounded-[5px] flex items-center justify-center text-[25px]  font-semibold bg-white absolute top-[25px] right-[25px] leading-0"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
