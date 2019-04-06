import React, { Component } from 'react';
import './subtitle.css';


function SubtitleComp(props){
    return <p class="subtitle">{props.children}</p>
}

export default SubtitleComp;