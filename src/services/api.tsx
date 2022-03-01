import axios from "axios";

import { CoordinateData, CityData } from '../types'

export const api = axios.create({
    baseURL: "http://api.openweathermap.org/",
});


export const coordinatesAPI = {
    async getCoordinates(data: CoordinateData): Promise<any> {
      const response = await api.get<any>("/geo/1.0/direct", { params: { ...data }});
      return response.data;
    },
  };

  export const currentForecastAPI = {
    async getForecast(data: CityData): Promise<any> {
      const response = await api.get<any>("/data/2.5/onecall", { params: { ...data }});
      return response.data;
    },
  };
