import BookingForm from "../components/BookingForm"

export default function BookingPage() {
return (
        <>
            <main className="booking-page">
            <h1>Reserve a table</h1>
            <p>Please fill in the form below to book a table.</p>
            <BookingForm />
            </main>
        </>
    );
};
