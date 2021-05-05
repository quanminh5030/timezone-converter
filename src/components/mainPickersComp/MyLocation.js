import React, { useState } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import RoomIcon from '@material-ui/icons/Room';
import Pickers from './Pickers';
import { useStyles } from '../../styles/StyleMainInputPicker';
import Autocomplete from '@material-ui/lab/Autocomplete';

const MyLocation = ({ handleSelect, timeFormat }) => {
  const classes = useStyles();
  const [inputPlaceholder, setInputPlaceholder] = useState('Helsinki');
  const [yourAddress, setYourAddress] = useState('');
  const [timezoneId, setTimeZoneId] = useState('Europe/Helsinki');

  return (
    <>
      <div style={{ padding: '0% 5% 0% 5%' }}>
        <p className={classes.title}>My location time zone</p>
      </div>

      <div className={classes.container}>
        <div>
          <PlacesAutocomplete
            value={yourAddress}
            onChange={text => setYourAddress(text)}
            onSelect={address => handleSelect(address, setTimeZoneId, setYourAddress)}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: inputPlaceholder,
                    className: 'location-search-input',
                  })}
                  className={classes.placeholder}
                  onClick={() => {
                    setInputPlaceholder('Your location ...')
                  }}
                />
                <div>
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion, index) => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'default' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer', };
                    return (
                      <div
                        key={index}
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <RoomIcon className={classes.icon} color='disabled' />
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>

              </div>
            )}
          </PlacesAutocomplete>
        </div>

        <Pickers
          localeId='sv-SE'
          timezone={timezoneId}
          timeFormat={timeFormat}
        />

      </div>
    </>
  )
}

export default MyLocation
