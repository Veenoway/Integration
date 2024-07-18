import { cn } from "@/utils/cn";

type FontProps = {
  children: React.ReactNode;
  className?: string;
};

export const SmallFont = ({ children, className }: FontProps) => {
  return (
    <p
      className={cn("text-xs sm:text-sm lg:text-base text-font-100", className)}
    >
      {children}
    </p>
  );
};

export const MediumFont = ({ children, className }: FontProps) => {
  return (
    <p
      className={cn("text-sm sm:text-base lg:text-lg text-font-100", className)}
    >
      {children}
    </p>
  );
};

export const LargeFont = ({ children, className }: FontProps) => {
  return (
    <p
      className={cn("text-base sm:text-lg lg:text-xl text-font-100", className)}
    >
      {children}
    </p>
  );
};
