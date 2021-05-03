import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import moment from 'moment';
import 'moment-timezone';
import { TextField, ThemeProvider } from '@material-ui/core';
import { DateTime } from 'luxon';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { datePickerTheme, useStyles } from '../../styles/StylePicker'

const Pickers = ({ localeId, timezone }) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(moment(new Date()).tz(timezone).format('yyyy-MM-DD'));

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
    <div className={classes.container}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={classes.date}>
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
              onAccept={(date => setSelectedDate(date))}
              keyboardIcon={false}
              cancelLabel=''
              okLabel=''

              rightArrowIcon={<ArrowRightIcon fontSize='small' className={classes.icon} />}

              leftArrowIcon={<ArrowLeftIcon fontSize='small'
                className={classes.icon} />}
            />
          </ThemeProvider>

        </div>

        <div className={classes.week}>
          w. {week + 1}
        </div>

        <div className={classes.time}>
          <ThemeProvider theme={datePickerTheme}>
            <TextField
              select
              value={selectedDate}
              SelectProps={{
                native: true,
                className: classes.selectTime,
              }}
              InputProps={{
                disableUnderline: true,
              }}
            >
              {hours.map((item, key) => (
                <option key={key} className={classes.timeOptions}>
                  {item}
                </option>
              ))}
            </TextField>

          </ThemeProvider>

        </div>

      </MuiPickersUtilsProvider>

    </div>
  )
}

export default Pickers
