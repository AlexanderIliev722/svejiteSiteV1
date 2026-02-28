"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="w-full px-6 lg:px-13">
                <div className="flex justify-between items-center h-24">

                    {/* 1. ЛОГО */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="flex items-center gap-5 group">
                            <div className="relative h-20 w-20 md:h-36 md:w-36 flex-shrink-0">
                                <Image
                                    src="/LogoFreshFists.png"
                                    alt="Лого Свежите"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-2xl md:text-3xl font-black text-sky-700 tracking-tighter leading-none object-contain group-hover:scale-105 transition-transform duration-300">
                                    СВЕЖИТЕ<span className="text-orange-500">.</span>
                                </span>
                                <span className="text-[16px] font-bold text-gray-500 uppercase tracking-widest ml-0.5 mt-1 object-contain group-hover:scale-105 transition-transform duration-300">
                                    Професионално почистване
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* 2. МЕНЮ */}
                    <div className="hidden 2xl:flex space-x-12 items-center">
                        <a href="#" className="text-gray-500 hover:text-sky-600 font-bold text-[16px] uppercase tracking-wide transition relative group">
                            Начало
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#services" className="text-gray-500 hover:text-sky-600 font-bold text-[16px] uppercase tracking-wide transition relative group">
                            Услуги
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#packages" className="text-gray-500 hover:text-sky-600 font-bold text-[16px] uppercase tracking-wide transition relative group">
                            Пакети
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#about" className="text-gray-500 hover:text-sky-600 font-bold text-[16px] uppercase tracking-wide transition relative group">
                            За нас
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#contact" className="text-gray-500 hover:text-sky-600 font-bold text-[16px] uppercase tracking-wide transition relative group">
                            Контакти
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
                        </a>
                    </div>

                    {/* 3. ДЯСНО: КОНТАКТИ */}
                    <div className="hidden xl:flex items-center gap-8">
                        <a href="tel:0898811734" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <span className="font-extrabold text-gray-800 text-xl group-hover:text-sky-600 transition tracking-tight">089 881 1734</span>
                        </a>
                        <a
                            href="#contact"
                            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3.5 rounded-full font-bold text-[15px] shadow-lg shadow-sky-100 hover:shadow-sky-200 transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wider text-center"
                        >
                            Безплатен оглед
                        </a>
                        <div className="flex flex-col h-14 justify-center">
                            <span className="uppercase text-[10px] font-black text-sky-600 tracking-[0.15em] mb-1">Имейл</span>
                            <a href="mailto:svejiteofficial@gmail.com" className="font-black text-sky-900 text-lg leading-tight whitespace-nowrap hover:text-orange-500 transition">
                                svejiteofficial@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Мобилно меню */}
                    <div className="xl:hidden flex items-center gap-4">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-sky-600 focus:outline-none p-2"
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
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

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="xl:hidden absolute top-24 left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col space-y-4">
                        <a href="#" onClick={toggleMenu} className="text-gray-800 font-bold text-lg uppercase tracking-wide hover:text-sky-600 transition">Начало</a>
                        <a href="#services" onClick={toggleMenu} className="text-gray-800 font-bold text-lg uppercase tracking-wide hover:text-sky-600 transition">Услуги</a>
                        <a href="#packages" onClick={toggleMenu} className="text-gray-800 font-bold text-lg uppercase tracking-wide hover:text-sky-600 transition">Пакети</a>
                        <a href="#about" onClick={toggleMenu} className="text-gray-800 font-bold text-lg uppercase tracking-wide hover:text-sky-600 transition">За нас</a>
                        <a href="#contact" onClick={toggleMenu} className="text-gray-800 font-bold text-lg uppercase tracking-wide hover:text-sky-600 transition">Контакти</a>
                        <div className="h-px bg-gray-100 my-2 w-full"></div>
                        <a href="tel:0898811734" className="text-sky-600 font-extrabold text-xl">089 881 1734</a>
                        <a href="mailto:svejiteofficial@gmail.com" className="text-sky-900 font-black text-lg">svejiteofficial@gmail.com</a>
                    </div>
                )}
            </div>
        </nav>
    );
}
