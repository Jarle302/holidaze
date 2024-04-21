"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGear, FaHandshakeSimple, FaGlobe, FaBed } from "react-icons/fa6";
import { SocialProofCard } from "../SocialProofCard";
import { AnimatedPalm } from "../AnimatedPalm";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const HowItWorks = () => {
  const container = useRef<HTMLDivElement>(null);
  const firstSection = useRef(null);
  const secondSection = useRef(null);
  const thirdSection = useRef(null);
  const renterSection = useRef<HTMLElement>(null);
  const managerSection = useRef(null);
  const endingSection = useRef(null);
  const li4 = useRef<HTMLLIElement>(null);
  const li5 = useRef<HTMLLIElement>(null);

  const tl = useRef<gsap.core.Timeline>();
  const innerTl = useRef<gsap.core.Timeline>();

  //Section animation
  useGSAP(
    () => {
      // gsap code here...
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            scrub: 2,
            start: "top top",
            end: "+=8000",
            markers: true,
            pin: true,

            // toggleActions: "restart pause reverse reset",
          },
        })

        .from(secondSection.current, {
          xPercent: 100,
        })
        .from(thirdSection.current, {
          yPercent: -150,
        })
        .from(renterSection.current, {
          xPercent: -100,
        })
        .from("li", {
          xPercent: renterSection.current?.offsetWidth,
          stagger: 0.4,
        })
        .to("ul", {
          xPercent: renterSection.current?.offsetWidth,
        })
        .to(".fade-animation", {
          opacity: 1,
        })

        .to(".howItWorks", {
          xPercent: 100,
          stagger: 0.2,
        })
        .from(managerSection.current, {
          xPercent: 100,
        })
        .from(endingSection.current, {
          yPercent: -100,
        });
    },
    { scope: container }
  ); // <-- automatically reverted

  return (
    <div
      className="relative w-[100vw] h-[100vh]  overflow-hidden"
      ref={container}>
      <section
        ref={firstSection}
        className=" background--landing--left flex flex-col sm:flex-row w-full absolute h-full justify-evenly pt-[220px]   items-center">
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
      </section>
      <section
        ref={secondSection}
        className="background--landing--right flex items-end justify-center w-full absolute h-full z-[200]">
        <div className="bg-yellow-800 max-w-[400px] p-5 ">
          <p className="">
            Whether you&apos;re looking for the rustic charm of a mountain lodge
            or the serene beauty of a beachfront villa, our diverse collection
            has something for every taste and occasion. Let your journey begin
            here
          </p>
        </div>
      </section>
      <section
        ref={thirdSection}
        className=" bg-black py-4 sm:flex-row flex-col sm:flex-wrap flex gap-4 items-center justify-evenly w-full absolute sm:h-full h-[200vh] z-[300]">
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

      <section
        className="bg-teal-700 w-full absolute h-full z-[400] flex flex-col p-[20px] sm:p-[40px] "
        ref={renterSection}>
        <h3 className="text-red-300 text-3xl text-center w-full">
          Own a Unique Venue?
        </h3>
        <ul className="absolute">
          <li className="flex">
            <FaHandshakeSimple />
            <span className="font-bold">Connect with Ideal Guests</span> .
          </li>
          <li className="flex absolute ">
            <FaGear />
            <span className="font-bold">Effortless Listing Process</span>
          </li>
          <li className="flex absolute">
            <FaGlobe />
            <span className="font-bold">Reach a Broad Audience</span>
          </li>
          <li className="flex absolute">
            <FaBed />
            <span className="font-bold">Memorable Stays Begin Here</span>
          </li>
        </ul>

        <h3 className="fade-animation text-2xl opacity-0 text-red-300">
          How it works
        </h3>
        <div className="flex flex-col gap-[125px] fade-animation opacity-0">
          <div className="relative">
            <div className="absolute z-[410] h-[120px] rounded-l-lg w-[160px] flex justify-center items-center bg-red-300 text-white">
              <p className="text-2xl text-center m-auto font-bold">
                Create Your Account
              </p>
            </div>
            <div className="absolute howItWorks z-[405] rounded-r-lg  h-[120px] w-[160px]  bg-white text-red-300">
              <p>
                Sign up as a venue manager by providing your basic details to
                create your account.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-[420] h-[120px] rounded-l-lg w-[160px] flex justify-center items-center bg-red-300 text-white">
              <p className="text-2xl text-center m-auto font-bold">
                List Your Venue{" "}
              </p>
            </div>
            <div className="absolute howItWorks z-[415] rounded-r-lg  h-[120px] w-[160px]  bg-white text-red-300">
              <p>
                Go to the 'Add Venue' section to enter your venue's details.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute  z-[430] h-[120px] rounded-l-lg w-[160px] flex justify-center items-center bg-red-300 text-white">
              <p className="text-2xl text-center m-auto font-bold">
                Sit Back and Relax:{" "}
              </p>
            </div>
            <div className="absolute howItWorks  z-[425] rounded-r-lg  h-[120px] w-[160px]  bg-white text-red-300">
              <p>
                Holidaze will take care of the marketing and connect you with
                potential guests.
              </p>
            </div>
          </div>
        </div>
        <p>Join Holidaze Today — where every venue finds its perfect guest.</p>
      </section>
      <section
        className="bg-teal-200 w-full absolute h-full  z-[500]"
        ref={managerSection}>
        Add a Venue Log into the dashboard. Navigate to the 'Add Venue' section.
        Enter detailed information about the venue, including name, location,
        capacity, amenities, available dates, photos, and pricing. Submit the
        venue for approval (if there's an approval process).
      </section>
      <section
        className="bg-red-400 w-full absolute h-full  z-[600]"
        ref={endingSection}>
        ttttt
      </section>
    </div>
  );
};
