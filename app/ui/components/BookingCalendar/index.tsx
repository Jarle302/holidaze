import Calendar from "react-calendar";
import { Booking } from "../../constants/types";
import { addDatesFromRangeToSet } from "../../utils/addDatesFromRangeToSet";
import "./style.css";

type Bookings = Booking[];
type CalendarProps = { bookings: Bookings; onChange?: any; value?: any };

const bookedDates: Set<string> = new Set();

export const BookingCalendar = ({
  bookings,
  onChange,
  value,
}: CalendarProps) => {
  (function populateBookedDates(bookings: Bookings) {
    if (!Array.isArray(bookings)) {
      return;
    }
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
      locale="en"
      showFixedNumberOfWeeks={true}
      onChange={onChange && onChange}
      value={value && value}
      selectRange={true}
      tileDisabled={({ date }) => {
        return bookedDates.has(date.toLocaleDateString());
      }}
    />
  );
};
