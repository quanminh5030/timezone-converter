import React, { useState } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import RoomIcon from '@material-ui/icons/Room';
import Pickers from './Pickers';
import { Container, makeStyles } from '@material-ui/core';

const MeetingLocation = ({ timezoneId, handleSelect }) => {
    const classes = useStyles();
    const [remoteAddress, setRemoteAddress] = useState('');

    return (
        <>
            <div style={{ padding: '0% 5% 0% 5%' }}>
                <p style={{ fontSize: 14, color: '#8c8c8c', fontWeight: 400, fontFamily: 'Roboto' }}>Meeting location time zone</p>
            </div>
            <div style={{ border: '1px solid #e75152', borderRadius: 11, margin: '4%', width: '91%' }}>

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
            </div>

        </>
    )
}

const useStyles = makeStyles(theme => ({

    
}))

export default MeetingLocation
