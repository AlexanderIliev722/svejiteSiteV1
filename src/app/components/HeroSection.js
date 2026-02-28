import Image from "next/image";

export default function HeroSection() {
    return (
        <header className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden text-center">
            {/* 1. ФОН И СНИМКА */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/cleaningBackgroundBlue.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-white/60"></div>
            </div>

            {/* 2. СЪДЪРЖАНИЕ */}
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/80 backdrop-blur-sm text-sky-700 font-bold text-[20px] tracking-wider uppercase border border-sky-100 shadow-sm">
                    <span className="w-3 h-3 rounded-full bg-orange-400 animate-pulse"></span>
                    Професионално почистване в гр. София
                </div>
                <h1 className="text-5xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
                    Безупречна чистота за вашия <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700">
                        дом и офис
                    </span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Експертна чистота без компромис. Независимо дали имате нужда от еднократно основно почистване или дългосрочен абонамент – ние сме насреща.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-bold">
                    <a href="#contact" className="w-full sm:w-auto bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-100 hover:bg-orange-600 transition-all duration-200 transform hover:-translate-y-1 uppercase tracking-wider text-center">
                        Бърза заявка за оферта
                    </a>
                    <a href="#packages" className="bg-sky-500 hover:bg-sky-600 text-white px-12 py-3.5 rounded-full font-bold text-lg shadow-lg shadow-sky-300 hover:shadow-sky-200 transition-all duration-200 transform hover:-translate-y-1 uppercase tracking-wider text-center">
                        Вижте цени и услуги
                    </a>
                </div>
            </div>
        </header>
    );
}
