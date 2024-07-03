interface MainWeatherProps {
  bigIcon: string;
  mainTemp: string;
  mainDate: string;
  feels: string;
  min: string;
  max: string;
  mainDesc: string;
  humidity: string | number;
  city: string;
  country: string;
}

const MainWeather: React.FC<MainWeatherProps> = ({
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
      <img
        src={`https://openweathermap.org/img/wn/${bigIcon}@4x.png`}
        width="200"
        height="200"
        alt="main-weather-icons"
      />
      <div className="m-0 display-3">{mainTemp} °C</div>
      <div className="display-6">{mainDesc}</div>
      <div className="my-4">
        <p className="m-0">🌡 Feels Like {feels} °C</p>
        <p className="m-0">⛄ Min {min} °C</p>
        <p className="m-0">☀ Max {max} °C</p>
        <p className="m-0">☂ Humidity {humidity}%</p>
      </div>
      <div className="bg-primary text-light m-2 py-2 rounded-pill">
        <h2>{`${city}, ${country}`}</h2>
      </div>
    </div>
  );
};

export default MainWeather;
