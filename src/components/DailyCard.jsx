import React from 'react';

const DailyCard = ({ day, temp, feels, icon }) => {
  return (
    <div className="col">
      <div
        className="p-2 border bg-light text-center"
        style={{ borderRadius: '1rem' }}
      >
        <p>{day}</p>
        <img src={`https://openweathermap.org/img/wn/${icon}.png`} />
        <p>
          {temp}° {feels}°
        </p>
      </div>
    </div>
  );
};

export default DailyCard;
