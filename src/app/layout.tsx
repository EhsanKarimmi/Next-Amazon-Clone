"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { Metadata } from "next";
import BottomHeader from "@/components/BottomHeader";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

export const metadata: Metadata = {
    title: "Amazon Clone",
    description: "Next.Js Amazon Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <Provider store={store}>
                    <PersistGate persistor={persistor} loading={null}>
                        <Navbar />
                        <BottomHeader />
                        {children}
                        <Footer />
                    </PersistGate>
                </Provider>
            </body>
        </html>
    );
}
