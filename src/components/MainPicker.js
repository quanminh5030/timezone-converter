import React, { useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core';
import MeetingLocation from './mainPickersComp/MeetingLocation';
import MyLocation from './mainPickersComp/MyLocation';
import HeaderPicker from './mainPickersComp/HeaderPicker';
import FooterPicker from './mainPickersComp/FooterPicker';
import axios from 'axios';
import { geocodeByAddress } from 'react-places-autocomplete';

const MainPicker = ({ setWeather }) => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [timeFormat, setTimeFormat] = useState('hh:mm a');

    const [yourAddress, setYourAddress] = useState('');

    useEffect(() => {
        // const url = `http://api.weatherstack.com/current?access_key=5be500d2089514a7e32f83c4d1ebcbbf&query=Helsinki`;
        // axios.get(url)
        //     .then(response => response.data)
        //     .then(data => {
        //         setWeather(data.current.temperature)
        //         setWeatherImg(data.current.weather_icons)
        //     })
        //     .catch(err => console.error(err))
    }, []);

    const getTimeZone = (lng, lat) => {
        const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lng},${lat}&timestamp=1331161200&key=AIzaSyBjJs2hbIhLaaO5mOt43DwhbVwUvgP1avs`;
        const request = axios.get(url);
        return request.then(response => response.data)
    }

    const getWeather = (lng, lat) => {
        const url = `http://api.weatherstack.com/current?access_key=5be500d2089514a7e32f83c4d1ebcbbf&query=${lng},${lat}`;
        const request = axios.get(url);
        return request.then(response => response.data);
    }

    const handleSelect = (selectedAddress, setTimeZoneId, setAddress) => {
        setAddress(selectedAddress)

        geocodeByAddress(selectedAddress)
            .then(results => {
                console.log("1", results)
                const lat = results[0].geometry.viewport.La.i;
                const lng = results[0].geometry.viewport.Ua.i;
                getTimeZone(lng, lat)
                    .then(data => setTimeZoneId(data.timeZoneId))
                    .catch(err => console.error(err));
                getWeather(lng, lat)
                    .then(data => {
                        setWeather({ temp: data.current.temperature, img: data.current.weather_icons })
                    })
                    .catch(err => console.error(err));
            })
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };


    return (
        <div className={classes.container} style={matches ? { margin: 'auto', marginTop: 10 } : { marginLeft: '10vw', marginTop: '15vh' }}>

            <HeaderPicker />

            <MyLocation
                handleSelect={handleSelect}
                timeFormat={timeFormat}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                yourAddress={yourAddress}
                setYourAddress={setYourAddress}
            />

            <hr className={classes.divider} style={{ width: '95%', }} />

            <MeetingLocation
                handleSelect={handleSelect}
                timeFormat={timeFormat}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />

            <hr className={classes.divider} style={{ marginBottom: 0 }} />

            <FooterPicker
                setTimeFormat={setTimeFormat}
            />

        </div>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: 'white',
        opacity: 0.9,
        borderRadius: '8%',
        width: '100%',
        maxWidth: 350,
    },

    divider: {
        backgroundColor: '#8c8c8c',
    }
}))

export default MainPicker;
