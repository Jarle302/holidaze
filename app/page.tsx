import Image from "next/image";
import { SocialProofCard } from "./ui/components/SocialProofCard";
import { AnimatedPalm } from "./ui/components/AnimatedPalm";
export default function Home() {
  return (
    <main className=" flex flex-col ">
      <section className=" flex flex-col sm:flex-row flex-1">
        <div className="background--landing--left flex-1 h-full flex flex-col  justify-evenly pt-[220px]   items-center min-h-[100vh]">
          <div className="relative">
            <AnimatedPalm
              className={"absolute w-[102px] left-[71%] top-[-71px]"}
            />
            <h1 className={"text-white text-2xl max-w-[350px] "}>
              Escape to Your Perfect Getaway with
              <span className={"text-red-300 font-bold"}> Holidaze</span>
            </h1>{" "}
          </div>
          <search className="flex w-[280px]  rounded-full bg-white  ">
            <input className="rounded-full w-full" type="text" />
            <button className="p-2 bg-yellow-800 rounded-bl-xl">filter</button>
            <button className="p-2 bg-red-300 rounded-r-full">search</button>
          </search>
        </div>
        <div className="background--landing--right flex-1 h-full flex items-end justify-center min-h-[100vh]">
          <div className="bg-yellow-800 max-w-[400px] p-5 ">
            <p className="">
              Whether you&apos;re looking for the rustic charm of a mountain
              lodge or the serene beauty of a beachfront villa, our diverse
              collection has something for every taste and occasion. Let your
              journey begin here
            </p>
          </div>
        </div>
      </section>
      <section className="h-[100vh] py-4 sm:flex-row flex-col sm:flex-wrap flex justify-evenly flex-1">
        <h2 className="w-full text-center text-2xl text-red-300 font-bold">
          Do like so many others!
        </h2>
        <SocialProofCard
          img={"/socialConsumer.png"}
          alt="Family on the beach"
          host="Sophia M., Delighted Traveler"
          description="Holidaze effortlessly connected our family to a perfect beach house, exceeding every expectation for a memorable vacation."
        />
        <SocialProofCard
          img={"/socialOwner.png"}
          alt="Picture of a lakeside cabin"
          host="Jordan R., Cabin Owner"
          description="Holidaze transformed my cabin into a sought-after destination with simple listings, exceptional guests, and constant bookings."
        />
      </section>
      <section className="flex-1">
        <div className="bg-white p-12 flex">
          <p className="max-w-[400px] min-w-[280px] flex-1">
            Unlock the full potential of your property. List with Holidaze and
            watch your bookings soar.
          </p>
          <button className="p-2 bg-red-300 rounded-md">
            Start Hosting Today
          </button>
        </div>
        <div className="bg-white p-4 flex">
          <button className="p-2 bg-green-500 rounded-md">
            Find your adventure
          </button>
          <p>
            Escape the ordinary. Handpicked venues for unforgettable family
            vacations are waiting for you on Holidaze.
          </p>
        </div>
      </section>
    </main>
  );
}
