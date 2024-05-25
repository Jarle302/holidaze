interface ElementWithPath {
  path: string[];
  message: string;
}

export default function formErrorMessage(
  arr: ElementWithPath[],
  inputName: string
) {
  if (!arr || !inputName) {
    return false;
  }
  const errorArray = arr
    .filter((element) => element?.path[0] === inputName)
    .map((element) => element.message);
  return errorArray.join(", ");
}
