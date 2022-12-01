import React from 'react';

const WeatherCard = ({ children }) => {
  return (
    <div className="container">
      <div className="card mt-md-3" style={{ borderRadius: '1rem' }}>
        <div className="row g-0">{children}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
