"use client";
import { MouseEventHandler, SyntheticEvent, useState } from "react";
import { FormData, formPage } from "../../constants/types";
import { FloatingLabelInput } from "../FloatingLabelInput";

export const RegisterVenueForm = () => {
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value, name, checked, type } = event.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const [formPage, setFormPage] = useState<formPage>(() => 1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: 0,
    maxGuests: 0,
    description: "",
    media: [],
    meta: { parking: false, wifi: false, pets: false, breakfast: false },
    location: {
      address: "",
      zip: "",
      country: "",
      continent: "",
      lat: 0,
      lng: 0,
    },
  });

  const defaultStyle = "w-4 h-4 rounded-full bg-zinc-800 p-2";
  const activeStyle = "w-4 h-4 rounded-full bg-red-300 p-2";

  const handleMiniNavClick =  (e: React.MouseEvent<HTMLButtonElement> )=>
    e.preventDefault();
    setFormPage(pageNumber);
  };

  return (
    <form className="bg-zinc-300 h-[80vh] flex flex-col gap-4">
      <h1 className="text-3xl text-red-300 font-bold">Register Venue</h1>
      <div className="flex">
        <button
          onClick={handleMiniNavClick(e, 1)}
          className={formPage === 1 ? activeStyle : defaultStyle}></button>
        <button
          onClick={handleMiniNavClick(e, 2)}
          className={formPage === 2 ? activeStyle : defaultStyle}></button>
        <button
          onClick={handleMiniNavClick(e, 3)}
          className={formPage === 3 ? activeStyle : defaultStyle}></button>
      </div>
      {formPage === 1 && (
        <div className="flex flex-col gap-3">
          <FloatingLabelInput name="name" />
          <FloatingLabelInput name="price" type="number" />
          <FloatingLabelInput name="maxGuests" label="max guests" />
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
        <div>
          2
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
        <div>
          3
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
