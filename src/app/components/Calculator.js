"use client";
import React, { useState, useEffect } from "react";

// Imported price data (you can also fetch it from a file if needed)
const prices = {
  "Пълно основно почистване": {
    "60m²": "225 лв",
    "80m²": "300 лв",
    "100m²": "375 лв",
    "150m²": "565 лв",
    "200m²": "750 лв",
    "300m²": "1125 лв",
    "500m²": "1875 лв",
    "1000m²": "3750 лв",
    ">1000m²": "По договаряне",
  },
  "Абонаментно почистване (6 посещения)": {
    "60m²": "1300 лв",
    "80m²": "1650 лв",
    "100m²": "2100 лв",
    "150m²": "3000 лв",
    "200m²": "4000 лв",
    "300m²": "6000 лв",
    "500m²": "10000 лв",
    ">1000m²": "По договаряне",
  },
  "Абонаментно почистване (12 посещения)": {
    "60m²": "2500 лв",
    "80m²": "3200 лв",
    "100m²": "4000 лв",
    "150m²": "5500 лв",
    "200m²": "7500 лв",
    "300m²": "12000 лв",
    "500m²": "20000 лв",
    ">1000m²": "По договаряне",
  },
  "Почистване след ремонт": {
    "60m²": "300 лв",
    "80m²": "350 лв",
    "100m²": "400 лв",
    "150m²": "600 лв",
    "200m²": "850 лв",
    "300m²": "1350 лв",
    "500m²": "2250 лв",
    "1000m²": "4500 лв",
    ">1000m²": "По договаряне",
  },
};

const Calculator = () => {
  const [area, setArea] = useState(60);
  const [subscription, setSubscription] = useState("0");
  const [price, setPrice] = useState("225 лв");

  useEffect(() => {
    calculatePrice();
  }, [area, subscription]);

  const calculatePrice = () => {
    let category = "Пълно основно почистване";

    if (subscription === "1") {
      category = "Абонаментно почистване (6 посещения)";
    } else if (subscription === "2") {
      category = "Абонаментно почистване (12 посещения)";
    }

    const areaRanges = [
      { limit: 60, label: "60m²" },
      { limit: 80, label: "80m²" },
      { limit: 100, label: "100m²" },
      { limit: 150, label: "150m²" },
      { limit: 200, label: "200m²" },
      { limit: 300, label: "300m²" },
      { limit: 500, label: "500m²" },
      { limit: 1000, label: "1000m²" },
    ];

    let selectedLabel = ">1000m²";

    for (const range of areaRanges) {
      if (area <= range.limit) {
        selectedLabel = range.label;
        break;
      }
    }

    const selectedPrice = prices[category][selectedLabel] || "По договаряне";
    setPrice(selectedPrice);
  };

  return (
    <div className="lg:w-2/3 border rounded-xl mx-auto p-6 mt-8 animation-vertical opacity-0 transform translate-y-10 transition-all duration-1000 ease-in-out">
      <div className="mb-4">
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="type" className="ms-1 font-bold">
            Тип на имот
          </label>
          <select
            name="type"
            id="type"
            className="w-full border-b border-dashed pb-1 text-center"
            defaultValue="Дом"
          >
            <option value="Дом">Дом</option>
            <option value="Офис">Офис</option>
            <option value="Комерсиално-Индустриално помещение">
              Комерсиално-Индустриално помещение
            </option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4">
        <div className="mb-4 flex flex-col items-center justify-center">
          <label htmlFor="area" className="font-bold mx-auto text-center">
            Площ в m²
          </label>
          <input
            name="area"
            type="number"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="w-full border-b border-dashed ps-1 pt-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>

        <div className="mb-4 flex flex-col items-center justify-center">
          <label htmlFor="subscription" className="mx-auto font-bold">
            Абонамент
          </label>
          <select
            name="subscription"
            id="subscription"
            value={subscription}
            onChange={(e) => setSubscription(e.target.value)}
            className="w-full border-b border-dashed pb-1 pb-[7px] text-center"
          >
            <option value="0">Без абонамент</option>
            <option value="1">6 почиствания</option>
            <option value="2">12 почиствания</option>
          </select>
        </div>
      </div>

      <div
        id="price"
        className="text-2xl font-bold text-center mt-6 text-sky-600"
      >
        {price}
      </div>
    </div>
  );
};

export default Calculator;
