import React, {useState, useContext, useEffect} from 'react';
import CurrentBlock from './CurrentBlock';
import ForecastBlock from './ForecastBlock';
import styles from './Information.module.scss';
import { AppContext } from "../App";
import { AppContextType } from '../types';

export const NewDateContex =  React.createContext<any | null>(null);


const Information = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [initialState, setInitialState] = useState<string | null>("");
    const [newForecast, setNewForecast] = useState<any>();

    
    const {data,city} = useContext<AppContextType>(AppContext);

    useEffect(() => {
        if (city) {
            setInitialState("Loading data..");
            setIsLoading(true);
        } else {
            setInitialState('')
            setIsLoading(false);
        }
    },[city])

    return(
        <NewDateContex.Provider value={{newForecast, setNewForecast}}>
            <div className={styles.wrapper}>
                {!isLoading && initialState }
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
        </NewDateContex.Provider>
    )
};

export default React.memo(Information);