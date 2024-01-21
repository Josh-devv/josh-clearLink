import React from "react";
import Image from "next/image";
import Logo from "../Assets/logo.png"
import {FiMenu} from "react-icons/fi"
import {SlArrowDown} from "react-icons/sl"

export default function Navbar(){
    return(
        <div className="h-[10vh] z-20 max-sm:h-[6vh] bg-slate-50 w-[90%] max-md:w-[95%] fixed shadow-md  flex justify-between items-center rounded-full border">
            <div className=" flex pl-4 font-bold">
                <Image src={Logo} className=""/>
                ClearLink.
            </div>

            <ul className="flex w-[40%] max-custom-sm:hidden text-[13px] justify-around ">
                <li className="flex items-center gap-x-2">
                    Products<SlArrowDown className="" size={10}/>
                </li>
                <li className="flex items-center gap-x-2">
                    Solutions<SlArrowDown className="" size={10}/>
                </li>
                <li className="flex items-center gap-x-2">
                    Resources<SlArrowDown className="" size={10}/>
                </li>
                <li className="flex items-center gap-x-2">
                    Pricing<SlArrowDown className="" size={10}/>
                </li>
            </ul>

            <div className="text-[13px] max-custom-sm:hidden pr-4">
                <button className="border p-3 rounded-full mr-3">Talk to sales</button>
                <button className="p-3 bg-blue-800 text-white rounded-full">Sign up for free</button>
            </div>
            <div className="hidden max-custom-sm:flex pr-4">
                <FiMenu size={30} />
            </div>
        </div>
    )
}