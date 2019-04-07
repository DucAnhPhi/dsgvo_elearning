import React, { Component } from 'react';
import TitleComp from '../../../components/title/title';
import TextComp from '../../../components/text/text';

class FinishOnboardingView extends Component {
    render() {
        return (
            <div style={styles.fragebogen}>
                <TitleComp>Geschafft!</TitleComp>
                <TextComp>
                    Ihr persönlicher Lehrplan wurde ermittelt.
                    <br/>Sie können nun alle passenden Inhalte zu Ihrem Arbeitsalltag rundum das Thema Datenschutz erlernen.
                </TextComp>
                <div style={styles.topSpace}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const styles = {
    fragebogen: {
        margin: '60px auto 0 auto',
        width: '500px',
        textAlign: 'center'
    },
    topSpace: {
        marginTop: '40px'
    }
};

export default FinishOnboardingView;