
'use client'
import Image from "next/image";
import Link from "next/link";
import { ILibrary } from "@/data-types/library.type";
import { useContext } from "react";
import { LibraryContext } from "@/context/LibraryContext";
import { toast } from "react-toastify";

type SavedLibraryCardProps = {
  library: ILibrary;
};

const SavedLibraryCard = ({ library }: SavedLibraryCardProps) => {

    const { saved, setSaved } = useContext(LibraryContext);

    const handleRemove = () => {
        setSaved (
          saved.filter((library) => String(library.id) === String(library.id))
        );
         toast.success (` ${library.name} removed successfully.`);
      };

  return (
    <article
      className="
        group relative w-full overflow-hidden rounded-3xl
        border border-white/10
        bg-[#111c23]
        shadow-xl
        transition-all duration-500
        hover:-translate-y-1
        hover:border-[#dfff00]/40
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      "
    >
      {/* Decorative glow */}
      <div
        className="
          pointer-events-none absolute -right-20 -top-20
          h-48 w-48 rounded-full
          bg-[#dfff00]/5 blur-3xl
          transition-all duration-500
          group-hover:bg-[#dfff00]/10
        "
      />

      <div className="relative flex flex-col gap-5 p-4 sm:flex-row sm:p-5">

        {/* ================= IMAGE ================= */}
        <div
          className="
            relative h-52 w-full shrink-0
            overflow-hidden rounded-2xl
            sm:h-36 sm:w-52
          "
        >
          <Image
            src={library.image}
            alt={library.name}
            fill
            sizes="(max-width: 640px) 100vw, 208px"
            className="
              object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

          {/* Saved badge */}
          <div
            className="
              absolute left-3 top-3
              flex items-center gap-2
              rounded-full
              border border-[#dfff00]/30
              bg-black/60
              px-3 py-1.5
              text-xs font-bold
              text-[#dfff00]
              backdrop-blur-md
            "
          >
            <span>🔖</span>
            Saved
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex min-w-0 flex-1 flex-col justify-between">

          {/* Top information */}
          <div>

            <div className="flex items-start justify-between gap-4">

              <div className="min-w-0">
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#dfff00]">
                  Saved Workout
                </p>

                <h2
                  className="
                    truncate
                    text-xl font-black uppercase
                    tracking-wide text-white
                    sm:text-2xl
                  "
                >
                  {library.name}
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  {library.equipment}
                </p>
              </div>

              {/* Rating */}
              <div
                className="
                  flex shrink-0 items-center gap-1
                  rounded-full
                  border border-white/10
                  bg-white/5
                  px-3 py-1.5
                  text-sm font-bold text-white
                "
              >
                <span className="text-[#dfff00]">★</span>
                {library.rating}
              </div>

            </div>

            {/* ================= STATS ================= */}
            <div className="mt-5 flex flex-wrap gap-2">

              <div
                className="
                  flex items-center gap-2
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-3 py-2
                "
              >
                <span className="text-[#dfff00]">◷</span>

                <div>
                  <p className="text-[10px] uppercase text-gray-500">
                    Duration
                  </p>

                  <p className="text-sm font-bold text-white">
                    {library.duration} min
                  </p>
                </div>
              </div>

              <div
                className="
                  flex items-center gap-2
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-3 py-2
                "
              >
                <span className="text-[#dfff00]">🔥</span>

                <div>
                  <p className="text-[10px] uppercase text-gray-500">
                    Calories
                  </p>

                  <p className="text-sm font-bold text-white">
                    {library.caloriesBurned} kcal
                  </p>
                </div>
              </div>

              <div
                className="
                  flex items-center gap-2
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-3 py-2
                "
              >
                <span className="text-[#dfff00]">↻</span>

                <div>
                  <p className="text-[10px] uppercase text-gray-500">
                    Reps
                  </p>

                  <p className="text-sm font-bold text-white">
                    {library.reps}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ================= BOTTOM ================= */}
           <div
              className="
                mt-5
                flex
                flex-col
                gap-4
                border-t border-white/10
                pt-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              {/* Description */}
              <p className="line-clamp-1 min-w-0 flex-1 text-sm text-gray-500">
                {library.description}
              </p>

              {/* Right side actions */}
              <div className="flex shrink-0 items-center justify-end gap-2">

                {/* View Workout */}
                <Link
                  href={`/library/${library.id}`}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#dfff00]
                    px-5 py-3
                    text-sm
                    font-black
                    uppercase
                    tracking-wide
                    text-black
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:shadow-[0_0_25px_rgba(223,255,0,0.25)]
                    active:scale-95
                  "
                >
                  View Workout

                  <span
                    className="
                      text-base
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>

                {/* Remove */}
                <button
                  type="button"
                  onClick={handleRemove}
                  aria-label={`Remove ${library.name}`}
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/20
                    bg-white/5
                    text-lg
                    text-gray-400
                    transition-all
                    duration-300
                    hover:border-slate-900
                    hover:bg-slate-600
                    hover:text-green-400
                    active:scale-90
                  "
                >
                  ×
                </button>

              </div>
            </div>

        </div>
      </div>
    </article>
  );
};

export default SavedLibraryCard;
