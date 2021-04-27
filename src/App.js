
import { Link, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import logo from './images/globuzzer logo.png';

import copenhagen from './images/copenhagen.jpg';
import stockholm from './images/stockholm.jpg';
import helsinki from './images/helsinki.jpg';
import denmark from './images/denmark.jpg';
import lisbon1 from './images/lisbon1.jpg';
import london from './images/london.jpg';


function App() {
  const classes = useStyles();

  const backgroundArr = [
    copenhagen, stockholm, helsinki, denmark, lisbon1, london
  ]

  const text = [
    'Copenhagen', 'Stockholm', 'Helsinki', 'Copenhagen', 'Lisbon', 'London'
  ]

  const [bgImg, setBgImg] = useState(stockholm);
  const [country, setCountry] = useState('Stockholm')

  useEffect(() => getBgImg(), [])

  const getBgImg = () => {
    const interval = setInterval(
      () => {
        const rdNum = getRandomNum();
        setBgImg(backgroundArr[rdNum])
        setCountry(text[rdNum])
      }, 10000
    );

    return () => {
      clearInterval(interval);
    };
  }

  const getRandomNum = () => Math.floor(Math.random() * (backgroundArr.length - 0))

  return (
    <div className={classes.bgImg} style={{ backgroundImage: `url(${bgImg})`, }}>

      <Container fluid className={classes.container} >
        <Row style={{
          height: 68, alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Col md={{ span: 2, offset: 2 }} >
            <Link href='https://globuzzer.com/' target='_blank'>
              <Image src={logo} fluid style={{ width: '100%' }} />
            </Link>
          </Col>
          <Col md={{ span: 1, offset: 7 }} className={classes.help}>
            Help
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={6} xs={12} style={{ fontSize: 40 }}>Picker here</Col>
        </Row>
      </Container>

      <div className='d-flex justify-content-center' style={{position: 'fixed', bottom: 18, width: '100%'}}>
        <Button className={classes.button}>Discover {country}</Button>
      </div>
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

  container: {
    backgroundColor: '#333',
    opacity: 0.6,
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },

  help: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
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
