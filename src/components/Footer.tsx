"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineToTop } from "react-icons/ai";
import amazon_logo from "@/assets/amazon_logo.png";
import Link from "next/link";
function Footer() {
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <footer>
            {/* Back to top */}
            <button
                onClick={backToTop}
                className="w-full h-10 bg-[#131921] bg-opacity-90 text-white flex justify-center items-center gap-2 hover:opacity-80 transition-all duration-300 uppercase xs:text-base lg:text-lg font-medium"
            >
                Back To Top
                <AiOutlineToTop className="text-2xl" />
            </button>
            <div className="p-5 bg-[#131921] text-white text-opacity-50 flex flex-col justify-center items-center gap-5">
                <Link href="/">
                    <Image
                        src={amazon_logo}
                        alt="Amazon Logo"
                        className="xs:w-20 lg:w-28 cursor-pointer"
                        priority={true}
                    />
                </Link>
                <p className="xs:text-sm lg:text-base font-medium">
                    All Rights Reserved : &nbsp;
                    <a href="https://github.com/EhsanKarimmi" target="_blank">
                        EhsaN.Karimi
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
