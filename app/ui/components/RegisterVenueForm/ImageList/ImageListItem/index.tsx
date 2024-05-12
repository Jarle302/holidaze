"use client";
import { MdDelete } from "react-icons/md";
import { mediaObject, FormState } from "@/app/ui/constants/types";
import { Dispatch, SetStateAction } from "react";
export const ImageListItem = ({
  url,
  alt,
  setState,
  state,
}: mediaObject & {
  state: FormState;
  setState: Dispatch<SetStateAction<FormState>>;
}) => {
  function handleClick() {
    setState((prev) => ({
      ...prev,
      media: state.media.filter((image) => image.url !== url),
    }));
  }

  return (
    <li className="relative w-[80px] h-[80px]">
      <img className="h-full w-full" src={url} alt={alt} />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        className="absolute left-[50%] top-[50%] transform-[-50%,-50%]">
        {" "}
        <MdDelete />{" "}
      </button>
    </li>
  );
};
