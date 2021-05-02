import React from 'react';
import logo from '../images/globuzzer logo.png';
import { Container, Image } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core';

const Header = () => {
    const classes = useStyles();

    return (
        <Container fluid className={classes.container}>
            <div style={{
                height: 68, alignItems: 'center',
                justifyContent: 'space-around',
                display: 'flex'
            }}>
                <div md={{ span: 2, offset: 2 }} >
                    <a href='https://globuzzer.com/' target='_blank'>
                        <Image src={logo} style={{width: 150, height: 20}} />
                    </a>
                </div>
                <div md={{ span: 1, offset: 7 }} className={classes.help}>
                    Help
                </div>
            </div>
        </Container>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#333',
        opacity: 0.6,
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },

    help: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    },

}))

export default Header
