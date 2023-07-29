"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import amazon_logo from "@/assets/amazon_logo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { StateType } from "../../type";

function Navbar() {
    const { userCartData, userFavoritesData } = useSelector(
        (state: StateType) => state.product
    );
    const [sidebarMenu, setSidebarMenu] = useState(false);

    return (
        <nav className="w-full h-16 bg-[#131921] px-5 flex justify-between items-center text-white">
            {/* Logo and location */}
            <div className="flex justify-start items-center gap-5">
                <Link href="/">
                    <Image
                        src={amazon_logo}
                        alt="Amazon Logo"
                        className="xs:w-16 sm:w-20 w-24 cursor-pointer"
                        priority={true}
                    />
                </Link>
                <div className="xs:hidden flex justify-start items-center gap-1 text-lg font-medium  py-1 px-2 rounded-md cursor-pointer border-2 border-transparent hover:border-[#FF9900] transition-all duration-300">
                    <span className="opacity-70">Deliver To</span>
                    <HiOutlineLocationMarker className="text-2xl" />
                </div>
            </div>
            {/* Search input */}
            <div className="xs:hidden flex justify-start items-center w-1/2 rounded-md bg-[#FF9900] text-black">
                <input
                    type="text"
                    placeholder="Search Amazon"
                    className="w-11/12 px-2 py-2 text-base font-medium outline-none rounded-l-md border-2  border-transparent focus:border-[#FF9900] transition-all duration-300"
                />
                <AiOutlineSearch className=" text-3xl mx-auto text-white" />
            </div>
            {/* Favorites,Cart,Account */}
            <div className=" flex justify-center items-center gap-7 [&>*]:cursor-pointer">
                <Link href="/favorites">
                    <span className="xs:hidden flex justify-start items-center relative text-lg font-medium gap-1  px-2 py-1 rounded-md border-2 border-transparent hover:border-[#FF9900] transition-all duration-300">
                        Favorites
                        <MdOutlineFavoriteBorder className="text-2xl" title="Favorites" />
                        {userFavoritesData.length > 0 && (
                            <span className="absolute right-2 top-2 animate-ping w-2 h-2 flex items-center justify-center rounded-full bg-[#FF9900] text-sm font-normal"></span>
                        )}
                    </span>
                </Link>
                <Link href="/cart">
                    <span className="xs:hidden flex justify-start items-center relative text-lg font-medium gap-1  px-2 py-1 rounded-md border-2 border-transparent hover:border-[#FF9900] transition-all duration-300">
                        Cart
                        <FiShoppingCart className="text-3xl" title="Cart" />
                        {userCartData.length > 0 && (
                            <span className="absolute right-[0.6rem] bottom-1/2  w-5 h-5 flex items-center justify-center rounded-full bg-[#FF9900] text-sm font-normal">
                                {userCartData.length > 0 && userCartData.length}
                            </span>
                        )}
                    </span>
                </Link>

                <button className="bg-[#FF9900] xs:py-1 xs:px-2 xs:text-xs py-2 px-3 text-sm font-medium uppercase rounded-md ">
                    Sign In
                </button>
                <GiHamburgerMenu
                    onClick={() => setSidebarMenu(true)}
                    className="text-2xl xs:visible lg:hidden"
                />
            </div>

            {/* Responsive Menu */}
            {sidebarMenu && (
                <main
                    onClick={() => setSidebarMenu(false)}
                    className="bg-zinc-900 opacity-40 w-full h-screen fixed bottom-0 right-0 z-40"
                ></main>
            )}
            <div
                className={`h-screen xs:w-1/2 md:w-1/3 bg-[#131921] z-50  top-0 right-0 bottom-0  xs:fixed lg:hidden shadow-md transition-all duration-300 p-4 ${
                    sidebarMenu ? ` right-0` : `-right-1/2`
                }`}
            >
                <span
                    onClick={() => setSidebarMenu(false)}
                    className="text-3xl flex justify-end items-center mb-5"
                >
                    <IoCloseSharp className=" bg-[#272d36] p-1 rounded-full" />
                </span>
                <ul className="flex flex-col justify-start items-start gap-5 mt-10 text-base font-medium">
                    <li className="flex justify-start items-center gap-2 bg-[#FF9900] w-96 p-3 rounded-md">
                        <span>Deliver To</span>
                        <HiOutlineLocationMarker className="text-xl" />
                    </li>
                    <Link href="/favorites">
                        <li className="flex justify-start items-center gap-2 bg-[#FF9900] w-96 p-3 rounded-md">
                            <span> Favorites</span>
                            <MdOutlineFavoriteBorder className="text-xl" />
                        </li>
                    </Link>
                    <Link href="/cart">
                        <li className="flex justify-start items-center gap-2 bg-[#FF9900] w-96 p-3 rounded-md">
                            <span> Cart</span>
                            <FiShoppingCart className="text-xl" />
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
