import React from "react";
import  styles from './Forecast.module.scss'

import moment from "moment";

const Forecast = ({index, icon, maxTemp, minTemp}: any) => {

    return (
        <>
        <div className={styles.day}>
            <div className={styles.moment}>{moment().add(index, 'days').format('dd')}</div>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon'/>
            <div className={styles.maxtemp}>{Math.round(maxTemp)}</div>
            <div className={styles.mintemp}>{Math.round(minTemp)}</div>
        </div>
        </>
    )
};

export default React.memo(Forecast);