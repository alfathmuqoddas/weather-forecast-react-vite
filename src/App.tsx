// import { useState } from "react";
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
// import { useLoaderData, useNavigate } from "react-router-dom";
// import { useComputed, useSignal } from "@preact/signals-react";
import useSWR from "swr";
import fetcher from "./utils/fetcher";
import useStore from "./store/useStore";

export default function App() {
  const { query, setQuery, backgroundImageUrl, setRandomBackground } =
    useStore();

  function handleRandomizeClick() {
    setRandomBackground();
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    setQuery((formData.get("location") as string) || "");
  };

  const {
    data: weather,
    error,
    isLoading,
  } = useSWR<IWeatherData>(
    `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=4018b500122ee53a2b2b0ccc505a5ae4&units=metric`,
    fetcher
  );

  console.log({ weather });

  const weeks: number[] = [8, 16, 24, 32, 39];

  dayjs.extend(utc);
  dayjs.extend(timezone);

  const getSunrise = (sunrise: number, timezone: number) => {
    return dayjs.unix(sunrise).utc().add(timezone, "second").format("HH:mm");
  };

  const getSunset = (sunset: number, timezone: number) => {
    return dayjs.unix(sunset).utc().add(timezone, "second").format("HH:mm");
  };

  if (error) {
    if (error.status === 404) {
      return <div>Resource not found.</div>;
    }
    return <div>Failed to load.</div>;
  }

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
      {error ? (
        <>Error Please Try Again Later</>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        <WeatherCard>
          <LeftSide>
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
              handleSubmitLocation={handleSubmit}
            />
          </LeftSide>
          <RightSide>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
                  <p className="font-bold">
                    🌄
                    {getSunrise(
                      weather?.city?.sunrise || 0,
                      weather?.city?.timezone || 0
                    )}
                  </p>
                }
                body3={
                  <p className="font-bold">
                    🌇
                    {getSunset(
                      weather?.city?.sunset || 0,
                      weather?.city?.timezone || 0
                    )}
                  </p>
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
                      className="hover:underline"
                    >
                      OpenWeatherMap
                    </a>
                    <button
                      className="mt-2 bg-blue-500 rounded-full px-2 py-1 text-white hover:cursor-pointer"
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
