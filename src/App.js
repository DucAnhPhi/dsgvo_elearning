import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import Gebot3View from './views/gebot3/gebot3';
import Gebot4View from './views/gebot4/gebot4';
import Gebot5View from './views/gebot5/gebot5';
import Gebot6View from './views/gebot6/gebot6';
import FrageAbteilungView from './views/frageAbteilung/frageAbteilung';
import FrageAdresseView from './views/frageAdresse/frageAdresse';
import FrageReligionView from './views/frageReligion/frageReligion';
import FrageIPView from './views/frageIP/frageIP';
import FrageEmailView from './views/frageEmail/frageEmail';
import BerechtigtesInteresseView from './views/gebot1/berechtigtes_interesse';
import EinwilligungBetroffenerView from  './views/gebot1/einwilligung_betroffener';
import ErfüllungVertragView from './views/gebot1/erfüllung_vertrag';
import SidebarComp from './components/sidebar/sidebar';
import VerbotMitErlaubnisView from './views/gebot1/verbot_mit_erlaubnis';
import DatensparsamkeitView from './views/gebot2/datensparsamkeit';
import RechtAufVergessenView from './views/gebot2/recht_auf_vergessen';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar
            sidebar={<SidebarComp/>}
            docked={true}
            defaultSidebarWidth={250}
          >
            <Route path="/frageAbteilung" component={FrageAbteilungView} />
            <Route path="/frageAdresse" component={FrageAdresseView} />
            <Route path="/frageReligion" component={FrageReligionView} />
            <Route path="/frageIP" component={FrageIPView} />
            <Route path="/frageEmail" component={FrageEmailView} />
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
          </Sidebar>
        </div>
      </Router>
    );
  }
}

export default App;
