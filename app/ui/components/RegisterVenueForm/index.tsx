"use client";
import { useState } from "react";
import { handleChange } from "./functions";
import { Venue, formPage, FormState } from "../../constants/types";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { LabeledCheckbox } from "../LabeledCheckbox";
import { ImageAdder } from "./ImageAdder";
import { emptyFormStateObject } from "../../constants/constants";
import convertFormStateToVenue from "../../utils/ConvertFormStateToVenue";
import { ImageList } from "./ImageList";
import registerVenue from "../../utils/api/registerVenue";

export const RegisterVenueForm = () => {
  const [formPage, setFormPage] = useState<formPage>(() => 1);
  const [formState, setFormState] = useState<FormState>(emptyFormStateObject);


  console.log(formState);

  function handleClick() {
    setFormState((prev) => ({
      ...prev,
      media: [...prev.media, { alt: formState.alt, url: formState.url }],
      alt: "",
      url: "",
    }));
  }

  const defaultStyle = "w-4 h-4 rounded-full bg-zinc-800 p-2";
  const activeStyle = "w-4 h-4 rounded-full bg-red-300 p-2";

  const handleMiniNavClick =
    (pageNumber: formPage) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setFormPage(pageNumber);
    };

  const containerStyle = "flex flex-col gap-3";

  return (
    <form className="bg-zinc-300 min-h-[100vh] items-center flex flex-col gap-4">
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
          <FloatingLabelInput
            name="name"
            value={formState.name}
            handleChange={(e) => handleChange(e, setFormState)}
          />
          <FloatingLabelInput
            name="price"
            value={formState.price}
            handleChange={(e) => handleChange(e, setFormState)}
            type="number"
          />
          <FloatingLabelInput
            name="maxGuests"
            value={formState.maxGuests}
            handleChange={(e) => handleChange(e, setFormState)}
            label="max guests"
          />
          <FloatingLabelInput
            name="description"
            value={formState.description}
            handleChange={(e) => handleChange(e, setFormState)}
            type="textArea"
          />

          <button
            className="p-2 rounded-lg bg-red-300"
            onClick={(e) => {
              e.preventDefault();
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
            <FloatingLabelInput
              value={formState.url}
              handleChange={(e) => handleChange(e, setFormState)}
              name="url"
              label="Image url"
              width="m"
            />
            <button
              onClick={(e) => {
                e.preventDefault(), handleClick();
              }}
              className="bg-zinc-500 text-white  p-2 rounded-lg">
              Add
            </button>
          </div>

          <ImageAdder state={formState} setState={setFormState} />
          <ImageList state={formState} setState={setFormState} />
          <div
            className={`border-2 border-zinc-500 rounded-lg max-w-max p-2 ${containerStyle}`}>
            <p className="text-xl font-bold">Misc</p>
            <div className="flex justify-between w-[200px]">
              <LabeledCheckbox
                value={formState.wifi}
                handleChange={(e) => handleChange(e, setFormState)}
                name="wifi"
              />
              <LabeledCheckbox
                value={formState.parking}
                handleChange={(e) => handleChange(e, setFormState)}
                name="parking"
              />
            </div>
            <div className="flex justify-between w-[200px]">
              <LabeledCheckbox
                value={formState.pets}
                handleChange={(e) => handleChange(e, setFormState)}
                name="pets"
              />
              <LabeledCheckbox
                value={formState.breakfast}
                handleChange={(e) => handleChange(e, setFormState)}
                name="breakfast"
              />
            </div>
          </div>
          <button
            className="p-2 rounded-lg bg-zinc-400 text-white"
            onClick={(e) => {
              e.preventDefault();
              setFormPage((prev) =>
                prev > 1 ? ((prev - 1) as formPage) : prev
              );
            }}>
            Back
          </button>
          <button
            className="p-2 rounded-lg bg-red-300 "
            onClick={(e) => {
              e.preventDefault();
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
          <FloatingLabelInput
            value={formState.address}
            handleChange={(e) => handleChange(e, setFormState)}
            name="address"
          />
          <div className="flex gap-2">
            <FloatingLabelInput
              value={formState.city}
              handleChange={(e) => handleChange(e, setFormState)}
              name="city"
              width="m"
            />
            <FloatingLabelInput
              value={formState.zip}
              handleChange={(e) => handleChange(e, setFormState)}
              name="zip"
              width="s"
            />
          </div>
          <FloatingLabelInput
            value={formState.country}
            handleChange={(e) => handleChange(e, setFormState)}
            name="country"
          />
          <FloatingLabelInput
            value={formState.continent}
            handleChange={(e) => handleChange(e, setFormState)}
            name="continent"
          />
          <div className="flex flex-wrap gap-2">
            <p className="w-full">Coordinates</p>
            <FloatingLabelInput
              handleChange={(e) => handleChange(e, setFormState)}
              name="lat"
              width="s"
              value={formState.lat}
            />
            <FloatingLabelInput
              handleChange={(e) => handleChange(e, setFormState)}
              name="lng"
              width="s"
              value={formState.lng}
            />
          </div>
          <div className="flex">
            <button
              className="p-2 w-[200px] rounded-lg bg-zinc-400 text-white"
              onClick={(e) => {
                e.preventDefault();
                setFormPage((prev) =>
                  prev > 1 ? ((prev - 1) as formPage) : prev
                );
              }}>
              Back
            </button>
            <button
              className="p-2 w-[200px] rounded-lg bg-green-500 text-white"
              onClick={(e) => {
                e.preventDefault();
                registerVenue(convertFormStateToVenue(formState));

              }}>
              Register Venue
            </button>
          </div>
        </div>
      )}
    </form>
  );
};
