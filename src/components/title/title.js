import './title.css';
import React, { Component } from 'react';

/*
  @param class: css class
  @param titleText: text of title
*/
function Title(props) {
  if(props.class){
    return <h1 class={props.class}>{props.string}</h1>;
  } else{
    return <h1>{props.titleText}</h1>;
  }
}

export default Title;
