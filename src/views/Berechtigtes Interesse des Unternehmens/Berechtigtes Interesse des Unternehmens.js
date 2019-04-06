import React, { Component } from 'react';
import CardComp from '../../components/card/card'
import TitleComp from '../../components/title/title'
import TextComp from '../../components/text/text';
import SubtitleComp from '../../components/subtitle/subtitle'
import WarningComp from '../../components/warning/warning'

// __name__ = OrdnerView

class __BerechtigtesInteresseDesUnternehmens__ extends Component {
    render() {
        return (
            <div className="gebote">
                <TitleComp>Berechtigtes Interesse des Unternehmens (Art. 6 Abs. 1 lit. f DSGVO)</TitleComp>
                <SubtitleComp>Wahrung berechtigter Interessen</SubtitleComp>
                <TextComp>Die Wahrung berechtigter Interessen ist eine ganz besondere Bedingung um personenbezogene Daten zu verarbeiten. Diese Bedingung kann viele Fälle auffangen, die von den anderen fünf Bedingungen nicht umfasst sind. Eine Datenverarbeitung aufgrund der berechtigten Interessen durchzuführen ist so etwas wie ein Rettungsanker um obwohl die Datenverarbeitung eigentlich verboten wäre sie dennoch durchzuführen. Um diesen Rettungsanker auszuwerfen müssen jedoch noch einmal besondere Bedingungen erfüllt werden und selbst dann ist das berechtigte Interesse keine hundertprozentige Sicherheit.
                <br>
                        Wenn Daten auf Grundlage berechtigter Interessen durchgeführt werden soll, muss im Vorfeld eine Interessenabwägung durchgeführt werden. Dies ist eine Art Besinnungsaufsatz, in dem das Interesse des Unternehmens mit den Grundrechten und Grundfreiheiten der betroffenen Person abgewogen wird. Hier ist in der Regel tiefergehendes juristisches Wissen nötig - eine Hinzuziehung eines Datenschutzexperten ist hier besonders sinnvoll.
                </TextComp>

                    <WarningComp>Praxis-Tipp: Dokumentieren Sie die Interessenabwägung im Verarbeitungsverzeichnis</WarningComp>
                    <TextComp>
                        <strong>Beispiele, bei denen ein berechtigtes Interesse eines Unternehmens zur Datenverarbeitung vorliegen, können unter anderem sein:</strong>

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
                        
                        </CardComp>

                    </div>
                    )
                }
            }
            
export default __BerechtigtesInteresseDesUnternehmens__;