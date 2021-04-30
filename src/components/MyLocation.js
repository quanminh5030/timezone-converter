import React, { useState } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import RoomIcon from '@material-ui/icons/Room';
import Pickers from './Pickers';

const MyLocation = ({ timezoneId, handleSelect }) => {
    const [yourAddress, setYourAddress] = useState('');


    return (
        <>
            <div style={{ padding: '0% 5% 0% 5%' }}>
                <p style={{ fontSize: 14, color: '#8c8c8c', fontWeight: 400, fontFamily: 'Roboto' }}>My location time zone</p>
            </div>

            <div style={{ border: '1px solid #e75152', borderRadius: 11, margin: '4%', width: '91%' }}>

                <PlacesAutocomplete
                    value={yourAddress}
                    onChange={text => setYourAddress(text)}
                    onSelect={selectedAddress => handleSelect(selectedAddress)}

                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Your location...',
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



                <Pickers localeId='sv-SE' timezone={timezoneId} />

            </div>
        </>
    )
}

export default MyLocation
