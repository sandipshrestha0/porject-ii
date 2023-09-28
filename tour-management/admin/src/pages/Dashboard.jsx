import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

const tourObj = {
  title: "Total Tours",
  totalNumber: 750,
  icon: "",
};

const bookingObj = {
  title: "Daily Bookings",
  totalNumber: 1697,
  icon: "",
};

const userObj = {
  title: "Numbers of Clients ",
  totalNumber: "85k",
  icon: "ri-user-line",
};


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={tourObj} />
          <SingleCard item={bookingObj} />
          <SingleCard item={userObj} />
        </div>

        {/* <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statistics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div> 

        <div className="recommend__cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>*/}
      </div>
    </div>
  );
};

export default Dashboard;
