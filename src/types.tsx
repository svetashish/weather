export type CoordinateData = {
    q: string,
    limit: number,
    appid: string,
};

export type CityData = {
    lat: number,
    lon: number,
    exclude: string,
    appid: string,
    units: string,
};

export type ResponseCoordinateData = {
    country: string,
    lat: number,
    local_names: Object, // description Object is difficult
    lon: number,
    name: string,
    state: string,
};

