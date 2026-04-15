"use client";

import { useState } from "react";

const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const EmailIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const ClockIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const LocationIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
    </svg>
);

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-slate-900 relative overflow-hidden">

            {/* Декоративни елементи на фона */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-sky-400/10 dark:bg-sky-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 dark:bg-orange-400/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Заглавие */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Свържете се с нас
                    </h2>
                    <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-lg">
                        Заявете <span className="text-sky-600 dark:text-sky-400 font-semibold">безплатен оглед</span> или се свържете с нас за вашето запитване.
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-3 px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/40 text-orange-600 dark:text-orange-400 text-sm font-semibold">
                        ⚡ Отговаряме до 1 час!
                    </span>
                </div>

                {/* Двуколонен layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

                    {/* ЛЯВА КОЛОНА: Контактна информация */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-sky-800 via-sky-900 to-slate-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-2xl">

                        {/* Декоративни glow кръгове */}
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-sky-500/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-orange-500/15 rounded-full blur-2xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">Контактна информация</h3>
                            <p className="text-sky-300 text-sm mb-10">Ще се свържем с вас възможно най-скоро.</p>

                            {/* Контакти */}
                            <div className="space-y-6">
                                <a href="tel:0898811734" className="flex items-center gap-4 group">
                                    <div className="w-11 h-11 rounded-xl bg-sky-700/50 flex items-center justify-center text-sky-300 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                        <PhoneIcon />
                                    </div>
                                    <div>
                                        <p className="font-bold group-hover:text-orange-300 transition-colors">089 881 1734</p>
                                        <p className="text-sky-400 text-xs">Александър Илиев</p>
                                    </div>
                                </a>

                                <a href="tel:0876899405" className="flex items-center gap-4 group">
                                    <div className="w-11 h-11 rounded-xl bg-sky-700/50 flex items-center justify-center text-sky-300 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                        <PhoneIcon />
                                    </div>
                                    <div>
                                        <p className="font-bold group-hover:text-orange-300 transition-colors">087 689 9405</p>
                                        <p className="text-sky-400 text-xs">Александър Петров</p>
                                    </div>
                                </a>

                                <a href="mailto:svejiteofficial@gmail.com" className="flex items-center gap-4 group">
                                    <div className="w-11 h-11 rounded-xl bg-sky-700/50 flex items-center justify-center text-sky-300 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                        <EmailIcon />
                                    </div>
                                    <div>
                                        <p className="font-bold group-hover:text-orange-300 transition-colors text-sm">svejiteofficial@gmail.com</p>
                                        <p className="text-sky-400 text-xs">Официален имейл</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-sky-700/50 flex items-center justify-center text-sky-300">
                                        <ClockIcon />
                                    </div>
                                    <div>
                                        <p className="font-bold">Пон - Нед: 08:00 – 20:00</p>
                                        <p className="text-sky-400 text-xs">Работно време</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-sky-700/50 flex items-center justify-center text-sky-300">
                                        <LocationIcon />
                                    </div>
                                    <div>
                                        <p className="font-bold">София и околности</p>
                                        <p className="text-sky-400 text-xs">Зона на обслужване</p>
                                    </div>
                                </div>
                            </div>

                            {/* Социални мрежи */}
                            <div className="mt-12 pt-8 border-t border-sky-700/50">
                                <p className="text-sky-400 text-xs uppercase tracking-wider mb-4">Социални мрежи и връзки с нас</p>
                                <div className="flex gap-3">
                                    <a href="#" className="w-10 h-10 rounded-xl bg-sky-700/40 flex items-center justify-center text-sky-300 hover:bg-[#1877F2] hover:text-white transition-all duration-300" title="Facebook">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                    </a>
                                    <a href="#" className="group w-10 h-10 rounded-xl bg-sky-700/40 flex items-center justify-center text-sky-300 bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all duration-300" title="Instagram">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    </a>
                                    <a href="https://wa.me/359898811734" target="_blank" className="w-10 h-10 rounded-xl bg-sky-700/40 flex items-center justify-center text-sky-300 hover:bg-green-500 hover:text-white transition-all duration-300" title="WhatsApp">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    </a>
                                    <a href="viber://chat?number=%2B359898811734" className="w-10 h-10 rounded-xl bg-sky-700/40 flex items-center justify-center text-sky-300 hover:bg-purple-500 hover:text-white transition-all duration-300" title="Viber">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.518 6.77.453 9.96v.004c-.065 3.191.649 5.152 2.16 6.953a9.12 9.12 0 002.598 2.248v2.37s-.035.953.593 1.148c.76.236 1.206-.489 1.934-1.269l.278-.315c.676-.76 1.23-.672 1.854-.386 3.416 1.57 7.268 1.206 9.727-.67 2.95-2.247 3.471-5.76 3.32-8.543-.338-6.2-5.694-10.93-11.3-11.482-.076-.007-.148-.012-.219-.016zm.442 1.996c.13.006.26.018.39.032 4.704.55 9.085 4.547 9.37 9.562h.004c.122 2.242-.168 5.17-2.6 7.023-2.07 1.588-5.348 1.867-8.289.496l-.064-.03c-.638-.3-1.382-.35-1.882-.066l-.02.012-.024.016c-.356.267-.712.538-1.066.81l-.156.152v-2.066l-.166-.106a7.834 7.834 0 01-2.29-2.027c-1.27-1.506-1.864-3.154-1.808-5.884.053-2.678.673-4.856 2.065-6.244 1.918-1.76 5.46-1.726 6.536-1.68zM12.2 4.32a.476.476 0 00-.472.48.476.476 0 00.474.48c1.478.016 2.756.522 3.736 1.426 1.1 1.014 1.7 2.432 1.756 4.086a.476.476 0 00.478.466h.014a.476.476 0 00.464-.492c-.066-1.9-.766-3.55-2.044-4.73-1.142-1.054-2.636-1.67-4.358-1.716h-.048zm.064 1.584a.476.476 0 00-.462.49.476.476 0 00.488.464c2.074-.058 3.37 1.402 3.448 3.548a.476.476 0 00.478.46h.018a.478.478 0 00.458-.496c-.098-2.64-1.774-4.412-4.38-4.466h-.048zm-2.644.856c-.296-.008-.544.078-.72.262l-.012.01-.586.636-.014.014c-.376.39-.51.93-.36 1.442.39 1.34 1.194 3.062 2.67 4.536 1.5 1.502 3.424 2.588 4.854 3.014.506.15 1.06.038 1.46-.342l.622-.582.024-.024c.39-.4.386-1.03.01-1.456l-.008-.006-1.364-1.24a.794.794 0 00-1.078.034l-.58.582c-.164.162-.428.174-.6.062l-.016-.01c-.592-.37-1.206-.872-1.778-1.444-.572-.572-1.074-1.186-1.444-1.778l-.01-.016c-.11-.172-.1-.436.062-.6l.582-.58a.794.794 0 00.034-1.078L11.01 7.09a.824.824 0 00-.616-.324.903.903 0 00-.078-.002h-.016c-.1-.002-.188-.002-.28-.004zm2.888 1.382a.476.476 0 00-.434.514c.06.708.39 1.096.844 1.342.414.224.868.282 1.108.294a.476.476 0 00.044-.952c-.166-.008-.474-.054-.7-.176-.224-.122-.328-.282-.356-.604a.476.476 0 00-.506-.418z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ДЯСНА КОЛОНА: Формата */}
                    <div className="lg:col-span-3">
                        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-slate-700">

                            <div className="flex items-center gap-3 mb-1">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white shadow-lg shadow-sky-200 dark:shadow-sky-900/30">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Бърза <span className="text-sky-600 dark:text-sky-400">заявка</span> за <span className="text-sky-600 dark:text-sky-400">безплатен</span> оглед</h3>
                                </div>
                            </div>
                            <p className="text-gray-400 dark:text-gray-500 text-sm mb-8 flex items-center gap-1.5 ml-[52px]">
                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                Попълнете формата и ние ще се свържем с вас.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="relative group">
                                        <input required type="text" placeholder=" " id="contact-name" className="peer w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-700 border-2 border-gray-200 dark:border-slate-600 text-gray-800 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 transition-all duration-300" />
                                        <label htmlFor="contact-name" className="absolute left-5 top-4 text-gray-400 dark:text-gray-500 text-sm transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-sky-600 dark:peer-focus:text-sky-400 peer-focus:bg-white dark:peer-focus:bg-slate-700 peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white dark:peer-[:not(:placeholder-shown)]:bg-slate-700 peer-[:not(:placeholder-shown)]:px-2 pointer-events-none">Вашето име</label>
                                    </div>
                                    <div className="relative group">
                                        <input required type="tel" placeholder=" " id="contact-phone" className="peer w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-700 border-2 border-gray-200 dark:border-slate-600 text-gray-800 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 transition-all duration-300" />
                                        <label htmlFor="contact-phone" className="absolute left-5 top-4 text-gray-400 dark:text-gray-500 text-sm transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-sky-600 dark:peer-focus:text-sky-400 peer-focus:bg-white dark:peer-focus:bg-slate-700 peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white dark:peer-[:not(:placeholder-shown)]:bg-slate-700 peer-[:not(:placeholder-shown)]:px-2 pointer-events-none">Телефонен номер</label>
                                    </div>
                                </div>

                                {/* Чекбоксове за услуги */}
                                <div>
                                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3">Вид услуга:</p>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                                        {["Основно", "След ремонт", "Абонамент", "Прозорци", "Мека мебел", "Офиси"].map((item) => (
                                            <label key={item} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-700 border-2 border-gray-200 dark:border-slate-600 cursor-pointer hover:border-sky-400 dark:hover:border-sky-500 hover:bg-sky-50 dark:hover:bg-slate-600 transition-all duration-200 has-[:checked]:border-sky-500 has-[:checked]:bg-sky-50 dark:has-[:checked]:bg-sky-900/30 group">
                                                <input type="checkbox" className="sr-only peer" />
                                                <div className="w-5 h-5 rounded-md border-2 border-gray-300 dark:border-slate-500 flex items-center justify-center peer-checked:bg-sky-500 peer-checked:border-sky-500 transition-all duration-200 flex-shrink-0 text-transparent peer-checked:text-white">
                                                    <CheckIcon />
                                                </div>
                                                <span className="text-gray-600 dark:text-gray-300 text-sm font-medium peer-checked:text-sky-700 dark:peer-checked:text-sky-300 transition-colors">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Квадратура */}
                                <div>
                                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3">Квадратура:</p>
                                    <div className="grid grid-cols-3 gap-2.5">
                                        {["до 60 кв.м", "до 80 кв.м", "до 100 кв.м"].map((item) => (
                                            <label key={item} className="group/radio flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-gray-50 dark:bg-slate-700 border-2 border-gray-200 dark:border-slate-600 cursor-pointer hover:border-sky-400 dark:hover:border-sky-500 hover:bg-sky-50 dark:hover:bg-slate-600 transition-all duration-200 has-[:checked]:border-sky-500 has-[:checked]:bg-sky-50 dark:has-[:checked]:bg-sky-900/30 text-center">
                                                <input type="radio" name="area" className="sr-only" />
                                                <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-slate-500 group-has-[:checked]/radio:border-sky-500 transition-all duration-200 flex-shrink-0 flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-sky-500 scale-0 group-has-[:checked]/radio:scale-100 transition-transform duration-200"></div>
                                                </div>
                                                <span className="text-gray-600 dark:text-gray-300 text-sm font-medium group-has-[:checked]/radio:text-sky-700 dark:group-has-[:checked]/radio:text-sky-300 transition-colors">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Адрес и Етаж */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    <div className="relative group md:col-span-2">
                                        <input type="text" placeholder=" " id="contact-address" className="peer w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-700 border-2 border-gray-200 dark:border-slate-600 text-gray-800 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 transition-all duration-300" />
                                        <label htmlFor="contact-address" className="absolute left-5 top-4 text-gray-400 dark:text-gray-500 text-sm transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-sky-600 dark:peer-focus:text-sky-400 peer-focus:bg-white dark:peer-focus:bg-slate-700 peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white dark:peer-[:not(:placeholder-shown)]:bg-slate-700 peer-[:not(:placeholder-shown)]:px-2 pointer-events-none">Адрес</label>
                                    </div>
                                    <div className="relative group">
                                        <input type="text" placeholder=" " id="contact-floor" className="peer w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-700 border-2 border-gray-200 dark:border-slate-600 text-gray-800 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 transition-all duration-300" />
                                        <label htmlFor="contact-floor" className="absolute left-5 top-4 text-gray-400 dark:text-gray-500 text-sm transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-sky-600 dark:peer-focus:text-sky-400 peer-focus:bg-white dark:peer-focus:bg-slate-700 peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white dark:peer-[:not(:placeholder-shown)]:bg-slate-700 peer-[:not(:placeholder-shown)]:px-2 pointer-events-none">Етаж</label>
                                    </div>
                                </div>

                                {/* Предпочитана дата */}
                                <div className="relative group">
                                    <input type="date" id="contact-date" className="peer w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-700 border-2 border-gray-200 dark:border-slate-600 text-gray-800 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 transition-all duration-300" />
                                    <label htmlFor="contact-date" className="absolute left-5 -top-2.5 left-3 text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-700 px-2 pointer-events-none">Предпочитана дата за оглед</label>
                                </div>

                                {/* Текстово поле */}
                                <div className="relative">
                                    <textarea rows="3" placeholder=" " id="contact-message" className="peer w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-700 border-2 border-gray-200 dark:border-slate-600 text-gray-800 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 transition-all duration-300 resize-none"></textarea>
                                    <label htmlFor="contact-message" className="absolute left-5 top-4 text-gray-400 dark:text-gray-500 text-sm transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-sky-600 dark:peer-focus:text-sky-400 peer-focus:bg-white dark:peer-focus:bg-slate-700 peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white dark:peer-[:not(:placeholder-shown)]:bg-slate-700 peer-[:not(:placeholder-shown)]:px-2 pointer-events-none">Допълнителна информация</label>
                                </div>

                                {/* Бутон */}
                                <button
                                    type="submit"
                                    className={`w-full py-4 rounded-xl font-bold text-white uppercase tracking-wider shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 ${isSubmitted
                                        ? "bg-green-500 hover:bg-green-600 shadow-green-200 dark:shadow-green-900/30"
                                        : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange-200 dark:shadow-orange-900/30"
                                        }`}
                                >
                                    {isSubmitted ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <CheckIcon /> Изпратено успешно!
                                        </span>
                                    ) : (
                                        "Изпрати запитване"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
