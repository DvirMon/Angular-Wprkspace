import { Temperature } from "./current-weather-result";
import { DailyTemperature } from "./future-weather-result";

export interface WeatherForecast {
    date: Date;
    temp: DailyTemperature;
  }
  
  export interface WeatherResult {
    id: number;
    location: string;
    description: string;
    temp: Temperature;
    forecast: WeatherForecast[];
    favorite: boolean;
  }
  