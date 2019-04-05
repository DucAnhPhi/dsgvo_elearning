import './title.css';
import React, { Component } from 'react';

/*
  @param titleText: text of title
*/
function TitleComp(props) {
    return <h1 class="title">{props.titleText}</h1>;
}

export default TitleComp;
