import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Свежите - Професионално почистване",
    description: "Безупречна чистота за вашия дом и офис.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="bg" className="scroll-smooth"> {/* Добавихме scroll-smooth тук */}
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}