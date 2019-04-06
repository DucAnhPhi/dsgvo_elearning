import React, { Component } from 'react';
import CardComp from '../../components/card/card'
import TitleComp from '../../components/title/title'
import TextComp from '../../components/text/text';
import SubtitleComp from '../../components/subtitle/subtitle'
import WarningComp from '../../components/warning/warning'
import QuizComp from '../../components/quiz/quiz'

class Gebot1View extends Component {

    render() {
        let questions = [
            {
                id: 'test1',
                question: "Eine Frage?",
                possibleAnswers : ["1", "4", "keinen", "darf ich nicht sagen"],
                rightAnswer: 1
            },
            {
                id: 'test2',
                question: "Noch eine Frage?",
                possibleAnswers : ["1", "4", "keinen", "darf ich nicht sagen"],
                rightAnswer: 3
            }
        ]
       
        return (
            <div className="gebote">
                <CardComp>
                    <QuizComp
                        id={'gebot1'}
                        questions={questions}
                    />
                    <TitleComp>Grundlagen 1. Gebot</TitleComp>
                    <SubtitleComp>Verbot mit Erlaubnisvorbehalt</SubtitleComp>
                    <TextComp>Das erste Gebot des Datenschutzes verbirgt sich hinter dem kryptischen Begriff “Verbot mit Erlaubnisvorbehalt”.
                    Gemeint ist damit, dass prinzipiell jede Datenverarbeitung, die der DSGVO unterfällt, zunächst verboten ist. Wie Sie bereits in Kapitel 2.4 Anwendbarkeit der Datenschutzgesetze gelernt haben, ist nicht jede Datenverarbeitung auch ein Fall für die DSGVO. Wenn eine Datenverarbeitung aber unter die DSGVO fällt, dann ist sie erstmal illegal. Damit die Datenverarbeitung erlaubt ist, muss Sie mindestens eine von sechs Bedingungen erfüllen.
                    </TextComp>
                    <TextComp>Die Rechtmäßigkeit der Datenverarbeitung liegt vor, wenn:
                        <ol>
                            <li>der Betroffene eine Einwilligung gegeben hat</li>
                            <li>ein Vertrag erfüllt werden muss, vorvertragliche Maßnahmen stattfinden oder Anfragen bearbeitet werden </li>
                            <li>eine rechtliche Verpflichtung erfüllt werden muss</li>
                            <li>lebenswichtige Interessen betroffen sind</li>
                            <li>öffentliches Interesse vorliegt</li>
                            <li>in sogenanntes berechtigtes Interesse des Unternehmens gegeben ist</li>
                        </ol>
                    </TextComp>
                    <WarningComp>Bei besonders sensiblen Daten, wie zum Beispiel die rassische und ethnische Herkunft, politische Meinungen, Religion und Gesundheitsdaten sind die Anforderungen strenger (Art. 9 DSGVO).
                    </WarningComp>

                    <TextComp>
                        Besonders praxisrelevant sind die Einwilligung, die Erfüllung eines Vertrags und die berechtigten Interessen. Diese Fälle werden in den kommenden Kapiteln genauer beleuchtet.
                    </TextComp>
                    <TextComp>
                        Normen: Art. 6 Abs. 1. lit a) - f) DSGVO; Art. 9 DSGVO
                    </TextComp>

                </CardComp>
            </div>
        )
    }
}

export default Gebot1View;