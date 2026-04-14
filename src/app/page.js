'use client';

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ValueProps from "./components/ValueProps";
import ServicesGrid from "./components/ServicesGrid";
// import PackagesSection from "./components/PackagesSection"; 
import AboutUs from "./components/AboutUs";
import FAQSection from "./components/FAQSection"; // <--- ИМПОРТИРАЙ ТУК
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
    // ... (кодът за скрол бутона си остава същият) ...
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="min-h-screen font-sans text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-slate-900 overflow-x-hidden transition-colors duration-300">
            <Navbar />

            <main>
                <HeroSection />
                <ValueProps />
                <ServicesGrid />

                {/* --- ЛИНИЯ --- */}
                <div className="w-full my-8">
                    <hr className="border-t-[8px] border-dotted border-sky-300 w-full opacity-60" />
                </div>

                <AboutUs />

                {/* --- ЛИНИЯ --- */}
                <div className="w-full my-8">
                    <hr className="border-t-[8px] border-dotted border-sky-300 w-full opacity-60" />
                </div>

                {/* НОВАТА СЕКЦИЯ С ВЪПРОСИ */}
                <FAQSection />

                <ContactForm />
            </main>

            <Footer />

            <button
                onClick={scrollToTop}
                className={`${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 focus:outline-none focus-visible:ring-0'} fixed bottom-8 right-8 bg-sky-700 text-white p-4 rounded-full shadow-xl hover:bg-sky-600 transition-all duration-300 z-50`}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </button>
        </div>
    );
}