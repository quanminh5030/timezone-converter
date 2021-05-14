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
            <div style={{ position: 'relative' }}>
              <input
                {...getInputProps({
                  placeholder: inputPlaceholder,
                  className: 'location-search-input',
                })}
                className={classes.placeholder}
                onClick={() => {
                  setInputPlaceholder('Remote location ...');
                  setRemoteAddress('');
                  }}
              />
              <div className="autocomplete-dropdown-container"
                style={{
                  position: 'absolute',
                  width: '100%',
                  top: '40px',
                  zIndex: 1000,
                }}>
                {loading && <div style={{ backgroundColor: 'white' }}>Loading...</div>}
                {suggestions.map((suggestion, index) => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'default', borderBottom: '0.3px solid gray', borderTop: '0.1px solid gray', padding: 5, borderRight: '1px solid black', borderLeft: '1px solid black', borderCollapse: 'collapse' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer', borderBottom: '0.3px solid gray', borderTop: '0.1px solid gray', padding: 5, borderRight: '1px solid black', borderLeft: '1px solid black', borderCollapse: 'collapse' };
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
