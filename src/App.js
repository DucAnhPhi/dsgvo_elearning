import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import Gebot3View from './views/gebot3/gebot3';
import Gebot4View from './views/gebot4/gebot4';
import Gebot5View from './views/gebot5/gebot5';
import Gebot6View from './views/gebot6/gebot6';
import FrageAbteilungView from './views/onboarding/frageAbteilung';
import FrageAdresseView from './views/onboarding/frageAdresse';
import FrageReligionView from './views/onboarding/frageReligion';
import FrageIPView from './views/onboarding/frageIP';
import FrageEmailView from './views/onboarding/frageEmail';
import Modal from 'react-modal';
import OnboardingView from './views/onboarding/start/onboarding';
import FinishOnboardingView from './views/onboarding/finish/finishOnboarding';
import BerechtigtesInteresseView from './views/gebot1/berechtigtes_interesse';
import EinwilligungBetroffenerView from './views/gebot1/einwilligung_betroffener';
import ErfüllungVertragView from './views/gebot1/erfüllung_vertrag';
import SidebarComp from './components/sidebar/sidebar';
import VerbotMitErlaubnisView from './views/gebot1/verbot_mit_erlaubnis';
import DatensparsamkeitView from './views/gebot2/datensparsamkeit';
import RechtAufVergessenView from './views/gebot2/recht_auf_vergessen';
import QuizView from './views/quiz';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: true
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.renderViewInModal = this.renderViewInModal.bind(this);
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  renderViewInModal(view, close) {
    return (
      <Modal style={{ overlay: { zIndex: 1000 } }} isOpen={this.state.showModal}>
        {view}
        {close && <button onClick={this.handleCloseModal}>close</button>}
      </Modal>
    );
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar
            sidebar={<SidebarComp />}
            docked={true}
            defaultSidebarWidth={250}
          >
            <Route
              path="/"
              component={() => this.renderViewInModal(<OnboardingView />)}
            />
            <Route
              path="/frageAbteilung"
              component={() => this.renderViewInModal(<FrageAbteilungView />)}
            />
            <Route
              path="/frageAdresse"
              component={() => this.renderViewInModal(<FrageAdresseView />)}
            />
            <Route
              path="/frageReligion"
              component={() => this.renderViewInModal(<FrageReligionView />)}
            />
            <Route
              path="/frageIP"
              component={() => this.renderViewInModal(<FrageIPView />)}
            />
            <Route
              path="/frageEmail"
              component={() => this.renderViewInModal(<FrageEmailView />)}
            />
            <Route
              path="/finishOnboarding"
              component={() => this.renderViewInModal(<FinishOnboardingView />, true)}
            />
            <Route path="/gebot1_verbot_mit_erlaubnis" component={VerbotMitErlaubnisView} />
            <Route path="/gebot1_berechtiges_interesse" component={BerechtigtesInteresseView} />
            <Route path="/gebot1_einwilligung_betroffener" component={EinwilligungBetroffenerView} />
            <Route path="/gebot1_erfüllung_vertrag" component={ErfüllungVertragView} />
            <Route path="/gebot2_datensparsamkeit" component={DatensparsamkeitView} />
            <Route path="/gebot2_recht_auf_vergessen" component={RechtAufVergessenView} />
            <Route path="/gebot3" component={Gebot3View} />
            <Route path="/gebot4" component={Gebot4View} />
            <Route path="/gebot5" component={Gebot5View} />
            <Route path="/gebot6" component={Gebot6View} />
            <Route path="/quiz/:id" component={QuizView} />
          </Sidebar>
        </div>
      </Router>
    );
  }
}

export default App;
