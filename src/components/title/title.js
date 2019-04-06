import './title.css';
import React, { Component } from 'react';


function Title(props) {
  return <h1 class='title'>{props.children}</h1>;
}

export default Title;
