"use client";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { ComponentType } from "react";
import searchAction from "./searchAction";
import { useFormState } from "react-dom";
import { FormButton } from "@/app/ui/components/FormButton";
import { VenueCardProps } from "../../constants/types";
export const Search = ({
  className,
  RenderComponent,
}: {
  className: string;
  RenderComponent?: ComponentType<VenueCardProps>;
}) => {
  const [state, action] = useFormState(searchAction, null);
  console.log(state);
  return (
    <search className={className}>
      <form action={action}>
        <FloatingLabelInput name="query" label="Search" />
        <FormButton
          className="bg-red-300 font-bold text-zinc-800 rounded-md p-1 self-start "
          defaultText="Search"
          loadingText="Searching.."
          loadingStyle="bg-zinc-600 font-bold text-zinc-100 rounded-md p-1 self-start"
        />
      </form>
      {RenderComponent && state?.data?.length > 0 && (
        <div className="flex flex-wrap items-center w-full">
          {state.data.map((venue: VenueCardProps) => (
            <RenderComponent {...venue} key={venue.id} />
          ))}
        </div>
      )}
    </search>
  );
};
