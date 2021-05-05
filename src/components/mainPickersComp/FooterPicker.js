import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';

const FooterPicker = ({setTimeFormat}) => {
    const classes = useStyles();

    const [isTwelveFormat, setIsTwelveFormat] = useState(true);

    const handleTwelveClick = () => {
        setIsTwelveFormat(true);
        setTimeFormat('hh:mm a');
    }

    const handleTwentyFourClick = () => {
        setIsTwelveFormat(false)
        setTimeFormat('HH:mm a');
    }

    return (
        <div>
            <Row style={{ marginTop: 8 }}>
                <Col md={8} xs={8}></Col>
                <Col md={1} xs={1}>
                    <i className="fa fa-calendar" aria-hidden="true" style={{ fontSize: 20 }}></i>
                </Col>


                <div
                    className={classes.format}
                    onClick={handleTwelveClick}
                    style={isTwelveFormat ?
                        { color: 'white', backgroundColor: '#cc4141', marginLeft: 15 } :
                        { color: '#cc4141', backgroundColor: 'white', marginLeft: 15 }}>
                    12
                    </div>

                <div
                    className={classes.format}
                    onClick={handleTwentyFourClick}
                    style={isTwelveFormat ?
                        { color: '#cc4141', backgroundColor: 'white', } :
                        { color: 'white', backgroundColor: '#cc4141', }}>
                    24
                    </div>

            </Row>
        </div >
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: 'white',
        opacity: 0.9,
        borderRadius: '8%',
        width: '100%',
        maxWidth: 350,
    },

    format: {
        padding: 3,
        border: '1px solid white',
        borderRadius: 4,
        fontSize: 10,
        cursor: 'pointer',
        marginBottom: 10,
        marginTop: 5
    }
}))

export default FooterPicker
