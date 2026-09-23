import Image from "next/image";
import banner from '@/assets/banner.png'

const Banner = () => {
  return (
    <section className="w-full bg-[#101c24] px-5 py-8 md:px-8 lg:px-12">
      <div className="relative mx-auto flex min-h-[600px] max-w-[1500px] items-center overflow-hidden rounded-3xl bg-[#172832] px-6 py-12 md:px-10 lg:px-14">
        
        {/* Left Content */}
        <div className="relative z-10 max-w-[800px]">
          <p className="mb-5 text-sm font-bold uppercase tracking-wide text-[#dfff00] md:text-base">
            Workout Library
          </p>

          <h1 className="max-w-[700px] gap-2 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl md:text-4xl lg:text-5xl">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          <p className="mt-6 max-w-[650px] text-base font-medium leading-7 text-gray-300 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <button className="mt-8 rounded-md bg-[#dfff00] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-[#111] transition duration-200 hover:bg-white hover:scale-105">
            Browse Workouts
          </button>
        </div>

        {/* Workout Image */}
        <div className="absolute bottom-0 right-[-40px] h-[330px] w-[430px] md:right-0 md:h-[390px] md:w-[500px] lg:h-[430px] lg:w-[550px]">
          <Image
            src={banner}
            alt="banner-img"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;