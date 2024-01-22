import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import AI from "../Assets/AI.png";
import star from "../Assets/stars.svg";
import avatar from "../Assets/avatar1.png";
import smile from "../Assets/bg-mic.png";
import smile5 from "../Assets/1.png";
import smile1 from "../Assets/2.png";
import smile2 from "../Assets/3.png";
import smile3 from "../Assets/4.png";
import smile4 from "../Assets/5.png";
import grp from "../Assets/avagrp.png";

export default function Hero() {
  return (
    <div className="h-[100%] font-custom w-[100%]  text-black bg-white">
      <div className="w-[100%] h-[10vh] flex justify-center pt-6 ">
        <Navbar />
      </div>

      <main className="w-[100%] h-[100vh] max-md:h-[100%] flex justify-center  items-center max-md:items-start pt-7 max-md:pt-0">
        <div className="w-[90%] max-md:pt-20 flex justify-between  max-md:flex-col">
          <div className="w-[50%] max-lg:w-[90%] max-sm:w-[100%] flex flex-col ">
            <h1 className="text-[4vw] max-sm:text-[25px]  leading-tight font-normal max-md:w-[100%] w-[85%]">
              Uniting the world, one video call at a time
            </h1>
            <p className="w-[80%] max-md:w-[100%] pt-4  max-sm:pt-5 max-sm:text-[15px] text-[20px] font-normal text-gray-600">
              Experience the future of communication with ClearLink – where
              crystal-clear video conferencing meets unparalleled simplicity.
            </p>
            <div className="flex pt-4">
              <button className="p-3 bg-blue-800 max-sm:text-[13px] text-white rounded-full">
                Start your free trial
              </button>
              <button className=" flex items-center pl-3 text-[13px]">
                <Image src={AI} className="" />
                Discover AI assistant
              </button>
            </div>

            <div className="pt-4 flex max-md:pt-8">
              <Image src={grp} c />
              <div className="pl-3">
                <span className="flex font-bold text-[12px]">
                  <Image src={star} height={12} />
                  5.0
                </span>
                <span className="text-[12px]">from 3000+reviews</span>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[100%] max-md:mt-10 max-lg:w-[80%] max-md:w-[100%]  bg-slate-100 shadow-lg py-5 justify-end items-center flex flex-col rounded-md ">
              <Image
                src={avatar}
                alt="tyuio"
                className="w-[90%] max-md:w-[90%]"
              />
              <div className="flex w-[60%] pt-3 justify-evenly ">
                <Image src={smile} />
                <Image src={smile1} />
                <Image src={smile2} />
                <Image src={smile3} />
                <Image src={smile4} />
                <Image src={smile5} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
