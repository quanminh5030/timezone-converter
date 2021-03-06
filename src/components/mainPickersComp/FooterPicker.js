import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core';

import AddCalendar from './AddCalendar';

const FooterPicker = ({ setTimeFormat, date, timezone }) => {
  const classes = useStyles();

  const [isTwelveFormat, setIsTwelveFormat] = useState(true);
  const [open, setOpen] = useState(false);

  const handleTwelveClick = () => {
    setIsTwelveFormat(true);
    setTimeFormat('hh:mm a');
  }

  const handleTwentyFourClick = () => {
    setIsTwelveFormat(false)
    setTimeFormat('HH:mm a');
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }


  return (
    <div>
      <Row style={{ marginTop: 8 }}>
        <Col md={{span: 6, offset: 1}} xs={7}></Col>
        <Col md={1} xs={1} style={{marginLeft: 12}}>
          <i className="fa fa-calendar" aria-hidden="true" style={{ fontSize: 20, cursor: 'pointer' }} onClick={handleOpen}></i>

          <AddCalendar
            open={open}
            handleClose={handleClose}
            date={date}
            timezone={timezone}

          />

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
    padding: '2px 3px 3px 3px',
    border: '1px solid white',
    borderRadius: 4,
    fontSize: 10,
    cursor: 'pointer',
    margin: '3px 0 10px',
    height: 21
  }
}))

export default FooterPicker
