import { type } from "os";

export type CoordinateData = {
    q: string,
    limit: number,
    appid: string,
};

export type Coordinate ={
 

}

export type CityData = {
    lat?: number,
    lon?: number,
    exclude?: string,
    appid: string,
    units?: string,
};

export type ResponseCoordinateData = {
    country?: string,
    lat?: number,
    local_names?: Object, // description Object is difficult
    lon?: number,
    name?: string,
    state?: string,
};

export type DegFlag = {
    units: string,
    speed: string,
};


export type CurrentDay = {
    clouds: number,
    dew_point: number,
    dt: number,
    feels_like: number 
    humidity: number,
    pressure: number,
    sunrise?: number,
    sunset?: number,
    temp: number | Object,
    uvi: number,
    visibility: number,
    weather: Array<WeatherType>
    wind_deg: number,
    wind_gust: number,
    wind_speed: number,
};

export type WeatherType = {
    description: string,
    icon: string,
    id: number,
    main: string,

};

export type ResponseType = {
    current: CurrentDay,
    daily: Array<ForecastDayType>
    hourly?: Array<ForecastDayType>
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number,
};

export type ForecastDayType = {
    clouds: number,
    dew_point: number,
    dt: number,
    feels_like: number | {
        day: number,
        night: number, 
        eve: number, 
        morn: number,
    },
    moon_phase?: number,
    moonrise?: number,
    moonset?: number,
    pop?: number,
    humidity: number,
    pressure: number,
    sunrise?: number,
    sunset?: number,
    temp: number | {
        day: number,
        eve: number,
        max: number,
        min: number,
        morn: number,
        night: number,
    },
    uvi: number,
    visibility: number,
    weather: Array<WeatherType>
    wind_deg: number,
    wind_gust: number,
    wind_speed: number,
    snow?: number,
};

export type PollutionType = {
    coord: {
        lon: number,
        lat: number,
    },
    list: Array<DataList>,
};

export type DataList = {
    components: {
        co: number,
        nh3: number,
        no: number,
        no2: number,
        o3: number,
        pm2_5: number,
        pm10: number,
        so2: number,
    },
    dt: number,
    main: {
        aqi: number,
    },
}

//context

export type AppContextType = {
    city: string,
    setCity: (city: string,) => {},
    data: ResponseCoordinateData,
    setData: (data: ResponseCoordinateData) => {},
    params: CoordinateData
    arrayForecast: Array<ForecastDayType>,
    setArrayForecast: (arrayForecast: Array<ForecastDayType>) => {},

}