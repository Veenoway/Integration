import Link from "next/link";
import { Contact } from "./components/contact";

export const Footer = () => {
  return (
    <footer className="relative">
      <div className="flex w-[90%] max-w-[1600px] bg-transparent -top-full md:-top-[130%] absolute left-1/2 -translate-x-1/2 flex-col">
        <div className="w-full flex justify-center md:justify-between items-center">
          <div className="items-center md:flex hidden">
            <img src="/logo.png" alt="website logo" />
            <div className="ml-2.5 hidden md:flex flex-col">
              <p className="text-lg text-[#8B3798] font-bold">Le portail</p>
              <p className="text-lg text-[#8B3798] font-bold -mt-1.5">
                du bien-être
              </p>
            </div>
          </div>
          <Contact />
          <button className="w-[120px] md:w-[150px] rounded bg-[#710D82] items-center justify-center h-[40px] md:h-[48px] ml-5 md:flex hidden">
            <Link href="/">
              <p className="text-sm md:text-base text-white font-medium text-center">
                Mon Espace
              </p>
            </Link>
          </button>
        </div>
      </div>

      <div className="w-full bg-white border-t border-[#E5E5E5]">
        <div className="py-5 md:py-0 md:h-[80px] flex  justify-between items-center max-w-[1000px] w-[90%] mx-auto">
          <div className="flex md:items-center md:flex-row flex-col">
            <Link href="">
              <p className="text-xs text-[#919191]">
                Copyright© 2021 Portail du bien être
              </p>
            </Link>
            <Link href="" className="md:mx-9 mx-0 md:my-0 my-2.5">
              <p className="text-xs text-[#919191]">Mentions légales</p>
            </Link>
            <Link href="" className="">
              <p className="text-xs text-[#919191]">
                Politique de confidentialité des données
              </p>
            </Link>{" "}
          </div>
          <img src="/dbm.png" alt="DBM logo" />
        </div>{" "}
      </div>
    </footer>
  );
};
