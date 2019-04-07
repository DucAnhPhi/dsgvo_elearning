import React, { Component } from 'react';
import CardComp from '../../components/card/card'
import TitleComp from '../../components/title/title'
import TextComp from '../../components/text/text';
import WarningComp from '../../components/warning/warning'
import { navigateAction } from '../../store/navigation';
import ButtonComp from '../../components/button/button';
import { Link } from 'react-router-dom';

class RechtAufVergessenView extends Component {

    render() {

        return (
            <div className="gebote">
                <CardComp>
                    <TitleComp>Recht auf Vergessenwerden (Art. 17 DSGVO)</TitleComp>
                    <TextComp>
                        Betroffene Personen haben das Recht, dass ihre personenbezogenen Daten gelöscht werden, wenn sie dies wünschen.
                        <br /><br />Auch wenn die die Daten für den ursprünglichen Verarbeitungszweck nicht mehr notwendig sind müssen sie gelöscht werden. Ebenfalls müssen die Daten gelöscht werden wenn die Einwilligung zur Bearbeitung widerrufen wurde.
                        <br /><br />Doch keine Regel ohne Ausnahme. Nicht immer kann sich eine betroffene Person darauf berufen, dass ihre Daten gelöscht werden müssen.
                        Eine Ausnahme liegt vor, wenn andere Bedingungen vorhanden sind, auf deren Grundlage Daten verarbeitet werden dürfen oder sogar müssen! Auch wenn es die betroffene Person wünscht, Daten, die zur Erfüllung eines Vertrags nötig sind oder zur Erfülllung von rechtlichen Verpflichtungen verarbeitet werden müssen, muss das verantwortliche Unternehmen nicht löschen. Auch kann unter anderem ein öffentliches Interesse oder die Ausübung des Rechts auf freie Meinungsäußerung dem Löschungsbegehren einer betroffenen Person entgegenstehen.
                    </TextComp>
                    <TextComp>
                        <WarningComp>
                            Praxis-Tipp: Erstellen Sie für Ihr Unternehmen ein Löschkonzept in dem klar geregelt ist unter welchen Bedingungen Daten gelöscht werden müssen. Dieses Konzept sollten alle Mitarbeiter beherzigen. Bei der Erstellung eines solchen Konzeptes unterstützt sie am besten ein Datenschutz-Experte, der die Ausnahmen im Detail kennt.
                        </WarningComp>
                    </TextComp>
                    <TextComp>
                        Normen: Art. 17 DSGVO
                    </TextComp>
                    <div style={{textAlign: 'right', marginTop: '20px'}}>
                        <Link onClick={() => navigateAction('/quiz/gebot2_vergessen')} to={'/quiz/gebot2_vergessen'}>
                            <ButtonComp>Zum Quiz</ButtonComp>
                        </Link>
                    </div>
                </CardComp>
            </div>
        )
    }
}
export default RechtAufVergessenView;