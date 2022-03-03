import React, { useContext, useEffect, useState } from "react";
import styles from './ForecastBlock.module.scss';
import { AppContext } from "../App";
import Forecast from "./Forecast";



const ForecastBlock = () => {

    const {arrayForecast} = useContext<any>(AppContext);

    console.log(arrayForecast);
    

    return(
        <div className={styles.wrapperBlockForecast}>
          {arrayForecast && 
            arrayForecast.map((item:any, index:any)=>
            <div
              className={styles.dailyForecast}
              key={item.dt}
            >
             <Forecast 
                index = {index}
                icon = {item.weather[0].icon}
                minTemp = {item.temp.min}
                maxTemp = {item.temp.max}
              />
            </div>)
          }
        </div>
    )
};

export default ForecastBlock;