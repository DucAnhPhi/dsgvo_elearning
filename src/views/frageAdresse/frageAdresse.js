import React, { Component } from 'react';
import CardComp from '../../components/card/card';
import TitleComp from '../../components/title/title';
import ButtonComp from '../../components/button/button';
import { connect } from 'react-redux';
import { setAreasAction } from '../../store/user';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AREA = 'adresse';

class FrageAdresseView extends Component {
    render() {
        const { setAreasAction, areas } = this.props;
        return (
            <div>
                <CardComp>
                    <TitleComp>2. Haben Sie Zugriff auf Adressdaten?</TitleComp>
                    <div style={{display: 'flex'}}>
                        <Link
                          to={'/frageReligion'}
                          onClick={() => setAreasAction([...areas, AREA])
                        }>
                            <ButtonComp>Ja</ButtonComp>
                        </Link>
                        <Link to={'/frageReligion'} style={{marginLeft: '20px'}}>
                            <ButtonComp>Nein</ButtonComp>
                        </Link>
                    </div>
                </CardComp>
            </div>
        )
    }
}

FrageAdresseView.propTypes = {
    setAreasAction: PropTypes.func,
    areas: PropTypes.array
};

const mapStateToProps = state => ({
    areas: state.user.areas
});

const mapDispatchToProps = dispatch => bindActionCreators({ setAreasAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FrageAdresseView);