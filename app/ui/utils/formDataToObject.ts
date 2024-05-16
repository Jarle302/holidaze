export default function formDataToObject(formData: FormData) {
  const formDataObject: { [key: string]: string | boolean } = {};

  formData.forEach((value, key) => {
    if (value === "true" || value === "on") {
      formDataObject[key] = true;
    } else if (value === "false" || value === "off") {
      formDataObject[key] = false;
    } else {
      formDataObject[key] = value as string;
    }
  });

  return formDataObject;
}
