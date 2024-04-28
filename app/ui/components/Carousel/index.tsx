"use client";
import { mediaObject } from "../../constants/types";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

type Media = mediaObject[];

export const Carousel = ({ media }: { media: Media }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const buttonClasses = "self-center p-3";

  function incrementDecrement(increment: boolean = true) {
    setImageIndex((prev) =>
      increment
        ? (prev + 1) % media.length
        : (prev - 1 + media.length) % media.length
    );
  }
  return (
    <div className="w-full h-full flex">
      <button
        className={buttonClasses}
        onClick={() => incrementDecrement(false)}>
        <GrPrevious />
      </button>
      <img
        className="w-full h-full"
        src={media[imageIndex].url}
        alt={media[imageIndex].alt}
      />
      <button className={buttonClasses} onClick={() => incrementDecrement()}>
        <GrNext />
      </button>
    </div>
  );
};
