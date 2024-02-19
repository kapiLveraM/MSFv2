"use clinet";
import React from "react";
import { Contact } from "./common/Helper";
import Link from "next/link";
import {  CommonVectorDot, VectorC } from "./common/Icons";
import Image from "next/image";

const ContactOur = () => {
  return (
    <div className=" bg-black pt-14 pb-[74px] relative overflow-hidden">
      <div className=" absolute right-[-10px] top-[20%] hidden lg:block">
        <VectorC/>
      </div>
      <div className=" absolute right-[-10px] bottom-16 hidden lg:block">
        <CommonVectorDot/>
      </div>
      <div className=" absolute left-[-5px] bottom-44 hidden lg:block">
        <CommonVectorDot/>
      </div>
        <Image
        loading="lazy"
        width={380}
        height={380}
        src="/assets/images/brackingCases/WhiteLineBox.png"
        alt="LosAngeles"
        className=" absolute bottom-0 right-[-40px] hidden xl:block"
      />
      <div className="container xl:max-w-[1140px] px-3 mx-auto relative z-50">
        <h2 className=" font-bahnschrift font-light text-white text-4xl md:text-5xl mt-3 text-center max-w-[882px] mx-auto">
          Contact Our
          <span className=" text-orange font-bold">
            California Sexual Abuse
          </span>
          Attorneys Today!
        </h2>
        <div className=" flex flex-wrap justify-center mt-1">
          {Contact.slice(0, 5).map((value, i) => {
            return (
              <div
                key={i}
                className={` sm:w-6/12 lg:w-4/12 sm:px-3 text-center  ${
                  i >= 3 ? "mt-9 lg:mt-12" : "mt-9"
                }`}
              >
                <div className="bg-ivory px-5 border border-ivory py-9 sm:min-h-[311px] w-full max-w-[364px] rounded flex flex-col justify-between group hover:border-main boxShadowWhy shadow-md transition-all  ease-in-out duration-300 relative">
                  <div className=" mt-0">
                    <p className="font-Poppins font-semibold text-xl text-main">
                      {value.title}
                    </p>
                    <p className="font-Poppins font-normal text-base text-white opacity-70 mt-2">
                      {value.description}
                    </p>
                    <div className="flex flex-col justify-center items-center">
                      {value.pathP && (
                        <Link
                          href={value.pathP}
                          className="text-white mt-5 font-Poppins font-normal text-lg inline-block"
                        >
                          <span className="font-semibold text-orange">
                            {value.phone}
                          </span>
                          {value.pathP}
                        </Link>
                      )}
                      {value.pathTf && (
                        <Link
                          href={value.pathTf}
                          className="text-white mt-2 font-Poppins font-normal text-lg inline-block"
                        >
                          <span className="font-semibold text-orange">
                            {value.telephone}
                          </span>
                          {value.pathP}
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className=" mt-9 sm:mt-0">
                    <Link
                      href="#"
                      className="font-Poppins text-lg font-medium text-main bg-white py-2 px-6 rounded-[500px] border border-main transition-all ease-in-out duration-300 group-hover:bg-main group-hover:text-white"
                    >
                      MAP
                    </Link>
                  </div>
                  <div className="boxBottmBoder absolute max-w-[229px] h-2 bg-main w-full bottom-[-4px] group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300 "></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactOur;
