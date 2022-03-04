import axios from "axios";

import { CoordinateData,
         CityData, 
         ResponseCoordinateData, 
         ResponseType, 
         PollutionType } from '../types'

export const api = axios.create({
    baseURL: "http://api.openweathermap.org/",
});


export const coordinatesAPI = {
    async getCoordinates(data: CoordinateData): Promise<Array<ResponseCoordinateData>> {
      const response = await api.get<Array<ResponseCoordinateData>>("/geo/1.0/direct", { params: { ...data }});
      return response.data;
    },
  };

  export const currentForecastAPI = {
    async getForecast(data: CityData): Promise<ResponseType> {
      const response = await api.get<ResponseType>("/data/2.5/onecall", { params: { ...data }});
      return response.data;
    },
  };

  
  export const airPollutionAPI = {
    async getPollution(data: CityData): Promise<PollutionType> {
      const response = await api.get<PollutionType>("/data/2.5/air_pollution", { params: { ...data }});
      return response.data;
    },
  };