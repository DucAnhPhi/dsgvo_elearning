import React from 'react';
import TitleComp from '../../../components/title/title';
import TextComp from '../../../components/text/text';
import ButtonComp from '../../../components/button/button';
import { Link } from 'react-router-dom';

class OnboardingView extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div style={styles.onboarding}>
                <img style={styles.logo} src={require('../../../resources/images/logo.png')}></img>
                <TextComp style={styles.bottomSpace}>
                    Zunächst beantworten Sie einige Fragen zu Ihrem Arbeitsbereich.
                    <br/>Wir ermitteln dann aus Ihren Antworten Ihren persönlichen Lehrplan.
                </TextComp>
                <Link to="/frageAbteilung" style={styles.next}>
                    <ButtonComp>Fragebogen starten</ButtonComp>
                </Link>
            </div>
        );
    }
}

const styles = {
    logo: {
        margin: '0 auto',
        display: 'block'
    },
    onboarding: {
        margin: '0 auto',
        textAlign: 'center',
        width: '700px'
    },
    bottomSpace: {
        marginBottom: '30px'
    }
};

export default OnboardingView;