"use client";
import { useState, useEffect } from "react";
import { FormState } from "../../../constants/types";
import { ImageListItem } from "./ImageListItem";
type ImageAdderProps = {
  state: FormState;
  setState: React.SetStateAction<any>; //todo type setState
};

export const ImageList = ({ state, setState }: ImageAdderProps) => {
  const isImages = state.media.length > 0;

  if (!isImages) {
    return;
  }

  const images = state.media.map((image, index) => (
    <ImageListItem
      key={index + image.url}
      state={state}
      setState={setState}
      {...image}
    />
  ));

  return (
    state.media.length > 0 && (
      <ul className="flex flex-wrap gap-[4px] max-w-[300px] ">{images}</ul>
    )
  );
};
