"use client";
import { useState } from "react";

export const Prestations = () => {
  const [isHover, setIsHover] = useState(0);

  const handleMouseEnter = (index: number) => {
    setIsHover(index);
  };

  const handleMouseLeave = () => {
    setIsHover(0);
  };

  const prestations = [
    "Bains intérieurs",
    "Bains extérieurs",
    "Sauna & Hammam",
    "Soins du visage",
  ];

  return (
    <div className="w-full bg-white py-[80px] md:py-[100px] lg:py-[150px] flex-col flex">
      <div className="flex lg:flex-row flex-col items-center">
        <div className="flex flex-col lg:px-[80px] items-center lg:mb-0 mb-10">
          <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] text-font-black font-medium max-w-[550px] w-[90%] min-w-[280px] leading-10 mb-5">
            Nos prestations
          </p>
          <p className="text-sm sm:text-[16px] lg:text-[17px] text-font-black text-center lg:text-start max-w-[550px] w-[90%] lg:min-w-[280px] leading-7 ">
            Détente, évasion et vitalité. Au coeur du Puy-de-Dôme offrez vous
            une parenthèse de bien-être. Nos centres proposent une multitude
            d’espaces de bains, soins et sèches variés.
          </p>
        </div>
        <div className="flex overflow-x-scroll lg:w-auto w-full">
          {prestations.map((title, i) => {
            const isHovered = isHover === i + 1;
            return (
              <div
                key={i}
                className="min-w-[300px] w-[300px] md:min-w-[360px] md:w-[360px] mx-2.5 h-[400px] md:h-[490px] rounded-md relative"
                style={{
                  backgroundImage: `url('/prestations/${i + 1}.png')`,
                  backgroundBlendMode: "overlay",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                onMouseEnter={() => handleMouseEnter(i + 1)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`absolute flex ${
                    isHovered ? "h-[100%]" : "h-[40%]"
                  } items-center justify-center w-full bottom-0 left-0 rounded-md transition-all duration-200 ease-linear`}
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0) 0%, #4DA2D8 100%)",
                  }}
                >
                  <p className="text-font-100 text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-5 ">
                    {title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
