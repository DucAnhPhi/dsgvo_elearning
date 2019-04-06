import React, { Component } from 'react';
import './warning.css';
import TextComp from '../text/text'

function WarningComp(props){
    return(
       <p class="text warning">
        <strong>Achtung: </strong>
        {props.children}
       </p>
    )
}

export default WarningComp;