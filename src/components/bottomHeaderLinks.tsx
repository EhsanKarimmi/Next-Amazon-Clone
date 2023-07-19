import { ReactNode } from "react";
import { HiMenu } from "react-icons/hi";
import { MdCalendarToday, MdOutlineSell } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";
import { PiTrademarkRegisteredBold } from "react-icons/pi";
import { TbGift } from "react-icons/tb";

type linksType = {
    title: string;
    icon: ReactNode;
}[];

export const bottomHeaderLinks: linksType = [
    {
        title: "All",
        icon: <HiMenu />,
    },
    {
        title: "Today's Deals",
        icon: <MdCalendarToday />,
    },
    {
        title: "Customer Service",
        icon: <RiCustomerServiceLine />,
    },
    {
        title: "Registry",
        icon: <PiTrademarkRegisteredBold />,
    },
    {
        title: "Gift Cards",
        icon: <TbGift />,
    },
    {
        title: "Sell",
        icon: <MdOutlineSell />,
    },
];
