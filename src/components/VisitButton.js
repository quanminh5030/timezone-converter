import React from 'react';
import { Link, makeStyles } from '@material-ui/core';
import { Button} from 'react-bootstrap';

const VisitButton = ({link, country}) => {
    const classes = useStyles();

    return (
        <div className='d-flex justify-content-center' style={{ position: 'fixed', bottom: 18, width: '100%' }}>
            <Link href={link} target='_blank'>
                <Button className={classes.button}>
                    Discover {country}
                </Button>
            </Link>
        </div>
    )
}

const useStyles = makeStyles(theme => ({

    button: {
        backgroundColor: '#cc4747',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        borderRadius: 20,
        border: 'solid 1px white',
        opacity: 0.9,
        paddingLeft: 40,
        paddingRight: 40,
        color: 'white',
        '&:hover': {
            backgroundColor: '#cc4747',
            border: 'solid 1px white',
        },
        '&:focus': {
            backgroundColor: '#cc4747',
            border: 'solid 1px white',
        },
        '&:active': {
            backgroundColor: '#cc4747',
            border: 'solid 1px white',
        },


    }
}))

export default VisitButton
