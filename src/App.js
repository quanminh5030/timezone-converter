import { makeStyles } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';

import Header from './components/Header';
import countries from './config/countriesConfig';
import MainPicker from './components/MainPicker';
import VisitButton from './components/VisitButton';

function App() {
  const classes = useStyles();

  const countriesArr = countries;

  const getRandomNum = useCallback(() => Math.floor(Math.random() * countriesArr.length), [countriesArr])

  const firstRdNum = getRandomNum();

  const [country, setCountry] = useState({
    countryName: countriesArr[firstRdNum].text,
    bgImg: countriesArr[firstRdNum].bgImg,
    visitLink: countriesArr[firstRdNum].link
  });

  const [weather, setWeather] = useState({ temp: '', img: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      const rdNum = getRandomNum()

      setCountry({
        countryName: countriesArr[rdNum].text,
        bgImg: countriesArr[rdNum].bgImg,
        visitLink: countriesArr[rdNum].link
      })
    }, 10000);

    return () => clearInterval(interval);
  }, [countriesArr, getRandomNum]);

  return (
    <div className={classes.bgImg} style={{ backgroundImage: `url(${country.bgImg})`, }}>

      <Header weather={weather} />

      <MainPicker setWeather={setWeather} />

      <VisitButton
        link={country.visitLink}
        country={country.countryName}
      />

    </div>
  );
}

const useStyles = makeStyles(theme => ({
  bgImg: {
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}))

export default App;
