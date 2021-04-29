
import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import PlacesAutocomplete from 'react-places-autocomplete';
import RoomIcon from '@material-ui/icons/Room';

import copenhagen from './images/copenhagen.jpg';
import stockholm from './images/stockholm.jpg';
import helsinki from './images/helsinki.jpg';
import denmark from './images/denmark.jpg';
import lisbon1 from './images/lisbon1.jpg';
import london from './images/london.jpg';
import Header from './components/Header';

import MyClock from './components/MyClock';
import Pickers from './components/Pickers';


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


  const [yourAddress, setYourAddress] = useState('');
  const [remoteAddress, setRemoteAddress] = useState('');

  const handleSelect = selectedAddress => {
    geocodeByAddress(selectedAddress)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };


  return (
    <div className={classes.bgImg} style={{ backgroundImage: `url(${bgImg})`, }}>

      <Header />

      <Container fluid style={{ backgroundColor: 'white', opacity: 0.9, }}>
        <Row>
          <Col md={4} xs={12} className={classes.calender}>
            <Container>
              <Row className='row align-items-center'>
                <Col className='align-item-center' md={9} style={{ fontFamily: 'Roboto', fontSize: 18, fontWeight: 'bold', color: '#cf4848' }}>TIME ZONE CONVERTER</Col>
                <Col md={3}>
                  <MyClock />
                </Col>
              </Row>
            </Container>


            <Container>
              <p style={{ fontSize: 14, color: '#8c8c8c', fontWeight: 400, fontFamily: 'Roboto' }}>My location time zone</p>

              <PlacesAutocomplete
                value={yourAddress}
                onChange={text => setYourAddress(text)}
                onSelect={handleSelect}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'Your location...',
                        className: 'location-search-input',
                      })}
                      className={classes.input}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion, index) => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'default' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            key={index}
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <RoomIcon style={{ fontSize: 15, margin: '0 6 0 4' }} color='disabled' />
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>

              <Pickers />
            </Container>

            <Container>
              <p style={{ fontSize: 14, color: '#8c8c8c', fontWeight: 400, fontFamily: 'Roboto' }}>Meeting location time zone</p>

              <PlacesAutocomplete
                value={remoteAddress}
                onChange={text => setRemoteAddress(text)}
                onSelect={handleSelect}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'Remote location...',
                        className: 'location-search-input',
                      })}
                      className={classes.input}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion, index) => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'default' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            key={index}
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <RoomIcon style={{ fontSize: 15, margin: '0 6 0 4' }} color='disabled' />
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>

              <Pickers localeId='sv-SE' timezone='Europe/Stockholm' />
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

    input: {
      width: '94%',
      height: 40,
      float: 'left',
      padding: '0% 2%',
      background: 'transparent',
      color: '#797979',
      fontWeight: 'bold',
      border: 'none'
    },

   
  }
}))

export default App;
