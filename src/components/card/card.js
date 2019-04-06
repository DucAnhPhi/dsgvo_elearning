import React, { Component } from 'react';
import './card.css'

/*
@param contentType: e.g. Video, Reading, ...
@param description: description of the card
@param hint: e.g. duration of lecture
 */
function CardComp(props) {
  return (<div class="card">
            <strong>{props.contentType}: </strong>
              <span>{props.description}</span>
              <span class="hint">{props.hint}</span>
          </div>)
}

export default CardComp
