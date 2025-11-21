import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the Choose date label", () => {
  render(<BookingForm />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});
