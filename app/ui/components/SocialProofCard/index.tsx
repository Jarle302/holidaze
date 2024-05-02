"use client";
import Image from "next/image";
import { FC } from "react";
import { courier } from "../../../fonts";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SocialProofProps = {
  img: string;
  alt: string;
  description: string;
  host: string;
};

export const SocialProofCard: FC<SocialProofProps> = ({
  img,
  alt,
  description,
  host,
}) => {
  const card = useRef<HTMLImageElement>(null);
  const animation = useRef<gsap.core.Tween>();

  useGSAP(() => {
    if (!card) {
      return;
    }
    // gsap code here...
    animation.current = gsap.to(card.current, {
      scrollTrigger: {
        trigger: card.current,
        start: "top center",
        toggleActions: "restart pause reverse reset",
        // scrub: true,
      },
      duration: 1,
      opacity: 1,
      ease: "circ.in",
    });
    // <-- automatically reverted
    animation.current.pause();
  });

  return (
    <div
      className={` h-[470px] w-[300px] sm:w-[340px] ${courier.className} bg-white  px-4 pt-4 pb-4`}>
      <Image
        ref={card}
        width={1024}
        className="h-[300px] w-full opacity-0"
        height={1024}
        src={img}
        alt={alt}
      />
      <div className="flex flex-col justify-between pt-1  h-[147px] leading-none">
        <p>{description}</p>
        <h3 className="text-xl font-bold">{host}</h3>
      </div>
    </div>
  );
};
