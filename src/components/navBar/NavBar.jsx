"use client";
// Import necessary modules
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { DropDwonArrow, HeaderCross, MainLogo, OpenNav } from "../common/Icons";
import MobileNav from "./MobileNav";
import { navLinks } from "../common/Helper";

// Define NavBar component
const NavBar = () => {
  // State variables for managing navigation overlay and toggle icon visibility
  const [activeNavOverlay, setActiveNavOverlay] = useState(false);
  const [isToggleIconVisible, setIsToggleIconVisible] = useState(true);

  // Effect to handle body overflow and toggle icon visibility
  useEffect(() => {
    if (activeNavOverlay) {
      document.body.classList.add("overflow-y-hidden"); // Disable vertical scroll when navigation overlay is active
      setIsToggleIconVisible(false); // Hide toggle icon when navigation overlay is active
    } else {
      document.body.classList.remove("overflow-y-hidden"); // Enable vertical scroll when navigation overlay is inactive
      setIsToggleIconVisible(true); // Show toggle icon when navigation overlay is inactive
    }
  }, [activeNavOverlay]);

  // Return JSX for NavBar component
  return (
    <>
      {/* Mobile navigation overlay */}
      <MobileNav
        activeNavOverlay={activeNavOverlay}
        setActiveNavOverlay={setActiveNavOverlay}
      />

      {/* Navigation bar */}
     <nav className="bg-black py-4">
  <div className="container xl:max-w-[1140px] mx-auto px-5 sm:px-3">
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="mt-0">
        <a href="#" className="w-full max-w-[150px] md:max-w-[210px]">
          <MainLogo />
        </a>
      </div>
      {/* Navigation links */}

     <div className="hidden lg:flex gap-7">
  {navLinks.map((value, index) => {
    return (
      <div key={index} className="relative">
        <a
          href="#About"
          className="font-Poppins group hover:stroke-inherit  transition-all ease-in-out duration-200 font-normal text-base text-white"
        >
          <span className="flex justify-center items-center gap-1">
            {value.title}
            {/* Check if the current link is not "Home", "Results", or "Contact" */}
            {value.title !== "Home" && value.title !== "Results" && value.title !== "Contact" && (
              <span className="block">
                <DropDwonArrow />
              </span>
            )}
          </span>
          {value.title !== "Home" && value.title !== "Results" && value.title !== "Contact" &&  (
            <div>
              {value.option.map((subValue, i) => {
                return (
                  <span
                    key={i}
                    className="group-hover:opacity-100 absolute opacity-0 transition-all ease-in-out duration-200 flex flex-col bg-black top-8 py-2 px-2 rounded-md"
                  >
                    <a href="#">{subValue.links}</a>
                    <a href="#">{subValue.links}</a>
                    <a href="#">{subValue.links}</a>
                  </span>
                );
              })}
            </div>
          )}
        </a>
      </div>
    );
  })}
</div>

      {/* Button */}

      {/* Toggle button for mobile */}
      <div className="flex items-center lg:hidden relative z-[200] sm:me-0 ">
        <div className="border_gradient h-[27px] mx-6 lg:mx-3"></div>
        <button
          onClick={() => setActiveNavOverlay(!activeNavOverlay)}
          type="button"
          className="inline-flex items-center justify-center rounded-md w-[33px]"
          aria-label="toggle-button"
        >
          {isToggleIconVisible ? <HeaderCross /> : <OpenNav />}
        </button>
      </div>
    </div>
  </div>
</nav>

    </>
  );
};

// Export NavBar component
export default NavBar;
