"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white/65 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
            <div className="w-full px-6 2xl:px-16 relative">
                <div className="flex justify-between items-center h-24">

                    {/* 1. ЛОГО */}
                    <div className="flex-shrink-0 flex items-center flex-1 justify-start absolute left-[1%]">
                        <a href="#" className="flex items-center gap-5 group">
                            <div className="relative h-24 w-24 md:h-32 md:w-32 flex-shrink-0">
                                <Image
                                    src="/LogoFreshFistsTransparent.png"
                                    alt="Лого Свежите"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-2xl md:text-4xl font-black text-sky-700 tracking-tighter leading-none group-hover:scale-105 transition-transform duration-300">
                                    СВЕЖИТЕ<span className="text-orange-500">.</span>
                                </span>
                                <span className="text-[11px] md:text-[15px] font-bold text-gray-500 uppercase tracking-widest ml-0.5 mt-1 group-hover:scale-105 transition-transform duration-300">
                                    Професионално почистване
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* 2. МЕНЮ */}
                    <div className="hidden 2xl:flex space-x-10 items-center absolute left-[43%] transform -translate-x-1/2">
                        {["Начало", "Услуги", "Пакети", "За нас", "Контакти"].map((item) => (
                            <a
                                key={item}
                                href={item === "Начало" ? "#" : `#${item === "За нас" ? "about" : item.toLowerCase()}`}
                                className="text-gray-500 hover:text-sky-600 font-bold text-[16px] uppercase tracking-wide transition relative group whitespace-nowrap"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* 3. ДЯСНО: КОНТАКТИ */}
                    <div className="hidden xl:flex items-center gap-5 flex-1 justify-end">

                        {/* Телефон */}
                        <a href="tel:0898811734" className="flex items-center gap-2 group">
                            <div className="w-9 h-9 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <span className="font-extrabold text-gray-700 text-[20px] group-hover:text-sky-600 transition tracking-tight whitespace-nowrap">089 881 1734</span>
                        </a>

                        {/* Бутон */}
                        <a
                            href="#contact"
                            className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 rounded-full font-bold text-[14px] shadow-lg shadow-sky-100 hover:shadow-sky-200 transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wider text-center whitespace-nowrap"
                        >
                            Безплатен оглед
                        </a>

                        {/* --- ИМЕЙЛ С АНИМИРАНА ИКОНА (СЕГА ОТЛЯВО) --- */}
                        <a
                            href="mailto:svejiteofficial@gmail.com"
                            // ПРОМЯНА: flex items-center gap-3 (Подрежда хоризонтално с разстояние)
                            className="flex items-center gap-3 h-14 justify-center text-left pl-5 border-l border-gray-100 group cursor-pointer"
                        >
                            {/* Икона */}
                            <div>
                                <svg
                                    className="w-6 h-6 text-gray-900 group-hover:text-sky-500 transition-colors duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="animate-draw-envelope"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>

                            {/* Текст */}
                            <span className="font-black text-sky-900 text-[16px] leading-tight whitespace-nowrap group-hover:text-sky-500 transition-colors duration-300">
                                svejiteofficial@gmail.com
                            </span>
                        </a>

                    </div>

                    {/* Мобилно меню */}
                    <div className="xl:hidden flex items-center gap-4">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-sky-600 focus:outline-none p-2"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {isMobileMenuOpen && (
                    <div className="xl:hidden absolute top-24 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col space-y-4">
                        {["Начало", "Услуги", "Пакети", "За нас", "Контакти"].map((item) => (
                            <a
                                key={item}
                                href={item === "Начало" ? "#" : `#${item === "За нас" ? "about" : item.toLowerCase()}`}
                                onClick={toggleMenu}
                                className="text-gray-800 font-bold text-lg uppercase tracking-wide hover:text-sky-600 transition"
                            >
                                {item}
                            </a>
                        ))}
                        <div className="h-px bg-gray-100 my-2 w-full"></div>
                        <a href="tel:0898811734" className="text-sky-600 font-extrabold text-xl">089 881 1734</a>
                        <a href="mailto:svejiteofficial@gmail.com" className="text-sky-900 font-black text-lg">svejiteofficial@gmail.com</a>
                    </div>
                )}
            </div>
        </nav>
    );
}