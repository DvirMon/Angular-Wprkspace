import { Temperature } from "./current-weather-result";
import { DailyTemperature } from "./future-weather-result";

export type WeatherForecast = {
  date: Date;
  temp: DailyTemperature;
};

export type WeatherMediaResult = {
  id: number;
  location: string;
  description: string;
  temp: Temperature;
  forecast: WeatherForecast[];
  favorite: boolean;
};
