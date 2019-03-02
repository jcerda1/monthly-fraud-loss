import React from 'react';



let ActiveAccount = (props) => {
    return (
      <div style={{'height': '180px', alignContent: 'center'}}> 
        <h5>
           Active Accounts 
        </h5>
        <div>
          {props.active}
        </div>
      </div>
    )
};


export default ActiveAccount;