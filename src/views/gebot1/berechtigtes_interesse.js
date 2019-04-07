import React, { Component } from 'react';
import CardComp from '../../components/card/card'
import TitleComp from '../../components/title/title'
import TextComp from '../../components/text/text';
import SubtitleComp from '../../components/subtitle/subtitle'
import WarningComp from '../../components/warning/warning'
import ButtonComp from '../../components/button/button';
import { Link } from 'react-router-dom';
import { navigateAction } from '../../store/navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class BerechtigtesInteresseView extends Component {

    render() {

        return (
            <div className="gebote">
                <CardComp>
                    <TitleComp>Berechtigtes Interesse des Unternehmens (Art. 6 Abs. 1 lit. f DSGVO)</TitleComp>
                    <SubtitleComp>Wahrung berechtigter Interessen</SubtitleComp>
                    <TextComp>Die Wahrung berechtigter Interessen ist eine ganz besondere Bedingung um personenbezogene Daten zu verarbeiten. Diese Bedingung kann viele Fälle auffangen, die von den anderen fünf Bedingungen nicht umfasst sind. Eine Datenverarbeitung aufgrund der berechtigten Interessen durchzuführen ist so etwas wie ein Rettungsanker um obwohl die Datenverarbeitung eigentlich verboten wäre sie dennoch durchzuführen. Um diesen Rettungsanker auszuwerfen müssen jedoch noch einmal besondere Bedingungen erfüllt werden und selbst dann ist das berechtigte Interesse keine hundertprozentige Sicherheit.
                    <br />
                        Wenn Daten auf Grundlage berechtigter Interessen durchgeführt werden soll, muss im Vorfeld eine Interessenabwägung durchgeführt werden. Dies ist eine Art Besinnungsaufsatz, in dem das Interesse des Unternehmens mit den Grundrechten und Grundfreiheiten der betroffenen Person abgewogen wird. Hier ist in der Regel tiefergehendes juristisches Wissen nötig - eine Hinzuziehung eines Datenschutzexperten ist hier besonders sinnvoll.
                    </TextComp>

                    <WarningComp>Praxis-Tipp: Dokumentieren Sie die Interessenabwägung im Verarbeitungsverzeichnis</WarningComp>
                    <TextComp>
                        <SubtitleComp>Beispiele, bei denen ein berechtigtes Interesse eines Unternehmens zur Datenverarbeitung vorliegen, können unter anderem sein:</SubtitleComp>

                        <ol>
                            <li>Videoüberwachung von nicht öffentlich zugänglichen Räumen</li>
                            <li>strategische Analyse von Kundendaten</li>
                            <li>Interne Meldesysteme zur Bekämpfung von Industriespionage</li>
                            <li>Bonitätsprüfungen von Kunden</li>
                            <li>Speicherung von Daten um sie in Rechtsstreitigkeiten als Beweismittel zu nutzen</li>
                            <li>Direktwerbung</li>
                            <li>Umfragen</li>
                        </ol>

                    </TextComp>
                    <div style={{textAlign: 'right', marginTop: '20px'}}>
                        <Link onClick={() => this.props.navigateAction('/quiz/gebot1_interesse')} to={'/quiz/gebot1_interesse'}>
                            <ButtonComp>Zum Quiz</ButtonComp>
                        </Link>
                    </div>
                </CardComp>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ navigateAction }, dispatch);

export default connect(undefined, mapDispatchToProps)(BerechtigtesInteresseView);