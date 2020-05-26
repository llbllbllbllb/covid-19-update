import React, {useState, useEffect} from 'react';

import {NativeSelect, FormControl} from '@material-ui/core'

import styles from './CountryPicker.module.css';


import {countries, fetchDailyData} from '../../api';


const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() =>{
        const fetchCountries = async () =>{
            setFetchedCountries(await countries());
        }
        console.log("Getting Countries...")
        fetchCountries();
        
        // fetchCountries();
    },[setFetchedCountries]);

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>{
                handleCountryChange(e.target.value)
            }}>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i) => {
                    return <option key={i} value={country}>{country}</option>
                })}
            </NativeSelect>
            
        </FormControl>
    );
}

export default CountryPicker;