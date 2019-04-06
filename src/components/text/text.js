import React, { Component } from 'react';
import './text.css'


function TextComp(props){
    return <p class="text">{props.text}</p>
}

export default TextComp;