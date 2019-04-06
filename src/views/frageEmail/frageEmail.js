import React, { Component } from 'react';
import CardComp from '../../components/card/card'
import TitleComp from '../../components/title/title'

class FrageEmailView extends Component {
    render() {
        return (
            <div>
                <CardComp>
                    <TitleComp>5. Haben Sie Zugriff auf Email-Adressen?</TitleComp>
                </CardComp>
            </div>
        )
    }
}

export default FrageEmailView;