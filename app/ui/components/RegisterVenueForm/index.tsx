"use client";
import { useState } from "react";
import { handleChange } from "./functions";
import { formPage, FormState, registerVenueData } from "../../constants/types";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { LabeledCheckbox } from "../LabeledCheckbox";
import { ImageAdder } from "./ImageAdder";
import { emptyFormStateObject } from "../../constants/constants";
import convertFormStateToVenue from "../../utils/ConvertFormStateToVenue";
import { ImageList } from "./ImageList";
import registerVenue from "../../utils/api/registerVenue";
import convertToformState from "../../utils/convertToformState";
import {
  RegisterVenueSchema,
  addImage,
} from "../../constants/validationSchemas";
import { ZodIssue } from "zod";
import { ValidatedErrorMsg } from "../ValidatedErrorMsg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
export const RegisterVenueForm = ({
  venueData,
}: {
  venueData?: registerVenueData & { id: string };
}) => {
  const router = useRouter();
  let isEditMode = venueData?.name !== undefined ? true : false;
  let filledFormState = {};
  if (isEditMode) {
    filledFormState = convertToformState(venueData as registerVenueData);
  }
  const [validationErrors, setValidationErrors] = useState<ZodIssue[]>();
  const [formPage, setFormPage] = useState<formPage>(() => 1);
  const [formState, setFormState] = useState<FormState>(
    isEditMode ? (filledFormState as FormState) : emptyFormStateObject
  );

  console.log(validationErrors);

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
    <form className="bg-slate-700 text--green min-h-[100vh] items-center flex flex-col gap-4">
      <h1 className="text-3xl text-red-300 font-bold">
        {!isEditMode ? "Register Venue" : "Update Venue"}
      </h1>
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
          <ValidatedErrorMsg errorArray={validationErrors} inputName="name" />
          <FloatingLabelInput
            name="price"
            value={formState.price}
            handleChange={(e) => handleChange(e, setFormState)}
            type="number"
          />
          <ValidatedErrorMsg errorArray={validationErrors} inputName="price" />

          <FloatingLabelInput
            name="maxGuests"
            value={formState.maxGuests}
            handleChange={(e) => handleChange(e, setFormState)}
            label="max guests"
            type="number"
          />
          <ValidatedErrorMsg
            errorArray={validationErrors}
            inputName="maxGuests"
          />

          <FloatingLabelInput
            name="description"
            value={formState.description}
            handleChange={(e) => handleChange(e, setFormState)}
            type="textArea"
          />
          <ValidatedErrorMsg
            errorArray={validationErrors}
            inputName="description"
          />

          <button
            className="p-3 bg-zinc-800 text-zinc-100 font-bold rounded-lg"
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
            <ValidatedErrorMsg errorArray={validationErrors} inputName="url" />

            <button
              onClick={(e) => {
                e.preventDefault();
                if (!addImage.safeParse(formState.url).success) {
                  setValidationErrors(
                    addImage.safeParse(formState.url).error?.issues
                  );
                  return;
                }
                handleClick();
              }}
              className="p-2 bg-zinc-800 text-zinc-100 font-bold rounded-lg">
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
              <ValidatedErrorMsg
                errorArray={validationErrors}
                inputName="wifi"
              />

              <LabeledCheckbox
                value={formState.parking}
                handleChange={(e) => handleChange(e, setFormState)}
                name="parking"
              />
              <ValidatedErrorMsg
                errorArray={validationErrors}
                inputName="parking"
              />
            </div>
            <div className="flex justify-between w-[200px]">
              <LabeledCheckbox
                value={formState.pets}
                handleChange={(e) => handleChange(e, setFormState)}
                name="pets"
              />
              <ValidatedErrorMsg
                errorArray={validationErrors}
                inputName="pets"
              />

              <LabeledCheckbox
                value={formState.breakfast}
                handleChange={(e) => handleChange(e, setFormState)}
                name="breakfast"
              />
              <ValidatedErrorMsg
                errorArray={validationErrors}
                inputName="breakfast"
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
            className="p-3 bg-zinc-800 text-zinc-100 font-bold rounded-lg "
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
          <ValidatedErrorMsg
            errorArray={validationErrors}
            inputName="address"
          />

          <div className="flex gap-2">
            <FloatingLabelInput
              value={formState.city}
              handleChange={(e) => handleChange(e, setFormState)}
              name="city"
              width="m"
            />
            <ValidatedErrorMsg errorArray={validationErrors} inputName="city" />

            <FloatingLabelInput
              value={formState.zip}
              handleChange={(e) => handleChange(e, setFormState)}
              name="zip"
              width="s"
            />
            <ValidatedErrorMsg errorArray={validationErrors} inputName="zip" />
          </div>
          <FloatingLabelInput
            value={formState.country}
            handleChange={(e) => handleChange(e, setFormState)}
            name="country"
          />
          <ValidatedErrorMsg
            errorArray={validationErrors}
            inputName="country"
          />

          <FloatingLabelInput
            value={formState.continent}
            handleChange={(e) => handleChange(e, setFormState)}
            name="continent"
          />
          <ValidatedErrorMsg
            errorArray={validationErrors}
            inputName="continent"
          />

          <div className="flex flex-wrap gap-2">
            <p className="w-full">Coordinates</p>
            <FloatingLabelInput
              handleChange={(e) => handleChange(e, setFormState)}
              name="lat"
              width="s"
              type="number"
              value={formState.lat}
            />
            <ValidatedErrorMsg errorArray={validationErrors} inputName="lat" />

            <FloatingLabelInput
              handleChange={(e) => handleChange(e, setFormState)}
              name="lng"
              width="s"
              type="number"
              value={formState.lng}
            />
            <ValidatedErrorMsg errorArray={validationErrors} inputName="lng" />
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
              onClick={async (e) => {
                e.preventDefault();
                if (isEditMode && venueData && venueData.id) {
                  const data = await registerVenue(
                    convertFormStateToVenue(formState),
                    "PUT",
                    venueData.id
                  );
                  if (data?.statusCode > 299) {
                    toast.error(
                      data?.errors
                        .map((error: { message: string }) => error.message)
                        .join(", ")
                    );
                  }
                  if (data?.data && Object.keys(data?.data).length > 0) {
                    toast("Success!");
                    router.push("/");
                    return;
                  }
                }
                if (!RegisterVenueSchema.safeParse(formState).success) {
                  setValidationErrors(
                    RegisterVenueSchema.safeParse(formState).error?.issues
                  );
                  return;
                }
                const data = await registerVenue(
                  convertFormStateToVenue(formState),
                  "POST"
                );
                if (data?.statusCode > 299) {
                  toast.error(
                    data?.errors
                      .map((error: { message: string }) => error.message)
                      .join(", ")
                  );
                }
                if (data?.data && Object.keys(data?.data).length > 0) {
                  toast("Success!");
                  router.push("/");
                }
              }}>
              {!isEditMode ? "Register Venue" : "Update Venue"}
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </form>
  );
};
