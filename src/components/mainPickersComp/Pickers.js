import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import { Button } from '@material-ui/core';
import { DateTime } from 'luxon';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { useStyles } from '../../styles/StylePicker'
import DatePicker from 'react-datepicker';
import '../../styles/calendar.css';
import "react-datepicker/dist/react-datepicker.css";

import { setHours, setMinutes } from 'date-fns';
import en from 'date-fns/locale/en-GB';


const Pickers = ({ timezone, timeFormat, selectedDate, setSelectedDate }) => {
  const classes = useStyles();

  //get week number
  const week = DateTime.fromJSDate(new Date(selectedDate)).weekNumber;

  //create time pickers options
  const timeArr = []
  for (let index = 0; index < 24; index++) {
    if (selectedDate) {
      const time = setHours(setMinutes(selectedDate, selectedDate.getMinutes()), index);
      timeArr.push(time);
    }
  }

  //when user select time
  const handleDateChange = time => {
    console.log(time);
    console.log(timezone)
    setSelectedDate(time)
  }

  return (
    <div className={classes.container}>

      <div className={classes.date}>
        <DatePicker
          className={classes.input}
          locale={en}
          selected={selectedDate && new Date(DateTime.fromJSDate(selectedDate).setZone(timezone).toISO().slice(0, 23))}
          onChange={date => setSelectedDate(date)}
          dateFormat='yyyy-MM-dd'
          showWeekNumbers
          placeholderText='yyyy-mm-dd'
          weekLabel='WK'
          renderCustomHeader={({ decreaseMonth, increaseMonth, date }) => (
            <div className={classes.customHeader}>
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
        w. {week}
      </div>

      <div className={classes.time}>
        <DatePicker
          className={classes.input}

          selected={selectedDate && new Date(DateTime.fromJSDate(selectedDate).setZone(timezone).toISO().slice(0, 23))}
          timeFormat={timeFormat}
          dateFormat={timeFormat}

          onChange={handleDateChange}

          placeholderText='hh:mm'
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
