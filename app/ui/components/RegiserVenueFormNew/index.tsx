"use client";
import { useState } from "react";
import { formPage } from "../../constants/types";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { LabeledCheckbox } from "../LabeledCheckbox";
import { useFormState } from "react-dom";
import RegisterVenue from "@/app/venues/registerVenue/page";
export const RegisterVenueForm = () => {
  const [formPage, setFormPage] = useState<formPage>(() => 1);
  const [state, formAction] = useFormState(RegisterVenue, null);
  const defaultStyle = "w-4 h-4 rounded-full bg-zinc-800 p-2";
  const activeStyle = "w-4 h-4 rounded-full bg-red-300 p-2";

  const handleMiniNavClick =
    (pageNumber: formPage) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setFormPage(pageNumber);
    };

  const containerStyle = "flex flex-col gap-3";

  return (
    <form
      action={formAction}
      className="bg-zinc-300 h-[80vh] items-center flex flex-col gap-4">
      <h1 className="text-3xl text-red-300 font-bold">Register Venue</h1>
      <div className="flex">
        <button
          onClick={handleMiniNavClick(1)}
          className={formPage === 1 ? activeStyle : defaultStyle}></button>
        <button
          onClick={handleMiniNavClick(2)}
          className={formPage === 2 ? activeStyle : defaultStyle}></button>
        <button
          onClick={handleMiniNavClick(3)}
          className={formPage === 3 ? activeStyle : defaultStyle}></button>
      </div>
      {formPage === 1 && (
        <div className={containerStyle}>
          <FloatingLabelInput name="name" />
          <FloatingLabelInput name="price" type="number" />
          <FloatingLabelInput name="maxGuests" label="max guests" />
          <FloatingLabelInput name="description" type="textArea" />

          <button
            className="p-2 rounded-lg bg-red-300"
            onClick={(e) => {
              setFormPage((prev) =>
                prev < 3 ? ((prev + 1) as formPage) : prev
              );
            }}>
            Next
          </button>
        </div>
      )}
      {formPage === 2 && (
        <div className={containerStyle}>
          <div className="flex gap-1">
            <FloatingLabelInput name="url" label="Image url" width="m" />
            <p></p>
            
          </div>
          <FloatingLabelInput
            name="alt"
            label="Image description"
            type="textArea"
          />
          <div
            className={`border-2 border-zinc-500 rounded-lg max-w-max p-2 ${containerStyle}`}>
            <p className="text-xl font-bold">Misc</p>
            <div className="flex justify-between w-[200px]">
              <LabeledCheckbox name="wifi" />
              <LabeledCheckbox name="parking" />
            </div>
            <div className="flex justify-between w-[200px]">
              <LabeledCheckbox name="pets" />
              <LabeledCheckbox name="breakfast" />
            </div>
          </div>
          <button
            className="p-2 rounded-lg bg-zinc-400 text-white"
            onClick={(e) => {
              setFormPage((prev) =>
                prev > 1 ? ((prev - 1) as formPage) : prev
              );
            }}>
            Back
          </button>
          <button
            className="p-2 rounded-lg bg-red-300 "
            onClick={(e) => {
              setFormPage((prev) =>
                prev < 3 ? ((prev + 1) as formPage) : prev
              );
            }}>
            Next
          </button>
        </div>
      )}
      {formPage === 3 && (
        <div className={containerStyle}>
          <FloatingLabelInput name="address" />
          <div className="flex gap-2">
            <FloatingLabelInput name="city" width="m" />
            <FloatingLabelInput name="zip" width="s" />
          </div>
          <FloatingLabelInput name="country" />
          <FloatingLabelInput name="continent" />
          <div className="flex flex-wrap gap-2">
            <p className="w-full">Coordinates</p>
            <FloatingLabelInput name="lat" width="s" />
            <FloatingLabelInput name="lng" width="s" />
          </div>
          <div className="flex">
            <button
              className="p-2 w-[200px] rounded-lg bg-zinc-400 text-white"
              onClick={(e) => {
                setFormPage((prev) =>
                  prev > 1 ? ((prev - 1) as formPage) : prev
                );
              }}>
              Back
            </button>
            <button
              type="submit"
              className="p-2 w-[200px] rounded-lg bg-green-500 text-white">
              Register Venue
            </button>
          </div>
        </div>
      )}
    </form>
  );
};
