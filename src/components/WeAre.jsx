"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import {
  CommonVecto,
  CommonVectorDot,
  SliderArrowBottom,
  SliderArrowTop,
  WeAreImageDot,
} from "./common/Icons";

const WeAre = () => {
  const WhyWeAreSlider = {
    dots: true,
    arrow: false,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    vertical: true,
    autoplay: false,
    autoplaySpeed: 3000,
    customPaging: function (i) {
      return <span> {i + 1}</span>;
    },
  };
  return (
    <div className="relative overflow-hidden pt-11 sm:pt-20 lg:pt-[107px]">
      <p
        data-aos-offset="100"
        data-aos="fade-left"
        className=" font-Poppins font-black text-[108px] text-main !opacity-5 absolute right-[-260px] top-[-70%] hidden md:block"
      >
        WHY WE ARE
      </p>
      <div className=" container xl:max-w-[1140px] mx-auto xl:px-0 px-5">
        <div data-aos="fade-right">
          <div className=" flex items-end justify-center">
            <CommonVecto />
            <p className=" text-lg font-Poppins text-main font-medium leading-none ms-2">
              WHY WE ARE
            </p>
          </div>
          <h2 className="font-bahnschrift font-light text-black text-4xl md:text-5xl mt-3 text-center">
            California
            <span className=" text-orange font-bold"> Sexual Abuse </span>
            Attorneys
          </h2>
        </div>
        <div className="flex flex-wrap pt-7 lg:pt-12 lg:justify-between justify-center">
          <div
            data-aos="fade-up"
            data-aos-offset="-1000"
            className="lg:w-6/12 sm:w-8/12 w-full lg:mt-0 mt-12 z-20 relative lg:mb-0 mb-5"
          >
            <Image
              src="/assets/images/weAre/WeAre.webp"
              width={490}
              height={460}
              className="w-full lg:max-w-[540px]"
              alt="women"
              loading="lazy"
              sizes="100vw"
            />
            <span className=" absolute top-[-7%] start-[-7%] lg:block hidden">
              <WeAreImageDot />
            </span>
          </div>
          <div
            data-aos="fade-down-left"
            data-aos-offset="-1000"
            className="lg:w-6/12 lg:px-3 relative w-full"
          >
            <div className=" absolute right-[-51px] top-[18%] xl:block hidden">
              <SliderArrowTop />
            </div>
            <div className=" absolute right-[-51px] bottom-[23%] xl:block hidden">
              <SliderArrowBottom />
            </div>
            {/* slider */}
            <Slider
              {...WhyWeAreSlider}
              className="w-full lg:overflow-[unset] WhyWeAreSlider"
            >
              <div>
                <p className="font-Bahnschrift font-bold text-2xl text-black">
                  Nationally Recognized for Representing Sexual Abuse Survivors
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Manly, Stewart & Finaldi is regarded as America’s leading law
                  firm for sexual abuse cases. Our founder and managing partner,{" "}
                  <span className="text-orange font-bold">
                    attorney John C.
                  </span>{" "}
                  Manly, has been successfully representing sexual abuse victims
                  for over 20 years. He has been included in Super Lawyers® and
                  named to California’s Top 100 Attorneys by the Los Angeles
                  Daily Journal.
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Victim’s advocate and California sexual abuse lawyer John
                  Manly understands that sexual abuse is an ongoing crisis and
                  has devoted himself to becoming a national leader in the legal
                  battle against these brutal crimes. As a firm that exclusively
                  handles sexual abuse cases, our California law firm offers
                  experienced representation to obtain justice for sexual abuse
                  survivors, harassment, and discrimination.
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Manly Stewart & Finaldi is currently investigating alleged{" "}
                  <span className="text-orange font-bold">
                    sexual abuse by Dr. Robert E. Anderson at the University of
                    Michigan.
                  </span>{" "}
                  Contact our firm today if you were affected.
                </p>
              </div>
              <div>
                <p className="font-Bahnschrift font-bold text-2xl text-black">
                  Nationally Recognized for Representing Sexual Abuse Survivors
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Manly, Stewart & Finaldi is regarded as America’s leading law
                  firm for sexual abuse cases. Our founder and managing partner,{" "}
                  <span className="text-orange font-bold">
                    attorney John C.
                  </span>{" "}
                  Manly, has been successfully representing sexual abuse victims
                  for over 20 years. He has been included in Super Lawyers® and
                  named to California’s Top 100 Attorneys by the Los Angeles
                  Daily Journal.
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Victim’s advocate and California sexual abuse lawyer John
                  Manly understands that sexual abuse is an ongoing crisis and
                  has devoted himself to becoming a national leader in the legal
                  battle against these brutal crimes. As a firm that exclusively
                  handles sexual abuse cases, our California law firm offers
                  experienced representation to obtain justice for sexual abuse
                  survivors, harassment, and discrimination.
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Manly Stewart & Finaldi is currently investigating alleged{" "}
                  <span className="text-orange font-bold">
                    sexual abuse by Dr. Robert E. Anderson at the University of
                    Michigan.
                  </span>{" "}
                  Contact our firm today if you were affected.
                </p>
              </div>
              <div>
                <p className="font-Bahnschrift font-bold text-2xl text-black">
                  Nationally Recognized for Representing Sexual Abuse Survivors
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Manly, Stewart & Finaldi is regarded as America’s leading law
                  firm for sexual abuse cases. Our founder and managing partner,{" "}
                  <span className="text-orange font-bold">
                    attorney John C.
                  </span>{" "}
                  Manly, has been successfully representing sexual abuse victims
                  for over 20 years. He has been included in Super Lawyers® and
                  named to California’s Top 100 Attorneys by the Los Angeles
                  Daily Journal.
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Victim’s advocate and California sexual abuse lawyer John
                  Manly understands that sexual abuse is an ongoing crisis and
                  has devoted himself to becoming a national leader in the legal
                  battle against these brutal crimes. As a firm that exclusively
                  handles sexual abuse cases, our California law firm offers
                  experienced representation to obtain justice for sexual abuse
                  survivors, harassment, and discrimination.
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Manly Stewart & Finaldi is currently investigating alleged{" "}
                  <span className="text-orange font-bold">
                    sexual abuse by Dr. Robert E. Anderson at the University of
                    Michigan.
                  </span>{" "}
                  Contact our firm today if you were affected.
                </p>
              </div>
              <div>
                <p className="font-Bahnschrift font-bold text-2xl text-black">
                  Nationally Recognized for Representing Sexual Abuse Survivors
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Manly, Stewart & Finaldi is regarded as America’s leading law
                  firm for sexual abuse cases. Our founder and managing partner,{" "}
                  <span className="text-orange font-bold">
                    attorney John C.
                  </span>{" "}
                  Manly, has been successfully representing sexual abuse victims
                  for over 20 years. He has been included in Super Lawyers® and
                  named to California’s Top 100 Attorneys by the Los Angeles
                  Daily Journal.
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Victim’s advocate and California sexual abuse lawyer John
                  Manly understands that sexual abuse is an ongoing crisis and
                  has devoted himself to becoming a national leader in the legal
                  battle against these brutal crimes. As a firm that exclusively
                  handles sexual abuse cases, our California law firm offers
                  experienced representation to obtain justice for sexual abuse
                  survivors, harassment, and discrimination.
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Manly Stewart & Finaldi is currently investigating alleged{" "}
                  <span className="text-orange font-bold">
                    sexual abuse by Dr. Robert E. Anderson at the University of
                    Michigan.
                  </span>{" "}
                  Contact our firm today if you were affected.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAre;
