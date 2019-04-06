import React, { Component } from 'react';
import CardComp from '../../components/card/card'
import TitleComp from '../../components/title/title'
import TextComp from '../../components/text/text';
import SubtitleComp from '../../components/subtitle/subtitle'

class Gebot1View extends Component {
    render() {
        return (
            <div className="gebote">
                <CardComp>
                    <TitleComp>1. Gebot: Verbot mit Erlaubnisvorbehalt</TitleComp>
                    <TextComp>Prinzipiell ist alles verboten, es sei denn es ist erlaubt</TextComp>
                    <SubtitleComp>Wie findet man heraus, ob es erlaubt ist?</SubtitleComp>
                    <TextComp>Einfach googeln</TextComp>
                </CardComp>
            </div>
        )
    }
}

export default Gebot1View;