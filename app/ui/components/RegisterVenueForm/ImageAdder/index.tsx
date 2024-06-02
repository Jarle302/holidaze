"use client";
import { useState, useEffect } from "react";
import { FormState } from "../../../constants/types";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FloatingLabelInput } from "../../FloatingLabelInput";
import { handleChange } from "../functions";

type ImageAdderProps = {
  state: FormState;
  setState: React.SetStateAction<any>; //todo type setState
};

export const ImageAdder = ({ state, setState }: ImageAdderProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    if (state.media[imageIndex]?.alt) {
      setState((prev: FormState) => ({
        ...prev,
        alt: state.media[imageIndex].alt,
      }));
    } else if (state.alt) {
      setState((prev: FormState) => ({
        ...prev,
        alt: "",
      }));
    }
  }, [imageIndex]);
  const buttonClasses = "self-center p-1 rounded-full bg-white";

  function handleClick() {
    setState((prev: FormState) => ({
      ...prev,
      media: prev.media.map((media, index) =>
        index === imageIndex ? { url: media.url, alt: state.alt } : media
      ),
      alt: "",
    }));
  }
  function incrementDecrement(increment: boolean = true) {
    setImageIndex((prev) =>
      increment
        ? (prev + 1) % state.media.length
        : (prev - 1 + state.media.length) % state.media.length
    );
  }
  return (
    <>
      {state.media.length > 0 && (
        <div className="w-[236px] h-[236px] flex relative border-2 border-zinc-500 rounded-lg">
          <div className="flex justify-between absolute w-full top-2/4 translate-y-[-50%] px-1">
            <button
              className={buttonClasses}
              onClick={(e) => {
                e.preventDefault();
                incrementDecrement(false);
              }}>
              <GrPrevious />
            </button>

            <button
              className={buttonClasses}
              onClick={(e) => {
                e.preventDefault();
                incrementDecrement();
              }}>
              <GrNext />
            </button>
          </div>
          <img
            className="w-full h-full rounded-lg"
            src={state.media[imageIndex]?.url}
            alt={state.media[imageIndex]?.alt}
          />
          <div className="absolute p-3 bg-slate-700 text--green w-full flex gap-1 top-[68%]">
            <FloatingLabelInput
              name="alt"
              label="Description"
              type="textArea"
              value={state.alt}
              handleChange={(e) => handleChange(e, setState)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
              className="p-2 bg-zinc-800 text-zinc-100 font-bold rounded-lg">
              Add
            </button>
          </div>{" "}
        </div>
      )}
    </>
  );
};
