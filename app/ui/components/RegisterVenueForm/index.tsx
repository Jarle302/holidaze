"use client";
import { useState } from "react";
import { FormData, formPage, FormState } from "../../constants/types";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { LabeledCheckbox } from "../LabeledCheckbox";

export const RegisterVenueForm = () => {
  const [formPage, setFormPage] = useState<formPage>(() => 1);
  const [formState, setFormState] = useState<FormState>({
    name: "",
    price: 0,
    maxGuests: 0,
    description: "",
    url: "",
    alt: "",
    parking: false,
    wifi: false,
    pets: false,
    breakfast: false,
    city: "",
    address: "",
    zip: "",
    country: "",
    continent: "",
    lat: 0,
    lng: 0,
  });
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value, name, checked, type } = event.target as HTMLInputElement;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
    <form className="bg-zinc-300 h-[80vh] flex flex-col gap-4">
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
          <FloatingLabelInput name="name" value={formState.name} handleChange={handleChange}
 />
          <FloatingLabelInput name="price" value={formState.price} handleChange={handleChange}
 type="number" />
          <FloatingLabelInput name="maxGuests" value={formState.maxGuests} handleChange={handleChange}
 label="max guests" />
          <FloatingLabelInput name="description" value={formState.description} handleChange={handleChange}
 type="textArea" />

          <button
            onClick={(e) =>
              setFormPage((prev) => {
                e.preventDefault();
                return prev < 3 ? ((prev + 1) as formPage) : prev;
              })
            }>
            Next
          </button>
        </div>
      )}
      {formPage === 2 && (
        <div className={containerStyle}>
          <FloatingLabelInput value={formState.url} handleChange={handleChange}
 name="url" label="Image url" />
          <FloatingLabelInput value={formState.alt}  handleChange={handleChange}
 name="alt" label="Image description" />
          <div
            className={`border-2 border-zinc-500 rounded-lg max-w-max p-2 ${containerStyle}`}>
            <p className="text-xl font-bold">Misc</p>
            <div className="flex justify-between w-[200px]">
              <LabeledCheckbox value={formState.wifi}  handleChange={handleChange}
 name="wifi" />
              <LabeledCheckbox value={formState.parking} handleChange={handleChange}
 name="parking" />
            </div>
            <div className="flex justify-between w-[200px]">
              <LabeledCheckbox value={formState.pets} handleChange={handleChange}
 name="pets" />
              <LabeledCheckbox value={formState.breakfast} handleChange={handleChange}
 name="breakfast" />
            </div>
          </div>
          <button
            onClick={(e) =>
              setFormPage((prev) => {
                e.preventDefault();
                return prev > 1 ? ((prev - 1) as formPage) : prev;
              })
            }>
            Back
          </button>
          <button
            onClick={(e) =>
              setFormPage((prev) => {
                e.preventDefault();
                return prev < 3 ? ((prev + 1) as formPage) : prev;
              })
            }>
            Next
          </button>
        </div>
      )}
      {formPage === 3 && (
        <div className={containerStyle}>
          <FloatingLabelInput value={formState.address} handleChange={handleChange}
 name="address" />
          <div className="flex gap-2">
            <FloatingLabelInput value={formState.city} handleChange={handleChange}
 name="city" width="m" />
            <FloatingLabelInput value={formState.zip} handleChange={handleChange}
 name="zip" width="s" />
          </div>
          <FloatingLabelInput value={formState.country} handleChange={handleChange}
 name="country" />
          <FloatingLabelInput value={formState.continent} handleChange={handleChange}
 name="continent" />
          <div className="flex flex-wrap gap-2">
            <p className="w-full">Coordinates</p>
            <FloatingLabelInput handleChange={handleChange}
 name="lat" width="s" />
            <FloatingLabelInput handleChange={handleChange}
 name="lng" width="s" />
          </div>

          <button
            onClick={(e) =>
              setFormPage((prev) => {
                e.preventDefault();
                return prev > 1 ? ((prev - 1) as formPage) : prev;
              })
            }>
            Back
          </button>
        </div>
      )}
    </form>
  );
};
