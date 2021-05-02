import React, { useState } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import RoomIcon from '@material-ui/icons/Room';
import Pickers from './Pickers';
import { geocodeByAddress } from 'react-places-autocomplete';

import axios from 'axios';

const MyLocation = () => {
  const [yourAddress, setYourAddress] = useState('');
  const [inputPlaceholder, setInputPlaceholder] = useState('Helsinki');

  const [timezoneId, setTimeZoneId] = useState('Europe/Helsinki');

  const getTimeZone = (lng, lat) => {
    const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lng},${lat}&timestamp=1331161200&key=AIzaSyBjJs2hbIhLaaO5mOt43DwhbVwUvgP1avs`;
    const request = axios.get(url);
    return request.then(response => response.data)
  }

  const handleSelect = selectedAddress => {
    setYourAddress(selectedAddress)

    geocodeByAddress(selectedAddress)
      .then(results => {
        const lat = results[0].geometry.viewport.La.i;
        const lng = results[0].geometry.viewport.Ua.i;
        getTimeZone(lng, lat)
          .then(data => setTimeZoneId(data.timeZoneId))
          .catch(err => console.error(err));
      })
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };


  return (
    <>
      <div style={{ padding: '0% 5% 0% 5%' }}>
        <p style={{ fontSize: 14, color: '#8c8c8c', fontWeight: 400, fontFamily: 'Roboto', marginBottom: 5 }}>My location time zone</p>
      </div>

      <div style={{ border: '1px solid #e75152', borderRadius: 11, margin: '0 4%', width: '91%', height: 75 }}>

        <PlacesAutocomplete
          value={yourAddress}
          onChange={text => setYourAddress(text)}
          onSelect={selectedAddress => handleSelect(selectedAddress)}

        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: inputPlaceholder,
                  className: 'location-search-input',
                })}
                style={{
                  width: '94%',
                  height: 40,
                  float: 'left',
                  padding: '0% 2%',
                  background: 'transparent',
                  color: '#797979',
                  fontWeight: 'bold',
                  border: 'none'
                }}

                onClick={() => setInputPlaceholder('Your location ...')}
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



        <Pickers localeId='sv-SE' timezone={timezoneId} />

      </div>
    </>
  )
}

export default MyLocation
