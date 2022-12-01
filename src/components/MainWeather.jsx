import React from "react";

const MainWeather = ({
  bigIcon,
  mainTemp,
  mainDate,
  feels,
  min,
  max,
  mainDesc,
  humidity,
  city,
  country,
}) => {
  return (
    <div className="w-100 text-center">
      <img src={`https://openweathermap.org/img/wn/${bigIcon}@4x.png`} />
      <div className="m-0 display-3">{mainTemp} °C</div>
      <div className="display-6">{mainDesc}</div>
      <div className="my-4">
        <p className="m-0">🌡 Feels Like {feels} °C</p>
        <p className="m-0">Min {min} °C</p>
        <p className="m-0">Max {max} °C</p>
        <p className="m-0">☂ Humidity - {humidity}%</p>
      </div>
      <h2
        className="bg-primary text-light md:ms-3 m-2 p-3"
        style={{ borderRadius: "1rem" }}
      >
        {city}, {country}
      </h2>
    </div>
  );
};

export default MainWeather;
