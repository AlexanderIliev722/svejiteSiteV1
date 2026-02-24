import Image from "next/image";

export default function Home() {

    // Данни за Услугите
    const services = [
        {
            title: "Основно почистване",
            description: "Цялостно прахосмукиране, обезпрашаване на мебели, почистване на подове и дезинфекция на санитарни помещения.",
            image: "https://images.unsplash.com/photo-1581578731117-104f2a417954?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Почистване след ремонт",
            description: "Премахване на фин строителен прах, остатъци от латекс, лепила и фуги. Професионално измиване на дограма.",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Абонаментно почистване",
            description: "Редовна грижа за вашия дом или офис по график. Винаги чисто и уютно, без да губите време.",
            image: "https://images.unsplash.com/photo-1527512860163-a20d43a75823?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Почистване на прозорци",
            description: "Двустранно измиване на стъкла, дограми и комарници. Кристална чистота и повече светлина.",
            image: "https://images.unsplash.com/photo-1504197885-609741699992?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Пране на мека мебел",
            description: "Машинно пране на дивани, фотьойли, столове и матраци. Премахване на петна и акари.",
            image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Почистване на входове",
            description: "Абонаментно метене и миене на стълбища, площадки, парапети и асансьори в жилищни сгради.",
            image: "https://images.unsplash.com/photo-1613575831056-0acd5da8f085?q=80&w=800&auto=format&fit=crop",
        },
    ];

    // Данни за Пакетите
    const packages = [
        {
            name: "ПАКЕТ СТАНДАРТ",
            price: "от 3.50 лв./кв.м",
            features: [
                "Прахосмукиране на подове",
                "Измиване на твърди настилки",
                "Обезпрашаване на мебели (външно)",
                "Почистване на ключове и контакти",
                "Почистване на баня и тоалетна",
                "Изхвърляне на кошчета"
            ],
            highlight: false
        },
        {
            name: "ПАКЕТ ПРЕМИУМ",
            price: "от 5.50 лв./кв.м",
            features: [
                "Всичко от Пакет Стандарт",
                "Двустранно миене на прозорци",
                "Почистване на дограми и первази",
                "Външно почистване на кухня",
                "Обезпрашаване на врати и каси",
                "Почистване на огледала"
            ],
            highlight: true
        },
        {
            name: "ПАКЕТ СЛЕД РЕМОНТ",
            price: "от 8.00 лв./кв.м",
            features: [
                "Премахване на строителен прах",
                "Отстраняване на петна от латекс",
                "Почистване на фуги и санитария",
                "Машинно измиване на подове",
                "Детайлно почистване на контакти",
                "Измиване на прозорци (с лепенки)"
            ],
            highlight: false
        }
    ];

    return (
        <div className="min-h-screen font-sans text-gray-800 bg-gray-50">

            {/* --- НАВИГАЦИЯ (Sparki Style) --- */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">

                        {/* 1. ЛОГО (Комбинирано: Картинка + Текст) */}
                        <div className="flex-shrink-0 flex items-center">
                            <a href="#" className="flex items-center gap-3 group">

                                {/* А. КАРТИНКА (Вашето лого) */}
                                <div className="relative h-24 w-24 md:h-24 md:w-24"> {/* ТУК ПРОМЕНЯТЕ РАЗМЕРА */}
                                    <Image
                                        src="/LogoFreshFists.png"
                                        alt="Лого Свежите"
                                        fill
                                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 64px, 80px"
                                        priority
                                    />
                                </div>

                                {/* Б. ТЕКСТ (Запазваме шрифта) */}
                                <div className="flex flex-col text-left">
                   <span className="text-2xl font-black text-sky-700 tracking-tighter leading-none">
                      СВЕЖИТЕ<span className="text-orange-500">.</span>
                   </span>
                                    <span className="text-[15px] font-bold text-gray-500 uppercase tracking-widest ml-0.5 group-hover:text-sky-600 transition">
                      Професионално Почистване
                   </span>
                                </div>

                            </a>
                        </div>

                        {/* 2. МЕНЮ (Център) */}
                        <div className="hidden lg:flex space-x-10 items-center">
                            {["Начало", "Услуги", "Пакети", "Контакти"].map((item) => (
                                <a key={item} href={item === "Начало" ? "#" : `#${item.toLowerCase()}`} className="text-gray-600 hover:text-sky-600 font-bold text-sm uppercase tracking-wide transition relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>

                        {/* 3. ДЯСНО: ТЕЛЕФОН -> БУТОН -> РАБОТНО ВРЕМЕ */}
                        <div className="hidden xl:flex items-center gap-8">

                            {/* Телефон */}
                            <a href="tel:0888123456" className="flex items-center gap-3 group">
                                <div className="w-11 h-11 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <span className="font-extrabold text-gray-700 text-xl group-hover:text-sky-600 transition tracking-tight">0888 123 456</span>
                            </a>

                            {/* Бутон (Син) - Променен на <a> за препратка */}
                            <a
                                href="#contact"
                                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-sky-100 hover:shadow-sky-200 transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wider text-center"
                            >
                                Заяви оглед
                            </a>

                        </div>

                        {/* Мобилно меню */}
                        <div className="xl:hidden flex items-center gap-4">
                            <button className="text-gray-600 hover:text-sky-600 focus:outline-none p-2">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </button>
                        </div>

                    </div>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <header className="bg-gradient-to-b from-sky-50/50 to-white pt-16 pb-24 lg:pt-24 lg:pb-32 relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white text-sky-700 font-bold text-xs tracking-wider uppercase border border-sky-100 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
                        Професионално почистване София
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
                        Безупречна чистота за вашия <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700">
              дом и офис
            </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Доверете се на професионалистите. От основно почистване след ремонт до редовна абонаментна поддръжка – ние се грижим за всичко.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-bold">
                        <a href="#contact" className="w-full sm:w-auto bg-orange-500 text-white px-10 py-4 rounded-full text-lg shadow-xl shadow-orange-100 hover:bg-orange-600 transition transform hover:-translate-y-1">
                            Бърза заявка за оферта
                        </a>
                        <a href="#packages" className="w-full sm:w-auto bg-white text-sky-700 border border-sky-100 px-10 py-4 rounded-full text-lg hover:border-sky-500 transition shadow-sm">
                            Вижте цени
                        </a>
                    </div>
                </div>
            </header>

            {/* --- SERVICES GRID --- */}
            <section id="services" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Нашите Услуги</h2>
                    <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-16"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left">
                                <div className="relative h-56 overflow-hidden">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">{service.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PACKAGES --- */}
            <section id="packages" className="py-24 bg-sky-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <span className="text-sky-600 font-bold tracking-widest uppercase text-xs">Цени и Пакети</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-16">Изберете ниво на чистота</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {packages.map((pkg, index) => (
                            <div key={index} className={`relative bg-white rounded-[2rem] p-10 border transition-all duration-300 ${pkg.highlight ? 'border-sky-500 shadow-2xl scale-105 z-10 ring-8 ring-sky-50' : 'border-gray-100 shadow-lg'}`}>
                                {pkg.highlight && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">Най-популярен</div>}
                                <h3 className="text-gray-400 font-black uppercase tracking-widest text-sm mb-4">{pkg.name}</h3>
                                <div className="text-4xl font-black text-sky-900 mb-8">{pkg.price}</div>
                                <ul className="text-left space-y-4 mb-10">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-4 rounded-xl font-black transition-all text-sm uppercase tracking-widest ${pkg.highlight ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-gray-50 text-gray-800 border border-gray-100 hover:bg-gray-100'}`}>Избери пакет</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CONTACT FORM --- */}
            <section id="contact" className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-sky-900 rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
                        <div className="relative z-10 text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Бърза заявка за оглед</h2>
                            <p className="text-sky-200">Ще се свържем с вас възможно най-скоро.</p>
                        </div>
                        <form className="space-y-6 relative z-10 font-medium">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Вашето име" className="w-full px-6 py-4 rounded-2xl bg-sky-800/50 border border-sky-700 text-white placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition" />
                                <input type="tel" placeholder="Телефонен номер" className="w-full px-6 py-4 rounded-2xl bg-sky-800/50 border border-sky-700 text-white placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition" />
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {["Основно", "След ремонт", "Абонамент", "Прозорци", "Мека мебел", "Офиси"].map((item) => (
                                    <label key={item} className="flex items-center space-x-2 p-3 rounded-xl bg-sky-800/30 border border-sky-700/50 cursor-pointer hover:bg-sky-800/60 transition">
                                        <input type="checkbox" className="w-4 h-4 rounded text-orange-500 bg-sky-900 border-sky-600" />
                                        <span className="text-sky-100 text-xs">{item}</span>
                                    </label>
                                ))}
                            </div>
                            <textarea rows="4" placeholder="Допълнителна информация (адрес, квадратура...)" className="w-full px-6 py-4 rounded-2xl bg-sky-800/50 border border-sky-700 text-white placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"></textarea>
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-xl transition transform hover:-translate-y-1 uppercase tracking-widest">Изпрати запитване</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-gray-900 text-gray-500 py-12 text-center border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-xl font-black text-white tracking-tighter uppercase">Свежите<span className="text-orange-500">.</span></div>
                    <p className="text-sm">© 2024 Свежите. Всички права запазени.</p>
                </div>
            </footer>
        </div>
    );
}