import Image from "next/image";
import Link from "next/link";
import React from "react";

import amazon_logo from "../assets/amazon_logo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
function Navbar() {
    return (
        <nav className="w-full h-16 bg-[#131921] px-5 flex justify-between items-center text-white">
            {/* Logo and location */}
            <div className="flex justify-start items-center gap-5">
                <Link href="/">
                    <Image
                        src={amazon_logo}
                        alt="Amazon Logo"
                        className="w-24 cursor-pointer"
                        priority={true}
                    />
                </Link>
                <div className="flex justify-start items-center gap-1 text-lg font-medium  py-1 px-2 rounded-md cursor-pointer border-2 border-transparent hover:border-[#FF9900] transition-all duration-300">
                    <span className="opacity-70">Deliver To</span>
                    <HiOutlineLocationMarker className="text-2xl" />
                </div>
            </div>
            {/* Search input */}
            <div className="flex justify-start items-center w-1/2 rounded-md bg-[#FF9900] text-black">
                <input
                    type="text"
                    placeholder="Search Amazon"
                    className="w-11/12 px-2 py-2 text-base font-medium outline-none rounded-l-md border-2  border-transparent focus:border-[#FF9900] transition-all duration-300"
                />
                <AiOutlineSearch className=" text-3xl mx-auto text-white" />
            </div>
            {/* Favorites,Cart,Account */}
            <div className="flex justify-center items-center gap-7 [&>*]:cursor-pointer">
                <span className="flex justify-start items-center text-lg font-medium gap-1  px-2 py-1 rounded-md border-2 border-transparent hover:border-[#FF9900] transition-all duration-300">
                    Favorites
                    <MdOutlineFavoriteBorder className="text-xl" title="Favorites" />
                </span>
                <Link href="/cart">
                    <span className="flex justify-start items-center text-lg font-medium gap-1  px-2 py-1 rounded-md border-2 border-transparent hover:border-[#FF9900] transition-all duration-300">
                        Cart
                        <FiShoppingCart className="text-xl" title="Cart" />
                    </span>
                </Link>

                <button className="bg-[#FF9900] py-2 px-3 text-sm font-medium uppercase rounded-md ">
                    Sign In
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
