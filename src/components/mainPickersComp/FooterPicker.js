import { Link, makeStyles } from '@material-ui/core';
import React from 'react'
import { Col, Row } from 'react-bootstrap';

const FooterPicker = () => {
    const classes = useStyles();

    return (
        <div>
            <Row style={{ marginTop: 10 }}>
                <Col md={8} xs={8}></Col>
                <Col md={1} xs={1}>
                    <i className="fa fa-calendar" aria-hidden="true" style={{ fontSize: 20 }}></i>
                </Col>

                <Col md={1} xs={1}>
                    <Link href='#' className={classes.format} style={{ color: 'white', backgroundColor: '#cc4141', }}>
                        12
                    </Link>
                </Col>

                <Col md={1} xs={1} style={{ paddingLeft: 2, marginBottom: 15 }}>
                    <Link href='#' className={classes.format} style={{ color: '#cc4141', backgroundColor: 'white', }}>
                        24
                    </Link>
                </Col>
            </Row>
        </div>
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
        fontSize: 10
    }
}))

export default FooterPicker
