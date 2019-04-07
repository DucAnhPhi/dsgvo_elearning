import React, { Component } from 'react';
import CardComp from '../../components/card/card';
import TitleComp from '../../components/title/title';
import TextComp from '../../components/text/text';
import SubtitleComp from '../../components/subtitle/subtitle';
import { navigateAction } from '../../store/navigation';
import ButtonComp from '../../components/button/button';
import { Link } from 'react-router-dom';

class EinwilligungBetroffenerView extends Component {

    render() {

        return (
            <div className="gebote">
                <CardComp>
                    <TitleComp>Einwilligung des Betroffenen (Art. 6 Abs. 1 lit. a DSGVO)</TitleComp>
                    <SubtitleComp>Einwilligung</SubtitleComp>
                    <TextComp>Eine mögliche Bedingung um personenbezogene Daten zu verarbeiten ist es von der betroffenen Person eine Einwilligung einzuholen.
                    Damit diese Einwilligung rechtmäßig eingeholt wird, sind einige Mindestanforderungen zu beachten.
                    </TextComp>
                    <TextComp>
                        Mindestanforderungen an Einwilligungen sind:
                    </TextComp>
                    <TextComp>
                        <SubtitleComp>1. Eindeutig bestätigende Handlung</SubtitleComp>
                        Für die Form der Einwilligung werden keine besonderen Voraussetzungen verlangt. Eine Einwilligung kann also elektronisch, schriftlich und sogar mündlich gegeben werden. Jedoch muss im Zweifelsfall das Unternehmen beweisen, dass eine Einwilligung gegeben wurde - also sollte eine Einwilligung in Textform oder in protokollierter digitaler Form erfolgen.
                        Die Einwilligung muss in jedem Fall mit einer eindeutig bestätigenden Handlung erfolgen. Die betroffene Person muss unmissverständlich und bewusst die Einwilligung geben. Bereits angekreuzte Kästchen in Webformularen oder lediglich passives oder untätiges Verhalten reichen nicht aus.
                    <br />
                        (ErwäGr Art. 32 DSGVO)
                    </TextComp>
                    <TextComp>
                        <SubtitleComp>Nachweisbarkeitspflicht</SubtitleComp>
                        Das Unternehmen ist der Pflicht nachweisen zu können, dass die betroffene Person eine Einwilligung gegeben hat.
                    <br />
                        (Art. 7 Abs. 1 DSGVO)
                    </TextComp>
                    <TextComp>
                        <SubtitleComp>Transparenzpflicht / Informiertheit</SubtitleComp>
                        Das Unternehmen muss transparente Informationen über die Verarbeitung der Daten darlegen.
                    <br />
                        (Art. 7 Abs. 2 DSGVO)
                    </TextComp>
                    <TextComp>
                        <SubtitleComp>Hervorhebungsgebot</SubtitleComp>
                        Unter dem Hervorhebungsgebot wird die Pflicht verstanden, dass die Einwilligung zur Datenverarbeitung zwischen allen anderen Informationen, wie zum Beispiel den AGBs, optisch besonders hervor gehoben wird. Dies ist eine Warnfunktion um der betroffenen Person klar zu machen, dass sie hier auch in eine Verarbeitung ihrer personenbezogenen Daten einwilligt.
                    <br />
                        (§ 4a Abs. 1 S. 4 BDSG; § 28 Abs. 3a S.2 BDSG)
                    </TextComp>
                    <TextComp>
                        <SubtitleComp>Jederzeit widerrufbar</SubtitleComp>
                        Eine Einwilligung muss jederzeit widerrufbar sein. Über dieses Widerrufsrecht muss informiert werden.
                    <br />
                        (Art. 7 Abs. 3 DSGVO; Art. 13 Abs. 2 lit. c) DSGVO)
                    </TextComp>
                    <TextComp>
                        <SubtitleComp>Freiwilligkeit</SubtitleComp>
                        Eine Einwilligung muss freiwillig durch die betroffene Person erfolgen. Unfreiwillig und damit unrechtmäßig, könnte die Einwilligung sein wenn zwischen den Parteien ein Ungleichgewicht besteht. Das zum Beispiel gegeben, wenn ein Arbeitgeber von einem Arbeitnehmer eine Einwilligung verlangt. Hier ist der Arbeitgeber in einer deutlich stärkeren Position als der Arbeitnehmer, der womöglich seinen Job in Gefahr sieht, sollte er die Einwilligung dem Arbeitgeber nicht geben.
                        Weiterhin darf die Einwilligung nicht von der Erfüllung eines Vertrages oder der Erbringung einer Dienstleistung abhängig gemacht werden. Eine betroffene Person darf nicht dazu gezwungen werden in eine Datenverarbeitung einwilligen um eine andere Leistung zu erhalten (sog. Kopplungsverbot).
                        Achtung! Die Daten, die zur Erfüllung eines Vertrages nötig sind oder wegen gesetzlichen Pflichten verarbeitet werden müssen, benötigen gar keine Einwilligung. Hier hat der Betroffene gar nicht die Option freiwillig in die Verarbeitung einzuwilligen.
                    <br />
                        (ErwäGr. 42 DSGVO)
                    </TextComp>
                    <TextComp>
                        <SubtitleComp>Sonderregelung für Einwilligung von Kindern</SubtitleComp>
                        Für Einwilligungen von Kindern gelten strengere Anforderungen. Kinder sind hier Personen, die jünger als 16 sind. Kinder können die Einwilligung nicht selbst geben, sondern die Eltern müssen für die Kinder die Einwilligung geben.
                    <br />
                        (Art. 8 DSGVO)
                    </TextComp>
                    <TextComp>
                        Normen: Art. 4 Nr. 11 DSGVO, Art. 7 DSGVO
                    </TextComp>
                    
                    <div style={{textAlign: 'right', marginTop: '20px'}}>
                        <Link onClick={() => navigateAction('/quiz/gebot1_einwilligung')} to={'/quiz/gebot1_einwilligung'}>
                            <ButtonComp>Zum Quiz</ButtonComp>
                        </Link>
                    </div>
                </CardComp>
            </div>
        )
    }
}

export default EinwilligungBetroffenerView;