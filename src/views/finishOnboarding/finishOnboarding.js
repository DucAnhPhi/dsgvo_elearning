import React, { Component } from 'react';
import CardComp from '../../components/card/card';
import TitleComp from '../../components/title/title';

class FinishOnboardingView extends Component {
    render() {
        return (
            <div>
                <CardComp>
                    <TitleComp>Geschafft!</TitleComp>
                </CardComp>
            </div>
        )
    }
}

export default FinishOnboardingView;