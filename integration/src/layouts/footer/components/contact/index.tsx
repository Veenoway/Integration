import { cn } from "@/utils/cn";
import Link from "next/link";
import { FaFacebook, FaPhone, FaYoutube } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

type ContactProps = {
  className?: string;
};

export const Contact = ({ className = "" }: ContactProps) => {
  return (
    <div className={cn("md:mx-5 flex flex-col items-center", className)}>
      <div className="flex items-center">
        <div className="flex items-center">
          <Link href="tel:0478787878">
            <span className="inline-flex items-center">
              <FaPhone className="text-lg md:text-xl w-[18px] md:w-[20px]" />
              <p className="lg:text-xl md:text-lg sm:text-base text-xs text-font-black ml-2.5 uppercase font-medium">
                04 78 78 78 78
              </p>
            </span>
          </Link>
        </div>
        <div className="h-5 rounded bg-font-black w-0.5 mx-5" />
        <div className="flex items-center">
          <Link href="mailto:m.bluth@example.com">
            <span className="inline-flex items-center">
              <FiMail className="text-xl md:text-2xl w-[20px] md:w-[24px]" />
              <p className="lg:text-xl md:text-lg sm:text-base text-xs text-font-black ml-2.5 uppercase font-medium">
                Nous contacter
              </p>
            </span>
          </Link>
        </div>
      </div>
      <div className="flex items-center mt-2">
        <p className="md:text-[15px] text-[13px] text-font-black text-center">
          Restez au cœur de l’actualité
        </p>
        <FaFacebook className="text-blue-600 md:text-lg text-[15px] w-[15px] md:w-[18px] mx-2.5" />
        <FaYoutube className="text-red-600 md:text-lg text-[15px] w-[15px] md:w-[18px]" />
      </div>
    </div>
  );
};
