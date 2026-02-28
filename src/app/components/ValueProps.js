export default function ValueProps() {
    return (
        <section className="py-20 bg-sky-500 text-white border-b border-sky-800">
            <div className="max-w-6xl mx-auto px-4 text-center">

                {/* Заглавие */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
                    Имате нужда от почистване?
                </h2>

                {/* Слоган */}
                <p className="text-2xl md:text-4xl font-medium mb-16">
                    <span className="text-white font-bold">Викнете </span>
                    <span className="text-white font-bold">СВЕЖИТЕ</span>
                    <span className="text-orange-400 font-bold">.</span>
                    <span className="text-white"> – </span>

                    <span className="text-sky-900 ">ние </span>
                    <span className="text-white font-bold">чистим</span>,

                    <span className="text-sky-900 ml-2">вие </span>
                    <span className="text-white font-bold">почивате!</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Бързина */}
                    <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                        <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 shadow-sm transition-all duration-300 group-hover:bg-white/25 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-sky-100 transition-colors">Бързина</h3>
                        <p className="text-lg md:text-xl text-sky-100 mb-10 max-w-2xl mx-auto leading-relaxed group-hover:text-white transition-colors">
                            Нашият екип е подготвени да се справя с всяка задача във възможно най-кратък срок и навреме.
                        </p>
                    </div>

                    {/* Коректност */}
                    <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                        <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 shadow-sm transition-all duration-300 group-hover:bg-white/25 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-sky-100 transition-colors">Коректност</h3>
                        <p className="text-lg md:text-xl text-sky-100 mb-10 max-w-2xl mx-auto leading-relaxed group-hover:text-white transition-colors">
                            Ние ценим нашите клиенти и държим на прозрачност и коректно отношение при извършването на всяка предлагана от нас услуга.
                        </p>
                    </div>

                    {/* Качество */}
                    <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                        <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 shadow-sm transition-all duration-300 group-hover:bg-white/25 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-sky-100 transition-colors">Качество</h3>
                        <p className="text-lg md:text-xl text-sky-100 mb-10 max-w-2xl mx-auto leading-relaxed group-hover:text-white transition-colors">
                            Ние сме енергичен екип, работещ с модерна техника и професионални почистващи препарати, които гарантират високо качество във всяко почистване.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
