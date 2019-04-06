import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import Gebot1View from './views/gebot1/gebot1';
import Gebot2View from './views/gebot2/gebot2';
import Gebot3View from './views/gebot3/gebot3';
import Gebot4View from './views/gebot4/gebot4';
import Gebot5View from './views/gebot5/gebot5';
import Gebot6View from './views/gebot6/gebot6';
import FrageAbteilungView from './views/frageAbteilung/frageAbteilung';
import FrageAdresseView from './views/frageAdresse/frageAdresse';
import FrageReligionView from './views/frageReligion/frageReligion';
import FrageIPView from './views/frageIP/frageIP';
import FrageEmailView from './views/frageEmail/frageEmail';
import Modal from 'react-modal';
import OnboardingView from './views/onboarding/onboarding';
import FinishOnboardingView from './views/finishOnboarding/finishOnboarding';
import SidebarComp from './components/sidebar/sidebar';

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
    return(
      <Modal style={{overlay: { zIndex: 1000 }}} isOpen={this.state.showModal}>
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
            sidebar={<SidebarComp/>}
            docked={true}
            defaultSidebarWidth={250}
          >
            <Route
              path="/"
              component={() => this.renderViewInModal(<OnboardingView/>)}
            />
            <Route
              path="/frageAbteilung"
              component={() => this.renderViewInModal(<FrageAbteilungView />)}
            />
            <Route
              path="/frageAdresse"
              component={() => this.renderViewInModal(<FrageAdresseView/>)}
            />
            <Route
              path="/frageReligion"
              component={() => this.renderViewInModal(<FrageReligionView />)}
            />
            <Route
              path="/frageIP"
              component={() => this.renderViewInModal(<FrageIPView/>)}
            />
            <Route
              path="/frageEmail"
              component={() => this.renderViewInModal(<FrageEmailView />)}
            />
            <Route
              path="/finishOnboarding"
              component={() => this.renderViewInModal(<FinishOnboardingView />, true)}
            />
            <Route path="/gebot1" component={Gebot1View} />
            <Route path="/gebot2" component={Gebot2View} />
            <Route path="/gebot3" component={Gebot3View} />
            <Route path="/gebot4" component={Gebot4View} />
            <Route path="/gebot5" component={Gebot5View} />
            <Route path="/gebot6" component={Gebot6View} />
          </Sidebar>
        </div>
      </Router>
    );
  }
}

export default App;
