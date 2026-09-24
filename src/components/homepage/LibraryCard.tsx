import { ILibrary } from "@/data-types/library.type";
import Image from "next/image";
import Link from "next/link";

type LibraryCardProps = {
  library: ILibrary;
  priority?: boolean;
};

const MAX_VISIBLE_MUSCLES = 3;

const LibraryCard = ({ library, priority = false }: LibraryCardProps) => {
  const visibleMuscles = library.muscleGroups.slice(0, MAX_VISIBLE_MUSCLES);
  const hiddenCount = library.muscleGroups.length - visibleMuscles.length;

  const stats = [
    { label: "Minutes", value: library.duration },
    { label: "Calories", value: library.caloriesBurned },
    { label: "Sets", value: library.sets },
  ];

  return (
    <article className="group flex flex-col h-full  overflow-hidden rounded-3xl border border-white/10 bg-[#111c23] shadow-lg transition-all duration-300 motion-safe:hover:-translate-y-1.5 hover:border-[#dfff00]/40 hover:shadow-2xl focus-within:border-[#dfff00]/60">
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={library.image}
          alt={library.name}
          fill
          priority={priority}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        {/* Difficulty */}
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-md sm:left-4 sm:top-4 sm:text-xs">
          {library.difficulty}
        </span>

        {/* Rating */}
        <span
          className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md sm:right-4 sm:top-4 sm:text-sm"
          aria-label={`Rated ${library.rating}`}
        >
          <span className="text-[#dfff00]" aria-hidden="true">
            ★
          </span>{" "}
          {library.rating}
        </span>

        {/* Name */}
        <div className="absolute inset-x-4 bottom-4 sm:inset-x-5">
          <h2 className="truncate text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl">
            {library.name}
          </h2>
          <p className="mt-1 truncate text-sm text-gray-300">
            {library.equipment}
          </p>
        </div>
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Muscle groups */}
        <div className="mb-4 flex flex-wrap gap-2">
          {visibleMuscles.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#dfff00]/10 px-3 py-1 text-xs font-bold uppercase text-[#dfff00]"
            >
              {muscle}
            </span>
          ))}

          {hiddenCount > 0 && (
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-gray-400">
              +{hiddenCount}
            </span>
          )}
        </div>

        {/* Description (fixed 2-line height keeps cards aligned) */}
        <p className="line-clamp-2 min-h-12 text-sm leading-6 text-gray-400">
          {library.description}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-white/10 sm:my-5" />

        {/* Stats */}
        <dl className="grid grid-cols-3 gap-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white/5 px-2 py-3 text-center"
            >
              <dd className="text-base font-bold text-[#dfff00] sm:text-lg">
                {stat.value}
              </dd>
              <dt className="text-[10px] uppercase tracking-wide text-gray-500">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>

        {/* Bottom (pinned to the card's bottom edge) */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Reps
            </p>
            <p className="mt-1 truncate font-bold text-white">
              {library.reps}
            </p>
          </div>
            <Link href={`/library/${library.id}`}>
              <button
                type="button"
                className="shrink-0 rounded-xl bg-[#dfff00] px-4 py-3 text-xs font-black uppercase tracking-wide text-black transition duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111c23] active:scale-95"
              >
                View Workout
              </button>
            </Link>
        </div>
      </div>
    </article>
  );
};

export default LibraryCard;