import React, { useContext, useEffect, useState } from "react";
import styles from './ForecastBlock.module.scss';
import { AppContext } from "../App";
import Forecast from "./Forecast";
import { AppContextType } from '../types';
import { NewDateContex } from './Information';


const ForecastBlock = () => {

    const {arrayForecast} = useContext<AppContextType>(AppContext);
    const {setNewForecast} = useContext<any>(NewDateContex)

    const handleOnClick = (item:any) => {
      setNewForecast(item);
    }
  
    return(
        <div className={styles.wrapperBlockForecast}>
          {arrayForecast && 
            arrayForecast.map((item:any, index:any)=>
            <div
              onClick = {() => handleOnClick(item)}
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

export default React.memo(ForecastBlock);