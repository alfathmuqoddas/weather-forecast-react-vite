import React from "react";
//import "./mystyle.css";

const WeatherCard = ({ children }: { children: React.ReactNode }) => {
  console.log("render WeatherCard");
  return (
    <div className="container">
      <div className="card blur-effect" style={{ borderRadius: "28px" }}>
        <div className="row g-0">{children}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
