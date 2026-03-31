import Image from "next/image";
import { services } from "../data/content";

export default function ServicesGrid() {
    return (
        <section id="services" className="relative py-24 w-full">

            {/* --- ФОНОВА СНИМКА --- */}
            {/* Тук махнахме -z-10 и ползваме стандартно позициониране, за да не се крие зад body-то */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/cleaningBackground.png" // ВАЖНО: Провери дали файлът в папка public е .png или .jpg!
                    alt="Background Pattern"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay (Слой): Направих го 60% бял. 
                    Така хем се чете, хем се вижда снимката. */}
                <div className="absolute inset-0 bg-white/90"></div>
            </div>

            {/* --- СЪДЪРЖАНИЕ --- */}
            {/* relative z-10 гарантира, че текстът е НАД снимката */}
            <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">Вижте нашите услуги и цени</h2>
                <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-16"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left flex flex-col h-full">

                            <div className="relative h-56 overflow-hidden flex-shrink-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}