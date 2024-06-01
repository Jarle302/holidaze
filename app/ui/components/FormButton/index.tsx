"use client";
import { useFormStatus } from "react-dom";
import { RefObject } from "react";
export const FormButton = ({
  className,
  defaultText = "Submit",
  loadingText = "Submiting",
  loadingStyle,
  ref,
}: {
  className?: string;
  defaultText?: string;
  loadingText?: string;
  loadingStyle?: string;
  ref?: RefObject<HTMLButtonElement>;
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      ref={ref && ref}
      className={pending ? loadingStyle : className}
      type="submit"
      disabled={pending}>
      {pending ? loadingText : defaultText}
    </button>
  );
};
