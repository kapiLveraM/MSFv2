"use client";
import React, { useRef, useState } from "react";
import CommonInput from "./common/CommonInput";
import emailjs from "@emailjs/browser";
import { cityInput, radioInput } from "./common/Helper";
import CustomRadio from "./common/CustomRadio";
import CommonSelect from "./common/CommonSelect";
import CommonTextArea from "./common/CommonTextArea";
import ButtonMain from "./common/button/ButtonMain";
import {
  CommonVecto,
  GetUpdateVector,
  GetUpdateVectorSmall,
} from "./common/Icons";

const GetUpdate = () => {
  const form = useRef();
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    last: "",
    phone: "",
    radio: "",
    inquiry: "",
    city: "",
    checkBox: false,
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    // Enforce maximum one digit at a time for phone number input
    if (name === "phone" && value.length > 10) {
      return;
    }

    SetFormData({ ...formData, [name]: value });
  };

  const [error, setError] = useState(false);

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const phoneRegex = /^\d{10}$/;
  const FormSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() !== "" &&
      formData.checkBox &&
      phoneRegex.test(formData.phone) &&
      formData.email.trim() !== "" &&
      emailRegex.test(formData.email) &&
      formData.inquiry.trim() !== "" &&
      formData.radio.trim() !== "" &&
      formData.last.trim() !== "" &&
      formData.city.trim() !== "country"
    ) {
      setError(false);
      emailjs
        .sendForm(
          "service_7psb72n",
          "template_ko9xp08",
          form.current,
          "kCs0coeuD32As-noD"
        )
        .then(() => {
          SetFormData({
            name: "",
            email: "",
            checkBox: false,
            last: "",
            phone: "",
            radio: "",
            city: "",
            inquiry: "",
          });
        });
    } else {
      setError(true);
    }
  };

  return (
    <div className=" bg-white pt-11 sm:pt-20 lg:pt-[139px] relative">
      <div className="absolute top-[28%] hidden xl:block">
        <GetUpdateVector />
      </div>
      <div className="absolute bottom-[10%] right-0 hidden xl:block">
        <GetUpdateVectorSmall />
      </div>
      <div className=" container xl:max-w-[845px] mx-auto xl:px-0 px-5">
        <div
          data-aos="fade-up"
          data-aos-offset="-1000"
          className=" flex items-end justify-center"
        >
          <CommonVecto />
          <p className=" text-lg font-Poppins text-main font-medium leading-none ms-2">
            GET UPDATED WITH US
          </p>
        </div>
        <h2
          data-aos="fade-right"
          data-aos-offset="-1000"
          className=" font-bahnschrift font-light text-black text-4xl md:text-5xl mt-3 text-center max-w-[882px] mx-auto"
        >
          Request
          <span className=" text-orange font-bold">Your Free</span>
          Consultation
        </h2>
        <p
          data-aos="fade-left"
          data-aos-offset="-1000"
          className=" font-Poppins font-normal text-base text-black !opacity-70 max-w-[580px] mx-auto text-center mt-4"
        >
          Send us an email or call
          <span className=" text-orange"> (800) 700-8450 </span> for answers to
          anything and everything you would like to know about your case.
        </p>
        <form
          data-aos="fade-up"
          data-aos-offset="-1000"
          ref={form}
          onSubmit={FormSubmit}
          className=" mt-12"
        >
          <div className="flex flex-wrap">
            <div className=" w-full sm:w-6/12 relative pb-7 md:pe-5 pe-2">
              <CommonInput
                type="text"
                placeholder="First Name"
                value={formData.name}
                onChange={inputHandler}
                id="name"
                name="name"
                error={error}
                label="First Name"
              />
            </div>
            <div className=" w-full sm:w-6/12 relative pb-7 md:ps-5 ps-2">
              <CommonInput
                type="text"
                placeholder="Last Name"
                value={formData.last}
                onChange={inputHandler}
                id="last"
                name="last"
                error={error}
                label="Last Name"
              />
            </div>
            <div className=" w-full sm:w-6/12 relative pb-7 md:pe-5 pe-2">
              <CommonInput
                type="number"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={inputHandler}
                id="phone"
                name="phone"
                error={error}
                label="Phone Number"
              />
            </div>
            <div className=" w-full sm:w-6/12 relative pb-7 md:ps-5 ps-2">
              <CommonInput
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={inputHandler}
                id="email"
                name="email"
                error={error}
                label="Email"
              />
            </div>
            <div className="relative w-full mb-7">
              <CommonSelect
                value={formData.city}
                onChange={inputHandler}
                id="city"
                name="city"
                map={cityInput}
                error={error}
              />
            </div>
            <div>
              <p className=" text-black md:text-2xl text-xl font-Poppins font-medium mb-[6px]">
                Institution Involved <span className=" text-slat">*</span>
              </p>
              <CustomRadio
                options={radioInput}
                selectedValue={formData.radio}
                onChange={inputHandler}
                value={formData.radio}
                id="radio"
                name="radio"
                error={error}
              />
            </div>
            <div className=" w-full my-7">
              <CommonTextArea
                type="text"
                placeholder="Reason for inquiry"
                value={formData.inquiry}
                onChange={inputHandler}
                id="inquiry"
                name="inquiry"
                error={error}
                label="Reason for inquiry"
              />
            </div>
            <div>
              <p className=" font-bold text-orange font-Poppins md:text-2xl text-xl mb-2">
                Disclaimer*
              </p>
              <p className=" text-lightBlack font-normal font-Poppins md:text-base text-sm max-w-[752px]">
                The use of this website or contact form to communicate with this
                firm or any of its attorneys/members does not establish an
                attorney-client relationship. Time-sensitive information should
                not be sent through this form.{" "}
                <span className=" font-semibold">
                  {" "}
                  All information provided will be kept strictly confidential.
                </span>
              </p>
              <div className=" flex items-center gap-5 mt-7 relative">
                <div className=" relative">
                  <input
                    type="checkbox"
                    checked={formData.checkBox}
                    onChange={() =>
                      SetFormData((prevState) => ({
                        ...prevState,
                        checkBox: !prevState.checkBox,
                      }))
                    }
                    className="radio_main w-6 h-5 mt-[6px]"
                  />
                  {error && formData.checkBox === false && (
                    <p className="text-red-900 uppercase text-[12px] font-Bahnschrift font-normal flex items-start absolute bottom-[-15px] text-nowrap">
                      check if you HAVE READ THIS DISCLAIMER
                    </p>
                  )}
                </div>
                <p className=" font-Poppins font-semibold md:text-lg text-base text-main">
                  I HAVE READ THIS DISCLAIMER
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[50px] mb-[99px]">
            <ButtonMain
              customStyles="!py-[18px] !px-[35px]"
              title="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetUpdate;
