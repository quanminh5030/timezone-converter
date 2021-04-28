import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import icon from '../images/gb_logo.png';

const MyClock = () => {
    const classes = useStyles();

    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(
            () => setValue(new Date()),
            1000
        );

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <Clock
            value={value}
            size={80}
            className={classes.clock}
            secondHandLength={70}
            minuteMarksWidth={0}
            hourMarksWidth={0}
            minuteHandWidth={4}
            secondHandWidth={2}

        
        />
    )
}

const useStyles = makeStyles(theme => ({
    clock: {
        backgroundImage: `url(${icon})`,
        backgroundSize: 'cover',
        opacity: 0.8,
        borderRadius: 106,
        border: '1px solid #172839'
    }
}))

export default MyClock
