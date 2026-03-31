import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800 font-sans">
      <div className="max-w-[95rem] mx-auto px-6 lg:px-2">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between lg:items-start gap-12 lg:gap-0 w-full">

          {/* 1. ЛОГО И СЛОГАН */}
          <div className="flex flex-col items-start space-y-6 lg:w-1/5">
            <a href="#" className="group">
              <div className="flex flex-col text-left">
                <span className="text-4xl font-black text-white tracking-tighter uppercase group-hover:text-sky-400 transition-colors duration-300">
                  СВЕЖИТЕ<span className="text-orange-500">.</span>
                </span>
                <span className="text-[16px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                  Професионално почистване
                </span>
              </div>
            </a>

            <p className="text-[22px] leading-relaxed mt-4">
              <span className="text-sky-500 font-bold">Викнете </span>
              <span className="text-white font-bold">СВЕЖИТЕ</span>
              <span className="text-orange-500 font-bold">.</span>
              <br />
              <span className="text-orange-500 font-bold">Ние </span>
              <span className="text-white">чистим, </span>
              <span className="text-orange-500 font-bold">вие </span>
              <span className="text-white">почивате!</span>
            </p>
          </div>

          {/* 2. НАШИТЕ УСЛУГИ */}
          <div className="flex flex-col space-y-6 lg:w-1/5">
            <h3 className="text-white font-bold uppercase tracking-wider text-[20px] border-b border-gray-800 pb-2 w-fit">
              Нашите Услуги
            </h3>
            <ul className="space-y-3 text-[18px]">
              {[
                "Основно почистване",
                "Почистване след ремонт",
                "Абонаментно почистване",
                "Почистване на прозорци",
                "Пране на мека мебел",
                "Почистване на офиси"
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="block hover:text-sky-500 hover:pl-3 transition-all duration-300 relative group">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. КОМПАНИЯ */}
          <div className="flex flex-col space-y-6 lg:w-1/5">
            <h3 className="text-white font-bold uppercase tracking-wider text-[20px] border-b border-gray-800 pb-2 w-fit">
              Компания
            </h3>
            <ul className="space-y-3 text-[18px]">
              {[
                { name: "За нас", link: "#about" },
                { name: "Квартали", link: "#" },
                { name: "Блог", link: "#" },
                { name: "Контакти", link: "#contact" },
                { name: "Общи условия и GDPR", link: "#" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="block hover:text-sky-500 hover:pl-3 transition-all duration-300 relative group">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. ПОЛЕЗНО */}
          <div className="flex flex-col space-y-6 lg:w-1/5">
            <h3 className="text-white font-bold uppercase tracking-wider text-[20px] border-b border-gray-800 pb-2 w-fit">
              Полезно
            </h3>
            <ul className="space-y-4 text-[18px]">
              <li>
                <a href="#" className="block hover:text-sky-500 hover:pl-3 transition-all duration-300 relative group">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Често задавани въпроси
                </a>
              </li>

              {/* Facebook */}
              <li>
                <a href="#" className="flex items-center gap-3 group hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#1877F2] transition-colors duration-300">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                  </div>
                  <span className="font-medium">Facebook</span>
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a href="#" className="flex items-center gap-3 group hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888] transition-all duration-300">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                  </div>
                  <span className="font-medium">Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* 5. КОНТАКТИ (ПРОМЕНЕНО) */}
          {/* Промени:
              1. lg:w-auto: Позволява ширината да се определя от съдържанието (текста).
              2. whitespace-nowrap: Забранява пренасянето на нов ред.
          */}
          <div className="flex flex-col space-y-6 lg:w-auto whitespace-nowrap">
            <h3 className="text-white font-bold uppercase tracking-wider text-[20px] border-b border-gray-800 pb-2 w-fit">
              Контакти
            </h3>

            <div className="flex flex-col space-y-1">
              <span className="text-[24px] font-bold text-gray-500 uppercase tracking-widest">
                Свържете се с нас
              </span>
              <a href="tel:0898811734" className="text-2xl font-black text-white hover:text-sky-500 transition-colors duration-300">
                089 881 1734
              </a>
              <span className="text-[16px] text-gray-500 mt-2">
                Пон - Нед: 09:00 - 20:00
              </span>
            </div>

            <div className="mt-auto pt-8">
              <p className="text-sm text-gray-600">
                &copy; {currentYear} Свежите.<br />Всички права запазени.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}