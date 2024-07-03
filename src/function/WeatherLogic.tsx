// import { useState } from 'react';

// const WeatherLogic = () => {
//   const [weather, setWeather] = useState([]);
//   const [query, setQuery] = useState('');

//   const getWeather = async (e) => {
//     e.preventDefault();
//     const url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=4018b500122ee53a2b2b0ccc505a5ae4&units=metric`;
//     const res = await fetch(url);
//     const resJson = await res.json();
//     console.log(resJson);
//     if (resJson) {
//       setWeather(resJson);
//     }
//     setQuery('');
//   };

//   const querySet = (e) => {
//     setQuery(e.target.value);
//   };

//   return { weather, getWeather, querySet };
// };

// export default WeatherLogic;
