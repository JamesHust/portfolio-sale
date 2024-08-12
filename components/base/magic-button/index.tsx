import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  className,
}: {
  title: string;
  icon: ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 w-full md:mt-10 overflow-hidden rounded-xl p-[1px] focus:outline-none",
        className
      )}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-[#516dff] from-0% via-[#9e7ee1] via-70% to-[#fa92bd] to-100%" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl
             bg-transparent px-5 md:px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
