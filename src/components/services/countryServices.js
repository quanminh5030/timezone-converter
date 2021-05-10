import axios from 'axios';

const getTimeZone = (lat, lng) => {
    const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=1331161200&key=AIzaSyBjJs2hbIhLaaO5mOt43DwhbVwUvgP1avs`;
    const request = axios.get(url);
    return request.then(response => response.data)
}

const getWeather = (lat, lng) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7d3985cf38b09f5c870880cce4b8edf8`;
    const request = axios.get(url);
    return request.then(response => response.data);
}

const countryServices = { getWeather, getTimeZone }

export default countryServices;