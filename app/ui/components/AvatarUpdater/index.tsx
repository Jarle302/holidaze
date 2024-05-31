import { FloatingLabelInput } from "../FloatingLabelInput";
import { FormButton } from "@/app/ui/components/FormButton";
import { ValidatedErrorMsg } from "../ValidatedErrorMsg";
import { ZodIssue } from "zod";

export const AvatarUpdater = ({
  updateAvatar,
  errorArray,
  name,
}: {
  updateAvatar: any; //FIX TYPE
  errorArray: ZodIssue[];
  name: string;
}) => {
  return (
    <form
      action={updateAvatar}
      className="bg-zinc-300 flex flex-col justify-evenly h-full">
      <FloatingLabelInput name="url" label="Avatar url" />
      <ValidatedErrorMsg errorArray={errorArray} inputName="url" />
      <FloatingLabelInput name="alt" label="Avatar description" />
      <ValidatedErrorMsg errorArray={errorArray} inputName="alt" />
      <input readOnly={true} type="hidden" name="name" value={name} />
      <FormButton
        defaultText="Change avatar"
        loadingText="Changing avatar"
        className="p-3 bg-red-300 font-bold text-zinc-800 rounded-lg"
        loadingStyle="p-3 bg-zinc-200 font-bold text-zinc-800 rounded-lg"
      />
    </form>
  );
};
