import { useState, useEffect, useRef } from "react";
import '../styles/style.css';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const formRef = useRef(null); 
    const today = new Date().toISOString().split("T")[0]; // e.g. "2025-11-24"

    // 每次 availableTimes 改變時，檢查目前選到的 time 是否還存在
    // 如果沒有，就自動選第一個
    useEffect(() => {
        if (availableTimes.length === 0) {
            setSelectedTime("");
            return;
        }
        if (!availableTimes.includes(selectedTime)) {
            setSelectedTime(availableTimes[0]);
        }
    }, [availableTimes, selectedTime]);

    const handleDateChange = (e) => {
        const value = e.target.value;
        setDate(value);
        dispatch({ type: "update_times", date: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = formRef.current;
        if (form && !form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (!isFormValid) {
            alert("Please fill out all fields correctly.");
            return;
        }

        const formData = {
            date,
            selectedTime,
            guests,
            occasion,
        };
        submitForm(formData); // ★ 關鍵
    };

    const isDateValid = date !== "";
    const isTimeValid = selectedTime !== "" && availableTimes.includes(selectedTime);
    const guestsNumber = Number(guests);
    const isGuestsValid = guestsNumber >= 1 && guestsNumber <= 10;
    const isOccasionValid = occasion !== "";

    const isFormValid =
        isDateValid && isTimeValid && isGuestsValid && isOccasionValid;

    return (
        <form ref={formRef} className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-form-field">
                <label htmlFor="res-date">Choose date</label>
                <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                required
                min={today}
                />
            </div>

            <div className="booking-form-field">
                <label htmlFor="res-time">Choose time</label>
                    <select
                    id="res-time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
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
                required
                />
            </div>

            <div className="booking-form-field">
                <label htmlFor="occasion">Occasion</label>
                <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="None">None</option>
                </select>
            </div>

            <button type="submit">
                Make Your reservation
            </button>
        </form>
    );
}
