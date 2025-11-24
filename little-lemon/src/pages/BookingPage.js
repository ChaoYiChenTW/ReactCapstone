import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { initializeTimes, updateTimes } from "../utils/times";

export default function BookingPage() {
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

    return (
        <main className="booking-page">
        <h1>Reserve a table</h1>
        <p>Please fill in the form below to book a table.</p>
        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
        />
        </main>
    );
};
