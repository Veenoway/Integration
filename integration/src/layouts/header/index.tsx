"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";

export const Header = () => {
  const linkStyle =
    "text-base text-white font-medium ml-5 max-w-[120px] text-center";
  const linkStyleMobil = "text-base font-medium my-3";
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <header className="flex flex-col w-full relative">
      {/* // MOBILE */}
      <div
        className={`${
          isMenuActive ? "left-0" : "-left-full opacity-0"
        } fixed top-0 h-screen w-[300px] bg-white transition-all duration-200 ease-in-out flex flex-col p-5 z-[101]`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <img src="/logo.png" alt="website logo" />
            <div className="ml-2.5">
              <p className="text-base text-purple font-bold">Le portail</p>
              <p className="text-base text-purple font-bold -mt-1.5">
                du bien-être
              </p>{" "}
            </div>
          </div>
          <button onClick={() => setIsMenuActive((prev) => !prev)}>
            <IoClose className="text-3xl md:text-2xl" />
          </button>
        </div>
        <Link href="/">
          <p className={cn(linkStyleMobil, "text-font-black")}>Nos centres</p>
        </Link>
        <Link href="/">
          <p className={cn(linkStyleMobil, "text-font-black")}>
            Nos formules bien être
          </p>
        </Link>
        <Link href="/">
          <p className={cn(linkStyleMobil, "text-font-black")}>
            Nos prestations
          </p>
        </Link>
        <Link href="/">
          <p className={cn(linkStyleMobil, "text-font-black")}>
            Offrez un bon cadeau
          </p>
        </Link>
        <Link href="/">
          <p className={cn(linkStyleMobil, "text-font-black")}>
            Qui somme nous?
          </p>
        </Link>
        <button className="w-full mt-8 rounded bg-[#1CA5DD] flex items-center justify-center h-[57px]">
          <Link href="/">
            <p className={cn(linkStyle, "ml-0 leading-5 text-sm md:text-base")}>
              Trouver une structure
            </p>
          </Link>
        </button>
        <button className="w-full cursor-pointer rounded bg-[#1CA5DD] flex items-center justify-center h-[57px] my-2.5">
          <Link href="/">
            <p className={cn(linkStyle, "ml-0 leading-5 text-sm md:text-base")}>
              Réservez un soin
            </p>
          </Link>
        </button>
        <button className="w-full rounded bg-dark-purple items-center justify-center h-[57px]  flex">
          <Link href="/">
            <p className="text-sm md:text-base text-white font-medium text-center">
              Mon Espace
            </p>
          </Link>
        </button>
      </div>
      <div
        onClick={() => setIsMenuActive((prev) => !prev)}
        className={`fixed top-0 left-0 w-screen h-screen bg-black z-[100]  transition-all duration-100 ease-linear ${
          isMenuActive ? "opacity-40" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* // DESKTOP */}
      <div className="brand-box w-full flex items-center justify-center rounded-br-[50px] shadow-2xl absolute top-0 left-0 bg-white">
        <img src="/logo.png" alt="website logo" />
        <div className="ml-2.5">
          <p className="text-lg text-purple font-bold">Le portail</p>
          <p className="text-lg text-purple font-bold -mt-1.5">
            du bien-être
          </p>{" "}
        </div>
      </div>
      <div className="h-[40px] w-full bg-white flex items-center justify-between lg:justify-end px-5">
        <button
          className="flex lg:hidden"
          onClick={() => setIsMenuActive((prev) => !prev)}
        >
          <IoMenu className="text-xl md:text-2xl" />
        </button>
        <div className="h-full flex items-center ">
          <Link href="/">
            <FiMail className="text-xl md:text-2xl" />
          </Link>
          <Link href="/" className="mx-5">
            <FaPhone className="text-base md:text-lg" />
          </Link>
          <Link href="/">
            <p className="text-sm text-font-50 uppercase">Actualités</p>
          </Link>
          <Link href="/">
            <p className="text-sm ml-5 text-font-50 uppercase">Mon espace</p>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex items-center mt-5 nav-container">
        <div className="flex items-center brand-box-mobile mr-auto">
          <img src="/logo.png" alt="website logo" />
        </div>
        <Link href="/">
          <p className={linkStyle}>Nos centres</p>
        </Link>
        <Link href="/">
          <p className={linkStyle}>Nos formules bien être</p>
        </Link>
        <Link href="/">
          <p className={linkStyle}>Nos prestations</p>
        </Link>
        <Link href="/">
          <p className={linkStyle}>Offrez un bon cadeau</p>
        </Link>
        <Link href="/">
          <p className={linkStyle}>Qui somme nous?</p>
        </Link>
        <button className="w-[150px] rounded bg-dark-purple flex items-center justify-center h-[57px] mx-5">
          <Link href="/">
            <p className={cn(linkStyle, "ml-0 leading-5")}>
              Trouver une structure
            </p>
          </Link>
        </button>
        <button className="w-[150px] rounded bg-[#1CA5DD] flex items-center justify-center h-[57px] mr-5">
          <Link href="/">
            <p className={cn(linkStyle, "ml-0 leading-5")}>Réservez un soin</p>
          </Link>
        </button>
      </div>
    </header>
  );
};
