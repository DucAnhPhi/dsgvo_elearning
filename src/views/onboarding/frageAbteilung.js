import React, { Component } from 'react';
import CardComp from '../../components/card/card';
import TitleComp from '../../components/title/title';
import { WithContext as ReactTags } from 'react-tag-input';
import './frageAbteilung.css';
import ButtonComp from '../../components/button/button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAreasAction } from '../../store/user';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const suggestions = [
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
];

class FrageAbteilungView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
    }

    handleDelete(i) {
        let tags = this.state.tags.filter((tag, index) => index !== i)
        this.setState({ tags: tags });
        this.props.setAreasAction(tags);
    }

    handleAddition(tag) {
        let tags = [...this.state.tags, tag]
        this.setState({ tags: tags });
        this.props.setAreasAction(tags.map(tag => tag.id));
    }

    render() {
        return (
            <div>
                <CardComp>
                    <TitleComp>1. In welchen Abteilungen arbeiten Sie?</TitleComp>
                    <ReactTags
                      tags={this.state.tags}
                      inline={false}
                      suggestions={suggestions}
                      handleDelete={this.handleDelete}
                      handleAddition={this.handleAddition}
                      allowDragDrop={false}
                      autocomplete={false}
                      minQueryLength={1}
                      autofocus={true}
                      delimiters={[]}
                      placeholder={'Ihre Abteilung (z.B. Finanzen)'}
                    />
                    <Link to={'/frageAdresse'}>
                        <ButtonComp
                          disabled={this.state.tags.length === 0}
                          customStyles={{ position: 'absolute', bottom: '60px', right: '60px' }}
                        >
                            Weiter
                        </ButtonComp>
                    </Link>
                </CardComp>
            </div>
        )
    }
}

FrageAbteilungView.propTypes = {
    tags: PropTypes.array,
    setAreasAction: PropTypes.func
};

const mapStateToProps = state => ({
    tags: state.user.areas
});

const mapDispatchToProps = dispatch => bindActionCreators({ setAreasAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FrageAbteilungView);