import React from 'react';
import logo from '../images/globuzzer logo.png';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link, makeStyles } from '@material-ui/core';

const Header = () => {
    const classes = useStyles();

    return (
        <Container fluid className={classes.container}>
            <Row style={{
                height: 68, alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Col md={{ span: 2, offset: 2 }} >
                    <Link href='https://globuzzer.com/' target='_blank'>
                        <Image src={logo} fluid style={{ width: '100%' }} />
                    </Link>
                </Col>
                <Col md={{ span: 1, offset: 7 }} className={classes.help}>
                    Help
                </Col>
            </Row>
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
