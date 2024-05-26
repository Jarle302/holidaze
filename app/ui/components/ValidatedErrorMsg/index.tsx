import { ZodIssue } from "zod";
import formErrorMessage from "../../utils/formErrorMessage";

export const ValidatedErrorMsg = ({
  errorArray,
  inputName,
}: {
  errorArray: ZodIssue[];
  inputName: string;
}) => {
  if (!Array.isArray(errorArray) || errorArray.length <= 0) {
    return;
  }
  const errorMsg = formErrorMessage(errorArray, inputName);
  return <>{errorMsg && <p>{errorMsg}</p>}</>;
};
