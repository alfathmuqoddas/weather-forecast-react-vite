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
  handleSubmitLocation: (e: React.FormEvent<HTMLFormElement>) => void;
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
  handleSubmitLocation,
}) => {
  console.log("render MainWeather");

  return (
    <div className="min-w-[100px] text-center flex flex-col justify-between gap-4 m-4">
      <form className="flex justify-between" onSubmit={handleSubmitLocation}>
        <input
          type="text"
          className="bg-white rounded-l-full py-2 px-2 flex-grow"
          name="location"
          id="location"
          // value={query}
          placeholder="Search City"
          required
        />
        <input
          type="submit"
          className="bg-blue-500 px-3 py-2 rounded-r-full"
          value="🔍"
        />
      </form>
      <figure className="w-full">
        <img
          src={`https://openweathermap.org/img/wn/${bigIcon}@4x.png`}
          width="200"
          height="200"
          alt="main-weather-icons"
          className="mx-auto"
        />
      </figure>
      <div>
        <div className="text-5xl font-light">{mainTemp} °C</div>
        <div className="text-3xl font-light">{mainDesc}</div>
      </div>
      <div className="">
        <p className="m-0">🌡 Feels Like {feels} °C</p>
        <p className="m-0">⛄ Min {min} °C</p>
        <p className="m-0">☀ Max {max} °C</p>
        <p className="m-0">☂ Humidity {humidity}%</p>
      </div>
      <div className="bg-blue-500 text-white text-light py-2 rounded-full">
        <p className="text-2xl">{`${city}, ${country}`}</p>
      </div>
    </div>
  );
};

export default MainWeather;
