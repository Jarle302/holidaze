"use client";
import { Venue } from "../../constants/types";
import { useState } from "react";
type VenueCardProps = Venue & { id: string; bookings: [] };
export const VenueCard = ({ price, name, id, description,bookings }: VenueCardProps) => {
  const [showCalendar, setShowCalendar] = useState(false);



  return (
    <div>
      {!showCalendar && (
        <>
          <img src="" alt="" />
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>
              <span>{price}</span> a night
            </p>
            <button>See available dates</button>
            <p></p>
          </div>
        </>
      )}
      {(showCalendar && (<Calendar bookings={bookings} />))}
    </div>
  );
};
