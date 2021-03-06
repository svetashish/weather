import React, { useCallback, useContext, useState } from 'react';

import debounce from "lodash.debounce";
import styles from './Coordinate.module.scss';

import { coordinatesAPI } from '../services/api';
import { AppContextType } from '../types'
import { AppContext } from '../App';


const Coordinate = () => {
    const {setData, setCity, params} = useContext<AppContextType>(AppContext);
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {   
        handleSearch(event.target.value);      
    };

    const handleSearch = useCallback (
        debounce (async (value:string) => {
            setCity(value);

            try {
                const response = await coordinatesAPI.getCoordinates({...params, q: value});
                setData(response[0]);

            } catch (error) {
                console.log(error)
            }         
        }, 2000),
        []);

    const handleOnButtonClick = () =>{
        setCity('');
        setData({});
    }    

    return (
        <>
                <form>
                    <div className={styles.wrapper}>
                        <input 
                            className={styles.input}
                            type="text" 
                            placeholder='Enter your city' 
                            onChange={handleOnChange} 
                        />
                        <button 
                            type="reset" 
                            title="Click me to clear the input field"
                            onClick={handleOnButtonClick}
                            >
                                &times;
                            </button>
                    </div>
                </form>
      
        </>
    )
};

export default React.memo(Coordinate);


