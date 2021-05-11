import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, TextField, Typography } from '@material-ui/core';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { DateTime } from 'luxon';
import moment from 'moment';
import {googleCalendarAPI} from '../../config/keysConfig';

const AddCalendar = ({ open, handleClose, date, timezone }) => {
    const [eventName, setEventName] = useState('');

    var gapi = window.gapi

    const handleAddEvent = () => {
        setEventName('');

        gapi.load('client:auth2', () => {

            gapi.client.init({
                apiKey: googleCalendarAPI.API_KEY,
                clientId: googleCalendarAPI.CLIENT_ID,
                discoveryDocs: googleCalendarAPI.DISCOVERY_DOCS,
                scope: googleCalendarAPI.SCOPES,
            })

            gapi.client.load('calendar', 'v3', () => console.log('loaded!'))

            gapi.auth2.getAuthInstance().signIn()
                .then(() => {

                    var event = {
                        'summary': eventName,
                        'location': 'Skype',
                        'start': {
                            'dateTime': moment(date).format(),
                            'timeZone': timezone
                        },
                        'end': {
                            'dateTime': moment(date).add(1, 'hour'),
                            'timeZone': timezone
                        },
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                { 'method': 'email', 'minutes': 24 * 60 },
                                { 'method': 'popup', 'minutes': 10 }
                            ]
                        }
                    }

                    var request = gapi.client.calendar.events.insert({
                        'calendarId': 'primary',
                        'resource': event,
                    })

                    request.execute(event => {
                        console.log(event)
                        window.open(event.htmlLink)
                    })

                })
        })
    }


    return (
        <Dialog
            open={open} onClose={handleClose}
            fullWidth={true}
            maxWidth='sm'
        >
            <DialogTitle style={{ backgroundColor: '#1E1D21', color: 'white', padding: '20px 16px' }}>

                {/* <h2 style={{ fontWeight: 'bold', fontSize: 28 }}>Select your Calendar</h2> */}
            SELECT YOUR CALENDAR

            </DialogTitle>
            <DialogContent style={{ backgroundColor: '#c3c2c4', color: 'white' }}>

                <Typography variant='h4' className='d-flex justify-content-center' style={{ color: 'black', margin: 20 }}>MEETING WITH GLOBUZZER</Typography>

                <TextField
                    required
                    label='Meeting name'
                    placeholder='Type the summary of your meeting'
                    fullWidth
                    value={eventName}
                    onChange={text => setEventName(text.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <ViewHeadlineIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    style={{ marginTop: 20 }}
                    label='Time of your meeting'
                    defaultValue={date && new Date(DateTime.fromJSDate(date).setZone(timezone).toISO().slice(0, 23))}
                    disabled
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccessTimeIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    style={{ marginTop: 20 }}
                    label='Location'
                    defaultValue='Skype'
                    disabled
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocationOnIcon />
                            </InputAdornment>
                        ),
                    }}

                />

                <Box textAlign='center'>
                    <Button
                        style={{ margin: '20px 0 10px', backgroundColor: '#1E1D21', width: '40%' }}
                        color='primary'
                        variant='contained'
                        onClick={handleAddEvent}

                    >
                        Add event
              </Button>
                </Box>

            </DialogContent>

            <DialogActions style={{ backgroundColor: '#1E1D21', color: 'white', justifyContent: 'center' }}>
                <Typography variant='h4'>By Globuzzer</Typography>
            </DialogActions>
        </Dialog>
    )
}

export default AddCalendar
