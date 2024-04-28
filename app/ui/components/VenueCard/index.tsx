"use client";
import { Venue, Booking } from "../../constants/types";
import { BookingCalendar } from "../BookingCalendar";
import { useState } from "react";
import { Carousel } from "../Carousel";
type VenueCardProps = Venue & { id: string; bookings: Booking[] };
export const VenueCard = ({
  price,
  name,
  id,
  description,
  media,
  bookings,
}: VenueCardProps) => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="w-[300px]">
      {!showCalendar && (
        <>
          <Carousel media={media} />
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>
              <span>{price}</span> a night
            </p>
            <button onClick={() => setShowCalendar((prev) => !prev)}>
              See available dates
            </button>
            <p></p>
          </div>
        </>
      )}
      {showCalendar && (
        <>
          <BookingCalendar bookings={bookings} />
          <button onClick={() => setShowCalendar((prev) => !prev)}>Back</button>
        </>
      )}
    </div>
  );
};
