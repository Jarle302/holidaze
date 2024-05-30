export default function formDataToObject(formData: FormData) {
  const formDataObject: { [key: string]: string | boolean | number } = {};

  formData.forEach((value, key) => {
    if (value === "true" || value === "on") {
      formDataObject[key] = true;
    } else if (value === "false" || value === "off") {
      formDataObject[key] = false;
    } else if (value === "") {
      formDataObject[key] = undefined;
    } else {
      formDataObject[key] = value as string | number;
    }
  });

  return formDataObject;
}
