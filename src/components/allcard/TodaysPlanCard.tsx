 "use client";

import Image from "next/image";
import Link from "next/link";
import { ILibrary } from "@/data-types/library.type";
import { LibraryContext } from "@/context/LibraryContext";
import { useContext } from "react";
import { toast } from "react-toastify";

type TodaysPlanCardProps = {
  library: ILibrary;
};

const TodaysPlanCard = ({ library }: TodaysPlanCardProps) => {
  const { workOutPlan, setWorkOutPlan } = useContext(LibraryContext);

  const handleRemove = () => {
    setWorkOutPlan (
      workOutPlan.filter((workout) => workout.id !== library.id)
    );
     toast.success (`${library.name} removed  successfully.`);
  };

  return (
    <article
      className="
        group flex w-full items-center gap-5
        rounded-2xl
        border border-white/10
        bg-[#172832]
        p-4
        shadow-lg
        transition-all duration-300
        hover:border-[#dfff00]/40
        hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative h-28 w-44 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-52">
        <Image
          src={library.image}
          alt={library.name}
          fill
          sizes="(max-width: 640px) 176px, 208px"
          className="
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Main information */}
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-lg font-extrabold uppercase text-white sm:text-xl">
          {library.name}
        </h2>

        <p className="mt-1 text-sm text-gray-300">
          {library.equipment}
        </p>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap items-center gap-5 text-sm">
          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-[#dfff00]">◷</span>
            <span>{library.duration} min</span>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-[#dfff00]">🔥</span>
            <span>{library.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-[#dfff00]">★</span>
            <span>{library.rating}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-3">

        {/* View Details */}
        <Link
          href={`/library/${library.id}`}
          className="
            rounded-full
            border border-white
            px-6 py-3
            text-sm font-bold
            text-white
            transition-all duration-300
            hover:bg-white
            hover:text-black
          "
        >
          View Details
        </Link>

        {/* Mark as Done */}
        <button
          type="button"
          className="
            rounded-full
            bg-[#dfff00]
            px-6 py-3
            text-sm font-bold
            text-black
            transition-all duration-300
            hover:bg-white
            active:scale-95
          "
        >
          ✓ Mark as Done
        </button>

        {/* Remove */}
        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${library.name}`}
          className="
            flex h-10 w-10
            shrink-0
            items-center justify-center
            border border-white/20
            rounded-3xl
            bg-white/5
            text-lg
            text-gray-400
            transition-all duration-300
            hover:border-slate-400/50
            hover:bg-slate-500/10
            hover:text-slate-400
            active:scale-90
          "
        >
          ×
        </button>

      </div>
    </article>
  );
};

export default TodaysPlanCard;