import React, {useState} from 'react';
import styles from './App.module.scss'

import Coordinate from './components/Coordinate';
import Information from './components/Information';

import { ResponseCoordinateData, CoordinateData, ForecastDayType } from './types'

export const AppContext = React.createContext<any | null>(null)

const App = () => {

  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<ResponseCoordinateData>();
  const [arrayForecast, setArrayForecast] = useState<Array<ForecastDayType>>();

  const params:CoordinateData = {
        q: '',
        limit: 5,
        appid: "1c5da32bd6a0d1c4c017b21b49833c7f",
    }


  return (
    <div
      className={styles.main_page}>
        <AppContext.Provider value={{
          city,
          setCity,
          data,
          setData,
          params,
          arrayForecast,
          setArrayForecast
        }}>

            <Coordinate />
            <Information />

     </AppContext.Provider>

    </div>
  );
}

export default App;
