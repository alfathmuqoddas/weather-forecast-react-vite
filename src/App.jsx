import React, { useState, useEffect } from "react";
//import Moment from "react-moment";
import moment from "moment";
import MainWeather from "./components/MainWeather";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import DailyCard from "./components/DailyCard";
import HighlightCard from "./components/HighlightCard";
import HighlightWrapper from "./components/HighlightWrapper";
import WeatherCard from "./components/WeatherCard";
import "./components/mystyle.css";

export default function App() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("Jakarta");

  const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=4018b500122ee53a2b2b0ccc505a5ae4&units=metric`;
    const res = await fetch(url);
    const resJson = await res.json();
    console.log(resJson);
    if (resJson.list) {
      setWeather(resJson);
      setLoading(false);
    } else {
      alert("Failed to fetch data");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

  useEffect(() => {
    getWeather();
  }, []);

  const weeks = [8, 16, 24, 32, 39];

  const getSunrise = (sunrise, timezone) => {
    return moment.utc(sunrise, "X").add(timezone, "seconds").format("HH:mm");
  };

  const getSunset = (sunset, timezone) => {
    return moment.utc(sunset, "X").add(timezone, "seconds").format("HH:mm");
  };

  return (
    <div className="has-image-background">
      <div className="container">
        <form className="input-group mb-4" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control rounded-xl"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder="Search City"
          />
          <input
            type="submit"
            className="btn btn-primary rounded-xl"
            value="Search"
          />
        </form>
      </div>
      {loading ? (
        <div className="container">
          <h1>Search For City</h1>
        </div>
      ) : (
        <WeatherCard>
          <LeftSide>
            <MainWeather
              bigIcon={weather.list[2].weather[0].icon}
              mainTemp={weather.list[2].main.temp.toFixed(0)}
              feels={weather.list[2].main.feels_like.toFixed(0)}
              min={weather.list[2].main.temp_min.toFixed(0)}
              max={weather.list[2].main.temp_max.toFixed(0)}
              mainDesc={weather.list[2].weather[0].description}
              humidity={weather.list[2].main.humidity}
              city={weather.city.name}
              country={weather.city.country}
            />
          </LeftSide>
          <RightSide>
            Daily Forecast
            <div className="row row-cols-2 row-cols-md-5 text-dark g-2 my-2">
              {weeks.map((week, index) => (
                <DailyCard
                  key={index}
                  day={moment.unix(weather.list[week].dt).format("ddd")}
                  temp={weather.list[week].main.temp.toFixed(0)}
                  feels={weather.list[week].main.feels_like.toFixed(0)}
                  icon={weather.list[week].weather[0].icon}
                />
              ))}
            </div>
            Today's Highlight
            <HighlightWrapper>
              <HighlightCard>
                <p>Sunrise & Sunset ⛅</p>
                <h4>
                  🌄 {getSunrise(weather.city.sunrise, weather.city.timezone)}
                </h4>
                <h4>
                  🌇 {getSunset(weather.city.sunset, weather.city.timezone)}
                </h4>
              </HighlightCard>

              <HighlightCard>
                <p>Humidity 💧</p>
                <div>
                  <span className="display-3">
                    {weather.list[2].main.humidity}
                  </span>
                  %
                </div>
              </HighlightCard>

              <HighlightCard>
                <p>Winds Speed 🪁</p>
                <div>
                  <span className="display-3">
                    {weather.list[2].wind.speed}
                  </span>{" "}
                  M/S
                </div>
              </HighlightCard>

              <HighlightCard>
                <p>Pressure 🌊</p>
                <div>
                  <span className="display-3">
                    {weather.list[2].main.pressure}
                  </span>{" "}
                  hPa
                </div>
              </HighlightCard>

              <HighlightCard>
                <p>Visibility 🕶</p>
                <div>
                  <span className="display-3">
                    {weather.list[2].visibility / 1000}
                  </span>{" "}
                  KM
                </div>
              </HighlightCard>
            </HighlightWrapper>
          </RightSide>
        </WeatherCard>
      )}
    </div>
  );
}
