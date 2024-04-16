"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const AnimatedLogo = () => {
  const logoRef = useRef(null);
  useGSAP(() => {
    // gsap code here...
    gsap.from(logoRef.current, {
      duration: 1,
      scale: 0.1,
      ease: "bounce.out",
    }); // <-- automatically reverted
  });
  return (
    <Image
      ref={logoRef}
      className="w-[60px] "
      src="/stampLogo.webp"
      alt="Holidaze logo, in the form of a post stamp"
      height={1024}
      width={1024}
    />
  );
};
