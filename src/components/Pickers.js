import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
    TimePicker
} from '@material-ui/pickers';
import 'moment-timezone';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import { DateTime } from 'luxon';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const datePickerTheme = createMuiTheme({
    overrides: {
        MuiPickersDay: {
            daySelected: {
                backgroundColor: '#cd5e5e',
                '&:hover': {
                    backgroundColor: '#cd5e5e',
                }
            },

            day: {
               height: 'none'
            }
        },

        MuiTypography: {
            body1: {
                fontWeight: 'bold',
            },

            caption: {
                fontWeight: 'bold'
            }
        },

        MuiPickersCalendarHeader: {
            dayLabel: {
                color: 'black'
            }
        },

        MuiIconButton: {
            label: {
                border: '1px solid #c5c5c5'
            },

            root: {
                borderRadius: 'none'
            }
        },
      
        MuiPickersCalendar: {
            transitionContainer: {
                // minHeight: 150
            }
        }

    }
})

const Pickers = ({ localeId, timezone }) => {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = useState(new Date());

    const week = DateTime.fromJSDate(new Date(selectedDate)).weekNumber;

    const dateChange = date => {
        // date !== 'Invalid Date' && setSelectedDate(date);
        console.log(date)
    }


    return (
        <div style={{ display: 'inline-block', backgroundColor: '#cc4141', padding: '0px 5px 0px 0px', color: 'white' }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div style={{ float: 'left', boxSizing: 'border-box', width: '50%', }}>
                    <ThemeProvider theme={datePickerTheme}>
                        <KeyboardDatePicker
                            autoOk
                            disableToolbar

                            variant="dialog"
                            format="yyyy-MM-dd"

                            value={selectedDate}
                            onChange={dateChange}
                            id="date-picker-inline"
                            initialFocusedDate={(new Date()).toLocaleString({ localeId }, { timeZone: timezone })}


                            InputProps={{ className: classes.title }}

                            onSubmitCapture={() => console.log('hello')}
                            onAccept={(date => setSelectedDate(date))}
                            keyboardIcon={false}

                            cancelLabel=''
                            okLabel=''

                            rightArrowIcon={<ArrowRightIcon fontSize='small' style={{ color: 'white', backgroundColor: 'black', borderRadius: '50%' }} />}

                            leftArrowIcon={<ArrowLeftIcon fontSize='small'
                                style={{ color: 'white', backgroundColor: 'black', borderRadius: '50%' }} />}


                            KeyboardButtonProps={{
                                "aria-label": "change date",

                            }}

                        />
                    </ThemeProvider>
                </div>

                <div style={{ float: 'left', width: '20%', padding: '0px 5px 0px 0px', boxSizing: 'border-box' }}>
                    w. {week + 1}
                </div>

                <div style={{ float: 'right', width: '30%', padding: '0px 0px 0px 5px', boxSizing: 'border-box' }}>
                    <TimePicker
                        clearable
                        initialFocusedDate={(new Date()).toLocaleString({ localeId }, { timeZone: timezone })}
                        InputProps={{ className: classes.title }}
                    />
                </div>

            </MuiPickersUtilsProvider>

        </div>
    )
}

const useStyles = makeStyles(theme => ({
    title: {
        color: 'white'
    }
}))

export default Pickers
