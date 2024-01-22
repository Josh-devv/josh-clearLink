"use client";
import React, { useState } from "react";
import Image from "next/image";
import Hero from "./Components/Hero";
import auto from "./Assets/aut.png";
import shop from "./Assets/shop.png";
import drop from "./Assets/drop.png";
import coin from "./Assets/coinbase.png";
import inter from "./Assets/inter.png";
import marvel from "./Assets/marvel.png";
import avatar from "./Assets/Avatar.png";
import group from "./Assets/pgrp.png";
//import star from "./Assets/stars.svg";
import logo from "./Assets/logo.png";
import content from "./Assets/Contents.png";
import aleft from "./Assets/arrow-left.png";
import aright from "./Assets/arrow-right.png";
import mock from "./Assets/mock.png";
import check from "./Assets/check.png";
import { CiCirclePlus } from "react-icons/ci";
import gg from "./Assets/gg.png";
import app from "./Assets/app.png";
import zapp from "./Assets/zapp.png";
import zapp1 from "./Assets/zapp1.png";
import zapp2 from "./Assets/zapp2.png";
import zapp3 from "./Assets/zapp3.png";

export default function Home() {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="">
      <Hero />

      <section className="h-[40vh] max-sm:h-[40vh] pb-10 flex justify-center items-center w-[100%]">
        <div className="flex flex-col w-full md:max-w-4xl mx-auto">
          <p className="text-center pb-6 text-xl max-sm:text-lg">
            Join 1,500+ companies already video conferencing the ClearLink way
          </p>
          <div className="flex overflow-hidden">
            <div className="flex justify-evenly animate-scrolling">
              <Image src={shop} className="flex-shrink-0 mx-4 md:mx-10" />
              <Image src={marvel} className="flex-shrink-0 mx-4 md:mx-10" />
              <Image src={drop} className="flex-shrink-0 mx-4 md:mx-10" />
              <Image src={coin} className="flex-shrink-0 mx-4 md:mx-10" />
              <Image src={inter} className="flex-shrink-0 mx-4 md:mx-10" />
              <Image src={auto} className="flex-shrink-0 mx-4 md:mx-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-[100%]  h-[100%] flex justify-center">
        <div className="w-[90%]">
          <div>
            <p className="text-blue-700 text-[18px]">The ClearLink advantage</p>
            <h1 className="text-[45px] max-sm:text-[30px] font-semibold">
              Why choose ClearLink?
            </h1>
            <p className="text-gray-500 text-[17px] max-sm:w-[100%] w-[70%]">
              In a world where connection is everything, ClearLink takes the
              lead. Our cutting-edge video conferencing app offers
            </p>
          </div>

          <div className="flex max-md:flex-col justify-between pt-12">
            <div className="grid w-[50%] max-md:w-[100%] gap-x-3 items-center gap-y-6 max-md:grid-cols-1 grid-cols-2">
              <div>
                <Image src={zapp} width={50} />
                <h1 className="text-[23px] max-sm:text-[20px] font-semibold ">
                  Crystal clear HD video
                </h1>
                <p className="text-[15px] text-gray-600">
                  No more pixelation or blurriness – just stunning, lifelike
                  clarity that brings your team closer in meeting
                </p>
              </div>
              <div>
                <Image src={zapp1} width={50} />
                <h1 className="text-[23px] max-sm:text-[20px] font-semibold">
                  Noise cancellation Audio
                </h1>
                <p className="text-[15px] text-gray-600">
                  Say goodbye to distractions with our advanced audio tech for
                  crisp, interruption-free conversations.
                </p>
              </div>
              <div>
                <Image src={zapp2} width={50} />
                <h1 className="text-[23px] max-sm:text-[20px] font-semibold">
                  Scheduling made easy
                </h1>
                <p className="text-[15px] text-gray-600">
                  Streamline your agenda with ClearLinks intuitive scheduling.
                  Set up meetings, send invitations, and receive reminders in
                  one place.
                </p>
              </div>
              <div>
                <Image src={zapp3} width={50} />
                <h1 className="text-[23px] max-sm:text-[20px] font-semibold">
                  Bank-grade security
                </h1>
                <p className="text-[15px] text-gray-600">
                  Your privacy is our priority with bank-grade security
                  protocols safeguarding your meetings and data from unwanted
                  intruders
                </p>
              </div>
            </div>

            <div className="w-[40%] max-md:py-10 max-md:w-[100%] flex justify-center items-center">
              <Image src={group} className="w-[70%] max-md:w-[100%]" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-[100%] mt-16 pb-20 bg-gray-50  flex justify-center">
        <div className="w-[85%] flex max-md:flex-col pt-8 justify-between items-end">
          <div className="w-[40%] max-md:w-[100%]">
            <Image src={shop} width={100} className="pb-10" />
            <Image src={shop} width={100} className="pb-10" />
            <p className="text-[30px] max-md:text-[23px] font-medium">
              ClearLink has upgraded our remote meetings. High-quality video,
              screen sharing, and top-notch security make it essential for our
              team.
            </p>
            <div className="flex items-center justify-between pt-7">
              <span className="flex">
                <Image src={avatar} />
                <span className="pl-2 font-light text-[15px]">
                  <p>Sara Thompson</p>
                  <p>Project Manager, Shopify</p>
                </span>
              </span>
              <span className="flex items-center pl-10">
                <Image src={aleft} className="" />
                <Image src={aright} />
              </span>
            </div>
          </div>

          <div className="w-[40%] max-md:w-[100%] max-md:pt-10">
            <Image src={content} />
          </div>
        </div>
      </section>

      <section className="w-[100%] h-[100%] pt-16 flex justify-center">
        <div className="w-[90%] flex max-md:flex-col">
          <div>
            <p className="text-blue-700">support</p>
            <p className="text-[45px] font-bold">FAQs</p>
            <p className="w-[80%] max-md:w-[100%]">
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please chat to our friendly
              team.
            </p>
          </div>

          <div className="w-[80%] max-md:w-[100%] max-md:pt-10">
            <div className="rounded-md bg-gray-200 p-3">
              <span className="font-semibold text-[15px] flex justify-between items-center">
                How many participants can join a ClearLink video conference?
                <p>
                  <CiCirclePlus size={20} onClick={handleClick} />
                </p>
              </span>
              <p className={`${!display ? "hidden  w-[90%]" : ""}`}>
                ClearLink offers flexible meeting options. Depending on your
                subscription plan, you can host meetings with varying numbers of
                participants. Our plans are designed to accommodate small team
                collaborations and large-scale webinars, ensuring you have the
                right fit for your needs.
              </p>
            </div>
            <div className="rounded-md py-5 border-b border-x-0 p-3">
              <span className="font-semibold text-[15px]  flex justify-between">
                Can I use ClearLink on multiple devices?
                <p>
                  <CiCirclePlus size={20} onClick={handleClick} />
                </p>
              </span>
              <p className={`${!display ? "hidden w-[80%] text-[4px]" : ""}`}>
                ClearLink offers flexible meeting options. Depending on your
                subscription plan, you can host meetings with varying numbers of
                participants. Our plans are designed to accommodate small team
                collaborations and large-scale webinars, ensuring you have the
                right fit for your needs.
              </p>
            </div>
            <div className="rounded-md py-5 border-b border-x-0 p-3">
              <span className="font-semibold text-[15px]  flex justify-between">
                Is ClearLink compatible with other video conferencing platform?
                <p>
                  <CiCirclePlus size={20} onClick={handleClick} />
                </p>
              </span>
              <p
                className={`{w-[80%] ${
                  !display ? "hidden w-[80%] text-[10px]" : ""
                }`}
              >
                ClearLink offers flexible meeting options. Depending on your
                subscription plan, you can host meetings with varying numbers of
                participants. Our plans are designed to accommodate small team
                collaborations and large-scale webinars, ensuring you have the
                right fit for your needs.
              </p>
            </div>
            <div className="rounded-md py-5 border-b border-x-0 p-3">
              <span className="font-semibold text-[15px]  flex justify-between">
                How does ClearLink ensure the security of my video conferencing?
                <p>
                  <CiCirclePlus size={20} onClick={handleClick} />
                </p>
              </span>
              <p
                className={`{w-[80%] ${
                  !display ? "hidden w-[80%] text-[10px]" : ""
                }`}
              >
                ClearLink offers flexible meeting options. Depending on your
                subscription plan, you can host meetings with varying numbers of
                participants. Our plans are designed to accommodate small team
                collaborations and large-scale webinars, ensuring you have the
                right fit for your needs.
              </p>
            </div>
            <div className="rounded-md py-5 border-b border-x-0 p-3 ">
              <span className="font-semibold text-[15px] flex justify-between">
                Do I need to download any software to use ClearLink?
                <p>
                  <CiCirclePlus size={20} onClick={handleClick} />
                </p>
              </span>
              <p
                className={`{w-[80%] ${
                  !display ? "hidden w-[80%] text-[10px]" : ""
                }`}
              >
                ClearLink offers flexible meeting options. Depending on your
                subscription plan, you can host meetings with varying numbers of
                participants. Our plans are designed to accommodate small team
                collaborations and large-scale webinars, ensuring you have the
                right fit for your needs.
              </p>
            </div>
            <div className="rounded-md py-5 border-b border-x-0 p-3 ">
              <span className="font-semibold text-[15px]  flex justify-between">
                What kind of customer support does ClearLink provide?
                <p>
                  <CiCirclePlus size={20} onClick={handleClick} />
                </p>
              </span>
              <p
                className={`{w-[80%] ${
                  !display ? "hidden w-[80%] text-[10px]" : ""
                }`}
              >
                ClearLink offers flexible meeting options. Depending on your
                subscription plan, you can host meetings with varying numbers of
                participants. Our plans are designed to accommodate small team
                collaborations and large-scale webinars, ensuring you have the
                right fit for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[100%] justify-center flex py-20">
        <div className="flex max-md:flex-col justify-between w-[90%]">
          <div className="">
            <p className="text-[35px] max-md:w-[90%] max-md:text-[25px] font-bold w-[70%]">
              Ready to clear the path to perfect communication?
            </p>
            <div className="pt-3 max-md:pt-6">
              <p className="flex">
                <Image src={check} className="" />
                <span className="pl-2">30 days free trial</span>
              </p>
              <p className="flex">
                <Image src={check} />
                <span className="pl-2">Cancel at any time</span>
              </p>
              <p className="flex">
                <Image src={check} />
                <span className="pl-2">Access to all features</span>
              </p>
              <p className="flex">
                <Image src={check} />
                <span className="pl-2">personalized onboarding</span>
              </p>
            </div>
            <div className="text-[13px] pr-4 pt-3 max-md:py-5">
              <button className="border p-3 rounded-full mr-3">
                Talk to sales
              </button>
              <button className="p-3 bg-blue-800 text-white rounded-full">
                Start your free trial
              </button>
            </div>
          </div>

          <div className="w-[70%] max-md:w-[100%]">
            <Image src={mock} className="" />
          </div>
        </div>
      </section>

      <section className="flex w-[100%] justify-center">
        <div className="flex font-rbt1  justify-between items-center max-md:flex-col w-[90%] text-black ">
          <div className="w-[25%]  flex flex-col  justify-center max-sm:self-start  max-md:py-7 max-md:w-[100%]">
            <span className="flex font-bold">
              <Image src={logo} />
              ClearLink.
            </span>
            <p className="text-[13px] pt-3">
              ClearLink is your gateway to effortless, high-quality video
              conferencing. Join us in shaping the future of communication!
            </p>
          </div>

          <div className="flex w-[100%] max-md:w-[100%] justify-evenly max-md:flex-wrap max-md:justify-start">
            <div className="p-5 pl-0 text-[13px] max-lg:text-[13px]">
              <h1 className=" ">Product</h1>
              <p className="pt-2">Overview</p>
              <p className="pt-2">Features</p>
              <p className="pt-2">Solutions</p>
              <p className="pt-2">Tutorials</p>
              <p className="pt-2">Pricing</p>
            </div>

            <div className="p-5 pl-0 text-[13px] max-lg:text-[13px]">
              <h1 className="">Company</h1>
              <p className="pt-2 ">About Us</p>
              <p className="pt-2">Careers</p>
              <p className="pt-2">Press</p>
              <p className="pt-2">News</p>
              <p className="pt-2">Contact</p>
            </div>

            <div className="p-5 text-[13px] max-lg:text-[13px]">
              <h1 className="">Resources</h1>
              <p className="pt-2 ">Blog</p>
              <p className="pt-2">Events</p>
              <p className="pt-2">Help center</p>
              <p className="pt-2">Tutorials</p>
              <p className="pt-2">Support</p>
            </div>

            <div className="p-5 text-[13px] max-lg:text-[13px]">
              <h1 className="">Legal</h1>
              <p className="pt-2">Terms ?</p>
              <p className="pt-2">Privacy</p>
              <p className="pt-2 w-3/4">Licenses</p>
              <p className="pt-2 w-3/4">Contact</p>
            </div>

            <div className="p-5 pl-0">
              <p className="text-blue-700 font-semibold">Get the app.</p>
              <Image src={gg} className="pt-3" />
              <Image src={app} className="pt-3" />
            </div>
          </div>
        </div>
      </section>

      <div className=" flex justify-between py-5">
        <div className="flex w-[30%] justify-evenly"></div>
      </div>
    </div>
  );
}
