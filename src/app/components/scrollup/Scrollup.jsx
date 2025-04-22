"use client";

import { useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      if (window.scrollY >= 560) {
        scrollUp?.classList.add("show-scroll");
      } else {
        scrollUp?.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#" className="scrollup">
      <i className="bx bx-up-arrow-alt scrollup__icon"></i>

    </a>
  );
};

export default ScrollUp;
