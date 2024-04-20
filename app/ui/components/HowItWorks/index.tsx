"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGear, FaHandshakeSimple, FaGlobe, FaBed } from "react-icons/fa6";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const HowItWorks = () => {
  const container = useRef<HTMLDivElement>(null);
  const renterSection = useRef(null);
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
            scrub: true,
            start: "top top",
            end: "+=2000",
            pin: true,
            // toggleActions: "restart pause reverse reset",
          },
        })
        .from(renterSection.current, {
          xPercent: -100,
        })
        .to(".howItWorks", {
          xPercent: 100,
          stagger: 1,
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
      className="relative w-[100vw] h-[100vh] overflow-hidden"
      ref={container}>
      <section
        className="bg-teal-700 w-full absolute h-full z-10 flex flex-col p-[20px] sm:p-[40px] "
        ref={renterSection}>
        <h3 className="text-red-300 text-3xl text-center w-full">
          Own a Unique Venue?
        </h3>
        <ul>
          <li className="flex">
            <FaHandshakeSimple />
            <span className="font-bold">Connect with Ideal Guests</span> .
          </li>
          <li className="flex">
            <FaGear />
            <span className="font-bold">Effortless Listing Process</span>
          </li>
          <li className="flex">
            <FaGlobe />
            <span className="font-bold">Reach a Broad Audience</span>
          </li>
          <li className="flex">
            <FaBed />
            <span className="font-bold">Memorable Stays Begin Here</span>
          </li>
        </ul>

        <h3>How it works</h3>
        <div className="flex flex-col gap-[125px]">
          <div className="relative">
            <div className="absolute z-30 h-[120px] rounded-l-lg w-[200px] flex justify-center items-center bg-red-300 text-white">
              <p className="text-2xl text-center m-auto font-bold">
                1.Create Your Account
              </p>
            </div>
            <div className="absolute howItWorks z-20 rounded-r-lg  h-[120px] w-[200px]  bg-white text-red-300">
              <p>
                Not registered? Sign up as a venue manager by providing your
                basic details to create your account.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-30 h-[120px] rounded-l-lg w-[200px] flex justify-center items-center bg-red-300 text-white">
              <p className="text-2xl text-center m-auto font-bold">
                2.List Your Venue{" "}
              </p>
            </div>
            <div className="absolute howItWorks z-20 rounded-r-lg  h-[120px] w-[200px]  bg-white text-red-300">
              <p>
                Once logged in, go to the 'Add Venue' section to enter your
                venue's details.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-30 h-[120px] rounded-l-lg w-[200px] flex justify-center items-center bg-red-300 text-white">
              <p className="text-2xl text-center m-auto font-bold">
                3.Sit Back and Relax:{" "}
              </p>
            </div>
            <div className="absolute howItWorks z-20 rounded-r-lg  h-[120px] w-[200px]  bg-white text-red-300">
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
        className="bg-teal-200 w-full absolute h-full z-50"
        ref={managerSection}>
        Add a Venue Log into the dashboard. Navigate to the 'Add Venue' section.
        Enter detailed information about the venue, including name, location,
        capacity, amenities, available dates, photos, and pricing. Submit the
        venue for approval (if there's an approval process).
      </section>
      <section
        className="bg-red-400 w-full absolute h-full z-[100]"
        ref={endingSection}>
        ttttt
      </section>
    </div>
  );
};
