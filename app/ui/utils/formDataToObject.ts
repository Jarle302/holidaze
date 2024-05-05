export default function formDataToObject(formData: FormData) {
  const formDataObject: { [key: string]: string } = {};

  formData.forEach((value, key) => {
    formDataObject[key] = value as string;
  });

  return formDataObject;
}
