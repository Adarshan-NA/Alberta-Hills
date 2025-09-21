/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../assets/styles/BookingForm.css";

function SpaBookingForm() {
  const [adults, setAdults] = useState(2);
  const [date, setDate] = useState("");
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAdultChange = (value) => {
    if (adults + value >= 0) setAdults(adults + value);
  };

  return (
    <div className="booking-container">
      <div
        className="summary"
        onClick={() => setShowGuestPicker(!showGuestPicker)}
      >
        <div className="info">
          <span>Number of guests</span>
          <span>{adults}</span>
        </div>
      </div>
      {showGuestPicker && (
        <div className="guest-picker">
          <label>Ages 14+</label>
          <div className="counter">
            <button onClick={() => handleAdultChange(-1)}>-</button>
            <span>{adults}</span>
            <button onClick={() => handleAdultChange(1)}>+</button>
          </div>
        </div>
      )}
      <div
        className="summary"
        onClick={() => setShowDatePicker(!showDatePicker)}
      >
        <div className="info">
          <span>Date</span>
          <span>{date || "Select a date"}</span>
        </div>
      </div>
      {showDatePicker && (
        <div className="date-picker">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      )}
      <button className="check-btn">Check availability</button>
    </div>
  );
}

export default SpaBookingForm;
