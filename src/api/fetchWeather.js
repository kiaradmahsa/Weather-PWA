import axios from 'axios';
import {queries} from "@testing-library/react";

const URL =  'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';
export const fetchWeather = async (query) =>{
    const { data } = await  axios.get(URL, {
        params:{
            q: query,
            units: 'metric',
            APPID: API_KEY,

        }
    });
    return data ;
}

