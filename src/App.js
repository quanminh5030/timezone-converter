import { Link, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import Header from './components/Header';
import MyClock from './components/MyClock';

import MyLocation from './components/MyLocation';
import MeetingLocation from './components/MeetingLocation';

import countries from './config/countriesConfig';
import './App.css'

function App() {
  const classes = useStyles();

  const countriesArr = countries;

  const getRandomNum = () => Math.floor(Math.random() * countriesArr.length)

  const firstRdNum = getRandomNum();

  const [bgImg, setBgImg] = useState(countriesArr[firstRdNum].bgImg);
  const [country, setCountry] = useState(countriesArr[firstRdNum].text);
  const [link, setLink] = useState(countriesArr[firstRdNum].link);

  useEffect(() => getBgImg(), [])

  const getBgImg = () => {
    const interval = setInterval(
      () => {
        const rdNum = getRandomNum();
        setBgImg(countriesArr[rdNum].bgImg)
        setCountry(countriesArr[rdNum].text)
        setLink(countriesArr[rdNum].link)
      }, 10000
    );
    return () => {
      clearInterval(interval);
    };
  }


  return (
    <div className={classes.bgImg} style={{ backgroundImage: `url(${bgImg})`, }}>

      <Header />

      <div className={classes.container}>
        <div className='align-items-center justify-content-center' style={{ display: 'flex', padding: '10% 5% 3% 5%' }}>

          <p className='' style={{ fontFamily: 'Roboto', fontSize: 18, fontWeight: 'bold', color: '#cf4848', }}>
            TIME ZONE CONVERTER
            </p>

          <MyClock />
        </div>

        <MyLocation />

        <hr style={{ backgroundColor: '#8c8c8c', fontWeight: 400, width: '95%', }} />
        <MeetingLocation />

        <div style={{ marginTop: 8 }}>
          <hr style={{ backgroundColor: '#8c8c8c', marginBottom: 0 }} />
        </div>

        <div>
          <Row style={{ marginTop: 10 }}>
            <Col md={8} xs={8}></Col>
            <Col md={1} xs={1}>
              <i class="fa fa-calendar" aria-hidden="true" style={{ fontSize: 20 }}></i>
            </Col>

            <Col md={1} xs={1}>
              <Link href='#' style={{
                padding: 3,
                color: 'white',
                backgroundColor: '#cc4141',
                border: '1px solid white',
                borderRadius: 4,
                fontSize: 10
              }}>12</Link>
            </Col>

            <Col md={1} xs={1} style={{ paddingLeft: 2, marginBottom: 15 }}>
              <Link href='#' style={{
                padding: 3,
                color: '#cc4141',
                backgroundColor: 'white',
                border: '1px solid white',
                borderRadius: 4,
                fontSize: 10
              }}>24</Link>
            </Col>
          </Row>
        </div>

      </div>

      <div className='d-flex justify-content-center' style={{ position: 'fixed', bottom: 18, width: '100%' }}>
        <Link href={link} target='_blank'>
          <Button className={classes.button}>
            Discover {country}
          </Button>
        </Link>
      </div>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'white',
    opacity: 0.9,
    borderRadius: '8%',
    width: '100%',
    maxWidth: 350,
    marginLeft: 100,
    marginTop: 115
  },

  bgImg: {
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },

  button: {
    backgroundColor: '#cc4747',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    borderRadius: 20,
    border: 'solid 1px white',
    opacity: 0.9,
    paddingLeft: 40,
    paddingRight: 40,
    color: 'white',
    '&:hover': {
      backgroundColor: '#cc4747',
      border: 'solid 1px white',
    },
    '&:focus': {
      backgroundColor: '#cc4747',
      border: 'solid 1px white',
    },
    '&:active': {
      backgroundColor: '#cc4747',
      border: 'solid 1px white',
    },
   
  }
}))

export default App;
