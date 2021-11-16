import React, { useState } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import RoomIcon from '@material-ui/icons/Room';
import Pickers from './Pickers';
import { useStyles } from '../../styles/StyleMainInputPicker';

const MyLocation = ({ handleSelect, timeFormat, selectedDate, setSelectedDate, yourAddress, setYourAddress, timezoneId, setTimeZoneId }) => {
  const classes = useStyles();
  const [inputPlaceholder, setInputPlaceholder] = useState('Helsinki');

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
              <div style={{ position: 'relative' }}>
                <input
                  {...getInputProps({
                    placeholder: inputPlaceholder,
                    className: 'location-search-input',
                  })}
                  className={classes.placeholder}
                  onClick={() => {
                    setInputPlaceholder('Your location ...')
                    setYourAddress('');
                  }}
                />
                <div style={{
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
                      ? styles.active
                      : styles.inactive;

                    const subBold = <b>{yourAddress}</b>

                    const suggestWithBold = suggestion.description.replace(yourAddress, subBold.props.children)

                    return (
                      <div
                        key={index}
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <RoomIcon className={classes.icon} color='disabled' />
                        <span>{suggestWithBold}</span>
                      </div>
                    );
                  })}
                </div>

              </div>
            )}
          </PlacesAutocomplete>
        </div>

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

const styles = {
  active: {
    backgroundColor: '#fafafa',
    cursor: 'default',
    borderBottom: '0.3px solid gray',
    borderTop: '0.1px solid gray',
    padding: 5,
    borderRight: '1px solid black',
    borderLeft: '1px solid black',
    borderCollapse: 'collapse'
  },

  inactive: {
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    borderBottom: '0.3px solid gray',
    borderTop: '0.1px solid gray',
    padding: 5,
    borderRight: '1px solid black',
    borderLeft: '1px solid black',
    borderCollapse: 'collapse'
  }
}

export default MyLocation
