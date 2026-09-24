import PlanButton from "@/components/librarydetailpage/PlanButton";
import SavedButton from "@/components/librarydetailpage/SavedButton";
import { ILibrary } from "@/data-types/library.type";
import Image from "next/image";
import React from "react";

export interface LibraryDetailProps {
  params: Promise<{
    id: string;
  }>;
}

const getLibrary = async (): Promise<ILibrary[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data =await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch library data");
  }

  return data;
};

const LibraryDetailspage = async ({
  params,
}: LibraryDetailProps) => {
  const { id } = await params;

  const libraryData = await getLibrary();

  const library = libraryData.find(
    (library) => String(library.id) === String(id)
  );

  if (!library) {
    return (
      <section className="min-h-screen bg-[#07151d] px-5 py-20 text-center text-white">
        <h1 className="text-3xl font-bold">
          Exercise not found
        </h1>
      </section>
    );
  }

   const instructions = Array.isArray(library.instructions)
  ? library.instructions
  : library.instructions
      .split("\n")
      .map((instruction) => instruction.trim())
      .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#07151d] px-4 py-8 text-white md:px-8 lg:px-10">
      <section className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-16">

          <div className="overflow-hidden rounded-2xl">
            <Image
              src={library.image}
              alt={library.name}
              width={900}
              height={900}
              priority
              className="
                h-[500px]
                w-full
                object-cover
                sm:h-[600px]
                lg:h-[680px]
                xl:h-[720px]
              "
            />
          </div>

          <div className="flex flex-col justify-center">

            {/* Exercise title */}
            <h1 className="
              text-3xl
              font-extrabold
              uppercase
              leading-tight
              tracking-tight
              sm:text-4xl
              xl:text-[42px]
            ">
              {library.name}
            </h1>

            {/* Description */}
            <p className="
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-gray-300
              sm:text-base
              sm:leading-7
            ">
              {library.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {library.muscleGroups.map((muscle, index) => (
                <span
                  key={`${muscle}-${index}`}
                  className="
                    rounded-full
                    bg-[#e8f500]
                    px-5
                    py-2
                    text-sm
                    font-semibold
                    text-black
                  "
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="
              mt-7
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#102936]
            ">

              {/* Equipment */}
              <div className="
                flex
                min-h-[58px]
                items-center
                justify-between
                border-b
                border-white/10
                px-6
                py-4
              ">
                <span className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wide
                  text-gray-200
                  sm:text-sm
                ">
                  Equipment
                </span>

                <span className="text-sm text-gray-300">
                  {library.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="
                flex
                min-h-[58px]
                items-center
                justify-between
                border-b
                border-white/10
                px-6
                py-4
              ">
                <span className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wide
                  text-gray-200
                  sm:text-sm
                ">
                  Difficulty
                </span>

                <span className="text-sm text-gray-300">
                  {library.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="
                flex
                min-h-[58px]
                items-center
                justify-between
                border-b
                border-white/10
                px-6
                py-4
              ">
                <span className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wide
                  text-gray-200
                  sm:text-sm
                ">
                  Sets
                </span>

                <span className="text-sm text-gray-300">
                  {library.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="
                flex
                min-h-[58px]
                items-center
                justify-between
                border-b
                border-white/10
                px-6
                py-4
              ">
                <span className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wide
                  text-gray-200
                  sm:text-sm
                ">
                  Reps
                </span>

                <span className="text-sm text-gray-300">
                  {library.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="
                flex
                min-h-[58px]
                items-center
                justify-between
                border-b
                border-white/10
                px-6
                py-4
              ">
                <span className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wide
                  text-gray-200
                  sm:text-sm
                ">
                  Duration
                </span>

                <span className="text-sm text-gray-300">
                  {library.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="
                flex
                min-h-[58px]
                items-center
                justify-between
                border-b
                border-white/10
                px-6
                py-4
              ">
                <span className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wide
                  text-gray-200
                  sm:text-sm
                ">
                  Calories
                </span>

                <span className="text-sm text-gray-300">
                  {library.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="
                flex
                min-h-[58px]
                items-center
                justify-between
                px-6
                py-4
              ">
                <span className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wide
                  text-gray-200
                  sm:text-sm
                ">
                  Rating
                </span>

                <span className="text-sm text-gray-300">
                  {library.rating}
                </span>
              </div>

            </div>

            <div className="mt-8">

              <h2 className="
                text-lg
                font-extrabold
                uppercase
                tracking-wide
                sm:text-xl
              ">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4">
                {instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="
                      flex
                      gap-3
                      text-sm
                      leading-6
                      text-gray-300
                      sm:text-[15px]
                    "
                  >
                    <span className="shrink-0 font-medium text-white">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>

            </div>

            <div className="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
            ">

              {/* Add to plan */}
              <PlanButton library={library}/>
              <SavedButton library={library}></SavedButton>
               

            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default LibraryDetailspage;