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
          className="flex items-center justify-center fixed bg-primaryColor rounded-full bottom-10 right-[9%] h-9 w-9 shadow-md animate-shake-2"
          onClick={btnToTop}
          style={{ display: showTopBtn ? "block" : "none" }}
        >
          <span className="text-white flex items-center justify-center text-[24px]">
            <MdKeyboardDoubleArrowUp />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;
