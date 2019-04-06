import React from 'react';
import './warning.css';

function WarningComp(props){
    return(
       <div className="text warning">
        <strong>Achtung: </strong>
        {props.children}
       </div>
    )
}

export default WarningComp;