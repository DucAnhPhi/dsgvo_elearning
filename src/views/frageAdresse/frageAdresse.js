import React, { Component } from 'react';
import CardComp from '../../components/card/card'
import TitleComp from '../../components/title/title'

class FrageAdresseView extends Component {
    render() {
        return (
            <div>
                <CardComp>
                    <TitleComp>2. Haben Sie Zugriff auf Adressdaten?</TitleComp>
                </CardComp>
            </div>
        )
    }
}

export default FrageAdresseView;