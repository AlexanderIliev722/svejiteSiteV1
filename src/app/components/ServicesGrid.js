import Image from "next/image";
import { services } from "../data/content";

export default function ServicesGrid() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Нашите Услуги</h2>
                <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-16"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left">
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
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
    );
}
