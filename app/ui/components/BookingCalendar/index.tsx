import Calendar from "react-calendar";
import { Booking } from "../../constants/types";
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

function addDatesFromRangeToSet(
  from: string,
  to: string,
  setToBeMutated: Set<string>
) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const startDate = Date.parse(from);
  const endDate = Date.parse(to);

  for (let ms = startDate; ms <= endDate; ms += msPerDay) {
    setToBeMutated.add(new Date(ms).toISOString().split("T")[0]);
  }
  console.log(setToBeMutated);
}
