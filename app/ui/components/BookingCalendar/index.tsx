import Calendar from "react-calendar";
import { Booking } from "../../constants/types";
import { addDatesFromRangeToSet } from "../../utils/addDatesFromRangeToSet";
import "./style.css";

type Bookings = Booking[];
type CalendarProps = { bookings: Bookings };

const bookedDates: Set<string> = new Set();

export const BookingCalendar = ({ bookings }: CalendarProps) => {
  (function populateBookedDates(bookings: Bookings) {
    for (let i = 0; i < bookings.length; i++) {
      addDatesFromRangeToSet(
        bookings[i].dateFrom,
        bookings[i].dateTo,
        bookedDates
      );
    }
  })(bookings);

  return (
    <Calendar
    showFixedNumberOfWeeks={true}
      selectRange={true}
      tileDisabled={({ date }) => {
        console.log(
          "bool:",
          bookedDates.has(date.toISOString().split("T")[0]),
          "date:",
          date.toISOString().split("T")[0]
        );
        return bookedDates.has(date.toISOString().split("T")[0]);
      }}
    />
  );
};

