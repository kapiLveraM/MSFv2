import React from "react";
import { CheckAll } from "./common/Icons";
import Image from "next/image";
import Link from "next/link";

const WePursue = () => {
  return (
    <div className=" mb-20 lg:mb-[118px]">
      <div className="container xl:max-w-[1140px] px-3 mx-auto">
        <div className=" flex flex-col-reverse lg:flex-row justify-center items-center flex-wrap">
          <div className="  lg:w-7/12 mt-6 lg:mt-0">
            <h3
              data-aos="fade-right"
              data-aos-offset="-1000"
              className=" font-bahnschrift text-3xl md:text-[38px] font-light text-black lg:leading-10"
            >
              We Pursue
              <span className="font-bold text-orange">All Liable</span> Parties
            </h3>
            <p
              data-aos="fade-right"
              data-aos-offset="-1000"
              className=" text-base font-normal font-Poppins text-black opacity-70 mt-4 lg:max-w-[573px]"
            >
              At Manly, Stewart & Finaldi, we understand that in cases of sexual
              abuse, there are often other parties that may share liability for
              the abuser’s despicable actions. Therefore, we strive to hold all
              responsible parties accountable for their part in your case. This
              includes:
            </p>

            <div
              data-aos="fade-right"
              data-aos-offset="-1000"
              className=" flex gap-3 items-center mt-6"
            >
              <CheckAll />
              <p className=" font-normal font-Poppins text-base xl:text-lg text-black">
                The abuser who was directly responsible
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="-1000"
              className=" flex gap-3 items-center mt-3 sm:mt-4 "
            >
              <CheckAll />
              <p className=" font-normal font-Poppins text-base xl:text-lg text-black max-w-[495px]">
                Any coworkers, staff members, or others who knew of the abuse
                but did not come forward to report it
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="-1000"
              className=" flex gap-3 items-center mt-3 sm:mt-4"
            >
              <CheckAll />
              <p className=" font-normal font-Poppins text-base xl:text-lg text-black max-w-[495px]">
                Any larger organizations or institutions who failed to take
                action against the abuse
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="-1000"
              className=" flex gap-3 items-center mt-3 sm:mt-4"
            >
              <CheckAll />
              <p className=" font-normal font-Poppins text-base xl:text-lg text-black max-w-[498px]">
                Any potential law enforcement officials who exercised negligence
                in allowing the abuse to occur
              </p>
            </div>
            <p
              data-aos="fade-right"
              data-aos-offset="-1000"
              className=" text-base font-normal font-Poppins text-black opacity-70 mt-4 max-w-[573px]"
            >
              Any and all parties who had some direct or indirect part in your
              case deserve to be held accountable to the fullest extent.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="-1000"
            className=" lg:w-5/12 "
          >
            <Image
              loading="lazy"
              width={537}
              height={537}
              src="/assets/images/wePursue/WePursue.webp"
              alt="Representation"
              className=" w-full max-w-[600px] xl:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WePursue;
