import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
    TimePicker
} from '@material-ui/pickers';
import 'moment-timezone';
import { makeStyles } from '@material-ui/core';
import { DateTime } from 'luxon';

const Pickers = ({ localeId, timezone }) => {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = useState(new Date());

    const week = DateTime.fromJSDate(new Date(selectedDate)).weekNumber;


    const dateChange = event => {

    }


    return (
        <div style={{ display: 'inline-block', backgroundColor: '#cc4141', padding: '0px 5px 0px 0px' }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div style={{ float: 'left', boxSizing: 'border-box', width: '50%' }}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="dialog"
                        format="yyyy-MM-dd"
                        margin="normal"
                        value={selectedDate}
                        onChange={dateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                            className: classes.titleHome
                        }}
                        InputProps={{ className: classes.titleHome }}
                        InputLabelProps={{ className: classes.titleHome }}
                        onAccept={(date => setSelectedDate(date))}
                        keyboardIcon={false}
                    />

                </div>

                <div style={{ float: 'left', width: '20%', padding: '0px 5px 0px 0px', boxSizing: 'border-box' }}>
                    w. {week + 1}
                </div>

                <div style={{ float: 'right', width: '30%', padding: '0px 0px 0px 5px', boxSizing: 'border-box' }}>
                    <TimePicker
                        clearable
                        initialFocusedDate={(new Date()).toLocaleString({ localeId }, { timeZone: timezone })}
                    />
                </div>

            </MuiPickersUtilsProvider>

        </div>
    )
}

const useStyles = makeStyles(theme => ({
    titleHome: {

    }
}))

export default Pickers
