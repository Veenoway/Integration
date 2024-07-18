"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { Actuality } from "./components/actuality";
import { Prestations } from "./components/prestations";

export const Main = () => {
  const [isActive, setIsActive] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

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
      <section className="w-full flex flex-col items-center pb-[100px] md:pb-[150px] lg:pb-[200px] pt-[80px]">
        <h1 className="font-bold lg:text-[60px] md:text-[55px] sm:text-[50px] text-[45px] w-[90%] text-center text-font-100">
          Une parenthèse de bien-être
        </h1>
        <p className="uppercase lg:text-xl sm:text-lg text-base text-center text-font-100 w-[90%] max-w-[460px]">
          Le portail dU bien-être des centres en Auvergne-Rhône-Alpes
        </p>
        <div className="flex items-center relative max-w-[1200px] w-[90%] mt-[100px]">
          <div className="flex flex-col rounded-md bg-font-100 shadow-xl w-[360px] absolute left-0 top-1/2 -translate-y-1/2 ">
            <h2 className="p-10 text-font-black text-center lg:text-[23px] md:text-[21px] sm:text-lg md: text-base font-medium">
              Trouvez un centre près de chez vous!
            </h2>
            <div className="w-full">
              {arr.map((item, i) => (
                <div
                  key={i}
                  className={`w-full flex flex-col px-[10%]  ${
                    i === 0 ? "border-t" : ""
                  } border-b border-[#CDCDCD] overflow-y-hidden ${
                    isActive === i + 1 ? "max-h-[300px]" : "max-h-[70px]"
                  } transition-all duration-150 ease-linear`}
                >
                  <div
                    className={`flex justify-between items-center  h-[70px] min-h-[70px]`}
                    onClick={() => {
                      if (isActive === i + 1) handleInactive();
                      else handleActive(i + 1);
                    }}
                  >
                    <p className="text-[#919191] text-sm sm:text-base lg:text-[17px]">
                      {item.title}
                    </p>
                    <TiArrowSortedDown className="text-[#919191] text-sm sm:text-base lg:text-[17px]" />
                  </div>
                  <div className="flex flex-col">
                    {item.choices.map((choice, j) => (
                      <div
                        key={j}
                        className={`flex items-center ${
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
                        <div className="flex items-center mr-2.5 justify-center w-[20px] h-[20px] rounded bg-[rgba(0,0,0,0.1)] text-white">
                          <FaCheck
                            className={`${
                              selectedOption.includes(choice) ? "" : "opacity-0"
                            } transition-opacity duration-150 ease-linear text-[#1CA5DD]`}
                          />
                        </div>
                        <p className="text-[#919191] text-sm sm:text-base lg:text-[17px]">
                          {choice}{" "}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-[80%] cursor-pointer bg-[#1CA5DD] mx-auto flex items-center justify-center h-[42px] md:h-[48px] rounded-md m-10">
              <p className="lg:text-lg sm:text-base text-sm text-font-100">
                Je trouve un centre
              </p>
            </button>
          </div>
          <div className="w-[80%] ml-auto h-[580px] rounded-md from-[#4DA2D8] to-[#87ADDB] bg-gradient-to-r flex items-center justify-center">
            <img src="/map.png" alt="Image de la carte de l'Auvergne" />
          </div>
        </div>
      </section>
      <Prestations />
      <Actuality />
    </main>
  );
};
