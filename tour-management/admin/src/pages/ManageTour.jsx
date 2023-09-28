import React from "react";
import "../styles/bookings.css";



// import manageTours from "../assets/dummy-data/manage-tours";
import TourItem from "../components/UI/TourItem";

//new libraires import
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const ManageTour = () => {
  
  // fetching api from 

const {data:tours, loading, error} = useFetch(`${BASE_URL}/tours`)

console.log(tours);

  // end of fetching 

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
        <table className="tour-table table-bordered">
            <thead>
              <tr className="table-header">
                <th>ID</th>
                <th>Title</th>
                <th>City</th>
                <th>Address</th>
                <th>Distance</th>
                <th>Price</th>
                <th>Max Group Size</th>
                <th>Description</th>
                <th>Photo</th>
                <th>Featured</th>
                <th>Actions</th>
              </tr>
            </thead>
           
            {loading && <h4 className='text-center pt-5 '>Loading.....</h4>}
          {error && <h4 className='text-center pt-5 '>{error}</h4>}
          {
            !loading && !error && 
              <tbody>
                    {tours?.map((item) => (
                    <TourItem item={item} key={item.id} />
              ))}
            </tbody>
              }
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTour;
