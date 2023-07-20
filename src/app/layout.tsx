import Navbar from "@/components/Navbar";
import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { Metadata } from "next";
import BottomHeader from "@/components/BottomHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Amazon Clone",
    description: "Next.Js Amazon Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <Navbar />
                <BottomHeader />
                {children}
                <Footer />
            </body>
        </html>
    );
}
