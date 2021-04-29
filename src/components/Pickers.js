import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
    DatePicker,
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
    TimePicker
} from '@material-ui/pickers';
import 'moment-timezone';

const Pickers = ({localeId, timezone}) => {
    const [open, setOpen] = useState(false);

    const setPickerStatus = status => setOpen(status);


    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                format='yyyy-MM-dd'
                disableToolbar
                variant='inline'
                keyboardIcon={false}
                onChange={text => console.log(text)}
                onClick={() => setPickerStatus(true)}
                onClose={() => setPickerStatus(false)}
                open={open}
            />

        

            <TimePicker 
                clearable
                initialFocusedDate={(new Date()).toLocaleString({localeId}, {timeZone: timezone})}
            />
        </MuiPickersUtilsProvider>
    )
}

export default Pickers
