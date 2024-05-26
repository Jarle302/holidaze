"use client";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { LabeledCheckbox } from "../LabeledCheckbox";
import registerAction from "../../utils/api/register";
import { ValidatedErrorMsg } from "../ValidatedErrorMsg";
import { useFormState, useFormStatus } from "react-dom";
import { ZodIssue } from "zod";
export const RegisterForm = () => {
  const [state, formAction] = useFormState(registerAction, null);
  return (
    <div className="w-full h-full overflow-hidden">
      <h1 className="text-red-300">Register</h1>
      <form
        action={formAction}
        className="bg-zinc-300 min-h-[100vh] items-center flex flex-col gap-4">
        <FloatingLabelInput label="Name" name="name" />
        <ValidatedErrorMsg errorArray={state as ZodIssue[]} inputName="name" />
        <FloatingLabelInput label="Email" name="email" type="email" />
        <ValidatedErrorMsg errorArray={state as ZodIssue[]} inputName="email" />
        <FloatingLabelInput label="Password" name="password" type="password" />
        <ValidatedErrorMsg errorArray={state as ZodIssue[]} inputName="password" />
        <FloatingLabelInput label="Bio" name="bio" type="textbox" />
        <ValidatedErrorMsg errorArray={state as ZodIssue[]} inputName="bio" />
        <FloatingLabelInput label="Avatar url" name="avatarUrl" />
        <ValidatedErrorMsg errorArray={state as ZodIssue[]} inputName="avatarUrl" />
        <FloatingLabelInput label="Image description" name="avatarAlt" />
        <ValidatedErrorMsg errorArray={state as ZodIssue[]} inputName="avatarAlt" />
        <FloatingLabelInput label="Banner url" name="bannerUrl" />
        <ValidatedErrorMsg errorArray={state as ZodIssue[]} inputName="bannerUrl" />
        <FloatingLabelInput label="image description" name="bannerAlt" />
        <ValidatedErrorMsg errorArray={state as ZodIssue[]} inputName="bannerAlt" />
        <LabeledCheckbox label="Venue Manager" name="venueManager" />
        <ValidatedErrorMsg errorArray={state as ZodIssue[]} inputName="VenueManager" />
        <button type="submit">Register</button>

      </form>
    </div>
  );
};
