import React, { Component } from 'react';
import CardComp from '../../components/card/card'
import TitleComp from '../../components/title/title'

class FrageReligionView extends Component {
    render() {
        return (
            <div>
                <CardComp>
                    <TitleComp>
                        3. Haben Sie Zugriff auf Daten über die Religionszugehörigkeit von Personen?
                    </TitleComp>
                </CardComp>
            </div>
        )
    }
}

export default FrageReligionView;