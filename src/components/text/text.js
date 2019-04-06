import React from 'react';
import './text.css'


function TextComp(props){
    return <div className="text">{props.children}</div>
}

export default TextComp;