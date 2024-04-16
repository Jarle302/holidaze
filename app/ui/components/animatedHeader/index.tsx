"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const AnimatedHeader = () => {
  gsap.registerPlugin(useGSAP);

  const testRef = useRef(null);

  useGSAP(
    () => {
      // gsap code here...
      gsap.to(".test", {
       y:-200,x:200,
        ease: "bounce.out",
      }); // <-- automatically reverted
    },
    { scope: testRef }
  );

  return (
    <div ref={testRef}>
      <h1 className="test">Test text</h1>
    </div>
  );
};
