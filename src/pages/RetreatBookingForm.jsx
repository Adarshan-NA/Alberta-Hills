/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../assets/styles/RetreatBookingForm.css";

function RetreatBookingForm() {
  const [rooms, setRooms] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showRoomPicker, setShowRoomPicker] = useState(false);
  const [showStartDatePicker, setshowStartDatePicker] = useState(false);
  const [showEndDatePicker, setshowEndDatePicker] = useState(false);

  const handleRoomChange = (value) => {
    if (rooms + value >= 0) setRooms(rooms + value);
  };

  return (
    <div className="booking-container">
      <div
        className="summary"
        onClick={() => setShowRoomPicker(!showRoomPicker)}
      >
        <div className="info">
          <span>Number of rooms</span>
          <span>{rooms}</span>
        </div>
      </div>
      {showRoomPicker && (
        <div className="guest-picker">
          <label>Rooms</label>
          <div className="counter">
            <button onClick={() => handleRoomChange(-1)}>-</button>
            <span>{rooms}</span>
            <button onClick={() => handleRoomChange(1)}>+</button>
          </div>
          {/* <label>Children 2-13</label>
          <div className="counter">
            <button onClick={() => handleChildrenChange(-1)}>-</button>
            <span>{children}</span>
            <button onClick={() => handleChildrenChange(1)}>+</button>
          </div> */}
        </div>
      )}
      <div
        className="summary"
        onClick={() => setshowStartDatePicker(!showStartDatePicker)}
      >
        <div className="info">
          <span>Start Date</span>
          <span>{startDate || "Select the start date"}</span>
        </div>
      </div>
      {showStartDatePicker && (
        <div className="date-picker">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
      )}

      <div
        className="summary"
        onClick={() => setshowEndDatePicker(!showEndDatePicker)}
      >
        <div className="info">
          <span>End Date</span>
          <span>{endDate || "Select the end date"}</span>
        </div>
      </div>
      {showEndDatePicker && (
        <div className="date-picker">
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      )}
      <button className="check-btn">Check availability</button>
    </div>
  );
}

export default RetreatBookingForm;
