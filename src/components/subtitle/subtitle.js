import './subtitle.css';
import React, { Component } from 'react';

/*
  @param subtitleText: text of subtitle
*/
function SubtitleComp(props) {
    return <p class="subtitle"><strong>{props.subtitleText}</strong></p>;
}

export default SubtitleComp;
