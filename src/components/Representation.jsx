import Image from "next/image";
import React from "react";
import { CheckAll } from "./common/Icons";
import Link from "next/link";

const Representation = () => {
  return (
    <div className=" mb-11 mt-11 sm:mt-20 lg:mt-[116px] sm:mb-20 lg:mb-[108px]">
      <div className="container xl:max-w-[1140px] px-5 xl:px-0 mx-auto">
        <div className=" flex justify-center flex-wrap">
          <div className=" lg:w-6/12 xl:w-5/12 ">
            <div
              data-aos="fade-right"
              data-aos-offset="-1000"
              className="relative h-full"
            >
              <Image
                loading="lazy"
                width={537}
                height={537}
                src="/assets/images/representation/Representation.webp"
                alt="Representation"
                className=" w-full xl:h-full"
              />
              <div className=" py-7 px-[30px] boxShadowPra max-w-[206px] sm:max-w-[306px] w-full absolute z-10 bottom-2 lg:bottom-0 right-0 bg-white ">
                <p className=" font-Poppins font-medium text-xs sm:text-base text-main max-w-[244px] text-center">
                  We are passionate about seeking justice for any and all
                  survivors of sexual assault and abuse.
                </p>
              </div>
            </div>
          </div>
          <div className=" lg:w-6/12 xl:w-7/12 lg:ps-11 mt-6 lg:mt-0">
            <h3
              data-aos="fade-left"
              data-aos-offset="-1000"
              className=" font-bahnschrift text-2xl md:text-[38px] font-light text-black lg:leading-10"
            >
              Representation for
              <span className="font-bold text-orange">
                Sexual Abuse Victims
              </span>
              Across California
            </h3>
            <p
              data-aos="fade-left"
              data-aos-offset="-1000"
              className=" text-base font-normal font-Poppins text-black opacity-70 mt-4"
            >
              Our California sexual abuse lawyers have over 20 years of
              experience litigating various cases of sexual violence. This
              includes instances of:
            </p>
            <div
              data-aos="fade-left"
              data-aos-offset="-1000"
              className=" flex gap-3 items-center mt-6"
            >
              <CheckAll />
              <p className=" font-normal font-Poppins text-lg text-black">
                Clergy abuse
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="-1000"
              className=" flex gap-3 items-center mt-3 sm:mt-4"
            >
              <CheckAll />
              <p className=" font-normal font-Poppins text-lg text-black">
                School abuse
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="-1000"
              className=" flex gap-3 items-center mt-3 sm:mt-4"
            >
              <CheckAll />
              <Link
                href="#"
                className=" font-normal font-Poppins text-lg text-orange underline"
              >
                Abuse occurring in sports organizations
              </Link>
            </div>

            <div
              data-aos="fade-left"
              data-aos-offset="-1000"
              className=" flex gap-3 items-center mt-3 sm:mt-4"
            >
              <CheckAll />
              <p className=" font-normal font-Poppins text-lg text-black">
                Abuse at youth group and summer camps
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-offset="-1000"
              className=" flex gap-3 items-center mt-3 sm:mt-4"
            >
              <CheckAll />
              <p className=" font-normal font-Poppins text-lg text-black">
                Cases of {""}
                <Link href="#" className=" text-orange underline inline-block">
                  online sexual
                </Link>{" "}
                harassment
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="-1000"
              className=" flex gap-3 items-center mt-3 sm:mt-4"
            >
              <CheckAll />
              <p className=" font-normal font-Poppins text-lg text-black">
                <Link href="#" className=" text-orange underline">
                  Elder sexual abuse
                </Link>{" "}
                {""}
                in nursing homes
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="-1000"
              className=" flex gap-3 items-center mt-3 sm:mt-4"
            >
              <CheckAll />
              <p className=" font-normal font-Poppins text-lg text-black">
                Uber/Lyft sexual abuse
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="-1000"
              className=" flex gap-3 items-center mt-3 sm:mt-4"
            >
              <CheckAll />
              <p className=" font-normal font-Poppins text-lg text-black">
                Sexual abuse by doctors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Representation;
