import { baseUrl } from "../../constants/constants";
export default async function searchAction(
  previousState: any,
  formData: FormData
) {
  const query = formData.get("query");
  const url = `${baseUrl}holidaze/venues/search?q=${query}&_bookings=true`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
