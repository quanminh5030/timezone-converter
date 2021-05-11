import axios from 'axios';
import {keysAPI} from '../../config/keysConfig';

const getTimeZone = (lat, lng) => {
    const key = keysAPI.keyTimeZone;
    const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=1331161200&key=${key}`;
    const request = axios.get(url);
    return request.then(response => response.data)
}  

const getWeather = (lat, lng) => {
    const key = keysAPI.keyWeather;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`;
    const request = axios.get(url);
    return request.then(response => response.data);
}

const countryServices = { getWeather, getTimeZone }

export default countryServices;