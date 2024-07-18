"use client";
import Link from "next/link";
import { useState } from "react";
import { items } from "../../constants";

export const Actuality = () => {
  const [isHover, setIsHover] = useState(0);

  const handleMouseEnter = (index: number) => {
    setIsHover(index);
  };

  const handleMouseLeave = () => {
    setIsHover(0);
  };

  return (
    <div className="w-full bg-gradient-actuality py-[100px] md:py-[150px] lg:py-[200px] flex-col flex items-center">
      <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] text-center text-font-100 font-medium max-w-[800px] w-[90%]">
        L’actualité de nos centres de bien-être en région Auvergne-Rhône-Alpes
      </h1>
      <div className="flex lg:space-x-5 mt-[50px] w-[90%] max-w-[1200px] lg:flex-nowrap flex-wrap">
        {items.map((item, i) => {
          const isHovered = isHover === i + 1;
          return (
            <div
              key={i}
              className="lg:w-1/3 md:w-[45%] w-full flex flex-col my-5 md:mx-2.5 lg:my-0 lg:mx-0"
            >
              <img
                className={`md:h-[337px] h-[250px] object-cover  rounded-md ${
                  isHovered ? "" : ""
                } transition-transform duration-200 ease-linear `}
                src={`/actuality/${i}.png`}
                alt={`image actuality numéro ${i + 1}`}
              />
              <p className="text-font-100 text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-2.5 md:mt-5 max-w-[85%] w-full">
                {item.title}
              </p>
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => handleMouseEnter(i + 1)}
                onMouseLeave={handleMouseLeave}
              >
                <p className="text-font-100 text-[13px] lg:text-[15px] md:mt-5 mt-2.5 uppercase cursor-pointer">
                  Lire l'article +
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex items-center mt-[60px] w-full">
        <div className="h-[1px] w-full bg-font-100" />
        <Link href="" target="_blank" rel="noopener noreferrer">
          <p className="text-font-100 text-[13px] lg:text-[15px] mx-5 uppercase whitespace-nowrap ">
            Voir toutes les actualités +
          </p>
        </Link>
        <div className="h-[1px] w-[10%] bg-font-100" />
      </div>
    </div>
  );
};
