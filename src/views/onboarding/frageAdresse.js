import React, { Component } from 'react';
import SubTitleComp from '../../components/subtitle/subtitle';
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
            <div style={styles.fragebogen}>
                <TitleComp>Fragebogen</TitleComp>
                <SubTitleComp>2. Haben Sie Zugriff auf Adressdaten?</SubTitleComp>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
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
            </div>
        )
    }
}

FrageAdresseView.propTypes = {
    setAreasAction: PropTypes.func,
    areas: PropTypes.array
};

const styles = {
    fragebogen: {
        margin: '60px auto 0 auto',
        width: '500px',
        textAlign: 'center'
    }
};

const mapStateToProps = state => ({
    areas: state.user.areas
});

const mapDispatchToProps = dispatch => bindActionCreators({ setAreasAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FrageAdresseView);