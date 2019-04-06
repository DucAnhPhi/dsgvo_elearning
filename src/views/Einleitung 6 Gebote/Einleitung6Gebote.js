import React, { Component } from 'react';
import CardComp from '../../components/card/card'
import TitleComp from '../../components/title/title'
import TextComp from '../../components/text/text';
import SubtitleComp from '../../components/subtitle/subtitle'
import WarningComp from '../../components/warning/warning'

// __name__ = OrdnerView

class __Einleitung6Gebote__ extends Component {
    render() {
        return (
            <div className="gebote">
                <CardComp>Einleitung 6 Gebote</CardComp>
                <TextComp>//Die folgenden “6 Gebote des Datenschutzes” fassen die wichtigsten Regelungen aus der DSGVO und verwandten Rechten zusammen.
                    Wenn Sie diese 6 Gebote verstanden haben, haben Sie den wichtigsten Teil des Datenschutzrechtes verinnerlicht. Arbeiten Sie dieses Kapitel besonders gründlich durch!
                    Eine kurze Übersicht über die 6 Gebote des Datenschutzes, bevor wir in den nächsten Kapiteln in die Details gehen:
                </TextComp>
                <TextComp>
                <strong>1. Gebot: Verbot mit Erlaubnisvorbehalt</strong>
                Prinzipiell ist jede Datenverarbeitung zunächst verboten. Ausnahmen bestehen bei Einwilligung des Betroffenen und/oder einer gesetzlichen Erlaubnis.
                <strong>2. Gebot: Datensparsamkeit</strong>
                Nur die Daten, die wirklich benötigt werden, dürfen erhoben werden. Eine Datenverarbeitung muss entsprechend ihrem Zweck angemessen sein. Daten, die erhoben werden, müssen für das Ziel relevant sein und auf das notwendige Maß beschränkt werden.
                <strong>3. Gebot: Zweckbindung</strong>
                Daten dürfen nur für den Zweck verarbeitet werden, für den sie erhoben wurden. Sollte der Zweck wegfallen oder erreicht werden, müssen die Daten gelöscht werden.
                <strong>4. Gebot: Datensicherheit</strong>
                Es müssen geeignete technische und organisatorische Maßnahmen zum Schutz der Daten getroffen werden.
                <strong>5. Gebot: Transparenz</strong>
                Betroffene sollen wissen, welche Daten und zu welchem Zweck von Ihnen erhoben wurden. Darüber sollen sie bei der Erhebung informiert werden und haben später ein Auskunftsrecht. Betroffene können anfragen, ob und in welchem Umfang ihre Daten verarbeitet werden.
                <strong>6. Gebot: Dokumentation</strong>
                Es gilt nun, alle Informationen rund um Ihre Datenverarbeitung zu dokumentieren. Gewisse Dokumente und Verzeichnisse vorzuhalten ist Pflicht. Nachweise dazu können jederzeit von Aufsichtsbehörden gefordert werden.
                </TextComp>
            
            </CardComp>
            
            </div>
        )
    }
}

export default __Einleitung6Gebote__;