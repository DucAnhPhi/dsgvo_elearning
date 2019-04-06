import React from 'react';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { navigateAction } from '../../store/navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class SidebarComp extends React.Component {
    render() {
        const navigateAction = this.props.navigateAction
        return (
          <div style={{width:280, height:"100%"}}>
            <Collapsible
              trigger="Die 6 Gebote des Datenschutzes"
              triggerStyle={styles.collapsible}
              transitionTime={100}
            >
              <Link onClick={() => navigateAction('/gebot1')} to={'/gebot1'} style={styles.link}>{'1. Gebot: Verbot mit Erlaubnisvorbehalt'}</Link>
              <Link onClick={() => navigateAction('/gebot2')} to={'/gebot2'} style={styles.link}>{'2. Gebot: Datensparsamkeit'}</Link>
              <Link onClick={() => navigateAction('/gebot3')} to={'/gebot3'} style={styles.link}>{'3. Gebot: Zweckbindung'}</Link>
              <Link onClick={() => navigateAction('/gebot4')} to={'/gebot4'} style={styles.link}>{'4. Gebot: Datensicherheit'}</Link>
              <Link onClick={() => navigateAction('/gebot5')} to={'/gebot5'} style={styles.link}>{'5. Gebot: Transparenz'}</Link>
              <Link onClick={() => navigateAction('/gebot6')} to={'/gebot6'} style={styles.link}>{'6. Gebot: Dokumentation'}</Link>
            </Collapsible>
          </div>
        );
    }
}

SidebarComp.propTypes = {
    route: PropTypes.string,
    navigateAction: PropTypes.func
};

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

const mapStateToProps = state => ({
    route: state.navigation.route
});

const mapDispatchToProps = dispatch => bindActionCreators({ navigateAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SidebarComp);