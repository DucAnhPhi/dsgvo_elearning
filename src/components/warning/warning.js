import React from 'react';

function WarningComp(props){
    return(
       <div style={styles.warning}>
        <span style={styles.strong}>Achtung: </span>
        {props.children}
       </div>
    )
}

const styles = {
    strong: {
        fontSize: "1.25em",
        fontWeight: 'bold',
        color: "#002a00"
    },
    warning: {
        background: "rgba(230, 90, 90, 0.7)",
        padding: "15px",
        marginBottom: '20px'
    }
};

export default WarningComp;