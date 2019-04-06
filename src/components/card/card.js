import React, { Component } from 'react';
import './card.css'


function CardComp(props) {
  return(
    <div class="card">
      {props.children}
    </div>
    )
}

export default CardComp
