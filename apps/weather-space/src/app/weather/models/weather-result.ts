import { Temperature } from './current-weather-MediaResult';
import { DailyTemperature } from './future-weather-MediaResult';

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
