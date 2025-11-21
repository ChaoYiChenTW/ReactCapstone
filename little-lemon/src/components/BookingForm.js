import { useState } from "react";
import '../styles/style.css';
import { initializeTimes } from "../utils/times";

export default function BookingForm() {
    const [date, setDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const [availableTimes] = useState(initializeTimes());

    const handleSubmit = (e) => {
        e.preventDefault();
        // 這裡先簡單印出來（之後會改成叫 API）
        console.log({
            date,
            selectedTime,
            guests,
            occasion,
        });
        alert(`Booking submitted! ${date} ${selectedTime}, ${guests} guests, ${occasion}`);
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-form-field">
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <div className="booking-form-field">
                <label htmlFor="res-time">Choose time</label>
                    <select
                    id="res-time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        >
                        {availableTimes.map((t) => (
                            <option key={t} value={t}>
                            {t}
                            </option>
                        ))}
                    </select>
            </div>

            <div className="booking-form-field">
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    id="guests"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                />
            </div>

            <div className="booking-form-field">
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="None">None</option>
                </select>
            </div>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}
