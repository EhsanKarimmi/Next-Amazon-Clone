import React from "react";
import { bottomHeaderLinks } from "./bottomHeaderLinks";

function BottomHeader() {
    return (
        <div className="xs:hidden md:block px-5 bg-[#131921] bg-opacity-90 text-white">
            <ul className="flex justify-start items-center gap-4 p-1">
                {bottomHeaderLinks.map((link) => {
                    return (
                        <li
                            key={link.title}
                            className="flex justify-start items-center gap-1 rounded-md py-2 px-3 md:text-xs lg:text-sm font-medium hover:bg-[#131921] hover:bg-opacity-95 transition-all duration-300 cursor-pointer"
                        >
                            <span className="md:text-base lg:text-xl"> {link.icon}</span>
                            <span>{link.title}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default BottomHeader;
