import React from "react";
import { ArrowButton, brackingCasesVector, VectorC, WhiteVecto } from "./common/Icons";
import Image from "next/image";
import ButtonMain from "./common/button/ButtonMain";

const BrackingCases = () => {
  return (
      <div className=" bg-black my-28 pt-[52px] py-24 overflow-hidden relative">
          <div className=" absolute right-0 bottom-24 hidden lg:block">
              <brackingCasesVector/>
          </div>
      <Image
        loading="lazy"
        width={380}
        height={380}
        src="/assets/images/brackingCases/WhiteLineBox.png"
        alt="LosAngeles"
        className=" absolute bottom-0 hidden lg:block"
      />
      <div className=" absolute top-[60%] left-[-3px] hidden sm:block">
        <VectorC />
      </div>
      <p className=" font-Poppins font-black text-[108px] text-white opacity-5 absolute left-[-380px] top-[-10px] hidden md:block">
        BRACKING CASES
      </p>
      <div className="container xl:max-w-[1140px] px-3 mx-auto">
        <div className=" flex items-end justify-center">
          <WhiteVecto />
          <p className=" text-lg font-Poppins text-white font-medium leading-none ms-2">
            BRACKING CASES
          </p>
        </div>
        <h2 className=" font-bahnschrift font-light text-white text-4xl md:text-5xl mt-3 text-center">
          Were You <span className=" text-orange font-bold">a Victim </span> of
        </h2>
        <div className=" flex justify-center lg:justify-start items-center flex-wrap mt-[50px]">
          <div className=" flex justify-center w-full lg:w-6/12 sm:px-2">
            <div className=" relative">
              <Image
                loading="lazy"
                width={558}
                height={475}
                src="/assets/images/brackingCases/CaliforniaSchools.webp"
                alt="LosAngeles"
              />
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-between sm:mx-6 absolute w-full sm:max-w-[450px] xl:max-w-[492px] bottom-5">
                <p className="font-bahnschrift font-semibold text-xl text-center lg:text-start xl:text-[22px] text-white max-w-[323px]">
                  Los Angeles County Juvenile Probation Camp Sexual Assault
                </p>

                <ArrowButton />
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full lg:w-6/12 mt-6 lg:mt-0 sm:px-2">
            <div className=" relative">
              <Image
                loading="lazy"
                width={558}
                height={475}
                src="/assets/images/brackingCases/LosAngeles.webp"
                alt="LosAngeles"
              />
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-between sm:mx-6 absolute w-full sm:max-w-[450px] xl:max-w-[492px] bottom-5">
                <p className="font-bahnschrift font-semibold text-xl text-center lg:text-start xl:text-[22px] text-white sm:max-w-[209px] mb-2 sm:mb-0">
                  California Schools Sexual Abuse
                </p>
                <ButtonMain type="submit" title="Take Action Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrackingCases;
