"use client";
import { useFormStatus } from "react-dom";

export const FormButton = ({
  className,
  defaultText = "Submit",
  loadingText = "Submiting",
  loadingStyle,
}: {
  className?: string;
  defaultText?: string;
  loadingText?: string;
  loadingStyle?: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={pending ? loadingStyle : className}
      type="submit"
      disabled={pending}>
      {pending ? loadingText : defaultText}
    </button>
  );
};
