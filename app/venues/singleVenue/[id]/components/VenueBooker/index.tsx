"use client";
import { BookingCalendar } from "@/app/ui/components/BookingCalendar";
import { useState } from "react";
import { Booking } from "@/app/ui/constants/types";
import { FloatingLabelInput } from "@/app/ui/components/FloatingLabelInput";

export const VenueBooker = ({ bookings }: { bookings: Booking[] }) => {
  const [fromTo, setFromTo] = useState(["", ""]);
  console.log(fromTo);
  return (
    <div className="flex max-w-[500px] ">
      <div className="w-3/5">
        <BookingCalendar
          value={fromTo}
          onChange={setFromTo}
          bookings={bookings}
        />
      </div>
      <form className=" flex flex-col w-2/5 justify-evenly bg-zinc-300 rounded-r-lg p-3 box-content">
        <FloatingLabelInput name="guests" />
        <FloatingLabelInput label="from" name="dateFrom" value={fromTo[0]} />
        <FloatingLabelInput label="to" name="dateTo" value={fromTo[1]} />
        <button className="bg-red-300 font-bold p-3 rounded-lg" type="submit">
          Book
        </button>
      </form>
    </div>
  );
};
