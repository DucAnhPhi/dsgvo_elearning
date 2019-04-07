import React, { Component } from 'react';
import CardComp from '../../components/card/card'
import TitleComp from '../../components/title/title'
import TextComp from '../../components/text/text';
import SubtitleComp from '../../components/subtitle/subtitle'
import WarningComp from '../../components/warning/warning'
import { navigateAction } from '../../store/navigation';
import ButtonComp from '../../components/button/button';
import { Link } from 'react-router-dom';

class DatensparsamkeitView extends Component {
    render() {
        return (
            <div className="gebote">
                <CardComp>
                    <TitleComp>Grundlagen 2. Gebot</TitleComp>
                    <SubtitleComp>Datensparsamkeit</SubtitleComp>
                    <TextComp>Das zweite Gebot des Datenschutzes fordert sparsam bei der Verarbeitung von Daten zu sein. Das heißt, nur Daten die wirklich benötigt werden, dürfen auch erhoben werden.
                    <br />Eine Datenverarbeitung muss demnach entsprechend ihrem Zweck angemessen sein. Daten, die erhoben werden, müssen für das Ziel relevant sein und auf das notwendige Maß beschränkt werden.
                    </TextComp>
                    <TextComp>
                        <WarningComp>Praxis-Tipp: Hinterfragen Sie Prozesse bei denen Daten erhoben werden kritisch! Welche Daten sind wirklich nötig?
                        </WarningComp>
                    </TextComp>

                    <div style={{textAlign: 'right', marginTop: '20px'}}>
                        <Link onClick={() => navigateAction('/quiz/gebot2_allgemein')} to={'/quiz/gebot2_allgemein'}>
                            <ButtonComp>Zum Quiz</ButtonComp>
                        </Link>
                    </div>
                </CardComp>
            </div>
        )
    }
}

export default DatensparsamkeitView;