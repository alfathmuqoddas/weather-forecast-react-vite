export interface IWeatherData {
  city: ICityObjectData;
  cnt: number;
  cod: string;
  list: IListWeatherObject[];
  message: number;
}

export interface ICityObjectData {
  coord: { lat: number; lon: number };
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface IListWeatherObject {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: IMainWeather;
  pop: number;
  sys: { pod: string };
  visibility: number;
  weather: IWeatherInnerObject[];
  wind: { speed: number; deg: number; gust: number };
}

export interface IMainWeather {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

export interface IWeatherInnerObject {
  id: number;
  main: string;
  description: string;
  icon: string;
}
