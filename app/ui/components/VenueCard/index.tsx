"use client";
import { Venue, Booking } from "../../constants/types";
import { BookingCalendar } from "../BookingCalendar";
import { useState } from "react";
import { Carousel } from "../Carousel";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { courier } from "@/app/fonts";

type VenueCardProps = Venue & { id: string; bookings: Booking[] };
export const VenueCard = ({
  price,
  name,
  id,
  description,
  media,
  bookings,
}: VenueCardProps) => {
  gsap.registerPlugin(useGSAP);
  const tl = useRef<gsap.core.Tween>();
  const card = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    // gsap code here...
    tl.current = gsap.to(card.current, {
      duration: 0.3,
      rotationY: 180,
      easing: "elastic.in",
    });
    tl.current.pause();
  }); // <-- automatically reverted

  const [showCalendar, setShowCalendar] = useState(false);
  const buttonStyle = "py-2 w-full bg-zinc-200 text-red-300 font-bold";
  return (
    <div
      ref={card}
      className={`w-[300px] bg-white p-2 h-[380px] flex flex-col justify-between overflow-hidden ${courier.className}`}>
      {!showCalendar && (
        <>
          <Link href={`/venues/singleVenue/${id}`}>
            <div className="w-full h-[250px]">
              <Carousel fitToContainer={true} media={media} />
            </div>
            <div>
              <h3 className="text-lg font-bold overflow-hidden whitespace-nowrap truncate">
                {name}
              </h3>
              <p>
                {description.slice(0, 20) + (description.length > 20?  "...":"")}
              </p>
              <p>
                <span className="font-bold">{price}</span> a night
              </p>
              <p></p>
            </div>
          </Link>
          <button
            className={buttonStyle}
            onClick={() => {
              tl.current?.restart();
              setShowCalendar((prev) => !prev);
            }}>
            See dates
          </button>
        </>
      )}
      {showCalendar && (
        <>
          <div className="counter-flip">
            <BookingCalendar bookings={bookings} />
          </div>
          <button
            className={buttonStyle}
            onClick={() => {
              setShowCalendar((prev) => !prev);
              tl.current?.reverse();
            }}>
            Back
          </button>
        </>
      )}
    </div>
  );
};
