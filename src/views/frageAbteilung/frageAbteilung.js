import React, { Component } from 'react';
import CardComp from '../../components/card/card'
import TitleComp from '../../components/title/title'
import { WithContext as ReactTags } from 'react-tag-input';
import './frageAbteilung.css';
import ButtonComp from '../../components/button/button';

class FrageAbteilungView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [],
            suggestions: [
                { id: 'geschäftsführung', text: 'Geschäftsführung (Management)' },
                { id: 'personalabteilung', text: 'Personalabteilung (Human Resources)' },
                { id: 'buchhaltung', text: 'Buchhaltung, Rechnungswesen' },
                { id: 'finanzen', text: 'Finanzen' },
                { id: 'rechtsabteilung', text: 'Rechtsabteilung (Legal Department)' },
                { id: 'forschung', text: 'Forschung & Entwicklung' },
                { id: 'fertigung', text: 'Fertigung, Produktion' },
                { id: 'qualitätssicherung', text: 'Qualitätssicherung' },
                { id: 'arbeitssicherheit', text: 'Arbeitssicherheit' },
                { id: 'öffentlichkeitsarbeit', text: 'Öffentlichkeitsarbeit (Public Relations)' },
                { id: 'marketingabteilung', text: 'Marketingabteilung' },
                { id: 'it', text: 'IT (Intenet und Dateninfrastruktur)' },
                { id: 'hardware', text: 'Hardwareadministration und Technik' },
                { id: 'vertrieb', text: 'Verkauf, Vertrieb' },
                { id: 'logistik', text: 'Logistik, Materialwirtschaft' },
                { id: 'poststelle', text: 'Poststelle' },
                { id: 'kundenbetreuung', text: 'Kundenbetreuung' },
                { id: 'hausverwaltung', text: 'Hausverwaltung (Facility Management)' },
                { id: 'datenschutzbeauftragter', text: 'Datenschutzbeauftragte/r'},
                { id: 'medizin', text: 'Medizin/Pflege'}
            ]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
    }

    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }

    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }


    render() {
        const { tags, suggestions } = this.state;
        return (
            <div>
                <CardComp>
                    <TitleComp>1. In welchen Abteilungen arbeiten Sie?</TitleComp>
                    <ReactTags
                      tags={tags}
                      inline={false}
                      suggestions={suggestions}
                      handleDelete={this.handleDelete}
                      handleAddition={this.handleAddition}
                      allowDragDrop={false}
                      autocomplete={true}
                      minQueryLength={1}
                      autofocus={true}
                      placeholder={'Ihre Abteilung (z.B. Finanzen)'}
                    />
                    <ButtonComp disabled={this.state.tags.length == 0}>Weiter</ButtonComp>
                </CardComp>
            </div>
        )
    }
}

export default FrageAbteilungView;