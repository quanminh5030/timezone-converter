
import {  makeStyles, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';


import copenhagen from './images/copenhagen.jpg';
import stockholm from './images/stockholm.jpg';
import helsinki from './images/helsinki.jpg';
import denmark from './images/denmark.jpg';
import lisbon1 from './images/lisbon1.jpg';
import london from './images/london.jpg';
import Header from './components/Header';

import MyClock from './components/MyClock';


function App() {
  const classes = useStyles();

  const countriesArr = [
    { id: 1, text: 'Copenhagen', bgImg: copenhagen },
    { id: 2, text: 'Stockholm', bgImg: stockholm },
    { id: 3, text: 'Helsinki', bgImg: helsinki },
    { id: 4, text: 'Copenhagen', bgImg: denmark },
    { id: 5, text: 'Lisbon', bgImg: lisbon1 },
    { id: 6, text: 'London', bgImg: london },
  ];

  const getRandomNum = () => Math.floor(Math.random() * countriesArr.length)

  const firstRdNum = getRandomNum();

  const [bgImg, setBgImg] = useState(countriesArr[firstRdNum].bgImg);
  const [country, setCountry] = useState(countriesArr[firstRdNum].text);

  useEffect(() => getBgImg(), [])

  const getBgImg = () => {
    const interval = setInterval(
      () => {
        const rdNum = getRandomNum();
        setBgImg(countriesArr[rdNum].bgImg)
        setCountry(countriesArr[rdNum].text)
      }, 10000
    );

    return () => {
      clearInterval(interval);
    };
  }


  return (
    <div className={classes.bgImg} style={{ backgroundImage: `url(${bgImg})`, }}>

      <Header />

      <Container fluid style={{ backgroundColor: 'white', opacity: 0.9 }}>
        <Row>
          <Col md={5} xs={12} className={classes.calender}>
            <Container>
              <Row className='row align-items-center'>
                <Col className='align-item-center' md={9} style={{ fontFamily: 'Roboto', fontSize: 18, fontWeight: 'bold', color: '#cf4848' }}>TIME ZONE CONVERTER</Col>
                <Col md={3}>
                  <MyClock />
                </Col>
              </Row>
            </Container>

            <Container>
              <p style={{fontSize: 14, color: '#8c8c8c', fontWeight: 400, fontFamily: 'Roboto'}}>My location time zone</p>
              <TextField
                placeholder='Your location...'
              />
            </Container>
          </Col>
        </Row>
      </Container>

      <div className='d-flex justify-content-center' style={{ position: 'fixed', bottom: 18, width: '100%' }}>
        <Button className={classes.button}>Discover {country}</Button>
      </div>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  calendar: {
    backgroundColor: 'orange',
    height: 200
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
    border: 'solid 1px',
    opacity: 0.9,
    paddingLeft: 40,
    paddingRight: 40,
    color: 'white',
    '&:hover': {
      backgroundColor: '#cc4747'
    },
  }
}))

export default App;
