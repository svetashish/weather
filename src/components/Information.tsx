import React, { useContext, useEffect, useState } from "react";
import styles from './Information.module.scss';

import moment from "moment";

import { currentForecastAPI } from '../services/api';

import { AppContext } from "../App";


// const windderection = (deg:number) =>  {
//     (deg > 0 && deg < 90) 
//     ? "NE"
//     : (deg > 90 && deg < 180) 
//         ? "SE"
//         : (deg > 180 && deg < 270) 
//             ? "SW"
//             :(deg > 270 && deg < 360) 
//                 ? "NW"
//                 : deg === 0 
//                     ? "N"
//                     : deg === 90
//                         ? "E"
//                         :  deg === 180
//                             ? "S"
//                             :  deg === 270
//                                 ? "W"
//                                 : "No data for wind derection"
     
// }


const Information = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentForecast, setCurrentForecast] = useState<any>();
    const [flag, setFlag] = useState<any>({
        units: "metric",
        speed: "KPH",
    });
    const [icon, setIcon] = useState<any>();
    const [windDeg, setWindDeg] = useState<string>();
    const [date, setDate] = useState<any>();
    const {data, city, params} = useContext<any>(AppContext);

    useEffect (() => {
        setDate(moment().format('dddd, h:mm a'))
    },[])

 
    useEffect(() => {
        if (city) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    },[city])


    useEffect (() => {

        console.log(data);
        console.log(flag)
        

        if (data){

        (async () => {
            try {
                const response = await currentForecastAPI.getForecast({
                    lat: data.lat,
                    lon: data.lon,
                    exclude: "daily",
                    appid: params.appid,
                    units: flag.units,  
                 });

                         
                 setCurrentForecast(response.current);
                 setIcon(response.current.weather[0].icon);

                // const deg:any = response.current.wind_deg

                // deg > 0 && deg < 90
                // ? setWindDeg("NE")
                // : deg > 90 && deg < 180 
                //     ? setWindDeg("SE")
                //     : deg > 180 && deg < 270
                //         ? setWindDeg("SW")
                //         :deg > 270 && deg < 360 
                //             ? setWindDeg("NW")
                //             : deg === 0 
                //                 ? setWindDeg("N")
                //                 : deg === 90
                //                     ? setWindDeg("E")
                //                     :  deg === 180
                //                         ? setWindDeg("S")
                //                         :  deg === 270
                //                             ? setWindDeg("W")
                //                             : "No data for wind derection"

               


              
            } catch (error) {
                console.log(error)
            }
        })();
    }
        
    },[data, flag.units])



const  handleOnClickC = () => {
    if (flag.units !== "metric"){
        setFlag({
            units: "metric",
            speed: "KPH",
        })

    }
};

const  handleOnClickF = () => {
    if (flag.units !== "imperial"){
        setFlag({   
            units: "imperial",
            speed: "MPH",
        })  
    }
};

    return (
        
        <div className={styles.wrapperInfo}>
            {!isLoading && "Loading data.."}
            {isLoading && !data && "Uncorrect data. Please check your city"}
            {isLoading && data && 
            <>
            <div className={styles.titleInfo}>
                {city}, {data.country}
            </div>

            {currentForecast &&
                <>
                <div className={styles.currencyDay}>
                    <div className={styles.date}>{date}</div>
                        <div className={styles.description}>
                            {currentForecast.weather[0].description}
                        </div>
                </div>        
                    
                    <div className={styles.today}>
                        <div className={styles.tempreture}>
                            <div className={styles.tempreture_icon}>
                                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon'></img>
                                <span className={styles.tempreture_now}>
                                    {Math.round(currentForecast.temp)}
                                </span>
                            </div>
                            <div className={styles.tempreture_units}>
                                <span 
                                    className={flag.units === "metric" ? styles.celsius_bold :styles.celsius}
                                    onClick = {handleOnClickC}> C </span>
                                /
                                <span 
                                    className={flag.units === "imperial" ? styles.fahrenheit_bold : styles.fahrenheit}
                                    onClick = {handleOnClickF}> F </span>
                            </div>
                        </div>
                        <div className={styles.totalInfo}>
                           <p>Humidity: {currentForecast.humidity}%</p> 
                           <p>Wind: {currentForecast.wind_speed} {flag.speed}</p>
                           <p>Ait Quality: </p>  
                        </div>

                    </div>
                </>
            }
            </>}

            
        
        </div>
    )
};

export default Information;