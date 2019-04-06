import React from 'react';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';

function SidebarComponent() {
    return (
      <div style={{width:280, height:"100%"}}>
        <Collapsible
          trigger="Die 6 Gebote des Datenschutzes"
          triggerStyle={styles.collapsible}
          transitionTime={100}
        >
          <Link className="App-header" to={'/gebot1'} style={styles.link}>{'1. Gebot: Verbot mit Erlaubnisvorbehalt'}</Link>
          <Link className="App-header" to={'/gebot2'} style={styles.link}>{'2. Gebot: Datensparsamkeit'}</Link>
          <Link className="App-header" to={'/gebot3'} style={styles.link}>{'3. Gebot: Zweckbindung'}</Link>
          <Link className="App-header" to={'/gebot4'} style={styles.link}>{'4. Gebot: Datensicherheit'}</Link>
          <Link className="App-header" to={'/gebot5'} style={styles.link}>{'5. Gebot: Transparenz'}</Link>
          <Link className="App-header" to={'/gebot6'} style={styles.link}>{'6. Gebot: Dokumentation'}</Link>
        </Collapsible>
      </div>
    );
}

const styles = {
    collapsible: {
        fontSize: "14px",
        lineHeight: "50px",
        fontWeight: "bold",
        paddingLeft: "20px"
    },
    link: {
        display: "block",
        paddingLeft: "20px",
        fontSize: "14px",
        textDecoration: "none",
        color: "black",
        lineHeight: "30px"
    }
}

export default SidebarComponent