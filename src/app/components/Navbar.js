"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const ThemeToggleIcon = ({ isDarkMode }) => (
    <div className={`transition-transform duration-500 flex items-center justify-center ${isDarkMode ? 'rotate-[360deg]' : 'rotate-0'}`}>
        {isDarkMode ? (
            <svg className="w-4 h-4 min-[1250px]:w-5 min-[1400px]:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
        ) : (
            <svg className="w-4 h-4 min-[1250px]:w-5 min-[1400px]:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        )}
    </div>
);

const PhoneIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="animate-draw-envelope" pathLength="100" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const EmailIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" className="animate-draw-envelope" pathLength="100" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activePhone, setActivePhone] = useState(0);

    const phones = [
        { number: "0898811734", display: "089 881 1734" },
        { number: "0876899405", display: "087 689 9405" }
    ];

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsPhoneDropdownOpen(false);
    };

    return (
        <header className="h-24">
            <nav className={`fixed w-full top-0 transition-colors duration-300 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md ${isMobileMenuOpen ? "z-[70] shadow-none" : "z-40 shadow-sm dark:shadow-slate-800/50"}`}>
                <div className="max-w-[1920px] mx-auto">
                    <div className="w-full px-4 sm:px-6 xl:px-8 2xl:px-12">
                        <div className="flex justify-between items-center h-24">

                            {/* ЛОГО */}
                            <div className="flex-shrink-0 flex items-center min-w-0">
                                <a href="#" className="flex items-center gap-2 sm:gap-3 group">
                                    <div className="relative h-20 w-20 min-[680px]:h-24 min-[680px]:w-24 min-[860px]:h-28 min-[860px]:w-28 2xl:h-32 2xl:w-32 flex-shrink-0">
                                        <Image src={isDarkMode ? "/LogoFreshFistsTransparent0_Dark.png" : "/LogoFreshFistsTransparent0.png"} alt="Лого Свежите" fill
                                            className={`object-contain group-hover:scale-105 transition-transform duration-300 ${isDarkMode ? 'p-4' : ''}`} priority />
                                    </div>
                                    <div className="flex flex-col text-left min-w-0">
                                        <span className="text-xl min-[680px]:text-2xl min-[860px]:text-3xl 2xl:text-3xl font-black text-sky-700 dark:text-white tracking-tighter leading-none group-hover:scale-105 transition-transform duration-300">
                                            СВЕЖИТЕ<span className="text-orange-500 dark:text-orange-400">.</span>
                                        </span>
                                        <span className="text-[9px] min-[680px]:text-[11px] min-[860px]:text-[13px] 2xl:text-[13px] font-bold text-gray-500 dark:text-gray-300 uppercase tracking-widest ml-0.5 mt-1 whitespace-nowrap group-hover:scale-105 transition-transform duration-300">
                                            Професионално почистване
                                        </span>
                                    </div>
                                </a>
                            </div>

                            {/* МЕНЮ ЛИНКОВЕ - xl+ (1280px+) */}
                            <div className="hidden min-[1250px]:flex space-x-3 2xl:space-x-5 items-center">
                                {["Начало", "Услуги", "Пакети", "За нас", "Контакти"].map((item) => (
                                    <a key={item}
                                        href={item === "Начало" ? "#" : `#${item === "За нас" ? "about" : item.toLowerCase()}`}
                                        className="text-gray-500 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 font-bold text-[12px] min-[1350px]:text-[14px] min-[1500px]:text-[16px] min-[1700px]:text-[18px] uppercase tracking-wide transition relative group whitespace-nowrap">
                                        {item}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 dark:bg-sky-400 transition-all group-hover:w-full"></span>
                                    </a>
                                ))}
                            </div>

                            {/* DESKTOP КОНТАКТИ - xl+ (1280px+) */}
                            <div className="hidden xl:flex items-center gap-3 2xl:gap-4 flex-shrink-0">
                                <div className="flex items-center gap-1.5">
                                    <button onClick={() => setActivePhone(prev => (prev + 1) % phones.length)} className="w-8 h-8 min-[1400px]:w-10 min-[1400px]:h-10 rounded-full bg-sky-50 dark:bg-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400 hover:bg-sky-500 hover:text-white transition-all duration-300 cursor-pointer outline-none" title="Смени номера">
                                        <PhoneIcon />
                                    </button>
                                    <a href={`tel:${phones[activePhone].number}`} className="group">
                                        <span className="font-extrabold text-gray-700 dark:text-white text-[13px] min-[1400px]:text-[15px] 2xl:text-[18px] group-hover:text-sky-600 dark:group-hover:text-sky-400 transition tracking-tight whitespace-nowrap">{phones[activePhone].display}</span>
                                    </a>
                                </div>

                                <a href="mailto:svejiteofficial@gmail.com" className="hidden xl:flex items-center gap-1.5 group">
                                    <div className="w-8 h-8 min-[1400px]:w-10 h-10 rounded-full bg-sky-50 dark:bg-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                        <EmailIcon />
                                    </div>
                                    <span className="font-extrabold text-gray-700 dark:text-white text-[13px] min-[1400px]:text-[15px] 2xl:text-[18px] group-hover:text-sky-600 dark:group-hover:text-sky-400 transition tracking-tight whitespace-nowrap">svejiteofficial@gmail.com</span>
                                </a>

                                {/* Бутон - само 2xl+ (1536px+) */}
                                <a href="#contact"
                                    className="xl:inline-flex bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-full font-bold text-[12px] min-[1400px]:text-[14px] 2xl:text-[16px] shadow-lg shadow-sky-100 dark:shadow-none transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wider text-center whitespace-nowrap">
                                    Безплатен оглед
                                </a>

                                {/* Тъмна тема Desktop */}
                                <button onClick={toggleTheme} className="flex items-center justify-center w-8 h-8 min-[1400px]:w-10 min-[1400px]:h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:bg-sky-100 hover:text-sky-600 dark:hover:bg-slate-700 dark:hover:text-sky-400 transition-all duration-300 outline-none">
                                    <ThemeToggleIcon isDarkMode={isDarkMode} />
                                </button>
                            </div>

                            {/* МОБИЛНА СЕКЦИЯ (под xl / 1280px) */}
                            <div className="xl:hidden flex items-center gap-2 flex-shrink-0">
                                {/* Скриваме контактите, когато менюто е отворено, за да не пречат на страничното меню */}
                                <div className={`flex items-center gap-2 transition-all duration-300 origin-right ${isMobileMenuOpen ? "opacity-0 scale-95 pointer-events-none absolute right-16" : "opacity-100 scale-100 relative"}`}>
                                    {/* Телефон меню с Dropdown (САМО ДО 950px) */}
                                    <div className="relative max-[949px]:flex min-[950px]:hidden items-center h-full">
                                        <button onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)} className="flex items-center gap-1.5 group outline-none">
                                            <div className="hidden min-[414px]:flex w-8 h-8 rounded-full bg-sky-50 dark:bg-slate-800 items-center justify-center text-sky-600 dark:text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                                <PhoneIcon />
                                            </div>
                                        </button>

                                        {/* Dropdown меню за телефоните */}
                                        {isPhoneDropdownOpen && (
                                            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md shadow-2xl dark:shadow-black/50 rounded-2xl border border-gray-200 dark:border-slate-700 py-3 px-3 flex flex-col items-center space-y-2 z-50">
                                                <a href="tel:0898811734" onClick={() => setIsPhoneDropdownOpen(false)} className="flex items-center justify-center w-full gap-2 group hover:bg-sky-50 dark:hover:bg-slate-700 px-3 py-2 rounded-xl transition-all duration-200">
                                                    <div className="w-7 h-7 rounded-full bg-sky-50 dark:bg-slate-700 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                                                        <PhoneIcon />
                                                    </div>
                                                    <span className="text-sky-700 dark:text-sky-300 font-extrabold text-sm whitespace-nowrap">089 881 1734</span>
                                                </a>
                                                <a href="tel:0876899405" onClick={() => setIsPhoneDropdownOpen(false)} className="flex items-center justify-center w-full gap-2 group hover:bg-sky-50 dark:hover:bg-slate-700 px-3 py-2 rounded-xl transition-all duration-200">
                                                    <div className="w-7 h-7 rounded-full bg-sky-50 dark:bg-slate-700 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                                                        <PhoneIcon />
                                                    </div>
                                                    <span className="text-sky-700 dark:text-sky-300 font-extrabold text-sm whitespace-nowrap">087 689 9405</span>
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                    {/* Телефон директен линк с текст (ОТ 950px нагоре) */}
                                    <div className="hidden min-[950px]:flex items-center gap-1.5">
                                        <button onClick={() => setActivePhone(prev => (prev + 1) % phones.length)} className="w-8 h-8 rounded-full bg-sky-50 dark:bg-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400 hover:bg-sky-500 hover:text-white transition-all duration-300 cursor-pointer outline-none" title="Смени номера">
                                            <PhoneIcon />
                                        </button>
                                        <a href={`tel:${phones[activePhone].number}`} className="group">
                                            <span className="font-extrabold text-gray-700 dark:text-white text-base group-hover:text-sky-600 dark:group-hover:text-sky-400 transition tracking-tight whitespace-nowrap">{phones[activePhone].display}</span>
                                        </a>
                                    </div>

                                    {/* Имейл - иконка от 414px, текст от xs(485) до sm(640) */}
                                    <a href="mailto:svejiteofficial@gmail.com" className="flex items-center gap-1.5 group" title="svejiteofficial@gmail.com">
                                        <div className="hidden min-[440px]:flex w-8 h-8 rounded-full bg-sky-50 dark:bg-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                            <EmailIcon />
                                        </div>
                                        <span className="hidden min-[600px]:inline font-extrabold text-gray-700 dark:text-white text-sm group-hover:text-sky-600 dark:group-hover:text-sky-400 transition tracking-tight whitespace-nowrap">svejiteofficial@gmail.com</span>
                                    </a>

                                    {/* Бутон - от md (768px) до xl */}
                                    <a href="#contact"
                                        className="hidden min-[820px]:inline-flex bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 rounded-full font-bold text-[11px] shadow-lg shadow-sky-100 dark:shadow-none uppercase tracking-wider text-center whitespace-nowrap transition-all duration-200">
                                        Безплатен оглед
                                    </a>
                                </div>

                                {/* Тъмна тема Mobile */}
                                <button onClick={toggleTheme} className="flex min-[1250px]:hidden items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-300 outline-none">
                                    <ThemeToggleIcon isDarkMode={isDarkMode} />
                                </button>

                                {/* Хамбургер */}
                                <button onClick={toggleMenu} className="min-[1250px]:hidden text-gray-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 focus:outline-none p-1.5 flex-shrink-0 transition-colors" aria-label="Меню">
                                    <div className="relative w-6 h-5 sm:w-8 sm:h-6">
                                        <span className={`absolute left-0 w-full h-[2.5px] sm:h-[3px] bg-current rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
                                        <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2.5px] sm:h-[3px] bg-current rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100'}`} />
                                        <span className={`absolute left-0 w-full h-[2.5px] sm:h-[3px] bg-current rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Овърлей фон */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 xl:hidden ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            {/* Sliding Side Menu (Docked exactly below the navbar) */}
            <div className={`fixed top-24 right-0 h-[calc(100vh-6rem)] w-[280px] sm:w-[320px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl dark:shadow-black/50 z-[60] transform transition-transform duration-300 ease-in-out flex flex-col pt-6 px-6 pb-6 overflow-y-auto xl:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>

                {/* Навигационни линкове */}
                <div className="flex flex-col space-y-2 border-b border-gray-300 dark:border-gray-700 pb-6 mb-6">
                    {["Начало", "Услуги", "Пакети", "За нас", "Контакти"].map((item) => (
                        <a key={item}
                            href={item === "Начало" ? "#" : `#${item === "За нас" ? "about" : item.toLowerCase()}`}
                            onClick={toggleMenu}
                            className="text-gray-600 dark:text-slate-300 font-medium text-lg hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-800 px-4 py-2 rounded-xl transition-all duration-200">
                            {item}
                        </a>
                    ))}
                </div>

                {/* Контакти */}
                <div className="flex flex-col space-y-4">
                    <a href="tel:0898811734" className="flex items-center gap-3 group hover:bg-sky-50 dark:hover:bg-slate-800 px-4 py-2 rounded-xl transition-all duration-200">
                        <div className="w-9 h-9 flex-shrink-0 rounded-full bg-sky-50 dark:bg-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                            <PhoneIcon />
                        </div>
                        <span className="text-sky-700 dark:text-sky-300 font-bold text-lg whitespace-nowrap">089 881 1734</span>
                    </a>

                    <a href="tel:0876899405" className="flex items-center gap-3 group hover:bg-sky-50 dark:hover:bg-slate-800 px-4 py-2 rounded-xl transition-all duration-200">
                        <div className="w-9 h-9 flex-shrink-0 rounded-full bg-sky-50 dark:bg-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                            <PhoneIcon />
                        </div>
                        <span className="text-sky-700 dark:text-sky-300 font-bold text-lg whitespace-nowrap">087 689 9405</span>
                    </a>

                    <a href="mailto:svejiteofficial@gmail.com" className="flex items-center gap-3 group hover:bg-sky-50 dark:hover:bg-slate-800 px-4 py-2 rounded-xl transition-all duration-200">
                        <div className="w-9 h-9 flex-shrink-0 rounded-full bg-sky-50 dark:bg-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                            <EmailIcon />
                        </div>
                        <span className="text-sky-900 dark:text-sky-300 font-bold text-sm min-[350px]:text-base break-all">svejiteofficial@gmail.com</span>
                    </a>
                </div>

                {/* Бутон */}
                <div className="mt-8">
                    <a href="#contact" onClick={toggleMenu}
                        className="min-[820px]:hidden block w-full bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 rounded-full font-bold text-[15px] shadow-lg shadow-sky-100 dark:shadow-none text-center uppercase tracking-wider transition-all duration-200">
                        Безплатен оглед
                    </a>
                </div>
            </div>
        </header>
    );
}