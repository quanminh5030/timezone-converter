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

import { setHours, setMinutes } from 'date-fns';
import en from 'date-fns/locale/en-US';


const Pickers = ({ timezone, timeFormat, selectedDate, setSelectedDate }) => {
  const classes = useStyles();

  const week = DateTime.fromJSDate(new Date(selectedDate)).weekNumber;

  // const hours = [];

  // for (let hour = 0; hour < 24; hour++) {
  //   hours.push(moment().tz(timezone).add(hour, 'hour').format('hh:mm a'));
  // }


  const timeArr = []

  for (let index = 0; index < 24; index++) {
    const time = setHours(setMinutes(selectedDate, selectedDate.getMinutes()), index);

    timeArr.push(time);
  }

  return (
    <div className={classes.container}>

      <div className={classes.date}>
        <DatePicker
          className={classes.input}
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

          selected={moment(selectedDate).tz(timezone).subtract(3, 'hour')._d}

          locale={en}

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
{/* 
      <Button
        onClick={() => console.log(new Date(selectedDate).toLocaleString("en-US", {timeZone: timezone}))}
      >Test</Button>

    <Button
        onClick={() => console.log(new Date())}
      >Test2</Button> */}


    </div>
  )
}

export default Pickers
