import React from "react";
import "../styles/bookings.css";


// import bookingData from "../assets/dummy-data/booking-tours.js";
import BookingItem from "../components/UI/BookingItem";
//for fetching
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";



const Bookings = () => {

//fetching data from api

const {data:bookings} = useFetch(`${BASE_URL}/booking`)
console.log(bookings)

//end data fetching

  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Booking</h2>

        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Approved</option>
            </select>
          </div>

         
        </div>
        <div>
          
        </div>
        <div className="booking__car-list">
          <table className="booking-table">
            <thead>
              <tr className="table-header">
                <th>ID</th>
                <th>Full Name</th>
                <th>User Email</th>
                <th>Tour Name</th>
                <th>Guest Size</th>
                <th>Phone</th>
                <th>Book At</th>
                {/* <th>Amount</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {bookings?.map((item) => (
                <BookingItem item={item} key={item.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
