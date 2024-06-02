"use client";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { ComponentType } from "react";
import searchAction from "./searchAction";
import { useFormState } from "react-dom";
import { FormButton } from "@/app/ui/components/FormButton";
import { VenueCardProps } from "../../constants/types";
import { useRef } from "react";
export const Search = ({
  RenderComponent,
}: {
  RenderComponent?: ComponentType<VenueCardProps>;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [state, action] = useFormState(searchAction, null);
  console.log(state);
  return (
    <search className={" w-full gap-4"}>
      <form className="flex flex-col mb-4" action={action}>
        <label className="text-slate-700 font-bold" htmlFor="query">
          Search
        </label>
        <div className="flex">
          <input name="query" id="query" />
          <FormButton
            ref={buttonRef}
            className="p-3 bg-zinc-800 text-zinc-100 font-bold rounded-lg"
            loadingStyle="p-3 bg-zinc-300 text-zinc-800 font-bold rounded-lg"
            defaultText="Search"
            loadingText="Searching.."
          />
        </div>
      </form>
      {RenderComponent && state?.data?.length > 0 && (
        <div className="flex flex-wrap gap-4 items-center w-full">
          {state.data.map((venue: VenueCardProps) => (
            <RenderComponent {...venue} key={venue.id} />
          ))}
        </div>
      )}
    </search>
  );
};
