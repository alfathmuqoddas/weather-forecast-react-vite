import { useState } from "react";
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
import { IWeatherData } from "./types/weatherApi";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function App() {
  // const [weather, setWeather] = useState<IWeatherData | null>(null);
  // const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("Jakarta");
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>(
    `https://picsum.photos/seed/${generateRandomString()}/1280/720`
  );

  function generateRandomString(): string {
    // Generate a random string of 10 characters
    const result = Math.random().toString(36).slice(2, 7);
    return result;
  }

  function handleRandomizeClick() {
    setBackgroundImageUrl(
      `https://picsum.photos/seed/${generateRandomString()}/1280/720`
    );
  }

  const navigate = useNavigate();

  // useEffect(() => {
  //   getWeather();
  // });

  // const getWeather = async () => {
  //   try {
  //     const url: string = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=4018b500122ee53a2b2b0ccc505a5ae4&units=metric`;
  //     const res = await fetch(url);
  //     const resJson = (await res.json()) as IWeatherData;
  //     console.log(resJson);
  //     if (resJson.list) {
  //       setWeather(resJson);
  //       setLoading(false);
  //     } else {
  //       alert("City not exist");
  //     }
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  const weather = useLoaderData() as IWeatherData;

  const weeks: number[] = [8, 16, 24, 32, 39];

  dayjs.extend(utc);
  dayjs.extend(timezone);

  const getSunrise = (sunrise: number, timezone: number) => {
    return dayjs.unix(sunrise).utc().add(timezone, "second").format("HH:mm");
  };

  const getSunset = (sunset: number, timezone: number) => {
    return dayjs.unix(sunset).utc().add(timezone, "second").format("HH:mm");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WeatherCard>
        <LeftSide>
          <div className="container mt-0">
            <form
              className="input-group"
              style={{ width: "100%" }}
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`${import.meta.env.BASE_URL}${query}`);
                console.log(weather);
              }}
            >
              <input
                type="text"
                className="form-control"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                placeholder="Search City"
                style={{
                  borderTopLeftRadius: "50rem",
                  borderBottomLeftRadius: "50rem",
                }}
                required
              />
              <input
                type="submit"
                className="btn btn-primary px-3"
                value="🔍"
                style={{
                  borderTopRightRadius: "50rem",
                  borderBottomRightRadius: "50rem",
                }}
              />
            </form>
          </div>
          <MainWeather
            mainDate=""
            bigIcon={weather?.list[2].weather[0].icon || ""}
            mainTemp={weather?.list[2].main.temp.toFixed(0) || ""}
            feels={weather?.list[2].main.feels_like.toFixed(0) || ""}
            min={weather?.list[2].main.temp_min.toFixed(0) || ""}
            max={weather?.list[2].main.temp_max.toFixed(0) || ""}
            mainDesc={weather?.list[2].weather[0].description || ""}
            humidity={weather?.list[2].main.humidity || ""}
            city={weather?.city.name || ""}
            country={weather?.city.country || ""}
          />
        </LeftSide>
        <RightSide>
          <div className="row row-cols-2 row-cols-md-5 text-dark g-2 pb-4">
            {weeks.map((week, index) => (
              <DailyCard
                key={index}
                day={dayjs.unix(weather?.list[week]?.dt || 0).format("ddd")}
                temp={weather?.list[week].main.temp.toFixed(0) || ""}
                feels={weather?.list[week].main.feels_like.toFixed(0) || ""}
                icon={weather?.list[week].weather[0].icon || ""}
              />
            ))}
          </div>
          <HighlightWrapper>
            <HighlightCard
              title="Sunrise & Sunset ⛅"
              body=""
              unit=""
              body2={
                <h4>
                  🌄
                  {getSunrise(
                    weather?.city?.sunrise || 0,
                    weather?.city?.timezone || 0
                  )}
                </h4>
              }
              body3={
                <h4>
                  🌇
                  {getSunset(
                    weather?.city?.sunset || 0,
                    weather?.city?.timezone || 0
                  )}
                </h4>
              }
            />

            <HighlightCard
              title="Humidity 💧"
              body={weather?.list[2]?.main.humidity || 0}
              body2=""
              body3=""
              unit="%"
            />

            <HighlightCard
              title="Wind Speed 🪁"
              body={Math.round((weather?.list[2].wind.speed ?? 0) * 3.6)}
              unit="KM/h"
              body2=""
              body3=""
            />

            <HighlightCard
              title="Pressure 🌊"
              body={weather?.list[2].main.pressure || 0}
              body2=""
              body3=""
              unit="hPa"
            />

            <HighlightCard
              title="Visibility 🕶"
              body={(weather?.list[2].visibility ?? 0) / 1000}
              unit="KM"
              body2=""
              body3=""
            />
            <HighlightCard
              title="API From 🗺"
              body=""
              unit=""
              body3=""
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
    </div>
  );
}
