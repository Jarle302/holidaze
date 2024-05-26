import { ZodIssue } from "zod";

export default function formErrorMessage(arr: ZodIssue[], inputName: string) {
  if (!arr || !inputName) {
    return false;
  }
  const errorArray = arr.filter(
    (element: ZodIssue) => element?.path[0] === inputName
  );

  if (errorArray.length <= 0) {
    return "";
  }

  const mappedErrorArray = errorArray.map((element) => element.message);
  return mappedErrorArray.join(", ");
}
