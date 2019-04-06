import React from 'react';
import './button.css'


function ButtonComp(props) {
  return(
    <button className="button" disabled={props.disabled} style={props.customStyles}>
      {props.children}
    </button>
  );
}

export default ButtonComp
