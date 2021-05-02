import React, { useState } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import RoomIcon from '@material-ui/icons/Room';
import Pickers from './Pickers';
import { makeStyles } from '@material-ui/core';
import { geocodeByAddress } from 'react-places-autocomplete';
import axios from 'axios';

const MeetingLocation = () => {
  const [remoteAddress, setRemoteAddress] = useState('');
  const [inputPlaceholder, setInputPlaceholder] = useState('Stockholm, Sweden, Globuzzer');

  const [timezoneId, setTimeZoneId] = useState('Europe/Stockholm');

  const getTimeZone = (lng, lat) => {
    const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lng},${lat}&timestamp=1331161200&key=AIzaSyBjJs2hbIhLaaO5mOt43DwhbVwUvgP1avs`;
    const request = axios.get(url);
    return request.then(response => response.data)
  }

  const handleSelect = selectedAddress => {
    setRemoteAddress(selectedAddress)

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
        <p style={{ fontSize: 14, color: '#8c8c8c', fontWeight: 400, fontFamily: 'Roboto', marginBottom: 5 }}>Meeting location time zone</p>
      </div>

      <div style={{ border: '1px solid #e75152', borderRadius: 11, margin: '0 4%', width: '91%', height: 75 }}>

        <PlacesAutocomplete
          value={remoteAddress}
          onChange={text => setRemoteAddress(text)}
          onSelect={handleSelect}
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
                onClick={() => setInputPlaceholder('Remote location ...')}
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

const useStyles = makeStyles(theme => ({


}))

export default MeetingLocation
