import React from "react";
//import "./mystyle.css";

interface WeatherCardProps {
  children: React.ReactNode; // Or a more specific component type
}

const WeatherCard: React.FC<WeatherCardProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="card blur-effect" style={{ borderRadius: "28px" }}>
        <div className="row g-0">{children}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
