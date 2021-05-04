import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import moment from 'moment';
import 'moment-timezone';
import { Button, TextField, ThemeProvider } from '@material-ui/core';
import { DateTime } from 'luxon';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { datePickerTheme, useStyles } from '../../styles/StylePicker'

import DatePicker, { registerLocale } from 'react-datepicker';
import '../../styles/calendar.css';
import "react-datepicker/dist/react-datepicker.css";

import en from 'date-fns/locale/en-GB';



const Pickers = ({ localeId, timezone }) => {
  const classes = useStyles();
  // const [selectedDate, setSelectedDate] = useState(moment(new Date()).tz(timezone));

  const [selectedDate, setSelectedDate] = useState(new Date());

  const week = DateTime.fromJSDate(new Date(selectedDate)).weekNumber;

  const dateChange = date => {
    console.log(date)
  }

  const hours = [];

  moment.locale(localeId);

  for (let hour = 0; hour < 24; hour++) {
    hours.push(moment().tz(timezone).add(hour, 'hour').format('hh:mm A'));
  }

  return (
    <div className={classes.container}>

      <div className={classes.date}>
        <DatePicker
          className={classes.input}
          locale={en}
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat='yyyy-MM-dd'
          showWeekNumbers
          placeholderText='yyyy-mm-dd'
          weekLabel='WK'
          renderCustomHeader={({ decreaseMonth, increaseMonth, date }) => (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold', fontSize: '18px' }}>
              <Button onClick={decreaseMonth} size='small'>
                <ArrowLeftIcon className={classes.icon} />
              </Button>

              <span>{moment(date).format('MMM YYYY')}</span>

              <Button onClick={increaseMonth}>
                <ArrowRightIcon className={classes.icon} />
              </Button>
            </div>
          )}


        />
      </div>

      <div className={classes.week}>
        w. {week + 1}
      </div>

      {/* <div className={classes.time}>
          <ThemeProvider theme={datePickerTheme}>
            <TextField
              select
              value={moment(selectedDate).format('hh:mm A')}
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
        </div> */}

      <div className={classes.time}>
        <DatePicker
          className={classes.input}
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          timeCaption=''
          showTimeSelect
          showTimeSelectOnly

          timeIntervals={60}
          dateFormat='hh:mm aa'
        />
      </div>


    </div>
  )
}

export default Pickers
