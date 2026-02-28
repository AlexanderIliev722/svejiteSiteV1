import { packages } from "../data/content";

export default function PackagesSection() {
    return (
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
    );
}
