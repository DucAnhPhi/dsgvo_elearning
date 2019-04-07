import React, { Component } from 'react';
import CardComp from '../../components/card/card'
import TitleComp from '../../components/title/title'
import TextComp from '../../components/text/text';
import SubtitleComp from '../../components/subtitle/subtitle'


class ErfüllungVertragView extends Component {
    render() {
        return (
            <div className="gebote" >

                <CardComp>

                    <TitleComp>Erfüllung eines Vertrags (Art. 6 Abs. 1 lit b DSGVO)</TitleComp>

                    <SubtitleComp>Erfüllung eines Vertrags</SubtitleComp>

                    <TextComp>Eine weitere mögliche Bedingung um personenbezogene Daten zu verarbeiten liegt vor wenn diese Daten zur Erfüllung eines Vertrags benötigt werden. Auch die Daten, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind und zur Bearbeitung von Anfragen der betroffenen Person dürfen verarbeitet werden.
                <br />
                        Bei allen diesen Bedingungen ist zu beachten&comma; das wie bei allen Datenverarbeitungen&comma; nur die wirklich nötigen Daten erhoben werden dürfen (“Datenminimierung”). Das muss im jeweiligen Fall bestimmt werden.
                </TextComp>
                </CardComp>
            </div>
        )
    }

}

export default ErfüllungVertragView;