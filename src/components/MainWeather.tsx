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
  // mainDate,
  feels,
  min,
  max,
  mainDesc,
  humidity,
  city,
  country,
}) => {
  console.log("render MainWeather");
  return (
    <div className="min-w-[100px] text-center">
      <figure className="w-full">
        <img
          src={`https://openweathermap.org/img/wn/${bigIcon}@4x.png`}
          width="200"
          height="200"
          alt="main-weather-icons"
          className="mx-auto"
        />
      </figure>
      <div className="m-0 display-3 font-light">{mainTemp} °C</div>
      <div className="display-6 font-light">{mainDesc}</div>
      <div className="my-4">
        <p className="m-0">🌡 Feels Like {feels} °C</p>
        <p className="m-0">⛄ Min {min} °C</p>
        <p className="m-0">☀ Max {max} °C</p>
        <p className="m-0">☂ Humidity {humidity}%</p>
      </div>
      <div className="bg-blue-500 text-white text-light m-2 py-2 rounded-full">
        <h2 className="text-2xl">{`${city}, ${country}`}</h2>
      </div>
    </div>
  );
};

export default MainWeather;
