import React, {useContext, useEffect, useState} from 'react';

import { airPollutionAPI } from '../services/api';
import { AppContext } from "../App";
import { AppContextType } from '../types';

const ArrayPollution = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

const AirPollution = () => {
    const [pollution, setPollution] = useState<string | null>(null);

    const {data, params} = useContext<AppContextType>(AppContext);

    useEffect(() => {
        if (data){
            (async () => {
                try {
                    const {list} = await airPollutionAPI.getPollution({
                        lat: data.lat,
                        lon: data.lon,
                        appid: params.appid,
                     });

                   const dataNO2 =  list[0].components.no2;      

                   if (dataNO2 >= 0 && dataNO2 < 50 ){
                    setPollution(ArrayPollution[0]);
                   } else{
                       if (dataNO2 >= 50 && dataNO2 < 100 ) {
                         setPollution(ArrayPollution[1]);
                        } else {
                            if (dataNO2 >= 100 && dataNO2 < 200 ) {
                                setPollution(ArrayPollution[2]);
                            } else {
                                if (dataNO2 >= 200 && dataNO2 < 400 ) {
                                setPollution(ArrayPollution[3]);
                                } else {
                                    if (dataNO2 >= 400) {
                                    setPollution(ArrayPollution[4]);
                                    } else { 
                                        setPollution('Data not found');
                                    }}}}}
    
                } catch (error) {
                    console.log(error)
                }
            })();
        }

    },[data])

    return (
        <>{data && pollution}</>
    )
};

export default React.memo(AirPollution);