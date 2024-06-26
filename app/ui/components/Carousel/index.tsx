"use client";
import { mediaObject } from "../../constants/types";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

type Media = mediaObject[];

export const Carousel = ({
  media,
  fitToContainer = false,
}: {
  media: Media;
  fitToContainer?: boolean;
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const buttonClasses = "self-center p-1 rounded-full bg-slate-700";

  if (media?.length === 0 || !Array.isArray(media)) {
    return (
      <img
        className="w-full h-full"
        src={"/stampLogo.webp"}
        alt={"This is a placeholder image"}
      />
    );
  }
  function incrementDecrement(increment: boolean = true) {
    setImageIndex((prev) =>
      increment
        ? (prev + 1) % media.length
        : (prev - 1 + media.length) % media.length
    );
  }

  return (
    <div
      className={
        !fitToContainer
          ? "w-[236px] h-[236px] flex relative"
          : "w-full h-full flex relative"
      }>
      {media?.length > 1 && (
        <div className="flex justify-between absolute w-full top-2/4 translate-y-[-50%]">
          <button
            aria-label="Previous image"
            className={buttonClasses}
            onClick={() => incrementDecrement(false)}>
            <GrPrevious />
          </button>

          <button
            aria-label="Next image"
            className={buttonClasses}
            onClick={() => incrementDecrement()}>
            <GrNext />
          </button>
        </div>
      )}
      <img
        className="w-full h-full"
        src={media[imageIndex]?.url ? media[imageIndex]?.url : "/stampLogo"}
        alt={
          media[imageIndex]?.alt
            ? media[imageIndex]?.alt
            : "This is image does not have an image description, or it is a placeholder image"
        }
      />
    </div>
  );
};
