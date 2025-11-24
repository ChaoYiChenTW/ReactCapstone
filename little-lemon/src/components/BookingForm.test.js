import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

const renderBookingForm = () =>
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

test("date input has HTML5 validation attributes", () => {
  renderBookingForm();

  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toBeInTheDocument();
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("required");
  expect(dateInput).toHaveAttribute("id", "res-date");
  // min 是今天日期（格式 yyyy-mm-dd），這裡不檢查值，只檢查有設定
  expect(dateInput).toHaveAttribute("min");
});

test("time select has HTML5 validation attributes", () => {
  renderBookingForm();

  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toBeInTheDocument();
  expect(timeSelect).toHaveAttribute("id", "res-time");
  expect(timeSelect).toHaveAttribute("required");
});

test("guests input has HTML5 validation attributes", () => {
  renderBookingForm();

  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toBeInTheDocument();
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("id", "guests");
  expect(guestsInput).toHaveAttribute("required");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("occasion select has HTML5 validation attributes", () => {
  renderBookingForm();

  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toBeInTheDocument();
  expect(occasionSelect).toHaveAttribute("id", "occasion");
  expect(occasionSelect).toHaveAttribute("required");
});
