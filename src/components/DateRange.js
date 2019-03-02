import React from 'react';
import moment from 'moment'

let DateRange = (props) => {
  return (
    <div style={{'height': '120px', alignContent: 'center'}}> 
      <h5>
        Range of Dates
      </h5>
      <div>
        From: 
        <br/>
        {props.fromRange}
      </div>
      <div>
        To: 
        <br/>
        {props.toRange}
      </div>
    </div>
  )
};

export default DateRange;