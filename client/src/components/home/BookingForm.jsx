import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const [checkIn, setCheckIn] = React.useState(null);
  const [checkOut, setCheckOut] = React.useState(null);

  return (
    <div className="hotel-booking-form-1 gray-bg">
      <div className="auto-container">
        <div className="hotel-booking-form-1-wrap">
          <form className="hotel-booking-form-1-form flex-grow-1 d-flex align-items-end">
            <div className="form-group">
              <p className="hotel-booking-form-1-label text-lg-center">Check - in:</p>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                placeholderText="17 Sep, 2022"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <p className="hotel-booking-form-1-label text-lg-center">Check - Out:</p>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                placeholderText="21 Sep, 2022"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <p className="hotel-booking-form-1-label text-lg-center">Rooms:</p>
              <select className="form-select">
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3 Rooms</option>
                <option value="4">4 Rooms</option>
                <option value="5">5 Rooms</option>
              </select>
            </div>
            <div className="form-group">
              <p className="hotel-booking-form-1-label text-lg-center">Adults:</p>
              <select className="form-select">
                <option value="2">2 Adults</option>
                <option value="1">1 Adult</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
                <option value="5">5 Adults</option>
              </select>
            </div>
            <div className="form-group">
              <p className="hotel-booking-form-1-label text-lg-center">Child:</p>
              <select className="form-select">
                <option value="1">1 Children</option>
                <option value="0">0 Children</option>
                <option value="2">2 Children</option>
                <option value="3">3 Children</option>
                <option value="4">4 Children</option>
                <option value="5">5 Children</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn-1">
                Check Availability<span></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm; 