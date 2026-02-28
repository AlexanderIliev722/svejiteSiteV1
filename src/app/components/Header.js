// app/components/Header.js
"use client";
// components/MenuOverlay.js
import { useState } from "react";
import React from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gradient-to-b from-gray-50 via-gray-50/70 via-gray-50/50  to-transparent  text-sky-600 fixed top-0 inset-x-0 text-white px-4 pt-3 pb-3 lg:pb-16  flex items-center justify-start z-50">
      <div className="flex items-center justify-center py-1 lg:px-24 px-4 m-auto">
        <a href="tel:0876899405" className="flex items-center text-sky-600">
          <div className="flex items-center">
            <div className="lg:h-12 lg:w-12 h-10 w-10 border-2 border-sky-600 rounded-full me-2 flex items-center justify-center hover:bg-sky-600 hover:text-white transition duration-300 ease-in">
              <i className="bi bi-telephone-fill  lg:text-2xl text-xl"></i>
            </div>
            <div className="flex flex-col text-sm lg:text-base">
              <span className="relative inline-block after:block after:h-[2px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                Звъннете ни
              </span>

              <span className="font-bold relative inline-block after:block after:h-[2px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                0876 899 405
              </span>
            </div>
          </div>
        </a>
        <a
          href="mailto:office@svejite.eu"
          className="flex items-center lg:ms-24 ms-4 text-sky-600"
        >
          <div className="flex items-center">
            <div className="lg:h-12 lg:w-12 h-10 w-10 border-2 border-sky-600 rounded-full me-2 flex items-center justify-center hover:bg-sky-600 hover:text-white transition duration-300 ease-in">
              <i className="bi bi-envelope-at-fill  lg:text-2xl text-xl "></i>
            </div>
            <div className="flex flex-col text-sm lg:text-base">
              <span className="relative inline-block after:block after:h-[2px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                Пишете ни
              </span>
              <span className="font-bold relative inline-block after:block after:h-[2px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                office@svejite.eu
              </span>
            </div>
          </div>
        </a>

        {/* Button to trigger the menu */}

        {/* <button
          className="absolute me-6 right-0 z-50 py-3 w-12 h-12 text-white focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                isOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button> */}

        {/* Full-screen overlay menu with transition */}
        <div
          className={`fixed top-0 right-0 w-full h-full bg-black bg-opacity-75 z-40 flex justify-end items-center transition-transform duration-300 ease-in-out ${
            isOpen ? "transform translate-x-0" : "transform translate-x-full"
          }`}
          onClick={toggleMenu}
        >
          <div
            className="bg-black w-full h-full text-white p-8 rounded-l-lg shadow-lg text-center relative flex justify-center items-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
          >
            <div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                <img
                  src="/images/logo_sk_luxury_cars.png"
                  alt="Logo SK"
                  className="h-24"
                />
              </div>
              <div className="flex items-center justify-center">
                <ul className="space-y-6 ">
                  <li>
                    <a href="#" className="text-2xl font-elegant">
                      Начало
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-2xl font-elegant">
                      За нас
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-2xl font-elegant">
                      Общи условия
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-2xl font-elegant">
                      Инвестирай
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
