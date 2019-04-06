import React from 'react';
import './subtitle.css';


function SubtitleComp(props){
    return <p className="subtitle">{props.children}</p>
}

export default SubtitleComp;