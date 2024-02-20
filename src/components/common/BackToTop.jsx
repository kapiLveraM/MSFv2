"use client";
import React, { useState, useEffect } from "react";
import { BackTop } from "./Icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={` back_to_top fixed right-6 flex items-center justify-center bottom-6 p-3  bg-main  text-white rounded-full !z-50 ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
   <BackTop/>
    </button>
  );
};

export default BackToTop;
