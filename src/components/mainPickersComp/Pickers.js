import React, { useState } from 'react';
import moment from 'moment';
import 'moment-timezone';
import { Button, TextField, ThemeProvider } from '@material-ui/core';
import { DateTime } from 'luxon';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { datePickerTheme, useStyles } from '../../styles/StylePicker'

import DatePicker from 'react-datepicker';
import '../../styles/calendar.css';
import "react-datepicker/dist/react-datepicker.css";

import en from 'date-fns/locale/en-GB';
import { setHours, setMinutes } from 'date-fns';


const Pickers = ({ localeId, timezone, timeFormat }) => {
  const classes = useStyles();
  // const [selectedDate, setSelectedDate] = useState(moment(new Date()).tz(timezone));

  const [selectedDate, setSelectedDate] = useState(new Date());

  const week = DateTime.fromJSDate(new Date(selectedDate)).weekNumber;

  const hours = [];

  for (let hour = 0; hour < 24; hour++) {
    hours.push(moment().tz(timezone).add(hour, 'hour').format('hh:mm a'));
  }


  const timeArr = [
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 0),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 1),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 2),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 3),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 4),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 5),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 6),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 7),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 8),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 9),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 10),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 11),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 12),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 13),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 14),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 15),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 16),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 17),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 18),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 19),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 20),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 21),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 22),
    setHours(setMinutes(selectedDate, selectedDate.getMinutes()), 23),
  ]

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

          selected={moment(new Date(selectedDate)).tz(timezone).subtract(3, 'hour')._d}

          timeFormat={timeFormat}
          dateFormat={timeFormat}
          onChange={date => setSelectedDate(date)}

          showTimeSelect
          showTimeSelectOnly
          timeCaption=''

          timeIntervals={1000}

          includeTimes={timeArr}

          injectTimes={timeArr}

        />
      </div>


    </div>
  )
}

export default Pickers
