import { useState, useEffect } from "react";
import '../styles/style.css';

export default function BookingForm({ availableTimes, dispatch }) {
    const [date, setDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

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
        console.log({ date, selectedTime, guests, occasion });
        alert(`Booking submitted: ${date} ${selectedTime}, ${guests} guests, ${occasion}`);
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="booking-form-field">
                <label htmlFor="res-date">Choose date</label>
                <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                required
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
                            <option key={t}>{t}</option>
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
