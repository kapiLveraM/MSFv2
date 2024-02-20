import React from "react";
import { AttorneysBigC, AttorneysSmallC } from "./common/Icons";
import Image from "next/image";

const Attorneys = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="-1000"
      className=" mt-16 relative z-10 "
    >
      <div className="container xl:max-w-[1140px] mx-auto  px-5 xl:px-0 relative overflow-hidden">
        <div className=" absolute top-11 hidden lg:block">
          <AttorneysBigC />
        </div>
        <div className=" absolute bottom-11 right-3 hidden lg:block">
          <AttorneysSmallC />
        </div>
        <Image
          loading="lazy"
          width={331}
          height={173}
          src="/assets/images/Attorneys/AttorneyWhiteLineBox.png"
          alt="Representation"
          className=" absolute left-3 bottom-0 h-44 max-w-60  hidden lg:block"
        />
        <Image
          loading="lazy"
          width={331}
          height={173}
          src="/assets/images/Attorneys/AttorneyWhiteLineBox.png"
          alt="Representation"
          className=" absolute right-[-30px] top-[-20px] h-44 max-w-60 hidden lg:block"
        />
        <div className=" bg-main py-11 rounded flex flex-col justify-center items-center px-4">
          <h2 className=" font-bahnschrift text-4xl lg:text-5xl text-white max-w-[700px] mx-auto text-center font-light">
            Attorneys:
            <span className=" font-bold"> Refer Your Sexual Abuse </span> Case
            to Us
          </h2>
          <p className=" font-Poppins font-normal text-base text-white max-w-[720px] mx-auto textce mt-4 opacity-70 text-center">
            Give us a call regarding the potential referral of your sexual abuse
            case. We will provide, free-of charge, a thoughtful and reasoned
            evaluation of your potential or pending case.
          </p>
          <button className=" font-Poppins font-medium text-lg bg-white py-[18px] px-9 text-black rounded-[500px] mt-[42px] hover:bg-main hover:border hover:border-white hover:text-white border-main hover:shadow-lg  border hover:shadow-white transition-all ease-in-out duration-300 ">
            Join Our Team Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attorneys;
