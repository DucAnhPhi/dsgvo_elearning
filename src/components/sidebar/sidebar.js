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
      <div style={{ width: 360, height: "100%" }}>
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
            <Link onClick={() => navigateAction('/gebot1_verbot_mit_erlaubnis')} to={'/gebot1_verbot_mit_erlaubnis'} style={this.props.route === "/gebot1_verbot_mit_erlaubnis" || !this.props.route ? styles.active : styles.link}>
              <span style={styles.bullet}>a)</span>{'Verbot mit Erlaubnisvorbehalt'}
            </Link>
            <Link onClick={() => navigateAction('/quiz/gebot1_allgemein')} to={'/quiz/gebot1_allgemein'} style={Object.assign({}, this.props.route === "/quiz/gebot1_allgemein" ? styles.active : styles.link, styles.quiz)}>
              <img src={require('./quiz.png')} style={{height: '20px', width: '20px', marginLeft: '11px', marginRight: '11px'}}/>{'Quiz: Grundlagen'}
            </Link>
            <Link onClick={() => navigateAction('/gebot1_erfüllung_vertrag')} to={'/gebot1_erfüllung_vertrag'} style={this.props.route === "/gebot1_erfüllung_vertrag" ? styles.active : styles.link}>
              <span style={styles.bullet}>b)</span>{'Erfüllung eines Vertrags'}
            
            </Link><Link onClick={() => navigateAction('/quiz/gebot1_vertrag')} to={'/quiz/gebot1_vertrag'} style={Object.assign({}, this.props.route === '/quiz/gebot1_vertrag' ? styles.active : styles.link, styles.quiz)}>
            <img src={require('./quiz.png')} style={{height: '20px', width: '20px', marginLeft: '11px', marginRight: '11px'}}/>{'Quiz: Erfüllung eines Vertrags'}
            </Link>
            <Link onClick={() => navigateAction('/gebot1_einwilligung_betroffener')} to={'/gebot1_einwilligung_betroffener'} style={this.props.route === '/gebot1_einwilligung_betroffener' ? styles.active : styles.link}>
              <span style={styles.bullet}>d)</span> {'Einwilligung des Betroffenen'}
            </Link>
            <Link onClick={() => navigateAction('/quiz/gebot1_einwilligung')} to={'/quiz/gebot1_einwilligung'} style={Object.assign({}, this.props.route === '/quiz/gebot1_einwilligung' ? styles.active : styles.link, styles.quiz)}>
            <img src={require('./quiz.png')} style={{height: '20px', width: '20px', marginLeft: '11px', marginRight: '11px'}}/>{'Quiz: Einwilligung des Betroffenen'}
            </Link>

            <Link onClick={() => navigateAction('/gebot1_berechtiges_interesse')} to={'/gebot1_berechtiges_interesse'} style={this.props.route === "/gebot1_berechtiges_interesse" ? styles.active : styles.link}>
              <span style={styles.bullet}>f)</span>{'Berechtigtes Interesse des Unternehmens'}
            </Link>
            <Link onClick={() => navigateAction('/quiz/gebot1_interesse')} to={'/quiz/gebot1_interesse'} style={Object.assign({}, this.props.route === '/quiz/gebot1_interesse' ? styles.active : styles.link, styles.quiz)}>
            <img src={require('./quiz.png')} style={{height: '20px', width: '20px', marginLeft: '11px', marginRight: '11px'}}/>{'Quiz: Berechtiges Interesse'}
            </Link>
          </Collapsible>

          <Collapsible
            open={true}
            trigger={'2. Gebot'}
            triggerStyle={styles.nestedCollapsible}
            transitionTime={100}
          >
            <Link onClick={() => navigateAction('/gebot2_datensparsamkeit')} to={'/gebot2_datensparsamkeit'} style={this.props.route === "/gebot2_datensparsamkeit" ? styles.active : styles.link}>
              <span style={styles.bullet}>a)</span>{'Datensparsamkeit'}
            </Link>
            <Link onClick={() => navigateAction('/quiz/gebot2_allgemein')} to={'/quiz/gebot2_allgemein'} style={Object.assign({}, this.props.route === '/quiz/gebot2_allgemein' ? styles.active : styles.link, styles.quiz)}>
            <img src={require('./quiz.png')} style={{height: '20px', width: '20px', marginLeft: '11px', marginRight: '11px'}}/>{'Quiz: Datensparsamkeit'}
            </Link>
            <Link onClick={() => navigateAction('/gebot2_recht_auf_vergessen')} to={'/gebot2_recht_auf_vergessen'} style={this.props.route === "/gebot2_recht_auf_vergessen" ? styles.active : styles.link}>
              <span style={styles.bullet}>b)</span>{'Recht auf Vergessen'}
            </Link>
            <Link onClick={() => navigateAction('/quiz/gebot2_vergessen')} to={'/quiz/gebot2_vergessen'} style={Object.assign({}, this.props.route === '/quiz/gebot2_vergessen' ? styles.active : styles.link, styles.quiz)}>
            <img src={require('./quiz.png')} style={{height: '20px', width: '20px', marginLeft: '11px', marginRight: '11px'}}/>{'Quiz: Recht auf Vergessen'}
            </Link>

          </Collapsible>
          <Link style={styles.mock}>
            {'3. Gebot: Zweckbindung'}
          </Link>
          <Link style={styles.mock}>
            {'4. Gebot: Datensicherheit'}
          </Link>
          <Link style={styles.mock}>
            {'5. Gebot: Transparenz'}
          </Link>
          <Link style={styles.mock}>
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
    fontSize: "16px",
    lineHeight: "50px",
    fontWeight: "bold",
    paddingLeft: "20px"
  },

  nestedCollapsible: {
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
  },
  quiz: {
    display: 'flex',
    alignItems: 'center'
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
  },
  mock: {
    display: 'block',
    textDecoration: 'none',
    color: 'black',
    fontSize: "14px",
    lineHeight: "50px",
    fontWeight: "bold",
    paddingLeft: "20px"
  }
}

const mapStateToProps = state => ({
  route: state.navigation.route
});

const mapDispatchToProps = dispatch => bindActionCreators({ navigateAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SidebarComp);