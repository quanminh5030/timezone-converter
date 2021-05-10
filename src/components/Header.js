import React from 'react';
import logo from '../images/globuzzer logo.png';
import { Container, Image } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core';

const Header = ({ weather }) => {
    const classes = useStyles();

    return (
        <Container fluid className={classes.container}>
            <div>
                <a href='https://globuzzer.com/' target='blank'>
                    <Image src={logo} className={classes.logo} />
                </a>
            </div>
            <div className={classes.help}>
                <img src={weather.img} alt='weather icon' style={{ paddingRight: 10, }} />
                <span>{weather.temp}℃</span>
            </div>
        </Container>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#333',
        opacity: 0.6,
        height: 68,
        alignItems: 'center',
        justifyContent: 'space-around',
        display: 'flex'
    },

    help: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    },

    logo: {
        width: 150,
        height: 20
    }

}))

export default Header
