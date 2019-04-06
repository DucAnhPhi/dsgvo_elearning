import React, { Component } from 'react';
import './text.css'


function TextComp(props){
    return <p class="text">{props.children}</p>
}

export default TextComp;