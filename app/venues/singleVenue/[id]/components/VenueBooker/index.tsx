"use client";
import { BookingCalendar } from "@/app/ui/components/BookingCalendar";
import { useState } from "react";
import { Booking } from "@/app/ui/constants/types";
import { FloatingLabelInput } from "@/app/ui/components/FloatingLabelInput";
import bookVenueAction from "@/app/ui/utils/api/bookVenue";
import { useFormState } from "react-dom";
import { useRef } from "react";
import { FormButton } from "@/app/ui/components/FormButton";
import { ValidatedErrorMsg } from "@/app/ui/components/ValidatedErrorMsg";
import { ZodIssue } from "zod";
import { PleaseLogin } from "@/app/ui/components/PleaseLogin";
import useToast from "@/app/ui/utils/customHooks/useToast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const VenueBooker = ({
  bookings,
  id,
}: { bookings: Booking[] } & { id: string }) => {
  const formObject = useRef<HTMLFormElement>(null);
  const [fromTo, setFromTo] = useState(["", ""]);
  const [state, action] = useFormState(bookVenueAction, null);
  useToast(state);
  return (
    <div className="flex flex-col sm:flex-row max-w-[500px] ">
      <div className="sm:w-3/5">
        <BookingCalendar
          value={fromTo}
          onChange={setFromTo}
          bookings={bookings}
        />
      </div>

      <form
        action={action}
        ref={formObject}
        className="relative flex flex-col sm:w-2/5 justify-evenly bg-slate-700 text--green rounded-r-lg p-3 box-content">
        <FloatingLabelInput type={"number"} name="guests" />
        <ValidatedErrorMsg inputName="guests" errorArray={state as []} />

        <FloatingLabelInput
          readonly={true}
          label="from"
          name="dateFrom"
          value={fromTo[0]}
        />
        <ValidatedErrorMsg inputName="dateFrom" errorArray={state as []} />
        <FloatingLabelInput
          readonly={true}
          label="to"
          name="dateTo"
          value={fromTo[1]}
        />
        <ValidatedErrorMsg inputName="dateTo" errorArray={state as []} />

        <input readOnly={true} type="hidden" name="venueId" value={id} />
        <FormButton
          defaultText="Book Venue"
          loadingText="Booking Venue"
          className="p-3 bg-zinc-800 text-zinc-100 font-bold rounded-lg"
          loadingStyle="p-3 bg-zinc-300 text-zinc-800 font-bold rounded-lg"
        />
        <PleaseLogin message="Please log in to book a venue" />
      </form>
      <ToastContainer />
    </div>
  );
};
