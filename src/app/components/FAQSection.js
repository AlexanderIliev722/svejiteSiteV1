"use client";

import { useState } from "react";
import Image from "next/image";

// ТУК СА ДАННИТЕ: Въпроси, Отговори и Снимката за всеки въпрос
const faqs = [
    {
        question: "Как се определят цените за почистване?",
        answer: "Цените се определят въз основа на площта на помещението, степента на замърсяване и избраните услуги. Предлагаме безплатен оглед, за да изготвим точна и коректна оферта специално за Вас.",
        image: "/cleaning_stairs.jpg" // Смени с твоя снимка, свързана с цени/оферти
    },
    {
        question: "Колко време отнема почистването?",
        answer: "Стандартното основно почистване на апартамент отнема между 4 и 8 часа в зависимост от квадратурата. За поддържащо почистване обикновено са нужни 2 до 4 часа.",
        image: "/osnovno_house_cleaning.jpg" // Смени с твоя снимка (напр. часовник или процес на работа)
    },
    {
        question: "Какви препарати използвате?",
        answer: "Работим само с висок клас професионални препарати, които са екологични, биоразградими и напълно безопасни за деца и домашни любимци.",
        image: "/office_cleaning.jpg" // Смени с снимка на препарати
    },
    {
        question: "Трябва ли да присъствам по време на почистването?",
        answer: "Не, не е задължително. Много от нашите клиенти ни оставят ключове или ни осигуряват достъп и се връщат, когато всичко е готово и блестящо.",
        image: "/renovation_cleaning2.jpg" // Смени с снимка на предавате на ключове или щастлив клиент
    },
    {
        question: "Имате ли гаранция за услугите?",
        answer: "Да! Ако забележите пропуск, свържете се с нас в рамките на 24 часа и ние ще се върнем, за да отстраним проблема напълно безплатно.",
        image: "/windows_cleaning.png" // Смени с лого за качество или усмихнат екип
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null); // Нищо не е отворено по подразбиране

    const toggleFAQ = (index) => {
        // Ако кликнеш на вече отворения — затвори го
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-sky-100 dark:bg-sky-100">
            <div className="max-w-6xl mx-auto px-6">

                {/* ЗАГЛАВИЕ */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                        Често задавани въпроси
                    </h2>
                    <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* ЛЯВА КОЛОНА: ВЪПРОСИ (Accordion) */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                onClick={() => toggleFAQ(index)}
                                className={`border rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${activeIndex === index
                                    ? "border-sky-500 shadow-lg bg-white dark:bg-white" // Активен стил
                                    : "border-gray-200 hover:border-sky-300 bg-white dark:bg-white" // Неактивен стил
                                    }`}
                            >
                                {/* Заглавие на въпроса */}
                                <div className="p-5 flex justify-between items-center">
                                    <h3 className={`font-bold text-lg ${activeIndex === index ? "text-sky-700" : "text-gray-700"}`}>
                                        {faq.question}
                                    </h3>

                                    {/* Иконка стрелка */}
                                    <span className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-orange-500" : "text-gray-400"}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </div>

                                {/* Отговор (показва се само ако е активен) */}
                                <div
                                    className={`transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-5 pt-0 text-gray-500 leading-relaxed border-t border-dashed border-sky-100 mt-2">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ДЯСНА КОЛОНА: ДИНАМИЧНА СНИМКА */}
                    <div className="relative h-[400px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                            key={activeIndex !== null ? activeIndex : 'default'}
                            src={activeIndex !== null ? faqs[activeIndex].image : "/tips2.jpg"}
                            alt={activeIndex !== null ? "Илюстрация към въпроса" : "Полезни съвети"}
                            fill
                            className={`transition-opacity duration-500 ${activeIndex !== null ? 'object-cover' : 'object-contain bg-white'}`}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />

                        {/* Декоративен слой + текст — само когато има отворен въпрос */}
                        {activeIndex !== null && (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-4 left-5 right-5 text-white">
                                    <p className="font-bold text-base bg-orange-500 inline-block px-3 py-1 rounded mb-2 shadow-sm">
                                        Свежите съветват:
                                    </p>
                                    <p className="text-sm leading-relaxed opacity-95">
                                        {faqs[activeIndex].answer}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}