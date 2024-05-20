import { FormState } from "../../constants/types";

export function handleChange(
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  stateSetter: React.Dispatch<React.SetStateAction<FormState>>
) {
  const { value, name, checked, type } = event.target as HTMLInputElement;
  stateSetter((prev) => ({
    ...prev,
    [name]:
      type === "checkbox"
        ? checked
        : type === "number"
        ? parseFloat(value)
        : value,
  }));
}
