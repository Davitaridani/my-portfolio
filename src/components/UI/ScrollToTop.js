import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const btnToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="btn-scroll-to-top relative">
      <div className="container relative">
        <button
          className="flex items-center justify-center fixed bg-primaryColor rounded-full bottom-7 right-5 md:bottom-10 md:right-[9%] h-8 w-8 md:h-9 md:w-9 shadow-md animate-shake-2"
          onClick={btnToTop}
          style={{ display: showTopBtn ? "block" : "none" }}
        >
          <span className="text-white flex items-center justify-center md:text-[24px]  text-[22px]">
            <MdKeyboardDoubleArrowUp />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;
