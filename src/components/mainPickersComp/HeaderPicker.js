import { Link, makeStyles } from '@material-ui/core';
import React from 'react'
import MyClock from './MyClock';

const HeaderPicker = () => {
    const classes = useStyles();

    return (
        <div className='align-items-center justify-content-center' style={{ display: 'flex', padding: '10% 5% 3% 5%' }}>

            <p className={classes.title}>
                TIME ZONE CONVERTER
            </p>

            <Link href='https://globuzzer.mn.co/' target='_blank'>
                <MyClock />
            </Link>

        </div>
    )
}

const useStyles = makeStyles(theme => ({

    title: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#cf4848',
    },
}
))


export default HeaderPicker
