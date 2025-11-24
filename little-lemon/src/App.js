import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from './layout/Header';
import Footer from './layout/Footer';

import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

import { initializeTimes, updateTimes } from "./utils/times";
import { submitAPI } from "./utils/api";

import './styles/layout.css'
import './styles/style.css'

export default function Main() {
  // 1. 管理 availableTimes（上一個 assignment 已經有）
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  // 2. 取得 navigate 函式
  const navigate = useNavigate();

  // 3. 定義 submitForm，收到 formData → 呼叫 submitAPI
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      // 成功就導到確認頁
      navigate("/confirmed-booking");
    } else {
      // 失敗的話你可以先簡單 alert / console.log
      console.error("Booking submission failed");
      alert("Something went wrong. Please try again.");
    }
  };

  // 4. Routes 裡面，把 availableTimes / dispatch / submitForm 傳給 BookingPage
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />

        <Route
          path="/confirmed-booking"
          element={<ConfirmedBooking />}
        />
      </Routes>
      <Footer />
    </>
  );
}
