import { ChangeEvent } from "react";

export const LabeledCheckbox = ({
  name,
  label,
  handleChange,
  value,
}: {
  name: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value: boolean;
}) => {
  return (
    <div>
      <label htmlFor={name}>{label ? label : name}</label>
      <input
        checked={value}
        onChange={handleChange}
        type="checkbox"
        name={name}
        id={name}
      />
    </div>
  );
};
