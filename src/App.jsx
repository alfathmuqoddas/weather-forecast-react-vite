import React, { useState, useEffect } from "react";
import MainWeather from "./components/MainWeather";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import DailyCard from "./components/DailyCard";
import HighlightCard from "./components/HighlightCard";
import HighlightWrapper from "./components/HighlightWrapper";
import WeatherCard from "./components/WeatherCard";
import "./components/mystyle.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export default function App() {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("Jakarta");
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(
    `https://picsum.photos/seed/${generateRandomString()}/1280/720`
  );

  function generateRandomString() {
    // Generate a random string of 10 characters
    const result = Math.random().toString(36).slice(2, 7);
    return result;
  }

  function handleRandomizeClick() {
    setBackgroundImageUrl(
      `https://picsum.photos/seed/${generateRandomString()}/1280/720`
    );
  }

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=4018b500122ee53a2b2b0ccc505a5ae4&units=metric`;
      const res = await fetch(url);
      const resJson = await res.json();
      console.log(resJson);
      if (resJson.list) {
        setWeather(resJson);
        setLoading(false);
      } else {
        alert("City not exist");
      }
    } catch (error) {
      alert(error);
    }
  };

  const weeks = [8, 16, 24, 32, 39];

  dayjs.extend(utc);
  dayjs.extend(timezone);

  const getSunrise = (sunrise, timezone) => {
    return dayjs.unix(sunrise).utc().add(timezone, "second").format("HH:mm");
  };

  const getSunset = (sunset, timezone) => {
    return dayjs.unix(sunset).utc().add(timezone, "second").format("HH:mm");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <form
          className="input-group mb-4 pt-4"
          style={{ width: "320px" }}
          onSubmit={(e) => {
            e.preventDefault();
            getWeather();
          }}
        >
          <input
            type="text"
            className="form-control rounded-pill me-2"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder="Search City"
            required
          />
          <input
            type="submit"
            className="btn btn-primary rounded-pill"
            value="🔍"
          />
        </form>
      </div>
      {loading ? (
        <div className="container">
          <h1 className="text-light">Loading...</h1>
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
            <div className="row row-cols-2 row-cols-md-5 text-dark g-2 pb-4">
              {weeks.map((week, index) => (
                <DailyCard
                  key={index}
                  day={dayjs.unix(weather.list[week].dt).format("ddd")}
                  temp={weather.list[week].main.temp.toFixed(0)}
                  feels={weather.list[week].main.feels_like.toFixed(0)}
                  icon={weather.list[week].weather[0].icon}
                />
              ))}
            </div>
            <HighlightWrapper>
              <HighlightCard
                title="Sunrise & Sunset ⛅"
                body2={
                  <h4>
                    🌄 {getSunrise(weather.city.sunrise, weather.city.timezone)}
                  </h4>
                }
                body3={
                  <h4>
                    🌇 {getSunset(weather.city.sunset, weather.city.timezone)}
                  </h4>
                }
              />

              <HighlightCard
                title="Humidity 💧"
                body={weather.list[2].main.humidity}
                unit="%"
              />

              <HighlightCard
                title="Wind Speed 🪁"
                body={weather.list[2].wind.speed.toFixed(0) * 3.6}
                unit="KM/h"
              />

              <HighlightCard
                title="Pressure 🌊"
                body={weather.list[2].main.pressure}
                unit="hPa"
              />

              <HighlightCard
                title="Visibility 🕶"
                body={weather.list[2].visibility / 1000}
                unit="KM"
              />
              <HighlightCard
                title="API From 🗺"
                body2={
                  <div className="">
                    <a
                      href="https://openweathermap.org"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      OpenWeatherMap
                    </a>
                    <button
                      className="btn btn-primary mt-2 rounded-pill"
                      style={{ borderRadius: "" }}
                      onClick={handleRandomizeClick}
                    >
                      Randomize Background
                    </button>
                  </div>
                }
              />
            </HighlightWrapper>
          </RightSide>
        </WeatherCard>
      )}
    </div>
  );
}
