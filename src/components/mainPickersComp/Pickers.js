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

  const week = DateTime.fromJSDate(new Date(selectedDate)).weekNumber;

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
        w. {week}
      </div>

      <div className={classes.time}>
        <DatePicker
          className={classes.input}

          selected={selectedDate}

          timeFormat={timeFormat}
          dateFormat={timeFormat}

          locale={en}

          onChange={date => setSelectedDate(date)}

          showTimeSelect
          showTimeSelectOnly
          timeCaption=''

          timeIntervals={1000}

          includeTimes={timeArr}

          injectTimes={timeArr}
        />
      </div>
      
      {/* <Button
        onClick={() => console.log((new Date(selectedDate).toLocaleString("en-GB", {timeZone: timezone})))}
      >Test</Button>

    <Button
        onClick={() => console.log(moment(selectedDate).tz(timezone).toString())}
      >Test2</Button> */}


    </div>
  )
}

export default Pickers