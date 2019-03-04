import React from 'react';



let ActiveAccount = (props) => {
    return (
      <div className="container"> 
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