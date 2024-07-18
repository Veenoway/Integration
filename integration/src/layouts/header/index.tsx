import { cn } from "@/utils/cn";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export const Header = () => {
  const linkStyle =
    "text-base text-white font-medium ml-8 max-w-[120px] text-center";
  return (
    <header className="flex flex-col w-full relative">
      <div className="w-[300px] h-[140px] flex items-center justify-center rounded-br-[50px] shadow-2xl absolute top-0 left-0 bg-white">
        <img src="/logo.png" alt="website logo" />
        <div className="ml-2.5">
          <p className="text-lg text-[#8B3798] font-bold">Le portail</p>
          <p className="text-lg text-[#8B3798] font-bold -mt-1.5">
            du bien-être
          </p>{" "}
        </div>
      </div>
      <div className="h-[40px] w-full bg-white flex items-center justify-end px-5">
        <div className="h-full flex items-center ">
          <Link href="/">
            <FiMail className="text-2xl" />
          </Link>
          <Link href="/" className="mx-5">
            <FaPhone className="text-lg" />
          </Link>
          <Link href="/">
            <p className="text-sm text-[#919191] uppercase">Actualités</p>
          </Link>
          <Link href="/">
            <p className="text-sm ml-5 text-[#919191] uppercase">Mon espace</p>
          </Link>
        </div>
      </div>
      <div className="flex items-center mt-5 ml-auto">
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
        <button className="w-[150px] rounded bg-[#710D82] flex items-center justify-center h-[57px] mx-5">
          <Link href="/">
            <p className={cn(linkStyle, "ml-0 leading-5")}>
              Trouver une structure
            </p>
          </Link>
        </button>
        <button className="w-[150px] rounded bg-[#1CA5DD] flex items-center justify-center h-[57px] mr-5">
          <Link href="/">
            <p className={cn(linkStyle, "ml-0 leading-5")}>
              Trouver une structure
            </p>
          </Link>
        </button>
      </div>
    </header>
  );
};
