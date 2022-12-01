import React from "react";
//import "./mystyle.css";

const WeatherCard = ({ children }) => {
  return (
    <div className="container">
      <div
        className="card blur-effect mt-md-3"
        style={{ borderRadius: "1rem" }}
      >
        <div className="row g-0">{children}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
