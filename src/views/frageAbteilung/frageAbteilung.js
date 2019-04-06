import React, { Component } from 'react';
import CardComp from '../../components/card/card'
import TitleComp from '../../components/title/title'

class FrageAbteilungView extends Component {
    render() {
        return (
            <div>
                <CardComp>
                    <TitleComp>1. In welchen Abteilungen arbeiten Sie?</TitleComp>
                </CardComp>
            </div>
        )
    }
}

export default FrageAbteilungView;