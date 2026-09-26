
import React from "react";
import { Dumbbell } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-[78px] max-w-[1536px] items-center justify-between px-6 py-5 sm:px-10 lg:px-14">
        
        <div className="flex items-center gap-2">
          <Dumbbell
            size={22}
            strokeWidth={3}
            className="text-lime-300"
          />

          <span className="text-lg font-extrabold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        <p className="text-right text-sm font-medium text-slate-300">
          © 2026 FITLOG — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;