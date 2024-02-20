"use client";
import React, { useState } from "react";
import NavBar from "./navBar/NavBar";
import ButtonMain from "./common/button/ButtonMain";

import Image from "next/image";
import { HeroCircle, HeroVecto, VectoVideo } from "./common/Icons";

const Hero = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false); // State to track if the video is playing

  // Function to handle video play/pause
  const videoPlayHandler = () => {
    if (!isVideoPlaying) {
      setVideoPlaying(true);
      const video = document.getElementById("videoElement");
      if (video) {
        video.play(); // Playing the video
      }
    } else {
      setVideoPlaying(false); // Pausing the video
    }
  };
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
            <h1
              data-aos="fade-right"
              data-aos-offset="100"
              className="font-bahnschrift font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[122%] lg:leading-[96px] max-w-[906px] relative z-10"
            >
              America’s Leading
              <span className=" font-light text-orange"> Sexual Abuse</span> Law
              Firm
            </h1>
            <Image
              width={121}
              height={121}
              src="/assets/images/hero/DeliveringJustice.svg"
              alt="Video"
              className=" absolute top-0 right-[72px] hidden md:block rotate_keyFram"
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
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              className=" md:w-6/12 lg:w-5/12 mt-9 md:mt-0 relative"
            >
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
              <div
                data-aos="fade-up"
                className="relative rounded overflow-hidden xl:z-30"
              >
                <video
                  id="videoElement"
                  onClick={videoPlayHandler}
                  controls
                  className="w-full h-full relative !z-[2]"
                  poster={"/assets/images/hero/Hero.webp"}
                >
                  <source
                    src={"assets/video/crescent_moon.mp4"}
                    type="video/mp4"
                  />
                </video>
                {/* Play button */}
                {!isVideoPlaying && (
                  <div className="absolute top-0 left-0 w-full h-full">
                    <img
                      src={"/assets/images/hero/PlayButton.svg"}
                      alt="play button"
                      className="sm:w-16 sm:h-16 w-10 h-10 object-contain cursor-pointer absolute translate-x-[-50%] translate-y-[-50%] top-[50%] start-[50%] z-50"
                      onClick={videoPlayHandler}
                    />
                    {/* Image */}
                    <Image
                      src="/assets/images/hero/Hero.webp"
                      width={707}
                      height={378}
                      alt="line"
                      sizes="100vw"
                      loading="lazy"
                      className="w-full !z-20 absolute h-full"
                    />
                  </div>
                )}
              </div>
              <div className="absolute top-[-9px] right-[-24px] hidden xl:block !z-0">
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
