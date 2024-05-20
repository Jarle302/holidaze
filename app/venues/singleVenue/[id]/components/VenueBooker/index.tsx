"use client";
import { BookingCalendar } from "@/app/ui/components/BookingCalendar";
import { useState } from "react";
import { Booking } from "@/app/ui/constants/types";
import { FloatingLabelInput } from "@/app/ui/components/FloatingLabelInput";
import bookVenueAction from "@/app/ui/utils/api/bookVenue";
import { useFormState } from "react-dom";
import { useRef } from "react";

export const VenueBooker = ({
  bookings,
  id,
}: { bookings: Booking[] } & { id: string }) => {
  const formObject = useRef<HTMLFormElement>(null);
  const [fromTo, setFromTo] = useState(["", ""]);

  console.log({ bookings });
  return (
    <div className="flex max-w-[500px] ">
      <div className="w-3/5">
        <BookingCalendar
          value={fromTo}
          onChange={setFromTo}
          bookings={bookings}
        />
      </div>
      <form
        ref={formObject}
        className=" flex flex-col w-2/5 justify-evenly bg-zinc-300 rounded-r-lg p-3 box-content">
        <FloatingLabelInput type={"number"} name="guests" />
        <FloatingLabelInput
          readonly={true}
          label="from"
          name="dateFrom"
          value={fromTo[0]}
        />
        <FloatingLabelInput
          readonly={true}
          label="to"
          name="dateTo"
          value={fromTo[1]}
        />
        <input readOnly={true} type="hidden" name="venueId" value={id} />
        <button
          className="bg-red-300 font-bold p-3 rounded-lg"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            const formData = new FormData(
              formObject.current as HTMLFormElement
            );
            bookVenueAction(formData);
          }}>
          Book
        </button>
      </form>
    </div>
  );
};
