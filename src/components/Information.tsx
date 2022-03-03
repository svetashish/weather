import React, {useState, useContext, useEffect} from 'react';
import CurrentBlock from './CurrentBlock';
import ForecastBlock from './ForecastBlock';
import styles from './Information.module.scss';
import { AppContext } from "../App";




const Information = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {data,city} = useContext<any>(AppContext);
    
    useEffect(() => {
        if (city) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    },[city])

    return(
        <div className={styles.wrapper}>
            {!isLoading && "Loading data.."}
            {isLoading && !data && 
                <div className={styles.error}>
                    <img src='../assets/notfound.png' alt="not found" />
                    <p>We could not find weather information for the location above</p>
                </div>
            }
            {isLoading && data && 
                <>
                    <CurrentBlock/>
                    <ForecastBlock/> 
                </>
            }
        </div>
    )
}

export default Information