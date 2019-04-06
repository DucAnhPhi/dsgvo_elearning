import React from 'react';
import './card.css'


function CardComp(props) {
  return(
    <div className="card">
      {props.children}
    </div>
    )
}

export default CardComp
