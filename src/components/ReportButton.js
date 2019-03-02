import React from 'react';
import { Button } from 'react-bootstrap'

let ReportButton = (props) => {
  return (
    <div >
      <Button variant={props.variant}>
        {props.value}
      </Button>
    </div>
   
  )
}

export default ReportButton;