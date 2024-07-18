"use client";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { Actuality } from "./components/actuality";
import { Carte } from "./components/map";
import { Partners } from "./components/partners";
import { Prestations } from "./components/prestations";
import { positionMarker } from "./constants";

export const Main = () => {
  const [isActive, setIsActive] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<number>(0);

  const handleActive = (index: number) => {
    setIsActive(index);
  };

  const handleInactive = () => {
    setIsActive(0);
  };

  const arr = [
    {
      title: "Département",
      choices: ["Puy-de-Dôme", "Allier", "Cantal", "Haute-Loire", "Rhône"],
    },
    {
      title: "Prestations",
      choices: [
        "Bains intérieurs",
        "Bains extérieurs",
        "Sauna & Hammam",
        "Soins du visage",
      ],
    },
    {
      title: "Disponibilité",
      choices: [
        "Aujourd'hui",
        "Demain",
        "Cette semaine",
        "Ce week-end",
        "Prochainement",
      ],
    },
  ];

  return (
    <main>
      <section
        className="w-full flex flex-col items-center pb-[100px] md:pb-[150px] lg:pb-[200px] pt-[80px]"
        style={{
          backgroundImage: `url('/layers/oval.png')`,
          backgroundSize: "30%",
          backgroundPosition: "left 300%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="font-bold lg:text-[60px] md:text-[55px] sm:text-[50px] md:mb-5 text-[45px] w-[90%] leading-[58px] text-center text-font-100"
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Une parenthèse de bien-être
        </h1>
        <p
          className="uppercase lg:text-xl lg:mt-2 mt-2.5 sm:text-lg text-base text-center text-font-100 w-[90%] max-w-[350px] lg:max-w-[460px]"
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Le portail dU bien-être des centres en Auvergne-Rhône-Alpes
        </p>
        <div className="flex items-center lg:flex-row flex-col relative max-w-[1200px] w-[90%] mt-[50px] lg:mt-[100px]">
          <div className="flex flex-col mx-auto lg:mx-0 rounded-md bg-font-100 shadow-xl w-[360px] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 ">
            <h2 className="p-6 lg:p-10 text-font-black text-center lg:text-[23px] sm:text-lg md: text-base font-medium">
              Trouvez un centre près de chez vous!
            </h2>
            <div className="w-full">
              {arr.map((item, i) => (
                <div
                  key={i}
                  className={`w-full flex flex-col px-[10%]  ${
                    i === 0 ? "border-t" : ""
                  } border-b border-[#CDCDCD] overflow-y-hidden ${
                    isActive === i + 1
                      ? "max-h-[300px]"
                      : "max-h-[50px] lg:max-h-[70px]"
                  } transition-all duration-150 ease-linear`}
                >
                  <div
                    className={`flex justify-between items-center  h-[50px] min-h-[50px] lg:h-[70px] lg:min-h-[70px]`}
                    onClick={() => {
                      if (isActive === i + 1) handleInactive();
                      else handleActive(i + 1);
                    }}
                  >
                    <p className="text-font-50 text-sm sm:text-base lg:text-[17px]">
                      {item.title}
                    </p>
                    <TiArrowSortedDown className="text-font-50 text-sm sm:text-sm lg:text-[17px] w-[14px] md:w-[17px]" />
                  </div>
                  <div className="flex flex-col">
                    {item.choices.map((choice, j) => (
                      <div
                        key={j}
                        className={`flex items-center w-full ${
                          item.choices.length - 1 === i ? "mb-5" : "mb-2.5"
                        }`}
                        onClick={() => {
                          if (selectedOption.includes(choice))
                            setSelectedOption(
                              selectedOption.filter((el) => el !== choice)
                            );
                          else setSelectedOption([...selectedOption, choice]);
                        }}
                      >
                        <div className="flex items-center mr-2.5 justify-center w-[15] h-[15] md:w-[20px] md:h-[20px] rounded bg-[rgba(0,0,0,0.1)] text-white">
                          <FaCheck
                            className={`${
                              selectedOption.includes(choice) ? "" : "opacity-0"
                            } transition-opacity duration-150 ease-linear text-[#1CA5DD] text-xs sm:text-sm lg:text-base`}
                          />
                        </div>
                        <p className="text-font-50 text-sm sm:text-base lg:text-[17px]">
                          {choice}{" "}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-[80%] cursor-pointer bg-[#1CA5DD] mx-auto flex items-center justify-center h-[42px] md:h-[48px] rounded-md m-5 lg:m-10">
              <p className="lg:text-lg sm:text-base text-sm text-font-100">
                Je trouve un centre
              </p>
            </button>
          </div>

          <div className="w-full sm:w-fit mx-auto lg:w-[80%] lg:mt-0 mt-10 ml-auto h-fit lg:h-[580px] rounded-md from-[#4DA2D8] to-[#87ADDB] bg-gradient-to-r lg:flex items-center lg:justify-end justify-center">
            <div className="w-fit h-fit relative ">
              <Carte />
              {positionMarker.map((pos, i) => (
                <div
                  onMouseEnter={() => setSelectedMarker(i + 1)}
                  onMouseLeave={() => setSelectedMarker(0)}
                  key={i}
                  className={cn(
                    "absolute z-1 w-fit h-fit p-4 rounded-full",
                    pos
                  )}
                >
                  <div className="relative">
                    <img
                      src="/marker.png"
                      alt="Markers"
                      style={{
                        filter:
                          selectedMarker === i + 1
                            ? "hue-rotate(70deg)"
                            : "hue-rotate(0deg)",
                        transition: "filter 0.1s ease",
                      }}
                    />
                    <div
                      className={`flex items-center border border-white absolute px-2.5 -top-8 py-[1px] left-1/2 w-fit -translate-x-1/2 bg-[#1DA5DD] rounded-full shadow-xl shadow-grey ${
                        selectedMarker === i + 1
                          ? ""
                          : "opacity-0 translate-y-2"
                      } transition-all duration-150 ease-in-out`}
                    >
                      <p className="md:text-sm text-xs text-font-100">
                        Department
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Prestations />
      <Actuality />
      <Partners />
    </main>
  );
};
