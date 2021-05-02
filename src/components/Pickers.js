import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
  TimePicker
} from '@material-ui/pickers';

import { createMuiTheme, makeStyles, TextField, ThemeProvider } from '@material-ui/core';
import { DateTime } from 'luxon';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

import moment from 'moment';
import 'moment-timezone';




const datePickerTheme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        paddingLeft: '5%'
      }
    },

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

      root: {
        borderRadius: 'none'
      }
    },



  }
})


const Pickers = ({ localeId, timezone }) => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(moment(new Date()).tz(timezone).format('yyyy-MM-DD'));

  console.log(moment(new Date()).tz(timezone).format('yyyy-MM-DD'))

  const week = DateTime.fromJSDate(new Date(selectedDate)).weekNumber;

  const dateChange = date => {
    // date !== 'Invalid Date' && setSelectedDate(date);
    console.log(date)
  }

  const hours = [];

  moment.locale(localeId);

  for (let hour = 0; hour < 24; hour++) {
    hours.push(moment().tz(timezone).add(hour, 'hour').format('hh:mm A'));
  }

  return (
    <div style={{ display: 'inline-block', backgroundColor: '#cc4141', padding: '0px 5px 0px 0px', color: 'white', height: 35, borderBottomRightRadius: 11, borderBottomLeftRadius: 11 }}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div style={{ float: 'left', boxSizing: 'border-box', width: '50%'}}>
          <ThemeProvider theme={datePickerTheme}>
            <KeyboardDatePicker
              autoOk
              disableToolbar
              variant="dialog"
              format="yyyy-MM-dd"

              value={selectedDate}
              onChange={dateChange}
              id="date-picker-inline"
              initialFocusedDate={moment().tz(timezone).format('yyyy-MM-dd')}


              InputProps={{
                className: classes.title,
                disableUnderline: true,
              }}

              onSubmitCapture={() => console.log('hello')}
              onAccept={(date => setSelectedDate(date))}
              keyboardIcon={false}

              cancelLabel=''
              okLabel=''

              rightArrowIcon={<ArrowRightIcon fontSize='small' style={{ color: 'white', backgroundColor: 'black', borderRadius: '50%' }} />}

              leftArrowIcon={<ArrowLeftIcon fontSize='small'
                style={{ color: 'white', backgroundColor: 'black', borderRadius: '50%' }} />}
            />
          </ThemeProvider>

        </div>

        <div style={{ float: 'left', width: '20%', padding: '0px 5px 0px 0px', boxSizing: 'border-box' }}>
          w. {week + 1}
        </div>

        <div style={{ float: 'right', width: '30%', padding: '0px 0px 0px 5px', boxSizing: 'border-box' }}>
          <TextField
            className={classes.select}
            select
            value={selectedDate}
            SelectProps={{
              native: true,
            }}

            InputProps={{
              className: classes.title,
              disableUnderline: true,
            }}

            inputProps={{
              color: 'white',
          
            }}
          >
            {hours.map((item, key) => (
              <option key={key}>
                {item}
              </option>
            ))}
          </TextField>

        </div>

      </MuiPickersUtilsProvider>

    </div>
  )
}

const useStyles = makeStyles(theme => ({
  title: {
    color: 'white'
  },

  
}))

export default Pickers
