import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Текстова част */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <span className="text-sky-600 font-bold tracking-widest uppercase text-[30px]">За нас</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6 tracking-tight">
                            Кои сме ние и защо да изберете нас?
                        </h2>
                        <div className="w-20 h-1.5 bg-orange-500 mx-auto lg:mx-0 rounded-full mb-8"></div>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            <strong className="text-gray-900">Свежите</strong> е водеща компания за професионално почистване в град София. Създадени с мисията да предоставим безупречна чистота и комфорт във всеки дом и офис.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Разполагаме с доказан екип от професионалисти, които използват съвременна техника и висококачествени екологично чисти препарати, щадящи здравето и природата. Вярваме, че детайлът прави разликата, затова подхождаме индивидуално към всяко помещение.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-10">
                            <div className="border-l-4 border-sky-500 pl-4">
                                <span className="block text-4xl font-black text-sky-900 mb-1">100+</span>
                                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Доволни клиента</span>
                            </div>
                            <div className="border-l-4 border-orange-500 pl-4">
                                <span className="block text-4xl font-black text-sky-900 mb-1">5+</span>
                                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Години опит</span>
                            </div>
                        </div>
                    </div>

                    {/* Визуална част */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative h-[400px] w-full md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                            {/* Снимка (unsplash placeholder за сега) */}
                            <Image
                                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1000&auto=format&fit=crop"
                                alt="Екипът на Свежите"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent"></div>
                        </div>

                        {/* Декоративен елемент */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Гарантирано качество</p>
                                    <p className="text-sm text-gray-500">100% клиентска удовлетвореност</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
