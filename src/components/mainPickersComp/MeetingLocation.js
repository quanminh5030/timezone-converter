import React, { useState } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import RoomIcon from '@material-ui/icons/Room';
import Pickers from './Pickers';
import { useStyles } from '../../styles/StyleMainInputPicker'

const MeetingLocation = ({ handleSelect, timeFormat, selectedDate, setSelectedDate }) => {
  const classes = useStyles();
  const [inputPlaceholder, setInputPlaceholder] = useState('Stockholm, Sweden, Globuzzer');
  const [remoteAddress, setRemoteAddress] = useState('');
  const [timezoneId, setTimeZoneId] = useState('Europe/Stockholm');

  return (
    <>
      <div style={{ padding: '0% 5% 0% 5%' }}>
        <p className={classes.title}>Meeting location time zone</p>
      </div>

      <div className={classes.container}>
        <PlacesAutocomplete
          value={remoteAddress}
          onChange={text => setRemoteAddress(text)}
          onSelect={address => handleSelect(address, setTimeZoneId, setRemoteAddress)}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: inputPlaceholder,
                  className: 'location-search-input',
                })}
                className={classes.placeholder}
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
                      <RoomIcon className={classes.icon} />
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <Pickers
          timezone={timezoneId}
          timeFormat={timeFormat}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>

    </>
  )
}

export default MeetingLocation
