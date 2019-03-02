import React from 'react';



let ActiveAccount = (props) => {
    return (
      <div style={{'height': '150px', alignContent: 'center'}}> 
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