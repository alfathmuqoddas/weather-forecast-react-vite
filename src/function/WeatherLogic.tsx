// import { useState } from "react";
// import { IMainWeather } from "../types/weatherApi";

// const WeatherLogic = () => {
//   const [weather, setWeather] = useState<IMainWeather | null>(null);
//   const [query, setQuery] = useState<string>("");

//   const getWeather = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=4018b500122ee53a2b2b0ccc505a5ae4&units=metric`;
//     const res = await fetch(url);
//     const resJson = (await res.json()) as IMainWeather;
//     console.log(resJson);
//     if (resJson) {
//       setWeather(resJson);
//     }
//     setQuery("");
//   };

//   const querySet = (e: React.FormEvent<HTMLFormElement>) => {
//     setQuery(e.target.value);
//   };

//   return { weather, getWeather, querySet };
// };

// export default WeatherLogic;
