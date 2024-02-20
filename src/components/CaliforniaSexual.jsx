import React from "react";
import ButtonMain from "./common/button/ButtonMain";
import Image from "next/image";
import { VectorC } from "./common/Icons";

const CaliforniaSexual = () => {
  return (
    <div className=" mb-20 bg-black py-14 lg:py-[88px] relative overflow-hidden">
      <Image
        loading="lazy"
        width={463}
        height={382}
        src="/assets/images/californiaSexual/CaliforniaBox.png"
        alt="Representation"
        className=" absolute left-[-66px] bottom-[-162px]"
      />
      <Image
        loading="lazy"
        width={147}
        height={147}
        src="/assets/images/californiaSexual/CaliforniaCricle.svg"
        alt="Representation"
        className=" absolute left-12 top-10 hidden lg:block"
      />
      <p
        data-aos="fade-right"
        data-aos-offset="-1000"
        className=" font-Poppins font-black text-[108px] text-white !opacity-5 absolute right-[-80px] top-[-10px] hidden md:block"
      >
        Who Are
      </p>
      <div className=" absolute top-[60%] right-[-3px] hidden sm:block">
        <VectorC />
      </div>
      <div className="container xl:max-w-[1140px] px-5 xl:px-0 mx-auto">
        <div className=" flex flex-col justify-center items-center">
          <h2
            data-aos="fade-up"
            data-aos-offset="-1000"
            className="font-bahnschrift font-light text-white text-4xl md:text-5xl mt-3 text-center max-w-[716px] mx-auto"
          >
            California
            <span className=" text-orange font-bold">
              {" "}
              Sexual Abuse Lawyers{" "}
            </span>
            Who Are Here for You
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="-1000"
            className=" max-w-[868px] mx-auto text-center text-white font-Poppins !opacity-70 mt-6"
          >
            No case is too challenging for our lawyers. When we say that we
            aren’t afraid to stand up to any major institution, we have the
            track record to prove it. The firm has recovered more than $2
            billion dollars on behalf of clients from the nation’s largest
            school districts, religious institutions, municipalities, sports and
            youth organizations and Fortune 500 companies.
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="-1000"
            className=" max-w-[850px] mx-auto text-center text-white font-Poppins !opacity-70 mt-6"
          >
            If you or a loved one is a survivor of sexual violence and abuse,
            please {""}
            <span className=" font-bold text-main opacity-100">
              contact our law offices in Southern California
            </span>{" "}
            {""} for a free, 100% confidential consultation regarding your case.
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="-1000"
            className=" max-w-[868px] mx-auto text-center text-white font-Poppins !opacity-70 mt-6"
          >
            You deserve closure, and any responsible parties deserve justice for
            their despicable actions. Let a trusted California sexual abuse
            lawyer at our firm help you today.
          </p>
          <div data-aos="fade-up" data-aos-offset="-1000" className=" mt-12">
            <ButtonMain
              customStyles="!py-[13px] !px-[24px]"
              type="submit"
              title="Request A Free Consultation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaliforniaSexual;
