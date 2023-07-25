"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { Metadata } from "next";
import BottomHeader from "@/components/BottomHeader";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export const metadata: Metadata = {
    title: "Amazon Clone",
    description: "Next.Js Amazon Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <Provider store={store}>
                    <Navbar />
                    <BottomHeader />
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}
