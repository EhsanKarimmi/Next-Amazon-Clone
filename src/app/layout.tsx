"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BottomHeader from "@/components/BottomHeader";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import LoadingPage from "./loading";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <Provider store={store}>
                    <PersistGate persistor={persistor} loading={<LoadingPage />}>
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
