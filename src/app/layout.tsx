import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Amazon Clone",
    description: "Next.Js Amazon Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    );
}
