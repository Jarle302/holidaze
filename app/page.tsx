import Image from "next/image";
import { SocialProofCard } from "./ui/components/SocialProofCard";

export default function Home() {
  return (
    <main className=" flex flex-col">
      <section className="h-[100vh] flex">
        <div className="background--landing--left flex-1 h-full flex flex-col justify-evenly items-center">
          <h1 className={"text-white text-2xl max-w-[350px] "}>
            Escape to Your Perfect Getaway with
            <span className={"text-red-300 font-bold"}> Holidaze</span>
          </h1>{" "}
          <search className="flex w-[300px]  rounded-full bg-white  ">
            <input className="rounded-full" type="text" />
            <button className="p-2 bg-yellow-800 rounded-bl-xl">filter</button>
            <button className="p-2 bg-red-300 rounded-r-full">search</button>
          </search>
        </div>
        <div className="background--landing--right flex-1 h-full flex items-end justify-center p-2">
          <div className="bg-yellow-800 max-w-[400px] p-5 ">
            <p className="">
              Whether you're looking for the rustic charm of a mountain lodge or
              the serene beauty of a beachfront villa, our diverse collection
              has something for every taste and occasion. Let your journey begin
              here
            </p>
          </div>
        </div>
      </section>
      <section className="h-[100vh] sm:flex-row flex-col flex justify-evenly">
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
      <section>
        <div className="bg-white p-4 flex">
          <p>
            Unlock the full potential of your property. List with Holidaze and
            watch your bookings soar.
          </p>
          <button className="p-2 bg-red-300">Start Hosting Toyday</button>
        </div>
        <div className="bg-white p-4 flex">
          <button className="p-2 bg-green-500">Find your adventure</button>
          <p>
            Escape the ordinary. Handpicked venues for unforgettable family
            vacations are waiting for you on Holidaze.
          </p>
        </div>
      </section>
    </main>
  );
}
