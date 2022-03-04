import React, { FC } from "react";
import  styles from './Forecast.module.scss'

import moment from "moment";

type PropsType = {
    index: number,
    icon: string,
    maxTemp: number,
    minTemp: number
}

const Forecast: FC<PropsType> = ({index, icon, maxTemp, minTemp}) => {

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