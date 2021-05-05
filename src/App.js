import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import countries from './config/countriesConfig';
import MainPicker from './components/MainPicker';
import VisitButton from './components/VisitButton';

function App() {
  const classes = useStyles();

  const countriesArr = countries;

  const getRandomNum = () => Math.floor(Math.random() * countriesArr.length)

  const firstRdNum = getRandomNum();

  const [bgImg, setBgImg] = useState(countriesArr[firstRdNum].bgImg);
  const [country, setCountry] = useState(countriesArr[firstRdNum].text);
  const [link, setLink] = useState(countriesArr[firstRdNum].link);

  useEffect(() => getBgImg, [])

  const getBgImg = () => {
    const interval = setInterval(
      () => {
        const rdNum = getRandomNum();
        setBgImg(countriesArr[rdNum].bgImg)
        setCountry(countriesArr[rdNum].text)
        setLink(countriesArr[rdNum].link)
      }, 3000
    );
    return () => {
      clearInterval(interval);
    };
  }


  return (
    <div className={classes.bgImg} style={{ backgroundImage: `url(${bgImg})`, }}>

      <Header />

      <MainPicker />

      <VisitButton
        link={link}
        country={country}
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
