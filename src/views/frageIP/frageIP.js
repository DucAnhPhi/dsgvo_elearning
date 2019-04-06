import React, { Component } from 'react';
import CardComp from '../../components/card/card'
import TitleComp from '../../components/title/title'

class FrageIPView extends Component {
    render() {
        return (
            <div>
                <CardComp>
                    <TitleComp>4. Haben Sie Zugriff auf IP-Adressen?</TitleComp>
                </CardComp>
            </div>
        )
    }
}

export default FrageIPView;