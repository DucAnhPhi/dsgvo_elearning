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
                <TitleComp>Willkommen bei Datenschutz E-Learning!</TitleComp>
                <TextComp>
                    Hier lernen Sie alles rund um das Datenschutzrecht und die DSGVO intuitiv 
                    und maßgeschneidert für Ihre individuellen Bedürfnisse.
                </TextComp>
                <TextComp>
                    Zunächst beantworten Sie einige Fragen zu Ihrem Arbeitsbereich und zu den
                    Datenkategorien, mit denen Sie in Berührung kommen.
                    Wir ermitteln dann aus Ihren Antworten Ihren persönlichen Lehrplan.
                </TextComp>
                <Link to="/frageAbteilung">
                    <ButtonComp>Fragebogen starten</ButtonComp>
                </Link>
            </div>
        );
    }
}

const styles = {
    onboarding: {
        padding: '60px'
    }
};

export default OnboardingView;