"use client";

export default function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Тук ще добавиш логиката за изпращане (напр. fetch към API route)
        alert("Запитването е изпратено успешно! Ще се свържем с вас скоро.");
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-sky-900 rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
                    <div className="relative z-10 text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Бърза заявка за оглед</h2>
                        <p className="text-sky-200">Ще се свържем с вас възможно най-скоро.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10 font-medium">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input required type="text" placeholder="Вашето име" className="w-full px-6 py-4 rounded-2xl bg-sky-800/50 border border-sky-700 text-white placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition" />
                            <input required type="tel" placeholder="Телефонен номер" className="w-full px-6 py-4 rounded-2xl bg-sky-800/50 border border-sky-700 text-white placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition" />
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
                        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl shadow-xl transition transform hover:-translate-y-1 uppercase tracking-widest">Изпрати запитване</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
