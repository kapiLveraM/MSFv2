import React from "react";
import NavBar from "./navBar/NavBar";
import ButtonMain from "./common/button/ButtonMain";
import Image from "next/image";
import { HeroCircle, HeroVecto, VectoVideo } from "./common/Icons";

const Hero = () => {
  return (
    <div className=" bg-black pb-14 relative overflow-hidden">
      <NavBar />
      <div className=" absolute bottom-5 hidden md:block">
        <HeroCircle />
      </div>
      <div className="absolute top-[23%] hidden md:block">
        <HeroVecto />
      </div>
      <div className=" bg-hero bg-cover bg-no-repeat bg-[100%_100%] overflow-hidden">
        <div className="container xl:max-w-[1140px] mx-auto px-5 sm:px-3 mt-20 md:mt-[106px]">
          <div className=" relative">
            <h1 className="font-bahnschrift font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[122%] lg:leading-[96px] max-w-[906px] relative z-10">
              America’s Leading
              <span className=" font-light text-orange"> Sexual Abuse</span> Law
              Firm
            </h1>
            <Image
              width={121}
              height={121}
              src="/assets/images/hero/DeliveringJustice.svg"
              alt="Video"
              className=" absolute top-0 right-[72px] hidden md:block"
            />
            <Image
              width={280}
              height={2}
              src="/assets/images/hero/LineBig.svg"
              alt="Video"
              className=" absolute top-[50px] right-[130px]"
            />
          </div>
          <div className=" flex flex-wrap flex-col-reverse md:flex-row mt-9 items-center">
            <div className=" md:w-6/12 lg:w-5/12 mt-9 md:mt-0 relative">
              <p className=" font-Poppins text-base text-white opacity-70 md:max-w-[386px]">
                We are one of the nation’s leading law firms for representing
                survivors of sexual violence. our renowned sexual abuse
                attorneys are not afraid to stand up to any institution.
              </p>
              <Image
                width={193}
                height={4}
                src="/assets/images/hero/LineBig.svg"
                alt="Video"
                className=" absolute  hidden md:block md:top-[120px] left-0"
              />
              <div className=" mt-8 md:mt-16">
                <ButtonMain type="submit" title="Request A Free Consultation" />
              </div>
            </div>
            <div className=" w-full md:w-6/12 lg:w-7/12 relative">
             
                <iframe
                  src="assets/video/crescent_moon.mp4"
                  className="w-full max-w-[707px] min-h-60 sm:min-h-96 relative z-10 "
                />
             
              <div className="absolute top-[-9px] right-[-24px] hidden xl:block">
                <VectoVideo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
