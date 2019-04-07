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
      <div style={{ width: 340, height: "100%" }}>
        <Collapsible
          open={true}
          trigger="Die 6 Gebote des Datenschutzes"
          triggerStyle={styles.collapsible}
          transitionTime={100}
        >
          <Collapsible
            open={true}
            trigger={'1. Gebot'}
            triggerStyle={styles.nestedCollapsible}
            transitionTime={100}
          >
            <Link onClick={() => navigateAction('/gebot1_verbot_mit_erlaubnis')} to={'/gebot1_verbot_mit_erlaubnis'} style={this.props.route === "/gebot1_verbot_mit_erlaubnis"? styles.active : styles.link}>
              <span style={styles.bullet}>a)</span>{'Verbot mit Erlaubnisvorbehalt'}
            </Link>
            <Link onClick={() => navigateAction('/quiz/gebot1_allgemein')} to={'/quiz/gebot1_allgemein'} style={this.props.route === "/quiz/gebot1_allgemein" ? styles.active : styles.link}>
              <span style={styles.bullet}>b)</span>{'Quiz: Grundlagen'}
            </Link>
            <Link onClick={() => navigateAction('/gebot1_erfüllung_vertrag')} to={'/gebot1_erfüllung_vertrag'} style={this.props.route === "/gebot1_erfüllung_vertrag" ? styles.active : styles.link}>
              <span style={styles.bullet}>c)</span>{'Erfüllung eines Vertrags'}
            
            </Link><Link onClick={() => navigateAction('/quiz/gebot1_vertrag')} to={'/quiz/gebot1_vertrag'} style={this.props.route === "/quiz/gebot1_vertrag" ? styles.active : styles.link}>
              <span style={styles.bullet}>d)</span>{'Quiz: Erfüllung eines Vertrags'}
            </Link>
            <Link onClick={() => navigateAction('/gebot1_einwilligung_betroffener')} to={'/gebot1_einwilligung_betroffener'} style={this.props.route === "/gebot1_einwilligung_betroffener" ? styles.active : styles.link}>
              <span style={styles.bullet}>e)</span> {'Einwilligung des Betroffenen'}
            </Link>
            <Link onClick={() => navigateAction('/quiz/gebot1_einwilligung')} to={'/quiz/gebot1_einwilligung'} style={this.props.route === "/quiz/gebot1_einwilligung" ? styles.active : styles.link}>
              <span style={styles.bullet}>f)</span> {'Quiz: Einwilligung des Betroffenen'}
            </Link>

            <Link onClick={() => navigateAction('/gebot1_berechtiges_interesse')} to={'/gebot1_berechtiges_interesse'} style={this.props.route === "/gebot1_berechtiges_interesse" ? styles.active : styles.link}>
              <span style={styles.bullet}>g)</span>{'Berechtigtes Interesse des Unternehmens'}
            </Link>
            <Link onClick={() => navigateAction('/quiz/gebot1_interesse')} to={'/quiz/gebot1_interesse'} style={this.props.route === "/quiz/gebot1_interesse" ? styles.active : styles.link}>
              <span style={styles.bullet}>h)</span>{'Quiz: Berechtiges Interesse'}
            </Link>
          </Collapsible>

          <Collapsible
            trigger={'2. Gebot'}
            triggerStyle={styles.nestedCollapsible}
            transitionTime={100}
          >
            <Link onClick={() => navigateAction('/gebot2_datensparsamkeit')} to={'/gebot2_datensparsamkeit'} style={this.props.route === "/gebot2_datensparsamkeit" ? styles.active : styles.link}>
              <span style={styles.bullet}>a)</span>{'Datensparsamkeit'}
            </Link>
            <Link onClick={() => navigateAction('/quiz/gebot2_allgemein')} to={'/quiz/gebot2_allgemein'} style={this.props.route === "/quiz/gebot2_allgemein" ? styles.active : styles.link}>
              <span style={styles.bullet}>a)</span>{'Quiz: Datensparsamkeit'}
            </Link>
            <Link onClick={() => navigateAction('/gebot2_recht_auf_vergessen')} to={'/gebot2_recht_auf_vergessen'} style={this.props.route === "/gebot2_recht_auf_vergessen" ? styles.active : styles.link}>
              <span style={styles.bullet}>b)</span>{'Recht auf Vergessen'}
            </Link>
            <Link onClick={() => navigateAction('/quiz/gebot2_vergessen')} to={'/quiz/gebot2_vergessen'} style={this.props.route === "/quiz/gebot2_vergessen" ? styles.active : styles.link}>
              <span style={styles.bullet}>b)</span>{'Quiz: Recht auf Vergessen'}
            </Link>

          </Collapsible>
          <Link onClick={() => navigateAction('/gebot3')} to={'/gebot3'} style={this.props.route === "/gebot3" ? styles.active : styles.link}>
            {'3. Gebot: Zweckbindung'}
          </Link>
          <Link onClick={() => navigateAction('/gebot4')} to={'/gebot4'} style={this.props.route === "/gebot4" ? styles.active : styles.link}>
            {'4. Gebot: Datensicherheit'}
          </Link>
          <Link onClick={() => navigateAction('/gebot5')} to={'/gebot5'} style={this.props.route === "/gebot5" ? styles.active : styles.link}>
            {'5. Gebot: Transparenz'}
          </Link>
          <Link onClick={() => navigateAction('/gebot6')} to={'/gebot6'} style={this.props.route === "/gebot6" ? styles.active : styles.link}>
            {'6. Gebot: Dokumentation'}
          </Link>
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

  nestedCollapsible: {
    fontSize: "14px",
    lineHeight: "30px",
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
  },
  active: {
    display: "block",
    backgroundColor : "rgba(0,0,0,0.1)",
    paddingLeft: "20px",
    fontSize: "14px",
    textDecoration: "none",
    color: "black",
    lineHeight: "30px"
  },
  bullet: {
    marginRight: "15px",
    marginLeft: "15px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "black",
    lineHeight: "30px"
  }
}

const mapStateToProps = state => ({
  route: state.navigation.route
});

const mapDispatchToProps = dispatch => bindActionCreators({ navigateAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SidebarComp);