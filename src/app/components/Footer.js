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
                <span className="text-4xl font-black text-white dark:text-white tracking-tighter uppercase group-hover:text-sky-400 transition-colors duration-300">
                  СВЕЖИТЕ<span className="text-orange-500">.</span>
                </span>
                <span className="text-[16px] font-bold text-gray-300 uppercase tracking-widest mt-1">
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

              {/* WhatsApp */}
              <li>
                <a href="https://wa.me/359898811734" target="_blank" className="flex items-center gap-3 group hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                  </div>
                  <span className="font-medium">WhatsApp</span>
                </a>
              </li>

              {/* Viber */}
              <li>
                <a href="viber://chat?number=%2B359898811734" className="flex items-center gap-3 group hover:text-white transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.518 6.77.453 9.96v.004c-.065 3.191.649 5.152 2.16 6.953a9.12 9.12 0 002.598 2.248v2.37s-.035.953.593 1.148c.76.236 1.206-.489 1.934-1.269l.278-.315c.676-.76 1.23-.672 1.854-.386 3.416 1.57 7.268 1.206 9.727-.67 2.95-2.247 3.471-5.76 3.32-8.543-.338-6.2-5.694-10.93-11.3-11.482-.076-.007-.148-.012-.219-.016zm.442 1.996c.13.006.26.018.39.032 4.704.55 9.085 4.547 9.37 9.562h.004c.122 2.242-.168 5.17-2.6 7.023-2.07 1.588-5.348 1.867-8.289.496l-.064-.03c-.638-.3-1.382-.35-1.882-.066l-.02.012-.024.016c-.356.267-.712.538-1.066.81l-.156.152v-2.066l-.166-.106a7.834 7.834 0 01-2.29-2.027c-1.27-1.506-1.864-3.154-1.808-5.884.053-2.678.673-4.856 2.065-6.244 1.918-1.76 5.46-1.726 6.536-1.68zM12.2 4.32a.476.476 0 00-.472.48.476.476 0 00.474.48c1.478.016 2.756.522 3.736 1.426 1.1 1.014 1.7 2.432 1.756 4.086a.476.476 0 00.478.466h.014a.476.476 0 00.464-.492c-.066-1.9-.766-3.55-2.044-4.73-1.142-1.054-2.636-1.67-4.358-1.716h-.048zm.064 1.584a.476.476 0 00-.462.49.476.476 0 00.488.464c2.074-.058 3.37 1.402 3.448 3.548a.476.476 0 00.478.46h.018a.478.478 0 00.458-.496c-.098-2.64-1.774-4.412-4.38-4.466h-.048zm-2.644.856c-.296-.008-.544.078-.72.262l-.012.01-.586.636-.014.014c-.376.39-.51.93-.36 1.442.39 1.34 1.194 3.062 2.67 4.536 1.5 1.502 3.424 2.588 4.854 3.014.506.15 1.06.038 1.46-.342l.622-.582.024-.024c.39-.4.386-1.03.01-1.456l-.008-.006-1.364-1.24a.794.794 0 00-1.078.034l-.58.582c-.164.162-.428.174-.6.062l-.016-.01c-.592-.37-1.206-.872-1.778-1.444-.572-.572-1.074-1.186-1.444-1.778l-.01-.016c-.11-.172-.1-.436.062-.6l.582-.58a.794.794 0 00.034-1.078L11.01 7.09a.824.824 0 00-.616-.324.903.903 0 00-.078-.002h-.016c-.1-.002-.188-.002-.28-.004zm2.888 1.382a.476.476 0 00-.434.514c.06.708.39 1.096.844 1.342.414.224.868.282 1.108.294a.476.476 0 00.044-.952c-.166-.008-.474-.054-.7-.176-.224-.122-.328-.282-.356-.604a.476.476 0 00-.506-.418z"></path></svg>
                  </div>
                  <span className="font-medium">Viber</span>
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
              <span className="text-[24px] font-bold text-gray-300 uppercase tracking-widest">
                Свържете се с нас
              </span>
              <a href="tel:0898811734" className="text-2xl font-black text-white hover:text-sky-500 transition-colors duration-300">
                089 881 1734
              </a>
              <span className="text-[20px] text-gray-300 mt-2">
                Пон - Нед: 09:00 - 20:00
              </span>
              <a href="tel:0876899405" className="text-2xl font-black text-white hover:text-sky-500 transition-colors duration-300">
                087 689 9405
              </a>
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