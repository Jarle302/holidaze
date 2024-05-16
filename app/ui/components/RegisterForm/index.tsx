"use client";
import { AuthInput } from "../AuthInput";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const RegisterForm = () => {
  const postCardParent = useRef<HTMLDivElement>(null);
  const postCard = useRef<HTMLFormElement>(null);
  const animation = useRef<gsap.core.Timeline>();
  let animationW = 0;
  let animationH = 0;
  useGSAP(() => {
    if (postCard.current && postCardParent.current) {
      console.log("triggered");
      animationW =
        postCardParent.current.clientWidth + postCard.current.clientWidth;
      animationH =
        -1 *
        (postCardParent.current.clientHeight + postCard.current.clientHeight);
    }
    // gsap code here...
    animation.current = gsap
      .timeline()
      .to(postCard.current, {
        duration: 0.7,
        scale: 0.2,
        ease: "slow(0.7,0.7,false)",
      })
      .to(postCard.current, {
        duration: 1,
        x: animationW,
        y: animationH,
        rotationX: 45,
        ease: "power3.in",
      }); // <-- automatically reverted
    animation.current.pause();
  });

  return (
    <div className="w-full h-full overflow-hidden" ref={postCardParent}>
      <form
        ref={postCard}
        className="h-full flex flex-col-reverse sm:flex-row max-w-[800px] sm:h-[400px] text-zinc-800 bg-white py-3">
        <div className="min-h-[400px] sm:w-2/5 sm:h-full flex flex-col  justify-around p-8 items-center">
          <div className=" border-r-1 h-[180px]  w-[180px] border-red-300 ">
            <img
              className="h-full w-full "
              src="/profilePlaceholder.png"
              alt=""
            />
          </div>
          <AuthInput
            label="ImageUrl"
            handleChange={(e) => console.log(e.target)}
            name="imageUrl"
          />

          <button
            onClick={(e) => {
              e.preventDefault(),
                console.log({ animation }),
                animation?.current?.play();
            }}
            className="bg-red-300 rounded-md p-2 self-start ">
            Register
          </button>
        </div>
        <div className="sm:w-3/5 px-8 sm:border-l-2 h-full border-red-300 flex flex-col justify-between">
          <Image
            className="ml-auto  self-start w-[80px]"
            src="/stampLogo.webp"
            alt="Holidaze logo, in the form of a post stamp"
            height={1024}
            width={1024}
          />
          <div className="flex flex-col gap-4 w-[280px] border-b-2 border-red-300 pb-8">
            <AuthInput
              label="name"
              handleChange={(e) => console.log(e.target)}
              name="name"
            />
            <AuthInput
              label="Email"
              handleChange={(e) => console.log(e.target)}
              name="email"
              type="email"
            />
            <AuthInput
              label="Password"
              handleChange={(e) => console.log(e.target)}
              name="password"
              type="password"
            />
          </div>
          <div>
            <label htmlFor="venueManager">Register as a venue manager</label>
            <input id="venueManager" name="venueManager" type="checkbox" />
          </div>
        </div>
      </form>
    </div>
  );
};
